<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@thirdweb-dev/sdk](./sdk.md) &gt; [IpfsStorage](./sdk.ipfsstorage.md) &gt; [uploadMetadataBatch](./sdk.ipfsstorage.uploadmetadatabatch.md)

## IpfsStorage.uploadMetadataBatch() method

Uploads JSON metadata to IPFS

<b>Signature:</b>

```typescript
uploadMetadataBatch(metadatas: JsonObject[], fileStartNumber?: number, contractAddress?: string, signerAddress?: string): Promise<{
        baseUri: string;
        metadataUris: string[];
    }>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  metadatas | [JsonObject](./sdk.jsonobject.md)<!-- -->\[\] |  |
|  fileStartNumber | number | Optional. The first file file name begins with. |
|  contractAddress | string | Optional. The contract address the data belongs to. |
|  signerAddress | string | Optional. The address of the signer. |

<b>Returns:</b>

Promise&lt;{ baseUri: string; metadataUris: string\[\]; }&gt;
