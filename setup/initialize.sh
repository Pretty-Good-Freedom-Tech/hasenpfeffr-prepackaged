#!/bin/bash

# commands to run one time at initialization

sudo chmod +x /home/ubuntu/hasenpfeffr/setup/neo4jCommandsAndIndices.sh
sudo chmod +x /home/ubuntu/hasenpfeffr/setup/startup.sh

#############################################
############ create log files ###############

sudo mkdir /var/log/hasenpfeffr
sudo touch /var/log/hasenpfeffr/calculateHops.log
sudo touch /var/log/hasenpfeffr/calculatePersonalizedPageRank.log

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

sudo chmod +x /home/ubuntu/hasenpfeffr/pipeline/stream/addToQueue.mjs
sudo chmod +x /home/ubuntu/hasenpfeffr/pipeline/stream/processQueue.sh
sudo chmod +x /home/ubuntu/hasenpfeffr/pipeline/stream/updateSingleNostrUser.sh

sudo mv /home/ubuntu/hasenpfeffr/services/addToQueue.service /etc/systemd/system/addToQueue.service
sudo chown root:root /etc/systemd/system/addToQueue.service

sudo systemctl enable addToQueue.service

# processQueue

sudo mv /home/ubuntu/hasenpfeffr/services/processQueue.service /etc/systemd/system/processQueue.service
sudo chown root:root /etc/systemd/system/processQueue.service

sudo systemctl enable processQueue.service

############### batch 

sudo chmod +x /home/ubuntu/hasenpfeffr/pipeline/batch/transfer.sh
sudo chmod +x /home/ubuntu/hasenpfeffr/pipeline/batch/strfryToKind3Events.sh
# sudo chmod +x /home/ubuntu/hasenpfeffr/pipeline/batch/kind3EventsToFollows.sh
sudo chmod +x /home/ubuntu/hasenpfeffr/pipeline/batch/kind3EventsToFollows.js

############### reconcile

sudo chmod +x /home/ubuntu/hasenpfeffr/pipeline/reconcile/processReconciliationQueue.js
sudo chmod +x /home/ubuntu/hasenpfeffr/pipeline/reconcile/createReconciliationQueue.js

# generate queue

sudo mv /home/ubuntu/hasenpfeffr/services/createReconciliationQueue.service /etc/systemd/system/createReconciliationQueue.service
sudo mv /home/ubuntu/hasenpfeffr/services/createReconciliationQueue.timer /etc/systemd/system/createReconciliationQueue.timer

sudo chown root:root /etc/systemd/system/createReconciliationQueue.service
sudo chown root:root /etc/systemd/system/createReconciliationQueue.timer

sudo systemctl daemon-reload

sudo systemctl enable createReconciliationQueue.timer

# process queue

sudo mv /home/ubuntu/hasenpfeffr/services/processReconciliationQueue.service /etc/systemd/system/processReconciliationQueue.service
sudo mv /home/ubuntu/hasenpfeffr/services/processReconciliationQueue.timer /etc/systemd/system/processReconciliationQueue.timer

sudo chown root:root /etc/systemd/system/processReconciliationQueue.service
sudo chown root:root /etc/systemd/system/processReconciliationQueue.timer

sudo systemctl enable processReconciliationQueue.timer

#############################################
################### ALGOS ###################

sudo chmod +x /home/ubuntu/hasenpfeffr/algos/calculateHops.sh
sudo chmod +x /home/ubuntu/hasenpfeffr/algos/exportWhitelist.sh
sudo chmod +x /home/ubuntu/hasenpfeffr/algos/calculatePersonalizedPageRank.sh

sudo chmod +x /home/ubuntu/hasenpfeffr/algos/update-calculateHops-timer.sh
sudo chmod +x /home/ubuntu/hasenpfeffr/algos/update-calculatePersonalizedPageRank-timer.sh

# calculateHops

sudo mv /home/ubuntu/hasenpfeffr/services/calculateHops.service /etc/systemd/system/calculateHops.service
sudo mv /home/ubuntu/hasenpfeffr/services/calculateHops.timer /etc/systemd/system/calculateHops.timer

sudo systemctl enable calculateHops.timer

# calculatePersonalizedPageRank

sudo mv /home/ubuntu/hasenpfeffr/services/calculatePersonalizedPageRank.service /etc/systemd/system/calculatePersonalizedPageRank.service
sudo mv /home/ubuntu/hasenpfeffr/services/calculatePersonalizedPageRank.timer /etc/systemd/system/calculatePersonalizedPageRank.timer

sudo systemctl enable calculatePersonalizedPageRank.timer

# various chmod, chown and mv commands to do at startup

sudo systemctl daemon-reload
