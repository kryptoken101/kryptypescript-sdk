<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@3rdweb/sdk](./sdk.md) &gt; [NFTStackDrop](./sdk.nftstackdrop.md)

## NFTStackDrop class

Setup a collection of NFTs with a customizable number of each NFT that are minted as users claim them.

<b>Signature:</b>

```typescript
declare class NFTStackDrop extends Erc1155<DropERC1155> 
```
<b>Extends:</b> Erc1155&lt;DropERC1155&gt;

## Example


```javascript
import { ThirdwebSDK } from "@3rdweb/sdk";

// You can switch out this provider with any wallet or provider setup you like.
const provider = ethers.Wallet.createRandom();
const sdk = new ThirdwebSDK(provider);
const nftStackDrop = sdk.getNFTStackDrop("{{contract_address}}");
```

## Constructors

|  Constructor | Modifiers | Description |
|  --- | --- | --- |
|  [(constructor)(network, address, storage, options, contractWrapper)](./sdk.nftstackdrop._constructor_.md) |  | Constructs a new instance of the <code>NFTStackDrop</code> class |

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [claimConditions](./sdk.nftstackdrop.claimconditions.md) |  | DropErc1155ClaimConditions |  |
|  [contractFactory](./sdk.nftstackdrop.contractfactory.md) | <code>static</code> | typeof DropERC1155\_\_factory |  |
|  [contractRoles](./sdk.nftstackdrop.contractroles.md) | <code>static</code> | readonly \["admin", "minter", "transfer"\] |  |
|  [contractType](./sdk.nftstackdrop.contracttype.md) | <code>static</code> | "nft-stack-drop" |  |
|  [encoder](./sdk.nftstackdrop.encoder.md) |  | ContractEncoder&lt;DropERC1155&gt; |  |
|  [metadata](./sdk.nftstackdrop.metadata.md) |  | ContractMetadata&lt;DropERC1155, typeof NFTStackDrop.schema&gt; |  |
|  [primarySale](./sdk.nftstackdrop.primarysale.md) |  | ContractPrimarySale&lt;DropERC1155&gt; |  |
|  [roles](./sdk.nftstackdrop.roles.md) |  | ContractRoles&lt;DropERC1155, typeof NFTStackDrop.contractRoles\[number\]&gt; |  |
|  [royalty](./sdk.nftstackdrop.royalty.md) |  | ContractRoyalty&lt;DropERC1155, typeof NFTStackDrop.schema&gt; |  |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [claim(tokenId, quantity, proofs)](./sdk.nftstackdrop.claim.md) |  | Claim a token to the connected wallet |
|  [claimTo(destinationAddress, tokenId, quantity, proofs)](./sdk.nftstackdrop.claimto.md) |  | Claim NFTs to a specific Wallet |
|  [createBatch(metadatas)](./sdk.nftstackdrop.createbatch.md) |  | Create a batch of NFTs to be claimed in the future |
