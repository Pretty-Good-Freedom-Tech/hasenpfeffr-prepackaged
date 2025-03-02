#!/bin/bash

# Source the configuration file
source /etc/hasenpfeffr.conf

# Set default value if not defined
RUN_FULL_RECONCILIATION_PIPELINE_TIMER=${RUN_FULL_RECONCILIATION_PIPELINE_TIMER:-"24h"}

# Create the timer file
cat > /etc/systemd/system/runFullReconciliation.timer << EOF
[Unit]
Description=Run Full Reconciliation Pipeline periodically
After=network.target neo4j.service

[Timer]
OnBootSec=5min
OnUnitActiveSec=${RUN_FULL_RECONCILIATION_PIPELINE_TIMER}
RandomizedDelaySec=5min

[Install]
WantedBy=timers.target
EOF

# Reload systemd and restart the timer
systemctl daemon-reload
systemctl restart runFullReconciliation.timer

echo "runFullReconciliation timer updated to run every ${RUN_FULL_RECONCILIATION_PIPELINE_TIMER}"
