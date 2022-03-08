---
slug: /sdk.edition.royalty
title: Edition.royalty property
hide_title: true
---
<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[@thirdweb-dev/sdk](./sdk.md) &gt; [Edition](./sdk.edition.md) &gt; [royalty](./sdk.edition.royalty.md)

## Edition.royalty property

Configure royalties

**Signature:**

```typescript
royalty: ContractRoyalty<TokenERC1155, typeof Edition.schema>;
```

## Remarks

Set your own royalties for the entire contract or per token

## Example


```javascript
// royalties on the whole contract
contract.royalty.setDefaultRoyaltyInfo({
  seller_fee_basis_points: 100, // 1%
  fee_recipient: "0x..."
});
// override royalty for a particular token
contract.royalty.setTokenRoyaltyInfo(tokenId, {
  seller_fee_basis_points: 500, // 5%
  fee_recipient: "0x..."
});
```