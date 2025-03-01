Install and configure Neo4j
=====

We will be installing neo4j community edition, neo4j graph data science, and APOC. If neo4j won't start and you don't know why, it could be due to incompatible versions of these 3 libraries, especially if your habit is to install latest stable version. I have specified versions in the steps below which have worked together for me.

## neo4j, community edition

These instructions are adapted from [these instructions](https://neo4j.com/docs/operations-manual/current/installation/linux/debian/#debian-installation).

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

You should now be able to access neo4j on the browser using port 7474: `http://x.x.x.x:7474` or `http://relay.myCoolSite.com:7474`. Log on with username: neo4j and password: neo4j. It should prompt you to change the password.

Edit hasenpfeffr.conf using `sudo nano /home/ubuntu/hasenpfeffr/setup/hasenpfeffr.conf` (or `sudo nano /etc/hasenpfeffr.conf` if you've already moved it to that location) to update GRAPEVINE_REFERENCE_PUBKEY, NEO4J_PASSWORD, and HASENPFEFFR_RELAY_URL

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
