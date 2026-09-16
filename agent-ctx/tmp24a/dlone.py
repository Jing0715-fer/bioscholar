#!/usr/bin/env python3
"""Download a single Commons file: SVG -> PNG thumb (960/1280/1920), else original."""
import json, sys, subprocess, time, urllib.parse

UA = 'BioScholar/1.0 (educational project)'
title, dest, width = sys.argv[1], sys.argv[2], int(sys.argv[3]) if len(sys.argv) > 3 else 1920

def api_thumb():
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
                return ii.get('thumburl'), ii.get('url'), ii.get('mime')
        print(f'  info HTTP fail attempt {i+1}', file=sys.stderr)
        time.sleep(60)
    return None, None, None

thumb, orig, mime = api_thumb()
if not orig:
    print(f'NOINFO {title}'); sys.exit(1)
url = thumb if mime == 'image/svg+xml' else orig
for i in range(5):
    r = subprocess.run(['curl', '-s', '-L', '--max-time', '180', '--user-agent', UA,
                        '-w', '\n%{http_code}', '-o', dest, url], capture_output=True, text=True)
    code = r.stdout.strip().rsplit('\n', 1)[-1]
    if code == '200':
        print(f'OK {title} -> {dest}')
        sys.exit(0)
    print(f'  dl HTTP {code} attempt {i+1}', file=sys.stderr)
    time.sleep(60 if code == '429' else 10)
print(f'FAIL {title}')
sys.exit(1)
