import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { Edition } from "../src/index";
import { sdk, signers } from "./before.test";

import { assert, expect } from "chai";
import { AddressZero } from "@ethersproject/constants";
import { ethers } from "ethers";

global.fetch = require("node-fetch");

describe("Bundle Contract (aka Collection Contract)", async () => {
  let bundleContract: Edition;
  // let nftContract: NFTContract;
  // let currencyContract: CurrencyContract;

  let adminWallet: SignerWithAddress,
    samWallet: SignerWithAddress,
    bobWallet: SignerWithAddress;

  before(() => {
    [adminWallet, samWallet, bobWallet] = signers;
  });

  beforeEach(async () => {
    sdk.updateSignerOrProvider(adminWallet);
    const address = await sdk.deployer.deployEdition({
      name: `Testing bundle from SDK`,
      description: "Test contract from tests",
      image:
        "https://pbs.twimg.com/profile_images/1433508973215367176/XBCfBn3g_400x400.jpg",
      primary_sale_recipient: adminWallet.address,
      seller_fee_basis_points: 1000,
      fee_recipient: AddressZero,
      platform_fee_basis_points: 10,
      platform_fee_recipient: AddressZero,
    });
    bundleContract = sdk.getEdition(address);
  });

  it("gas cost", async () => {
    const cost = await bundleContract.estimator.gasCostOf("mintTo", [
      adminWallet.address,
      ethers.constants.MaxUint256,
      "mock://12398172398172389/0",
      1,
    ]);
    expect(parseFloat(cost)).gt(0);
  });

  it("should return all owned collection tokens", async () => {
    await bundleContract.mint({
      metadata: {
        name: "Bundle 1",
        description: "Bundle 1",
        image: "fake://myownfakeipfs",
      },
      supply: 100,
    });
    const nfts = await bundleContract.getOwned(adminWallet.address);
    expect(nfts).to.be.an("array").length(1);
    expect(nfts[0].metadata.image).to.be.equal("fake://myownfakeipfs");
    expect(nfts[0].owner).to.be.equal(adminWallet.address);
    expect(nfts[0].quantityOwned.toNumber()).to.be.equal(100);
    expect(nfts[0].supply.toNumber()).to.be.equal(100);

    const bobsNfts = await bundleContract.getOwned(bobWallet.address);
    expect(bobsNfts)
      .to.be.an("array")
      .length(0, "Bob should not have any nfts");

    await bundleContract.transfer(bobWallet.address, 0, 20);
    const adminNft = await bundleContract.getOwned(adminWallet.address);
    expect(adminNft[0].quantityOwned.toNumber()).to.be.equal(80);
    const bobsNftsAfterTransfer = await bundleContract.getOwned(
      bobWallet.address,
    );
    expect(bobsNftsAfterTransfer[0].quantityOwned.toNumber()).to.be.equal(20);
  });

  // TODO: This test should move to the royalty suite
  it("updates the bps in both the metadata and on-chain", async () => {
    const currentBps = (await bundleContract.royalty.getDefaultRoyaltyInfo())
      .seller_fee_basis_points;
    assert.equal(currentBps, 1000);
    const cMetadata = await bundleContract.metadata.get();
    assert.equal(cMetadata.seller_fee_basis_points, 1000);

    const testBPS = 100;
    await bundleContract.royalty.setDefaultRoyaltyInfo({
      seller_fee_basis_points: testBPS,
    });
    const newMetadata = await bundleContract.metadata.get();

    assert.equal(
      newMetadata.seller_fee_basis_points,
      testBPS,
      "Fetching the BPS from the metadata should return 100",
    );
    assert.equal(
      (await bundleContract.royalty.getDefaultRoyaltyInfo())
        .seller_fee_basis_points,
      testBPS,
      "Fetching the BPS with the tx should return 100",
    );
  });
  it("should correctly upload nft metadata", async () => {
    await bundleContract.mintBatch([
      {
        metadata: {
          name: "Test0",
          image: "ipfs://myownipfs0",
        },
        supply: 5,
      },
      {
        metadata: {
          name: "Test1",
          image: "ipfs://myownipfs1",
        },
        supply: 5,
      },
    ]);
    const nfts = await bundleContract.getAll();
    expect(nfts).to.be.an("array").length(2);
    let i = 0;
    nfts.forEach((nft) => {
      expect(nft.metadata.name).to.be.equal(`Test${i}`);
      expect(nft.metadata.image).to.be.equal(`ipfs://myownipfs${i}`);
      i++;
    });
  });
});