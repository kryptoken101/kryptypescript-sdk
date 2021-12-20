<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@3rdweb/sdk](./sdk.md) &gt; [VoteModule](./sdk.votemodule.md) &gt; [hasVoted](./sdk.votemodule.hasvoted.md)

## VoteModule.hasVoted() method

Checks if an account has voted on a proposal

<b>Signature:</b>

```typescript
hasVoted(proposalId: string, account?: string): Promise<boolean>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  proposalId | string | The unique identifier of a proposal . |
|  account | string | (optional) wallet account address. Defaults to connected signer. |

<b>Returns:</b>

Promise&lt;boolean&gt;

- True if the account has already voted on the proposal.
