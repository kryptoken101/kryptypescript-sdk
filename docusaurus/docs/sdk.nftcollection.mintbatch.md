---
slug: /sdk.nftcollection.mintbatch
title: NFTCollection.mintBatch() method
hide_title: true
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[@thirdweb-dev/sdk](./sdk.md) &gt; [NFTCollection](./sdk.nftcollection.md) &gt; [mintBatch](./sdk.nftcollection.mintbatch.md)

## NFTCollection.mintBatch() method

Mint Many NFTs to the connected wallet

**Signature:**

```typescript
mintBatch(metadatas: NFTMetadataInput[]): Promise<TransactionResultWithId<NFTMetadataOwner>[]>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  metadatas | [NFTMetadataInput](./sdk.nftmetadatainput.md)\[\] |  |

**Returns:**

Promise&lt;[TransactionResultWithId](./sdk.transactionresultwithid.md)&lt;[NFTMetadataOwner](./sdk.nftmetadataowner.md)&gt;\[\]&gt;

## Remarks

See [NFTCollection.mintBatchTo()](./sdk.nftcollection.mintbatchto.md)