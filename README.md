# elf-tokenlist

The Tokenlist for Element.finance

## Install

Run

```bash
npm install git+https://github.com/element-fi/elf-tokenlist.git
```

## Build

```bash
# build the new tokenlists, elf-deploy repo must have the updated list
npm run build
```

## Example

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

## Here, take this!

Since this repo is not an npm package, it can be helpful to include this simple script to upgrade your project to the latest commit:

```
  "scripts": {
    "update-elf-tokenlist": "npm install git+https://github.com/element-fi/elf-tokenlist.git"
  },
```
## Configure

To build this repo you need to configure some env variables.  For linux and mac run the following:

1) Copy `elf.default.env`

```bash
cp elf.default.env elf.env
```

2) Update elf.env with your alchemy api key

```bash
export ALCHEMY_MAINNET_API_KEY=
export ALCHEMY_GOERLI_API_KEY=
```

3) Source the env file

```bash
source elf.env
```
