# elf-tokenlist

The Tokenlist for Element.finance

## Install

1. Run

```bash
npm install git+https://github.com/element-fi/elf-tokenlist.git
```

2. Since this repo is not an npm package yet, add this script to package.json to
   stay up-to-date with the latest version.

```
  "scripts": {
    "update-elf-tokenlist": "npm install git+https://github.com/element-fi/elf-tokenlist.git"
  },
```

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
```

3. Source the env file

```bash
source elf.env
```
