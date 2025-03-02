Export scores using NIP-85.

Prompt:

I am ready to turn our attention to our next project. I would like to export web of trust scores (hops and personalizedPageRank) to nostr. To do this, we will require several nostr scripts which I would like to put into the directory: `/home/ubuntu/hasenpfeffr/nostr/`. The first script should create a new nostr identity for our hasenpfeffr relay. This script should produce variables: HASENPFEFFR_RELAY_NSEC, HASENPFEFFR_RELAY_PUBKEY, HASENPFEFFR_RELAY_NPUB, and should store them safely, especially the nsec which we should keep secure using best practices. The second script should publish a "hello world!" kind 1 event using this nostr identity. Once these two scripts are working, we can later turn our attention to publishing the web of trust scores. Can you help me design these first two nostr scripts?




as kind 30382 events using the Trusted Assertions protocol NIP-85, as described here: `https://github.com/vitorpamplona/nips/blob/user-summaries/85.md`.
