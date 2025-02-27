#!/bin/bash

source /etc/hasenpfeffr.conf # NEO4J_URI, NEO4J_USER, NEO4J_PASSWORD

echo "Running exportWhiteList. This script updates ~/hasenpfeffr/plugins/whitelist_pubkeys.json based on personalizedPageRank scores stored in neo4j."

CYPHER1="
MATCH (n:NostrUser) WHERE n.personalizedPageRank > 0.000001
RETURN n.personalizedPageRank, n.pubkey
ORDER BY n.personalizedPageRank DESC
"

sudo cypher-shell -a "$NEO4J_URI" -u "$NEO4J_USER" -p "$NEO4J_PASSWORD" "$CYPHER1" | tail -n +2 > whitelistQueryOutput.txt

# create whitelist

> whitelist_pubkeys.json

echo "{" >> whitelist_pubkeys.json

# iterate through all pubkeys and add to json file

numLines=$(wc -l whitelistQueryOutput.txt | awk '{print $1}')

whichLine=1
while read -r p;
do
  IFS=','
  read -ra array1 <<< "$p"
  IFS='"'
  read -ra array2 <<< "$p"
  if [ "$whichLine" -lt "$numLines" ]; then
    echo "  \"${array2[1]}\": true," >> whitelist_pubkeys.json
  else
    echo "  \"${array2[1]}\": true" >> whitelist_pubkeys.json
  fi
  ((whichLine++))
done < whitelistQueryOutput.txt

echo "}" >> whitelist_pubkeys.json

sudo mv whitelist_pubkeys.json ~/hasenpfeffr/plugins/whitelist_pubkeys.json

# clean up
sudo rm whitelistQueryOutput.txt
