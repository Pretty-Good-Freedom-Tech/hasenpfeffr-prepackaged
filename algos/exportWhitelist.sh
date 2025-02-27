#!/bin/bash

# Set Neo4j connection details
NEO4J_URI="bolt://localhost:7687"
NEO4J_USER="neo4j"
NEO4J_PASSWORD="neo4jneo4j"

echo "Running exportWhiteList. This script updates /plugins/whitelist_pubkeys.json based on personalizedPageRank scores stored in neo4j."

CYPHER1="
MATCH (n:NostrUser) WHERE n.personalizedPageRank > 0.000001
RETURN n.personalizedPageRank, n.pubkey
ORDER BY n.personalizedPageRank DESC
"

# echo "CYPHER!: $CYPHER1"

sudo cypher-shell -a "$NEO4J_URI" -u "$NEO4J_USER" -p "$NEO4J_PASSWORD" "$CYPHER1" | tail -n +2 > whitelistQueryOutput.txt

# create whitelist

> whitelist_pubkeys.json

echo "{" >> whitelist_pubkeys.json

# iterate through all pubkeys and add to json file

numLines=$(wc -l whitelistQueryOutput.txt | awk '{print $1}')

# echo "numLines: $numLines"

whichLine=1
while read -r p;
do
  # echo "next line: $p"
  IFS=','
  read -ra array1 <<< "$p"
  # echo "pPR score: ${array1[0]}"
  IFS='"'
  read -ra array2 <<< "$p"
  # echo "pubkey: ${array2[1]}"
  # echo "  \"${array2[1]}\": true" >> whitelist_pubkeys.json
  if [ "$whichLine" -lt "$numLines" ]; then
    echo "  \"${array2[1]}\": true," >> whitelist_pubkeys.json
    # echo "$whichLine is less than $numLines"
  else
    echo "  \"${array2[1]}\": true" >> whitelist_pubkeys.json
    # echo "$whichLine is NOT less than $numLines"
  fi
  ((whichLine++))
done < whitelistQueryOutput.txt

# whitelist_pubkeys.json << "}"

echo "}" >> whitelist_pubkeys.json

sudo mv whitelist_pubkeys.json /plugins/whitelist_pubkeys.json
sudo chown strfry:strfry /plugins/whitelist_pubkeys.json

# clean up
sudo rm whitelistQueryOutput.txt
