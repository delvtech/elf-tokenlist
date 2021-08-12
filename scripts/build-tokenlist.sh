NETWORK="$1"

# Build the specified tokenlist
npx hardhat run src/main.ts --network $NETWORK --no-compile
