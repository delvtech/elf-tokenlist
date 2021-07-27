tsc --project tsconfig.json

npx hardhat run src/mainnet.ts --network mainnet --no-compile

cp  compiled/src/types* dist/
cp  compiled/src/tags* dist/

cp -R src/addresses dist/addresses