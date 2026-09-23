#!/usr/bin/env python3
"""列出 SVG 中所有 <text> 元素：行号 + 完整标签（截断显示）
用法: python3 show-text.py <svg> [过滤词]"""
import sys, re

path = sys.argv[1]
filter_pat = sys.argv[2] if len(sys.argv) > 2 else None
with open(path, encoding='utf-8') as f:
    lines = f.readlines()

for i, line in enumerate(lines, 1):
    for m in re.finditer(r'<text\b[^>]*>', line):
        tag = m.group(0)
        if filter_pat and filter_pat not in tag and filter_pat not in line:
            continue
        rest = line[m.end():m.end()+110].replace('\n', ' ')
        print(f"L{i}: {tag} ⇒ {rest}")
