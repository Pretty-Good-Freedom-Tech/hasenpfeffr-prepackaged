#!/bin/bash

# Source the configuration file
source /etc/hasenpfeffr.conf

# Set default value if not defined
PERSONALIZED_PAGERANK_TIMER=${PERSONALIZED_PAGERANK_TIMER:-"24h"}

# Create the timer file
cat > /etc/systemd/system/personalizedPageRank.timer << EOF
[Unit]
Description=Run personalizedPageRank periodically
After=network.target neo4j.service

[Timer]
OnBootSec=15min
OnUnitActiveSec=${PERSONALIZED_PAGERANK_TIMER}
RandomizedDelaySec=30min

[Install]
WantedBy=timers.target
EOF

# Reload systemd and restart the timer
systemctl daemon-reload
systemctl restart personalizedPageRank.timer

echo "personalizedPageRank timer updated to run every ${PERSONALIZED_PAGERANK_TIMER}"
