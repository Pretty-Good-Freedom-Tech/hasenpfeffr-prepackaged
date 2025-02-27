#!/bin/bash

source /etc/hasenpfeffr.conf # NEO4J_URI, NEO4J_USER, NEO4J_PASSWORD

> eventsToTransferForInitialization.json

totNumberOfEvents=$(wc -l allKind3EventsStripped.json)

eventCounter=0
cat allKind3EventsStripped.json | while read line; do
    ((eventCounter++))
    eventCounterMod=$(($eventCounter % 100))
    if [[ "$eventCounterMod" = 0 ]]; then
        timestamp
        echo "processing event $eventCounter out of $totNumberOfEvents"
    fi
    sudo node -e "try {
        const oEvent = JSON.parse('$line');
        const pk_follower = oEvent.pubkey
        const aTags = oEvent.tags
        for (x=0; x< aTags.length; x++) {
            const tag = aTags[x]
            if (tag[0] == 'p') {
                const pk_followee = tag[1]
                const nextLine = {
                    pk_follower, pk_followee
                }
                console.log(JSON.stringify(nextLine))
            }
        }
    } catch (e) {
    }" >> eventsToTransferForInitialization.json
done

sudo mv eventsToTransferForInitialization.json /var/lib/neo4j/import/eventsToTransferForInitialization.json
sudo mv allKind3EventsStripped.json /var/lib/neo4j/import/allKind3EventsStripped.json
