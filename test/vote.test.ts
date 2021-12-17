import { $enum } from "ts-enum-util";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { assert } from "chai";
import { ethers } from "ethers";
import {
  CurrencyModule,
  DEFAULT_BLOCK_TIMES_FALLBACK,
  VoteModule,
} from "../src";
import { appModule, sdk, signers } from "./before.test";

global.fetch = require("node-fetch");

describe("Vote Module", async () => {
  let voteModule: VoteModule;
  let currencyModule: CurrencyModule;

  const voteStartWaitTimeInSeconds = 60 * 60;
  const voteWaitTimeInSeconds = 60 * 60;

  let adminWallet: SignerWithAddress,
    samWallet: SignerWithAddress,
    bobWallet: SignerWithAddress;

  before(() => {
    [adminWallet, samWallet, bobWallet] = signers;
  });

  beforeEach(async () => {
    sdk.setProviderOrSigner(adminWallet);

    currencyModule = await appModule.deployCurrencyModule({
      name: "DAOToken #1",
      symbol: "DAO1",
    });

    voteModule = await appModule.deployVoteModule({
      name: "DAO #1",
      votingTokenAddress: currencyModule.address,

      proposalStartWaitTimeInSeconds: voteStartWaitTimeInSeconds,
      proposalVotingTimeInSeconds: voteWaitTimeInSeconds,

      votingQuorumFraction: 1,

      minimumNumberOfTokensNeededToPropose: ethers.utils
        .parseUnits("1", 18)
        .toString(),
    });

    // step 1: mint 1000 governance tokens to my wallet
    await currencyModule.mintTo(
      samWallet.address,
      ethers.utils.parseUnits("100", 18),
    );

    // step 35: later grant role to the vote contract, so the contract can mint more tokens
    // should be separate function since you need gov token to deploy vote module
    await currencyModule.grantRole("minter", voteModule.address);

    await sdk.setProviderOrSigner(samWallet);
    // step 2: delegate the governance token to someone for voting. in this case, myself.
    await currencyModule.contract.delegate(samWallet.address);
  });

  it("should permit a proposal to be passed if it receives the right votes", async () => {
    await sdk.setProviderOrSigner(samWallet);
    const proposalId = await voteModule.propose("Mint Tokens", [
      {
        toAddress: currencyModule.address,
        nativeTokenValue: 0,
        transactionData: currencyModule.contract.interface.encodeFunctionData(
          "mint",
          [bobWallet.address, ethers.utils.parseUnits("1", 18)],
        ),
      },
    ]);

    assert.equal(
      proposalId.toString(),
      "104170210022127651775423883212592560005122769612892251008246414347470807652072",
    );

    await voteModule.vote(
      proposalId.toString(),

      // 0 = Against, 1 = For, 2 = Abstain
      1,

      // optional reason, be mindful more character count = more gas.
      "Reason + Gas :)",
    );

    // Step 3: Execute the proposal if it is expired and passed
    await voteModule.execute(proposalId.toString());

    const balanceOfBobsWallet = await currencyModule.balanceOf(
      bobWallet.address,
    );

    assert.equal(balanceOfBobsWallet.displayValue, "1.0");
  });

  it.skip("", async () => {
    const blockTimes = [];
    const provider = ethers.getDefaultProvider();

    const latest = await provider.getBlock("latest");
    for (let i = 0; i <= 10; i++) {
      const current = await provider.getBlock(latest.number - i);
      const previous = await provider.getBlock(latest.number - i - 1);
      console.log(current.timestamp, previous.timestamp);
      console.log(current.timestamp - previous.timestamp);

      const diff = current.timestamp - previous.timestamp;
      blockTimes.push(diff);
    }

    const sum = blockTimes.reduce((result, a) => result + a, 0);
    console.log(sum / blockTimes.length);
  });

  it("should permit a proposal to be passed if it receives the right votes", async () => {
    await sdk.setProviderOrSigner(samWallet);
    const description = "Mint Tokens";
    const proposalId = await voteModule.propose(description, [
      {
        toAddress: currencyModule.address,
        nativeTokenValue: 0,
        transactionData: currencyModule.contract.interface.encodeFunctionData(
          "mint",
          [bobWallet.address, ethers.utils.parseUnits("1", 18)],
        ),
      },
    ]);

    const proposal = await voteModule.get(proposalId.toString());
    assert.equal(proposal.description, description);
  });
});