# Hasenpfeffr

Hasenpfeffr is a personalized Webs of Trust nostr relay that enables you to curate your nostr content.

WORK IN PROGRESS

## Features

- Generate personalized PageRank scores for Nostr users
- Calculate network hops from you (degrees of separation)
- WORK IN PROGRESS: Generate personalized GrapeRank scores
- Publish personalized WoT scores as NIP-85 kind 30382 Trusted Assertion events
- Optimized for large-scale data processing (100,000+ events)
- Performance monitoring and logging

## Installation

You first need to install strfry and Neo4j, following the instructions in the docs.

### From GitHub

```bash
# Clone the repository
git clone https://github.com/Prett-Good-Freedom-Tech/hasenpfeffr.git
cd hasenpfeffr

# Install dependencies
npm install
```

### As a Global Package

```bash
npm install -g hasenpfeffr
```

## Configuration

Create a configuration file at `/etc/hasenpfeffr.conf` with the following content:

```bash
# Relay configuration
export HASENPFEFFR_RELAY_URL="wss://your-relay-url.com"
export MY_NOSTR_PUBKEY="your-relay-pubkey"
```

Alternatively, you can create a `.env` file in your project directory:

```
HASENPFEFFR_RELAY_URL=wss://your-relay-url.com
HASENPFEFFR_RELAY_PUBKEY=your-relay-pubkey
```

## Usage

### Generating NIP-85 Data

```bash
# Using the CLI
hasenpfeffr-generate

# Using npm scripts
npm run generate
```

### Publishing NIP-85 Events

```bash
# Using the CLI
hasenpfeffr-publish

# Using npm scripts
npm run publish
```

## Architecture

Hasenpfeffr consists of several components:

1. **Data Generation**: Calculates personalized PageRank scores and network hops
2. **Event Creation**: Creates NIP-85 kind 30382 events with appropriate tags
3. **Publication**: Publishes events to Nostr relays with optimized connection handling

## Performance

The system is optimized for publishing large volumes of events (100,000+) with features such as:

- Connection pooling
- Memory management with garbage collection
- Streaming file processing
- Batch processing with configurable parameters
- Retry mechanisms for failed publications
- Detailed monitoring and logging

## License

GNU Affero General Public License v3.0

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
