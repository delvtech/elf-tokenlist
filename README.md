# elf-tokenlist

The Tokenlist for Element.finance

## Install

```bash
npm install @elementfi/tokenlist
```

## Setup

To setup this repo you need to run the following:

```bash
npm ci
```

You'll also need to add api keys listed in elf.default.env to your local elf.env file.

##

### Deploying a new term

When a new term is deployed in the elf-deploy repo, run this command to
regenerate the tokenlist:

```bash
# build the new tokenlists, elf-deploy repo must have the updated list
npm run build
```

Once complete, commit all file changes and submit a PR to `main`.

Any project that wants the latest tokenlist will now need to update their
dependency on this repo. See below for handy script that makes upgrading easy
for consumers.

## Usage Examples

### List the open principal tokens

This is how to get a list of currently open principal tokens.

```ts
import { ElementTokenTag, mainnetTokenList } from "elf-tokenlist";

// Get the list of principal tokens that have not yet reached maturity
const principalTokens = mainnetTokenList.tokens
  .filter(
    (token) => token.tags?.includes(ElementTokenTag.PRINCIPAL)
  )
  .filter(
    (token) => token.extensions.unlockTimestamp > Date.now() * 1000
  ).
```

## Developer Config

To build this repo you need to configure some env variables. For linux and mac run the following:

1. Copy `elf.default.env`

```bash
cp elf.default.env elf.env
```

2. Update elf.env with your alchemy api key

```bash
export ALCHEMY_MAINNET_API_KEY=
export ALCHEMY_GOERLI_API_KEY=
export ETHERSCAN_API_KEY=
```

3. Source the env file

```bash
source elf.env
```
