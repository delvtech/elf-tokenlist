# elf-tokenlist

The Tokenlist for Element.finance

## Install

Run

```
npm install git+https://github.com/element-fi/elf-tokenlist.git
```

## Example

```
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
