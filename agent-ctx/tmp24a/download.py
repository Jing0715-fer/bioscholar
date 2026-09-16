#!/usr/bin/env python3
"""Download Commons files: SVG -> PNG thumb (960/1280/1920 whitelist), PNG/JPEG -> original."""
import json, sys, subprocess, time, urllib.parse

UA = 'BioScholar/1.0 (educational project)'

def api_thumb(title, width):
    t = urllib.parse.quote(title)
    url = (f'https://commons.wikimedia.org/w/api.php?action=query&prop=imageinfo&titles={t}'
           f'&iiprop=url|size|mime&iiurlwidth={width}&format=json')
    for i in range(5):
        r = subprocess.run(['curl', '-s', '--max-time', '40', '--user-agent', UA,
                            '-w', '\n%{http_code}', url], capture_output=True, text=True)
        out = r.stdout.rsplit('\n', 1)
        if len(out) > 1 and out[1].strip() == '200':
            d = json.loads(out[0])
            for p in d['query']['pages'].values():
                ii = (p.get('imageinfo') or [{}])[0]
                return ii.get('thumburl'), ii.get('url'), ii.get('mime'), ii.get('width'), ii.get('height')
        print(f'  info HTTP {out[1] if len(out)>1 else "?"} attempt {i+1}', file=sys.stderr)
        time.sleep(60)
    return None, None, None, None, None

def dl(url, dest):
    for i in range(5):
        r = subprocess.run(['curl', '-s', '-L', '--max-time', '180', '--user-agent', UA,
                            '-w', '\n%{http_code}', '-o', dest, url], capture_output=True, text=True)
        code = r.stdout.strip().rsplit('\n', 1)[-1]
        if code == '200':
            return True
        print(f'  dl HTTP {code} attempt {i+1}', file=sys.stderr)
        time.sleep(60 if code == '429' else 10)
    return False

def fetch(title, dest, width=1920):
    thumb, orig, mime, w, h = api_thumb(title, width)
    if not orig:
        print(f'NOINFO {title}'); return False
    if mime == 'image/svg+xml':
        url, note = thumb, f'SVG->PNG{width}'
    else:
        url, note = orig, 'original'
    ok = dl(url, dest)
    print(f'{"OK " if ok else "FAIL"} {title} -> {dest} ({note})')
    return ok

if __name__ == '__main__':
    plan = json.load(open(sys.argv[1]))
    for item in plan:
        ok = fetch(item['title'], item['dest'], item.get('width', 1920))
        time.sleep(4)
