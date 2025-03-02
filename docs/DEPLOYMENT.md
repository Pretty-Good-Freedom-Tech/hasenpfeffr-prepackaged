Deployment Instructions
=====

This is experimental, not yet optimized for efficiency and currently requires a relatively expensive instance. For now, I recommend you get it started but plan on destroying the instance pretty quickly so you don't incur high fees. Optimizations will be forthcoming!

set up AWS EC2 Ubuntu server
install Neo4j, neo4j graph data science, and neo4j APOC
install strfry
pipeline of data from strfry to neo4j, which comes in modules:
- streaming module (running) - updates neo4j in real time
- batch (mostly working) - load large amounts of data in blocks, e.g. at startup or after an extended period of being offline
- reconciliation (under heavy construction) - find discrepancies and fix them, which could be due to the streaming pipeline being overwhelmed, a period of being offline, or other errors

Once completed, proceed with the following steps, in order:
- STEP 0: setup AWS EC2 Ubuntu server
- STEP 1: install and configure Neo4j
- STEP 2: install and configure strfry
- STEP 3: install and configure hasenpfeffr
- STEP 4: startup all background processes
