#!/bin/bash
# Commons API fetch with 429 backoff (60s) and UA, per Task 21 pipeline
URL="$1"
ATTEMPT=0
while [ $ATTEMPT -lt 6 ]; do
  sleep 4
  RESP=$(curl -s -w '\n%{http_code}' --user-agent "BioScholar/1.0 (educational project)" "$URL")
  CODE=$(echo "$RESP" | tail -1)
  BODY=$(echo "$RESP" | sed '$d')
  if [ "$CODE" = "200" ]; then
    echo "$BODY"
    exit 0
  fi
  echo "HTTP $CODE on attempt $((ATTEMPT+1)), waiting 60s..." >&2
  sleep 60
  ATTEMPT=$((ATTEMPT+1))
done
echo "FAILED after 6 attempts" >&2
exit 1
