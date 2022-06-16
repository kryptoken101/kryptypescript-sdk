<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@thirdweb-dev/sdk](./sdk.md) &gt; [WalletAuthenticator](./sdk.walletauthenticator.md) &gt; [authenticate](./sdk.walletauthenticator.authenticate.md)

## WalletAuthenticator.authenticate() method

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.
> 

Authenticate With Token

<b>Signature:</b>

```typescript
authenticate(domain: string, token: string): Promise<string>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  domain | string | The domain of the server-side application doing authentication |
|  token | string | The authentication token being used |

<b>Returns:</b>

Promise&lt;string&gt;

The address of the authenticated wallet

## Remarks

Server-side function that authenticates the provided JWT token. This function verifies that the provided authentication token is valid and returns the address of the authenticated wallet.

## Example


```javascript
const domain = "thirdweb.com";
const loginPayload = await sdk.auth.login(domain);
const token = await sdk.auth.generate(domain, loginPayload);

// Authenticate the token and get the address of authenticating users wallet
const address = sdk.auth.authenticate(domain, token);
```
