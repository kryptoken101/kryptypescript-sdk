---
slug: /sdk.erc721.get
title: Erc721.get() method
hide_title: true
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[@thirdweb-dev/sdk](./sdk.md) &gt; [Erc721](./sdk.erc721.md) &gt; [get](./sdk.erc721.get.md)

## Erc721.get() method

Get a single NFT Metadata

**Signature:**

```typescript
get(tokenId: BigNumberish): Promise<NFTMetadataOwner>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  tokenId | BigNumberish | the tokenId of the NFT to retrieve |

**Returns:**

Promise&lt;[NFTMetadataOwner](./sdk.nftmetadataowner.md)&gt;

The NFT metadata

## Example


```javascript
const nft = await contract.get("0");
console.log(nft);
```