<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@thirdweb-dev/sdk](./sdk.md) &gt; [Erc721Supply](./sdk.erc721supply.md)

## Erc721Supply class

List ERC721 NFTs

<b>Signature:</b>

```typescript
export declare class Erc721Supply implements DetectableFeature 
```
<b>Implements:</b> DetectableFeature

## Remarks

Easily list all the NFTs in a ERC721 contract.

## Example


```javascript
const contract = await sdk.getContract("{{contract_address}}");
const nfts = await contract.nft.query.all();
```

## Constructors

|  Constructor | Modifiers | Description |
|  --- | --- | --- |
|  [(constructor)(erc721, contractWrapper)](./sdk.erc721supply._constructor_.md) |  | Constructs a new instance of the <code>Erc721Supply</code> class |

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [featureName](./sdk.erc721supply.featurename.md) |  | "ERC721Supply" |  |
|  [owned](./sdk.erc721supply.owned.md) |  | [Erc721Enumerable](./sdk.erc721enumerable.md) \| undefined |  |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [all(queryParams)](./sdk.erc721supply.all.md) |  | Get All Minted NFTs |
|  [totalCirculatingSupply()](./sdk.erc721supply.totalcirculatingsupply.md) |  | Get the number of NFTs of this contract currently owned by end users |
