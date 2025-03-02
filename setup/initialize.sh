#!/bin/bash

# commands to run one time at initialization

sudo chmod +x /home/ubuntu/hasenpfeffr/setup/neo4jCommandsAndIndices.sh
sudo chmod +x /home/ubuntu/hasenpfeffr/setup/startup.sh

#############################################
############ create log files ###############

sudo mkdir /var/log/hasenpfeffr
sudo touch /var/log/hasenpfeffr/calculateHops.log
sudo touch /var/log/hasenpfeffr/personalizedPageRank.log

#############################################
############### DEPENDENCIES ################

sudo apt update
sudo apt install npm
sudo npm install -g @nostr-dev-kit/ndk nostr-tools ws websocket-polyfill fs dotenv

sudo apt update
sudo apt upgrade

#############################################
############### STRFRY ROUTER ################

sudo mv /home/ubuntu/hasenpfeffr/services/runRouter.service /etc/systemd/system/runRouter.service

sudo systemctl enable runRouter.service

sudo mv /home/ubuntu/hasenpfeffr/setup/hasenpfeffr.conf /etc/hasenpfeffr.conf
# sudo chown root:root /etc/hasenpfeffr.conf

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

# processQueue

sudo mv ~/hasenpfeffr/services/processQueue.service /etc/systemd/system/processQueue.service
sudo chown root:root /etc/systemd/system/processQueue.service

sudo systemctl enable processQueue.service

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

# process queue

sudo mv /home/ubuntu/hasenpfeffr/services/processReconcileQueue.service /etc/systemd/system/processReconcileQueue.service
sudo mv /home/ubuntu/hasenpfeffr/services/processReconcileQueue.timer /etc/systemd/system/processReconcileQueue.timer

sudo chown root:root /etc/systemd/system/processReconcileQueue.service
sudo chown root:root /etc/systemd/system/processReconcileQueue.timer

sudo systemctl enable processReconcileQueue.timer

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

# personalizedPageRank

sudo mv /home/ubuntu/hasenpfeffr/services/personalizedPageRank.service /etc/systemd/system/personalizedPageRank.service
sudo mv /home/ubuntu/hasenpfeffr/services/personalizedPageRank.timer /etc/systemd/system/personalizedPageRank.timer

sudo systemctl enable personalizedPageRank.timer

# various chmod, chown and mv commands to do at startup

sudo systemctl daemon-reload
