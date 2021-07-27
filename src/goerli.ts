import fs from "fs";

import goerliAddressesJson from "src/addresses/goerli.addresses.json";
import { getTokenList } from "src/getTokenList";

if (!fs.existsSync("dist")) {
  fs.mkdirSync("dist");
}

getTokenList(
  goerliAddressesJson,
  "Goerli token list",
  "dist/goerli.tokenlist.json"
)
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
