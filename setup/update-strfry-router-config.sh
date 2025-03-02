#!/bin/bash

# Source the configuration file
source /etc/hasenpfeffr.conf

# Set default value if not defined
GRAPEVINE_REFERENCE_PUBKEY=${GRAPEVINE_REFERENCE_PUBKEY}

# Create the timer file
cat > /etc/strfry-router.config << EOF
connectionTimeout = 20

streams {
    starterWoT {
        dir = "down"

        # pluginDown = "~/strfry/plugins/hasenpfeffr.js"

        filter = { "kinds": [3, 1984, 10000], "limit": 5 }

        urls = [
            "wss://relay.primal.net",
            "wss://relay.damus.io",
            "wss://relay.nostr.band"
        ]
    }

    myStuff {
        dir = "down"

        # pluginDown = "~/strfry/plugins/hasenpfeffr.js"

        filter = { "authors": ["${GRAPEVINE_REFERENCE_PUBKEY}"] }

        urls = [
            "wss://relay.primal.net",
            "wss://relay.damus.io",
            "wss://relay.nostr.band"
        ]
    }
}
EOF

# Reload systemd and restart the timer
systemctl daemon-reload
systemctl restart runRouter.service

echo "strfry-router.config updated to download all events from my pubkey: ${GRAPEVINE_REFERENCE_PUBKEY}"
