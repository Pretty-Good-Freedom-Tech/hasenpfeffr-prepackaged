#!/bin/bash

# commands to run one time at initialization

sudo apt update
sudo apt install npm
sudo npm install -g @nostr-dev-kit/ndk nostr-tools ws websocket-polyfill fs dotenv

# cd ~/hasenpfeffr
# sudo npm install dotenv
# sudo npm install @nostr-dev-kit/ndk
# sudo npm install ws

# hasenfeffr.conf 

sudo mv /home/ubuntu/hasenpfeffr/setup/hasenpfeffr.conf /etc/hasenpfeffr.conf
# sudo chown root:root /etc/hasenpfeffr.conf

# add neo4j constraints and indexes

sudo chmod +x /home/ubuntu/hasenpfeffr/setup/neo4jCommandsAndIndices.sh
sudo /home/ubuntu/hasenpfeffr/setup/neo4jCommandsAndIndices.sh

#############################################
############### ETL PIPELINE ################

############### stream

# addToQueue

cd ~/hasenpfeffr/pipeline/stream
sudo chmod +x addToQueue.mjs
sudo chmod +x processQueue.sh
sudo chmod +x updateSingleNostrUser.sh

sudo mv ~/hasenpfeffr/services/addToQueue.service /etc/systemd/system/addToQueue.service
sudo chown root:root /etc/systemd/system/addToQueue.service

sudo systemctl enable addToQueue.service
sudo systemctl start addToQueue.service
sudo systemctl status addToQueue.service

# processQueue

sudo mv ~/hasenpfeffr/services/processQueue.service /etc/systemd/system/processQueue.service
sudo chown root:root /etc/systemd/system/processQueue.service

sudo systemctl enable processQueue.service
sudo systemctl start processQueue.service
sudo systemctl status processQueue.service

############### batch 

cd ~/hasenpfeffr/pipeline/batch
sudo chmod +x transfer.sh

sudo chmod +x strfryToKind3Events.sh
sudo chmod +x kind3EventsToFollows.sh
sudo chmod +x kind3EventsToFollows.js

############### reconcile

sudo chmod +x /home/ubuntu/hasenpfeffr/pipeline/reconcile/processReconcileQueue.js
sudo chmod +x /home/ubuntu/hasenpfeffr/pipeline/reconcile/runReconciliation.js

# generate queue

sudo mv ~/hasenpfeffr/services/runReconciliation.service /etc/systemd/system/runReconciliation.service
sudo mv ~/hasenpfeffr/services/runReconciliation.timer /etc/systemd/system/runReconciliation.timer

sudo chown root:root /etc/systemd/system/runReconciliation.service
sudo chown root:root /etc/systemd/system/runReconciliation.timer

sudo systemctl daemon-reload

sudo systemctl enable runReconciliation.timer
sudo systemctl start runReconciliation.timer
sudo systemctl status runReconciliation.timer

# process queue

sudo mv /home/ubuntu/hasenpfeffr/services/processReconcileQueue.service /etc/systemd/system/processReconcileQueue.service
sudo mv /home/ubuntu/hasenpfeffr/services/processReconcileQueue.timer /etc/systemd/system/processReconcileQueue.timer

sudo chown root:root /etc/systemd/system/processReconcileQueue.service
sudo chown root:root /etc/systemd/system/processReconcileQueue.timer

sudo systemctl daemon-reload

sudo systemctl enable processReconcileQueue.timer
sudo systemctl start processReconcileQueue.timer
sudo systemctl status processReconcileQueue.timer

#############################################
################### ALGOS ###################

sudo chmod +x /home/ubuntu/hasenpfeffr/algos/calculateHops.sh
sudo chmod +x /home/ubuntu/hasenpfeffr/algos/exportWhitelist.sh
sudo chmod +x /home/ubuntu/hasenpfeffr/algos/personalizedPageRank.sh

sudo chmod +x /home/ubuntu/hasenpfeffr/algos/update-calculateHops-timer.sh
sudo chmod +x /home/ubuntu/hasenpfeffr/algos/update-personalizedPageRank-timer.sh

# calculateHops

sudo mv /home/ubuntu/hasenpfeffr/services/calculateHops.service /etc/systemd/system/calculateHops.service
sudo mv /home/ubuntu/hasenpfeffr/services/calculateHops.timer /etc/systemd/system/calculateHops.timer

sudo systemctl enable calculateHops.timer
sudo systemctl start calculateHops.timer
sudo systemctl status calculateHops.timer

# personalizedPageRank

sudo mv /home/ubuntu/hasenpfeffr/services/personalizedPageRank.service /etc/systemd/system/personalizedPageRank.service
sudo mv /home/ubuntu/hasenpfeffr/services/personalizedPageRank.timer /etc/systemd/system/personalizedPageRank.timer

sudo systemctl enable personalizedPageRank.timer
sudo systemctl start personalizedPageRank.timer
sudo systemctl status personalizedPageRank.timer






# various chmod, chown and mv commands to do at startup

# create log files
sudo mkdir /var/log/hasenpfeffr
sudo touch /var/log/hasenpfeffr/calculateHops.log
sudo touch /var/log/hasenpfeffr/personalizedPageRank.log

# load CALCULATE_HOPS_TIMER and PERSONALIZED_PAGERANK_TIMER into their respective timers
sudo /home/ubuntu/hasenpfeffr/algos/update-calculateHops-timer.sh
sudo /home/ubuntu/hasenpfeffr/algos/update-personalizedPageRank-timer.sh

# create update-reconciliation-timer.sh for reconciliation
# first merge runReconciliaiton and processReconcileQueue into one timer
