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

## Usage Examples

### List the open principal tokens

This is how to get a list of currently open principal tokens.

```ts
import { ElementTokenTag, mainnetTokenList } from "@elementfi/tokenlist";

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

## Building the tokenlist

To build a new version of the token list, run:

```bash
npm run build
```

This will build for both mainnet & goerli, create the tokenlist, and copy the files to dist/

## Publishing tokenlist

To release and publish the new token list:

First create a new version commit using npm:

```bash
npm version major|minor|patch # this will create a git commit
```

Then push up the changes to Github:

```bash
git push
git push --tags
```

Then in GH:

1. Go to tags
2. Click the ellipses to the far right of the new tag and click "Create release"
3. On the new release, click "Auto-generate release notes" (edit the description if needed)
4. Click "Publish release"
5. Check the Actions tab to monitor the build and publish progress.
