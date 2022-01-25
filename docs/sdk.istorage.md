<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@3rdweb/sdk](./sdk.md) &gt; [IStorage](./sdk.istorage.md)

## IStorage interface

<b>Signature:</b>

```typescript
export interface IStorage 
```

## Methods

|  Method | Description |
|  --- | --- |
|  [get(hash)](./sdk.istorage.get.md) | Fetches data from storage. This method does not handle any deserialization. Its up to the caller to determine what the type of the data is. |
|  [getUploadToken(contractAddress)](./sdk.istorage.getuploadtoken.md) | Fetches a one-time-use upload token that can used to upload a file to storage. |
|  [resolveFullUrl(hash)](./sdk.istorage.resolvefullurl.md) | Resolves the full URL of a file for a given gateway.<!-- -->For example, if the hash of a file is <code>ipfs://bafkreib3u2u6ir2fsl5nkuwixfsb3l4xehri3psjv5yga4inuzsjunk2sy</code>, then the URL will be: "https://cloudflare-ipfs.com/ipfs/bafkreibnwjhx5s3r2rggdoy3hw7lr7wmgy4bas35oky3ed6eijklk2oyvq" if the gateway is <code>cloudflare-ipfs.com</code>. |
|  [upload(data, contractAddress, signerAddress)](./sdk.istorage.upload.md) | Uploads a file to the storage. |
|  [uploadBatch(files, contractAddress, uploadFileStartNumber)](./sdk.istorage.uploadbatch.md) | Uploads a folder to storage. |
|  [uploadMetadata(metadata, contractAddress, signerAddress)](./sdk.istorage.uploadmetadata.md) | Uploads metadata to IPFS |
|  [uploadMetadataBatch(metadatas, contractAddress, fileStartNumber)](./sdk.istorage.uploadmetadatabatch.md) | Uploads metadata to IPFS |
