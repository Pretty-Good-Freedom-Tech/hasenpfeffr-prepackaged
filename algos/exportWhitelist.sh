#!/bin/bash

source /etc/hasenpfeffr.conf # NEO4J_URI, NEO4J_USER, NEO4J_PASSWORD

echo "Running exportWhiteList. This script updates /home/ubuntu/hasenpfeffr/plugins/whitelist_pubkeys.json based on personalizedPageRank scores stored in neo4j."

CYPHER1="
MATCH (n:NostrUser) WHERE n.personalizedPageRank > 0.000001
RETURN n.personalizedPageRank, n.pubkey
ORDER BY n.personalizedPageRank DESC
"

sudo cypher-shell -a "$NEO4J_URI" -u "$NEO4J_USER" -p "$NEO4J_PASSWORD" "$CYPHER1" | tail -n +2 > /home/ubuntu/hasenpfeffr/algos/whitelistQueryOutput.txt

# create whitelist

touch /home/ubuntu/hasenpfeffr/algos/whitelist_pubkeys.json

echo "{" >> /home/ubuntu/hasenpfeffr/algos/whitelist_pubkeys.json

# iterate through all pubkeys and add to json file

numLines=$(wc -l /home/ubuntu/hasenpfeffr/algos/whitelistQueryOutput.txt | awk '{print $1}')

whichLine=1
while read -r p;
do
  IFS=','
  read -ra array1 <<< "$p"
  IFS='"'
  read -ra array2 <<< "$p"
  if [ "$whichLine" -lt "$numLines" ]; then
    echo "  \"${array2[1]}\": true," >> /home/ubuntu/hasenpfeffr/algos/whitelist_pubkeys.json
  else
    echo "  \"${array2[1]}\": true" >> /home/ubuntu/hasenpfeffr/algos/whitelist_pubkeys.json
  fi
  ((whichLine++))
done < /home/ubuntu/hasenpfeffr/algos/whitelistQueryOutput.txt

echo "}" >> /home/ubuntu/hasenpfeffr/algos/whitelist_pubkeys.json

sudo mv /hume/ubuntu/hasenpfeffr/algos/whitelist_pubkeys.json /home/ubuntu/hasenpfeffr/plugins/whitelist_pubkeys.json

# clean up
sudo rm /home/ubuntu/hasenpfeffr/algos/whitelistQueryOutput.txt
