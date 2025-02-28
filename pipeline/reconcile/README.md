A script which will reconcile the Neo4j database with kind 3 events in strfry relay. The method is to create a list of pubkeys whose kind3EventId in nen4j does not match the kind3EventId in strfry. these pubkeys will be added to reconcile/queue and processed one at a time.

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
