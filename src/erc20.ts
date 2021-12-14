import { ERC20 } from "elf-contracts-typechain/dist/types/ERC20";
import { retry } from "src/util/retry";

export async function getTokenDecimalsMulti(
  tokens: ERC20[]
): Promise<number[]> {
  const tokenNames = await Promise.all(tokens.map((token) => 
    retry(token.decimals)
  ));
  return tokenNames;
}
export async function getTokenSymbolMulti(tokens: ERC20[]): Promise<string[]> {
  const tokenNames = await Promise.all(tokens.map((token) => 
    retry(token.symbol)
  ));
  return tokenNames;
}
export async function getTokenNameMulti(tokens: ERC20[]): Promise<string[]> {
  const tokenNames = await Promise.all(tokens.map((token) => 
    retry(token.name)
  ));
  return tokenNames;
}
