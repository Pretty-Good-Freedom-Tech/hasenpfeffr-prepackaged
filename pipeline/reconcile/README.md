A script which will reconcile the Neo4j database with kind 3 events in strfry relay. The method is to create a list of pubkeys whose kind3EventId in nen4j does not match the kind3EventId in strfry. these pubkeys will be added to reconcile/queue and processed one at a time.

My next task is to create a script with a name like `runReconciliation` to be located inside: `/home/ubuntu/hasenpfeffr/pipeline/reconcile/`. Its function will be to generate a queue of pubkeys whose FOLLOWS need to be updated in Neo4j. For each pubkey that gets added to this queue, one file will be added to the directory: `/home/ubuntu/hasenpfeffr/pipeline/reconcile/queue/`, the name of which will be the pubkey, and the content of which will be the event id. To determine which pubkeys should be in this queue, the script `runReconciliation` will obtain and compare data from strfry and data from Neo4j. From strfry, the runReconciliation script will obtain a list of all kind 3 events using a command like `sudo strfry scan '{"kinds": [3]}'`. From Neo4j, the runReconciliation script will execute a Cypher command to obtain data from all NostrUser nodes, including the `kind3EventId` property of each node. For any given kind 3 event in strfry, where `strfryKind3Pubkey` equals `event.pubkey` and `strfryKind3EventId` equals `event.id`, strfryKind3Pubkey will get added to the queue if either of the following conditions are met: if that strfryKind3Pubkey does not have a corresponding NostrUser node in neo4j; or if strfryKind3Pubkey is represented by a NostrUser node in Neo4j but its kind3EventId property is not present, null or undefined or does not match its strfryKind3EventId. Can you help me to design this script?

The first step is to find discrepancies between the kind3 ev
Create two json files called `neo4jSnapshot.json` and `strfrySnapshot.json`. Each file will have the same format:

{
  "pubkey1": { "kind3EventId": "foo", "kind3CreatedAt": 123 },
  "pubkey2": { "kind3EventId": "foo", "kind3CreatedAt": 123 },
  "pubkey3": { "kind3EventId": "foo", "kind3CreatedAt": 123 }
}

Compare these two files. Create one json file of FOLLOWS relationships that should be deleted from neo4j and another json file of FOLLOWS relationships that should be added to neo4j.

Run one script to delete the necessary FOLLOWS relationships.

One script to add the necessary FOLLOWS relationships, add NostrUsers, update 
