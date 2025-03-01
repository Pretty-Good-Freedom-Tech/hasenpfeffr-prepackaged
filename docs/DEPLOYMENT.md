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

## server

Set up AWS EC2 instance with the following options:
- Ubuntu Server 24.04 LTS (the first choice)
- 64 bit (x86)
- Instance type: r7i.xlarge
- Network settings: allow SSH, HTTP, and HTTPS

### associate elastic IP address

On AWS EC2 control panel, on the column on the left, look under Network & Security and go to Elastic IPs. Allocate one and associated it with your instance. Take that IPv4 address and use it to point your DNS of choice, e.g. `relay.myCoolSite.com`, to your instance. At later step, we will add this URL to `hasenpfeffr.conf` file.

SSH into your instance and proceed with the steps below. 

### ports

Configure the EC2 security group to allow incoming traffic on ports 7474 and 7687.

## download hasenpfeffr

This has a few files we will need during the following steps.

```
git clone https://github.com/Pretty-Good-Freedom-Tech/hasenpfeffr.git
```

## neo4j

Install neo4j. (These instructions are adapted from [these instructions](https://neo4j.com/docs/operations-manual/current/installation/linux/debian/#debian-installation)).

We will be installing neo4j community edition, neo4j graph data science, and APOC. If neo4j won't start and you don't know why, it could be due to incompatible versions of these 3 libraries, especially if your habit is to install latest stable version. I have specified versions in the steps below which have worked together for me.

At the AWS console, go to your new instance, go to Security, click on the security group, go to Edit Inbound Rules, and add two new rules: both of type Custom TCP, Port range: 7474 for the first and 7687 for the second; for both, select 0.0.0.0/0 Source will change automatically to Anywhere-IPv4 (or you can be more selective for higher security)

SSH into instance if you haven't already go to your current user's home directory, `cd ~` (aka `cd /home/ubuntu`).

```
sudo apt update && sudo apt install -y wget
wget -O - https://debian.neo4j.com/neotechnology.gpg.key | sudo apt-key add -
echo 'deb https://debian.neo4j.com stable 5' | sudo tee /etc/apt/sources.list.d/neo4j.list
sudo apt update
apt list -a neo4j # to see what versions are available to install
sudo apt-get install neo4j=1:5.26.3 # or whatever is the latest stable version
```

```
sudo systemctl start neo4j
sudo systemctl status neo4j
sudo systemctl enable neo4j
```

You can also check the neo4j status with `neo4j status`.

Changes to neo4j.conf
```
sudo cp /etc/neo4j/neo4j.conf /etc/neo4j/neo4j.conf.backup
sudo nano /etc/neo4j/neo4j.conf
```

Then uncomment out the following lines (and add the 0.0.0.0 if needed)
```
server.default_listen_address=0.0.0.0
server.bolt.listen_address=0.0.0.0:7687
server.http.listen_address=0.0.0.0:7474
```

```
sudo systemctl restart neo4j
sudo systemctl status neo4j
```

Then configure the EC2 security group next to allow incoming traffic on ports 7474 and 7687.

You should now be able to access neo4j on the browser using port 7474: `http://x.x.x.x:7474` or `http://relay.myCoolSite.com:7474`. Log on with username: neo4j and password: neo4j. It should prompt you to change the password. At a later step, we're going to put the password in a variable (which is accessed by a conf file?).

### install neo4j graph data science

```
cd /var/lib/neo4j/plugins/
sudo wget https://github.com/neo4j/graph-data-science/releases/download/2.13.2/neo4j-graph-data-science-2.13.2.jar
ls -la # to verify presence of neo4j-graph-data-science-2.13.2.jar
sudo chown neo4j:neo4j neo4j-graph-data-science-2.13.2.jar
```

Then go back into `sudo nano /etc/neo4j/neo4j.conf` and make the following changes:


```
dbms.security.procedures.unrestricted=gds.*
```

Then restart neo4j: 
```
sudo systemctl restart neo4j
sudo systemctl status neo4j
```

To test whether gds has been properly installed, refresh the neo4j browser (accessed using port 7474) and enter this in the command line on the top:
`RETURN gds.version()`

### install apoc

```
cd /var/lib/neo4j/plugins
sudo wget https://github.com/neo4j/apoc/releases/download/5.26.2/apoc-5.26.2-core.jar
ls -la # make sure can now see file apoc-5.26.2-core.jar
sudo chown neo4j:neo4j apoc-5.26.2-core.jar # (not sure if need to do this)
sudo chmod 755 apoc-5.26.2-core.jar # (not sure if need to do this)

sudo mv ~/hasenpfeffr/setup/apoc.conf /etc/neo4j/apoc.conf
```

Once again update conf: `sudo nano /etc/neo4j/neo4j.conf`

and uncomment out and edit the following line: 

```
dbms.security.procedures.allowlist=apoc.coll.*,apoc.load.*,apoc.periodic.*,apoc.export.json.query,gds.*
```

Then restart neo4j: 
```
sudo systemctl restart neo4j
sudo systemctl status neo4j
```

To test whether APOC has been properly installed, refresh the neo4j browser (accessed using port 7474) and run a test command. 

This is supposed to work but doesn't for me: `RETURN apoc.version() AS output;`

However, this does work for me:

```
WITH 'https://raw.githubusercontent.com/neo4j-contrib/neo4j-apoc-procedures/4.0/src/test/resources/person.json' AS url

CALL apoc.load.json(url) YIELD value as person

MERGE (p:Person {name:person.name})
   ON CREATE SET p.age = person.age, p.children = size(person.children);
```

If it installed one node with label: Person, then APOC is working.

To clear the database, run the command: `MATCH (n) DETACH DELETE n`

### update memory

If running into memory problems, go to conf: `sudo nano /etc/neo4j/neo4j.conf` and edit the followig lines:

```
// I have not yet determined the minimum values for these, but currently I am using:
server.memory.heap.initial_size=2g
server.memory.heap.max_size=2g

// Windsurf recommended
dbms.memory.transaction.total.max=1G // (which I did)
dbms.tx_state.max_off_heap_memory=1G // (which doesn't make sense so I didn't do)
```

## strfry

Install strfry following [these instructions](https://github.com/hoytech/strfry/blob/master/docs/DEPLOYMENT.md).

additional changes to strfry.conf:
nofiles = 0
maxFilterLimit = 300000 (just something big)

* change `sudo ufw default deny incoming` to `sudo ufw default allow incoming`; otherwise the command `sudo ufw enable` disrupts neo4j access by port 7474.

* keep user: ubuntu rather than make new user strfry

### strfry router

This is adapted from `https://github.com/hoytech/strfry/blob/master/docs/router.md`.

Review the router config: `sudo nano ~/hasenpfeffr/setup/strfry-router.config`; edit the relay list if desired. Later we will uncomment the plugin.

Move router config:

```
sudo mv ~/hasenpfeffr/setup/strfry-router.config /etc/strfry-router.config
sudo chown strfry:strfry /etc/strfry-router.config
```

Setup service to keep router running in the background:

```
sudo mv ~/hasenpfeffr/services/runRouter.service /etc/systemd/system/runRouter.service
sudo chown root:root /etc/systemd/system/runRouter.service

sudo systemctl enable runRouter.service
sudo systemctl start runRouter.service
sudo systemctl status runRouter.service
```

To see if downloads are happening, check how many events are in strfry using `sudo strfry scan --count '{}'` 

Setup plugin:

`sudo nano /etc/strfry.conf` and set `relay.writePolicy.plugin` to `/home/ubuntu/hasenpfeffr/plugins/hasenpfeffr.js`.

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
sudo mv ~/hasenpfeffr/services/processReconcileQueue.service /etc/systemd/system/processReconcileQueue.service
sudo mv ~/hasenpfeffr/services/processReconcileQueue.timer /etc/systemd/system/processReconcileQueue.timer

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






## MISC
```

# negentropy to sync with relay.primal.net

# batch load strfry into neo4j

sudo ~/hasenpfeffr/pipeline/batch/load.sh

# set up live streaming into neo4j

## systemctl: addToQueue, which listens to relay and adds pubkeys to queue

sudo mv ~/hasenpfeffr/services/addToQueue.service /etc/systemd/system/addToQueue.service
sudo systemctl enable addToQueue.service
sudo systemctl start addToQueue
sudo systemctl status addToQueue

cd ~/hasenpfeffr/pipeline/stream/queue
ls -Rltr ; ls -1 | wc -l
(Check to see that pubkeys are being added to the queue)

## systemctl: processQueue, which listens to queue and updates pubkey one at a time (not working yet)

sudo mv ~/hasenpfeffr/services/processQueue.service /etc/systemd/system/processQueue.service

sudo systemctl enable processQueue.service
sudo systemctl start processQueue
sudo systemctl status processQueue

cd ~/hasenpfeffr/pipeline/stream/queue
ls -Rltr ; ls -1 | wc -l
(Check to see that pubkeys are disappearing from the queue)

# batch load strfry into neo4j for the past 24 hours (indicate time in seconds)

sudo ~/hasenpfeffr/pipeline/batch/load.sh --recent 86400

```

also:

Update strfry filters and plugins. scripts being written.

## grapevine

calculate personalized web of trust scores. scripts being written.

## brainstorm

Organize the graph database into a knowledge graph. scripts being written. (Initial versions of this product may not need this yet.)
