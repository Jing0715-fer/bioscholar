#!/usr/bin/env python3
"""Commons search + imageinfo pipeline via curl subprocess, UA, spacing, 429 backoff."""
import json, time, sys, subprocess, urllib.parse, re

UA = 'BioScholar/1.0 (educational project)'

def api(url, retries=5):
    for i in range(retries):
        try:
            r = subprocess.run(['curl', '-s', '--max-time', '40',
                                '--user-agent', UA, '-w', '\n%{http_code}', url],
                               capture_output=True, text=True)
            out = r.stdout.rsplit('\n', 1)
            code = out[1].strip() if len(out) > 1 else '0'
            if code == '200':
                return json.loads(out[0])
            print(f'  HTTP {code} (attempt {i+1})', file=sys.stderr)
        except Exception as e:
            print(f'  err {e}', file=sys.stderr)
        time.sleep(60 if code == '429' else 10)
    return None

def search(query, limit=20):
    q = urllib.parse.quote(query)
    url = f'https://commons.wikimedia.org/w/api.php?action=query&list=search&srnamespace=6&srsearch={q}&format=json&srlimit={limit}'
    d = api(url)
    time.sleep(3)
    return [x['title'] for x in (d.get('query', {}).get('search', []) if d else [])]

def imageinfo(titles):
    t = urllib.parse.quote('|'.join(titles))
    url = ('https://commons.wikimedia.org/w/api.php?action=query&prop=imageinfo&titles=' + t +
           '&iiprop=url|size|mime|extmetadata&format=json&iiextmetadatafilter=LicenseShortName|Artist|ImageDescription')
    d = api(url)
    time.sleep(3)
    out = {}
    for p in (d.get('query', {}).get('pages', {}).values() if d else []):
        title = p.get('title')
        ii = (p.get('imageinfo') or [{}])[0]
        em = ii.get('extmetadata', {})
        def strip(h):
            v = (em.get(h, {}) or {}).get('value', '')
            v = re.sub(r'<[^>]+>', ' ', v or '')
            v = v.replace('&amp;', '&').replace('&#39;', "'").replace('&quot;', '"')
            return re.sub(r'\s+', ' ', v).strip()
        out[title] = {
            'url': ii.get('url'),
            'size': ii.get('size'),
            'width': ii.get('width'),
            'height': ii.get('height'),
            'mime': ii.get('mime'),
            'license': strip('LicenseShortName'),
            'artist': strip('Artist')[:150],
        }
    return out

if __name__ == '__main__':
    cmd = sys.argv[1]
    if cmd == 'search':
        for t in search(sys.argv[2]):
            print(t)
    elif cmd == 'info':
        print(json.dumps(imageinfo(sys.argv[2:]), ensure_ascii=False, indent=1))
