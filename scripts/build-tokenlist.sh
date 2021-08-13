NETWORK="$1"

# Build the specified tokenlist.json file
npx hardhat run src/main.ts --network $NETWORK --no-compile

# compile index.ts template
