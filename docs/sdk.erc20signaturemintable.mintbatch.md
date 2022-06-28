<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@thirdweb-dev/sdk](./sdk.md) &gt; [Erc20SignatureMintable](./sdk.erc20signaturemintable.md) &gt; [mintBatch](./sdk.erc20signaturemintable.mintbatch.md)

## Erc20SignatureMintable.mintBatch() method

Mint any number of generated tokens signatures at once

<b>Signature:</b>

```typescript
mintBatch(signedPayloads: SignedPayload20[]): Promise<TransactionResult>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  signedPayloads | [SignedPayload20](./sdk.signedpayload20.md)<!-- -->\[\] | the array of signed payloads to mint |

<b>Returns:</b>

Promise&lt;[TransactionResult](./sdk.transactionresult.md)<!-- -->&gt;

## Remarks

Mint multiple token signatures in one transaction. Note that this is only possible for free mints (cannot batch mints with a price attached to it for security reasons)
