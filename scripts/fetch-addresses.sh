NETWORK="$1"
curl https://raw.githubusercontent.com/element-fi/elf-deploy/main/addresses/AddressesJsonFile.d.ts > src/addresses/AddressesJsonFile.d.ts
curl https://raw.githubusercontent.com/element-fi/elf-deploy/main/addresses/frontend-$NETWORK.addresses.json > src/addresses/goerli.addresses.json
curl https://raw.githubusercontent.com/element-fi/elf-deploy/main/addresses/frontend-$NETWORK.addresses.json > src/addresses/mainnet.addresses.json