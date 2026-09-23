#!/usr/bin/env python3
"""精确替换 SVG 内容：python3 fix-sb.py <file> <old> <new>
要求 old 在文件中恰好出现一次；替换前打印上下文供人工核对。"""
import sys

path, old, new = sys.argv[1], sys.argv[2], sys.argv[3]
with open(path, encoding='utf-8') as f:
    s = f.read()
n = s.count(old)
if n != 1:
    print(f"ERROR: old 出现 {n} 次（需恰 1 次），未修改")
    sys.exit(1)
s = s.replace(old, new)
with open(path, 'w', encoding='utf-8') as f:
    f.write(s)
print(f"OK: 替换 1 处 → {new[:120]}")
