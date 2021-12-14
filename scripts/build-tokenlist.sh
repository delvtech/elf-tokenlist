NETWORK="$1"

mkdir -p dist

# Build the specified tokenlist.json file
npx hardhat run src/main.ts --network $NETWORK --no-compile

# compile index.ts template
