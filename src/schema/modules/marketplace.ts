import {
  CommonModuleOutputSchema,
  CommonModuleSchema,
  CommonPlatformFeeSchema,
} from "./common";
import { z } from "zod";
import { BasisPointsSchema } from "../shared";

const MarketplaceFeeInputSchema = z.object({
  marketFeeBasisPoints: BasisPointsSchema,
});

export const MarketplaceModuleInput = CommonModuleSchema.merge(
  MarketplaceFeeInputSchema,
);

export const MarketplaceModuleOutput = CommonModuleOutputSchema.merge(
  MarketplaceFeeInputSchema,
);

export const MarketplaceModuleDeploy = MarketplaceModuleInput.merge(
  CommonPlatformFeeSchema,
).merge(MarketplaceModuleInput);

export const MarketplaceModuleSchema = {
  deploy: MarketplaceModuleDeploy,
  output: MarketplaceModuleOutput,
  input: MarketplaceModuleInput,
};