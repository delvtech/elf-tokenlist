import { ElementTokenTag, mainnetTokenList } from "elf-tokenlist";

console.log(
  mainnetTokenList.tokens.filter((token) =>
    token.tags?.includes(ElementTokenTag.UNDERLYING)
  )
);
