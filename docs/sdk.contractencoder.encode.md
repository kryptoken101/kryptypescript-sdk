<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@thirdweb-dev/sdk](./sdk.md) &gt; [ContractEncoder](./sdk.contractencoder.md) &gt; [encode](./sdk.contractencoder.encode.md)

## ContractEncoder.encode() method

Encodes the given contract function with argument

<b>Signature:</b>

```typescript
encode(fn: keyof TContract["functions"], args: Parameters<TContract["functions"][typeof fn]>): string;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  fn | keyof TContract\["functions"\] |  |
|  args | Parameters&lt;TContract\["functions"\]\[typeof fn\]&gt; |  |

<b>Returns:</b>

string

the encoded data
