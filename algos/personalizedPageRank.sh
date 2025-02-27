#!/bin/bash

# Set Neo4j connection details
NEO4J_URI="bolt://localhost:7687"
NEO4J_USER="neo4j"
NEO4J_PASSWORD="neo4jneo4j"

pubkey="e5272de914bd301755c439b88e6959a43c9d2664831f093c51e9c799a16a102f"

source /etc/hasenpfeffr.conf

echo "GRAPEVINE_REFERENCE_PUBKEY: $GRAPEVINE_REFERENCE_PUBKEY"

CYPHER1="
MATCH (source:NostrUser)-[r:FOLLOWS]->(target:NostrUser)
RETURN gds.graph.project(
  'personalizedPageRank_$pubkey',
  source,
  target
)
"

CYPHER2="
MATCH (refUser:NostrUser {pubkey: '$pubkey'})
CALL gds.pageRank.write('personalizedPageRank_$pubkey', {
  maxIterations: 20,
  dampingFactor: 0.85,
  scaler: 'MinMax',
  writeProperty: 'personalizedPageRank',
  sourceNodes: [refUser]
})
YIELD nodePropertiesWritten, ranIterations
RETURN nodePropertiesWritten, ranIterations
"

CYPHER3="CALL gds.graph.drop('personalizedPageRank_$pubkey') YIELD graphName"

# echo "CYPHER1: $CYPHER1"
# echo "CYPHER2: $CYPHER2"
# echo "CYPHER3: $CYPHER3"

sudo cypher-shell -a "$NEO4J_URI" -u "$NEO4J_USER" -p "$NEO4J_PASSWORD" "$CYPHER1"
sudo cypher-shell -a "$NEO4J_URI" -u "$NEO4J_USER" -p "$NEO4J_PASSWORD" "$CYPHER2"
sudo cypher-shell -a "$NEO4J_URI" -u "$NEO4J_USER" -p "$NEO4J_PASSWORD" "$CYPHER3"

# once personalizedPageRank scores are updated in neo4j (above), call the script that updates the plugin whitelist:
sudo ./exportWhitelist.sh
