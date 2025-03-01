Install and configure hasenpfeffr
=====

## hasenpfeffr

```
sudo apt update

sudo apt install npm

sudo npm install -g @nostr-dev-kit/ndk nostr-tools ws websocket-polyfill fs dotenv

cd ~/hasenpfeffr
sudo npm install dotenv
sudo npm install @nostr-dev-kit/ndk
sudo npm install ws

cd ~/hasenpfeffr
```
### setup hasenpfeffr.conf

Edit hasenpfeffr.conf using `sudo nano ~/hasenpfeffr/setup/hasenpfeffr.conf` to update GRAPEVINE_REFERENCE_PUBKEY, NEO4J_PASSWORD, and HASENPFEFFR_RELAY_URL

TODO: make these env variables.

```
sudo mv ~/hasenpfeffr/setup/hasenpfeffr.conf /etc/hasenpfeffr.conf
sudo chown root:root /etc/hasenpfeffr.conf
```

## add neo4j constraints and indexes

```
cd ~/hasenpfeffr/setup
sudo chmod +x neo4jCommandsAndIndices.sh
sudo ./neo4jCommandsAndIndices.sh
```

In the neo4j browser, check for for their presence using `show constraints` and `show indexes`.

## stream follows into neo4j

We will have two services for this role: one that listens to strfry for new kind 3 notes and adds pubkeys to a queue, and another that processes the pubkeys in the queue.

```
cd ~/hasenpfeffr/pipeline/stream
sudo chmod +x addToQueue.mjs
sudo chmod +x processQueue.sh
sudo chmod +x updateSingleNostrUser.sh
```

Set up the `addToQueue` service:

```
sudo mv ~/hasenpfeffr/services/addToQueue.service /etc/systemd/system/addToQueue.service
sudo chown root:root /etc/systemd/system/addToQueue.service

sudo systemctl enable addToQueue.service
sudo systemctl start addToQueue.service
sudo systemctl status addToQueue.service
```

To verify the addToQueue service is working, run: `sudo journalctl -u addToQueue -f` or go to `~/hasenpfeffr/pipeline/stream$/queue` and use `ls -Rltr ; ls -1 | wc -l` to watch the files grow.

Next, set up the `processQueue` service:

```
sudo mv ~/hasenpfeffr/services/processQueue.service /etc/systemd/system/processQueue.service
sudo chown root:root /etc/systemd/system/processQueue.service

sudo systemctl enable processQueue.service
sudo systemctl start processQueue.service
sudo systemctl status processQueue.service
```

You should see the files disappearing from `~/hasenpfeffr/pipeline/stream$/queue` and data accumulating in Neo4j. In the Neo4j browser, run commands `MATCH (n:NostrUser) RETURN count(n) AS numNostrUsers` and `MATCH ()-[r:FOLLOWS]->() RETURN count(r) AS numFollows` to see how many users and follow relationships there are.

## batch pipeline module

Check to see that kind3 events are in strfry: `sudo strfry scan --count '{"kinds":[3]}'`; there should be over 112k as of 28 Feb 2025.

Stop the streaming pipeline:

```
sudo systemctl stop addToQueue.service
sudo systemctl stop processQueue.service
```

```
cd ~/hasenpfeffr/pipeline/batch
sudo chmod +x transfer.sh

sudo chmod +x strfryToKind3Events.sh
sudo chmod +x kind3EventsToFollows.sh
sudo chmod +x kind3EventsToFollows.js

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

```
sudo chmod +x /home/ubuntu/hasenpfeffr/pipeline/reconcile/processReconcileQueue.js
sudo chmod +x /home/ubuntu/hasenpfeffr/pipeline/reconcile/runReconciliation.js
```

Service to generate the queue:

```
sudo mv ~/hasenpfeffr/services/runReconciliation.service /etc/systemd/system/runReconciliation.service
sudo mv ~/hasenpfeffr/services/runReconciliation.timer /etc/systemd/system/runReconciliation.timer

sudo chown root:root /etc/systemd/system/runReconciliation.service
sudo chown root:root /etc/systemd/system/runReconciliation.timer

sudo systemctl daemon-reload

sudo systemctl enable runReconciliation.timer
sudo systemctl start runReconciliation.timer
sudo systemctl status runReconciliation.timer
```

Adjust Timer: You can adjust the frequency in the timer file based on your needs. Currently set to run every 6 hours.

Service to process the queue:

```
sudo mv /home/ubuntu/hasenpfeffr/services/processReconcileQueue.service /etc/systemd/system/processReconcileQueue.service
sudo mv /home/ubuntu/hasenpfeffr/services/processReconcileQueue.timer /etc/systemd/system/processReconcileQueue.timer

sudo chown root:root /etc/systemd/system/processReconcileQueue.service
sudo chown root:root /etc/systemd/system/processReconcileQueue.timer

sudo systemctl daemon-reload

sudo systemctl enable processReconcileQueue.timer
sudo systemctl start processReconcileQueue.timer
sudo systemctl status processReconcileQueue.timer
```

Parameters:

`batchSize: 10` Batch Size: The number of pubkeys to process in each batch (default: 10)
`maxConcurrent: 3` Concurrency Limit: Maximum number of pubkeys to process simultaneously (default: 3)
`OnUnitActiveSec` (in the timer file) Timer Frequency: How often to run the queue processing (default: every 30 minutes)


## Services to calculate personalizedPageRank and hops periodically (to add: personalizedGrapeRank)

These updates should trigger update of strfry filters and plugins.

```
sudo chmod +x /home/ubuntu/hasenpfeffr/algos/calculateHops.sh
sudo chmod +x /home/ubuntu/hasenpfeffr/algos/exportWhitelist.sh
sudo chmod +x /home/ubuntu/hasenpfeffr/algos/personalizedPageRank.sh

sudo chmod +x /home/ubuntu/hasenpfeffr/algos/update-calculateHops-timer.sh
sudo chmod +x /home/ubuntu/hasenpfeffr/algos/update-personalizedPageRank-timer.sh
```

### hops

Execute the following query: `MATCH (u:NostrUser) WHERE u.hops IS NOT NULL return count(u)` the result should be zero.

Now run `sudo /home/ubuntu/hasenpfeffr/algos/calculateHops.sh`, which should take a few minutes. Execute the above query, as well as `MATCH (u:NostrUser) WHERE u.hops = 1 return count(u)` using different values for u.hops.

Set up the `calculateHops` service:

```
sudo mv /home/ubuntu/hasenpfeffr/services/calculateHops.service /etc/systemd/system/calculateHops.service
sudo mv /home/ubuntu/hasenpfeffr/services/calculateHops.timer /etc/systemd/system/calculateHops.timer

sudo systemctl enable calculateHops.timer
sudo systemctl start calculateHops.timer
sudo systemctl status calculateHops.timer
```

### personalizedPageRank

Set up the `personalizedPageRank` service:

```
sudo mv /home/ubuntu/hasenpfeffr/services/personalizedPageRank.service /etc/systemd/system/personalizedPageRank.service
sudo mv /home/ubuntu/hasenpfeffr/services/personalizedPageRank.timer /etc/systemd/system/personalizedPageRank.timer

sudo systemctl enable personalizedPageRank.timer
sudo systemctl start personalizedPageRank.timer
sudo systemctl status personalizedPageRank.timer
```

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
