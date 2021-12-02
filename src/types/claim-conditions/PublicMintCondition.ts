import { BigNumber, BigNumberish, BytesLike } from "ethers";

/**
 * @beta
 */
export interface PublicMintCondition {
  startTimestamp: BigNumber;
  maxMintSupply: BigNumberish;
  currentMintSupply: BigNumberish;
  quantityLimitPerTransaction: BigNumberish;
  waitTimeSecondsLimitPerTransaction: BigNumberish;
  pricePerToken: BigNumberish;
  currency: string;
  merkleRoot: BytesLike;
}