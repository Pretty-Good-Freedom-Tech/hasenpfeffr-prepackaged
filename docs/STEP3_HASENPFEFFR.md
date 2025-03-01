Install and configure hasenpfeffr
=====

First, run the basic initialization script which installs dependencies, makes files executable, moves them to proper locations, and enables services.

```
sudo chmnod +x /home/ubuntu/hasenpfeffr/setup/initialize.sh
sudo /home/ubuntu/hasenpfeffr/setup/initialize.sh
```

### setup hasenpfeffr.conf

If not already done, open hasenpfeffr.conf using `sudo nano /etc/hasenpfeffr.conf` to update GRAPEVINE_REFERENCE_PUBKEY, NEO4J_PASSWORD, and HASENPFEFFR_RELAY_URL

In the neo4j browser, check for for the presence of Neo4j constraints and indexes using `show constraints` and `show indexes`.

## stream follows into neo4j

We will have two services for this role: one that listens to strfry for new kind 3 notes and adds pubkeys to a queue, and another that processes the pubkeys in the queue.

To verify the addToQueue service is working, run: `sudo journalctl -u addToQueue -f` or go to `~/hasenpfeffr/pipeline/stream$/queue` and use `ls -Rltr ; ls -1 | wc -l` to watch the files grow.

You should see the files disappearing from `~/hasenpfeffr/pipeline/stream$/queue` and data accumulating in Neo4j. In the Neo4j browser, run commands `MATCH (n:NostrUser) RETURN count(n) AS numNostrUsers` and `MATCH ()-[r:FOLLOWS]->() RETURN count(r) AS numFollows` to see how many users and follow relationships there are.

## batch pipeline module

Check to see that kind3 events are in strfry: `sudo strfry scan --count '{"kinds":[3]}'`; there should be over 112k as of 28 Feb 2025.

First stop the streaming pipeline service, then do the batch transfer:
```
sudo systemctl stop addToQueue.service
sudo systemctl stop processQueue.service

cd ~/hasenpfeffr/pipeline/batch
sudo ./transfer.sh
```

The last command should initiate batch load of all kind3 event data from strfry into neo4j and should take 10 or 15 minutes or so. At the end, there should be over 200k NostrUser nodes and roughly 6 or 7 million (or more) FOLLOWS.

Restart the streaming pipeline and check to see it is running:

```
sudo systemctl start addToQueue.service
sudo systemctl start processQueue.service

sudo systemctl status addToQueue.service
sudo systemctl status processQueue.service
```

## reconcile pipeline module

One service to create the queue; one service to process the queue. Each service is on a timer.


Parameters:

`batchSize: 10` Batch Size: The number of pubkeys to process in each batch (default: 10)
`maxConcurrent: 3` Concurrency Limit: Maximum number of pubkeys to process simultaneously (default: 3)
`OnUnitActiveSec` (in the timer file) Timer Frequency: How often to run the queue processing (default: every 30 minutes)


## Services to calculate personalizedPageRank and hops periodically (to add: personalizedGrapeRank)

These updates should trigger update of strfry filters and plugins.

### hops

Execute the following query: `MATCH (u:NostrUser) WHERE u.hops IS NOT NULL return count(u)` the result should be zero.

Now run `sudo /home/ubuntu/hasenpfeffr/algos/calculateHops.sh`, which should take a few minutes. Execute the above query, as well as `MATCH (u:NostrUser) WHERE u.hops = 1 return count(u)` using different values for u.hops.


### personalizedPageRank

## Summary of services that should be running

Check all services with these commands:

```
# runRouter
sudo systemctl status runRouter.service

# pipeline: stream
sudo systemctl status addToQueue.service # ? rename to addToStreamingQueue
sudo systemctl status processQueue.service # ? rename to processStreamingQueue

# pipeline: reconcile
sudo systemctl status runReconciliation.timer # ? rename to generateReconciliationQueue
sudo systemctl status processReconcileQueue.timer # ? rename to processReconciliationQueue

# algos: dos, pagerank
```
