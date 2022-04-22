/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export declare namespace IMarketplace {
  export type ListingStruct = {
    listingId: BigNumberish;
    tokenOwner: string;
    assetContract: string;
    tokenId: BigNumberish;
    startTime: BigNumberish;
    endTime: BigNumberish;
    quantity: BigNumberish;
    currency: string;
    reservePricePerToken: BigNumberish;
    buyoutPricePerToken: BigNumberish;
    tokenType: BigNumberish;
    listingType: BigNumberish;
  };

  export type ListingStructOutput = [
    BigNumber,
    string,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    BigNumber,
    BigNumber,
    number,
    number
  ] & {
    listingId: BigNumber;
    tokenOwner: string;
    assetContract: string;
    tokenId: BigNumber;
    startTime: BigNumber;
    endTime: BigNumber;
    quantity: BigNumber;
    currency: string;
    reservePricePerToken: BigNumber;
    buyoutPricePerToken: BigNumber;
    tokenType: number;
    listingType: number;
  };

  export type ListingParametersStruct = {
    assetContract: string;
    tokenId: BigNumberish;
    startTime: BigNumberish;
    secondsUntilEndTime: BigNumberish;
    quantityToList: BigNumberish;
    currencyToAccept: string;
    reservePricePerToken: BigNumberish;
    buyoutPricePerToken: BigNumberish;
    listingType: BigNumberish;
  };

  export type ListingParametersStructOutput = [
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    BigNumber,
    BigNumber,
    number
  ] & {
    assetContract: string;
    tokenId: BigNumber;
    startTime: BigNumber;
    secondsUntilEndTime: BigNumber;
    quantityToList: BigNumber;
    currencyToAccept: string;
    reservePricePerToken: BigNumber;
    buyoutPricePerToken: BigNumber;
    listingType: number;
  };
}

export interface IMarketplaceInterface extends utils.Interface {
  functions: {
    "acceptOffer(uint256,address,address,uint256)": FunctionFragment;
    "buy(uint256,address,uint256,address,uint256)": FunctionFragment;
    "cancelDirectListing(uint256)": FunctionFragment;
    "closeAuction(uint256,address)": FunctionFragment;
    "contractType()": FunctionFragment;
    "contractURI()": FunctionFragment;
    "contractVersion()": FunctionFragment;
    "createListing((address,uint256,uint256,uint256,uint256,address,uint256,uint256,uint8))": FunctionFragment;
    "getPlatformFeeInfo()": FunctionFragment;
    "offer(uint256,uint256,address,uint256,uint256)": FunctionFragment;
    "setContractURI(string)": FunctionFragment;
    "setPlatformFeeInfo(address,uint256)": FunctionFragment;
    "updateListing(uint256,uint256,uint256,uint256,address,uint256,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "acceptOffer"
      | "buy"
      | "cancelDirectListing"
      | "closeAuction"
      | "contractType"
      | "contractURI"
      | "contractVersion"
      | "createListing"
      | "getPlatformFeeInfo"
      | "offer"
      | "setContractURI"
      | "setPlatformFeeInfo"
      | "updateListing"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "acceptOffer",
    values: [BigNumberish, string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "buy",
    values: [BigNumberish, string, BigNumberish, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "cancelDirectListing",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "closeAuction",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "contractType",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "contractURI",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "contractVersion",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "createListing",
    values: [IMarketplace.ListingParametersStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "getPlatformFeeInfo",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "offer",
    values: [BigNumberish, BigNumberish, string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setContractURI",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setPlatformFeeInfo",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "updateListing",
    values: [
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      string,
      BigNumberish,
      BigNumberish
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "acceptOffer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "buy", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "cancelDirectListing",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "closeAuction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "contractType",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "contractURI",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "contractVersion",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createListing",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPlatformFeeInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "offer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setContractURI",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPlatformFeeInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateListing",
    data: BytesLike
  ): Result;

  events: {
    "AuctionBuffersUpdated(uint256,uint256)": EventFragment;
    "AuctionClosed(uint256,address,bool,address,address)": EventFragment;
    "ListingAdded(uint256,address,address,tuple)": EventFragment;
    "ListingRemoved(uint256,address)": EventFragment;
    "ListingUpdated(uint256,address)": EventFragment;
    "NewOffer(uint256,address,uint8,uint256,uint256,address)": EventFragment;
    "NewSale(uint256,address,address,address,uint256,uint256)": EventFragment;
    "PlatformFeeInfoUpdated(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AuctionBuffersUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AuctionClosed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ListingAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ListingRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ListingUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewOffer"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewSale"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PlatformFeeInfoUpdated"): EventFragment;
}

export interface AuctionBuffersUpdatedEventObject {
  timeBuffer: BigNumber;
  bidBufferBps: BigNumber;
}
export type AuctionBuffersUpdatedEvent = TypedEvent<
  [BigNumber, BigNumber],
  AuctionBuffersUpdatedEventObject
>;

export type AuctionBuffersUpdatedEventFilter =
  TypedEventFilter<AuctionBuffersUpdatedEvent>;

export interface AuctionClosedEventObject {
  listingId: BigNumber;
  closer: string;
  cancelled: boolean;
  auctionCreator: string;
  winningBidder: string;
}
export type AuctionClosedEvent = TypedEvent<
  [BigNumber, string, boolean, string, string],
  AuctionClosedEventObject
>;

export type AuctionClosedEventFilter = TypedEventFilter<AuctionClosedEvent>;

export interface ListingAddedEventObject {
  listingId: BigNumber;
  assetContract: string;
  lister: string;
  listing: IMarketplace.ListingStructOutput;
}
export type ListingAddedEvent = TypedEvent<
  [BigNumber, string, string, IMarketplace.ListingStructOutput],
  ListingAddedEventObject
>;

export type ListingAddedEventFilter = TypedEventFilter<ListingAddedEvent>;

export interface ListingRemovedEventObject {
  listingId: BigNumber;
  listingCreator: string;
}
export type ListingRemovedEvent = TypedEvent<
  [BigNumber, string],
  ListingRemovedEventObject
>;

export type ListingRemovedEventFilter = TypedEventFilter<ListingRemovedEvent>;

export interface ListingUpdatedEventObject {
  listingId: BigNumber;
  listingCreator: string;
}
export type ListingUpdatedEvent = TypedEvent<
  [BigNumber, string],
  ListingUpdatedEventObject
>;

export type ListingUpdatedEventFilter = TypedEventFilter<ListingUpdatedEvent>;

export interface NewOfferEventObject {
  listingId: BigNumber;
  offeror: string;
  listingType: number;
  quantityWanted: BigNumber;
  totalOfferAmount: BigNumber;
  currency: string;
}
export type NewOfferEvent = TypedEvent<
  [BigNumber, string, number, BigNumber, BigNumber, string],
  NewOfferEventObject
>;

export type NewOfferEventFilter = TypedEventFilter<NewOfferEvent>;

export interface NewSaleEventObject {
  listingId: BigNumber;
  assetContract: string;
  lister: string;
  buyer: string;
  quantityBought: BigNumber;
  totalPricePaid: BigNumber;
}
export type NewSaleEvent = TypedEvent<
  [BigNumber, string, string, string, BigNumber, BigNumber],
  NewSaleEventObject
>;

export type NewSaleEventFilter = TypedEventFilter<NewSaleEvent>;

export interface PlatformFeeInfoUpdatedEventObject {
  platformFeeRecipient: string;
  platformFeeBps: BigNumber;
}
export type PlatformFeeInfoUpdatedEvent = TypedEvent<
  [string, BigNumber],
  PlatformFeeInfoUpdatedEventObject
>;

export type PlatformFeeInfoUpdatedEventFilter =
  TypedEventFilter<PlatformFeeInfoUpdatedEvent>;

export interface IMarketplace extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IMarketplaceInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    acceptOffer(
      _listingId: BigNumberish,
      _offeror: string,
      _currency: string,
      _totalPrice: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    buy(
      _listingId: BigNumberish,
      _buyFor: string,
      _quantity: BigNumberish,
      _currency: string,
      _totalPrice: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    cancelDirectListing(
      _listingId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    closeAuction(
      _listingId: BigNumberish,
      _closeFor: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    contractType(overrides?: CallOverrides): Promise<[string]>;

    contractURI(overrides?: CallOverrides): Promise<[string]>;

    contractVersion(overrides?: CallOverrides): Promise<[number]>;

    createListing(
      _params: IMarketplace.ListingParametersStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getPlatformFeeInfo(overrides?: CallOverrides): Promise<[string, number]>;

    offer(
      _listingId: BigNumberish,
      _quantityWanted: BigNumberish,
      _currency: string,
      _pricePerToken: BigNumberish,
      _expirationTimestamp: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setContractURI(
      _uri: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setPlatformFeeInfo(
      _platformFeeRecipient: string,
      _platformFeeBps: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateListing(
      _listingId: BigNumberish,
      _quantityToList: BigNumberish,
      _reservePricePerToken: BigNumberish,
      _buyoutPricePerToken: BigNumberish,
      _currencyToAccept: string,
      _startTime: BigNumberish,
      _secondsUntilEndTime: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  acceptOffer(
    _listingId: BigNumberish,
    _offeror: string,
    _currency: string,
    _totalPrice: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  buy(
    _listingId: BigNumberish,
    _buyFor: string,
    _quantity: BigNumberish,
    _currency: string,
    _totalPrice: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  cancelDirectListing(
    _listingId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  closeAuction(
    _listingId: BigNumberish,
    _closeFor: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  contractType(overrides?: CallOverrides): Promise<string>;

  contractURI(overrides?: CallOverrides): Promise<string>;

  contractVersion(overrides?: CallOverrides): Promise<number>;

  createListing(
    _params: IMarketplace.ListingParametersStruct,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getPlatformFeeInfo(overrides?: CallOverrides): Promise<[string, number]>;

  offer(
    _listingId: BigNumberish,
    _quantityWanted: BigNumberish,
    _currency: string,
    _pricePerToken: BigNumberish,
    _expirationTimestamp: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setContractURI(
    _uri: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setPlatformFeeInfo(
    _platformFeeRecipient: string,
    _platformFeeBps: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateListing(
    _listingId: BigNumberish,
    _quantityToList: BigNumberish,
    _reservePricePerToken: BigNumberish,
    _buyoutPricePerToken: BigNumberish,
    _currencyToAccept: string,
    _startTime: BigNumberish,
    _secondsUntilEndTime: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    acceptOffer(
      _listingId: BigNumberish,
      _offeror: string,
      _currency: string,
      _totalPrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    buy(
      _listingId: BigNumberish,
      _buyFor: string,
      _quantity: BigNumberish,
      _currency: string,
      _totalPrice: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    cancelDirectListing(
      _listingId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    closeAuction(
      _listingId: BigNumberish,
      _closeFor: string,
      overrides?: CallOverrides
    ): Promise<void>;

    contractType(overrides?: CallOverrides): Promise<string>;

    contractURI(overrides?: CallOverrides): Promise<string>;

    contractVersion(overrides?: CallOverrides): Promise<number>;

    createListing(
      _params: IMarketplace.ListingParametersStruct,
      overrides?: CallOverrides
    ): Promise<void>;

    getPlatformFeeInfo(overrides?: CallOverrides): Promise<[string, number]>;

    offer(
      _listingId: BigNumberish,
      _quantityWanted: BigNumberish,
      _currency: string,
      _pricePerToken: BigNumberish,
      _expirationTimestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setContractURI(_uri: string, overrides?: CallOverrides): Promise<void>;

    setPlatformFeeInfo(
      _platformFeeRecipient: string,
      _platformFeeBps: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    updateListing(
      _listingId: BigNumberish,
      _quantityToList: BigNumberish,
      _reservePricePerToken: BigNumberish,
      _buyoutPricePerToken: BigNumberish,
      _currencyToAccept: string,
      _startTime: BigNumberish,
      _secondsUntilEndTime: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AuctionBuffersUpdated(uint256,uint256)"(
      timeBuffer?: null,
      bidBufferBps?: null
    ): AuctionBuffersUpdatedEventFilter;
    AuctionBuffersUpdated(
      timeBuffer?: null,
      bidBufferBps?: null
    ): AuctionBuffersUpdatedEventFilter;

    "AuctionClosed(uint256,address,bool,address,address)"(
      listingId?: BigNumberish | null,
      closer?: string | null,
      cancelled?: boolean | null,
      auctionCreator?: null,
      winningBidder?: null
    ): AuctionClosedEventFilter;
    AuctionClosed(
      listingId?: BigNumberish | null,
      closer?: string | null,
      cancelled?: boolean | null,
      auctionCreator?: null,
      winningBidder?: null
    ): AuctionClosedEventFilter;

    "ListingAdded(uint256,address,address,tuple)"(
      listingId?: BigNumberish | null,
      assetContract?: string | null,
      lister?: string | null,
      listing?: null
    ): ListingAddedEventFilter;
    ListingAdded(
      listingId?: BigNumberish | null,
      assetContract?: string | null,
      lister?: string | null,
      listing?: null
    ): ListingAddedEventFilter;

    "ListingRemoved(uint256,address)"(
      listingId?: BigNumberish | null,
      listingCreator?: string | null
    ): ListingRemovedEventFilter;
    ListingRemoved(
      listingId?: BigNumberish | null,
      listingCreator?: string | null
    ): ListingRemovedEventFilter;

    "ListingUpdated(uint256,address)"(
      listingId?: BigNumberish | null,
      listingCreator?: string | null
    ): ListingUpdatedEventFilter;
    ListingUpdated(
      listingId?: BigNumberish | null,
      listingCreator?: string | null
    ): ListingUpdatedEventFilter;

    "NewOffer(uint256,address,uint8,uint256,uint256,address)"(
      listingId?: BigNumberish | null,
      offeror?: string | null,
      listingType?: BigNumberish | null,
      quantityWanted?: null,
      totalOfferAmount?: null,
      currency?: null
    ): NewOfferEventFilter;
    NewOffer(
      listingId?: BigNumberish | null,
      offeror?: string | null,
      listingType?: BigNumberish | null,
      quantityWanted?: null,
      totalOfferAmount?: null,
      currency?: null
    ): NewOfferEventFilter;

    "NewSale(uint256,address,address,address,uint256,uint256)"(
      listingId?: BigNumberish | null,
      assetContract?: string | null,
      lister?: string | null,
      buyer?: null,
      quantityBought?: null,
      totalPricePaid?: null
    ): NewSaleEventFilter;
    NewSale(
      listingId?: BigNumberish | null,
      assetContract?: string | null,
      lister?: string | null,
      buyer?: null,
      quantityBought?: null,
      totalPricePaid?: null
    ): NewSaleEventFilter;

    "PlatformFeeInfoUpdated(address,uint256)"(
      platformFeeRecipient?: null,
      platformFeeBps?: null
    ): PlatformFeeInfoUpdatedEventFilter;
    PlatformFeeInfoUpdated(
      platformFeeRecipient?: null,
      platformFeeBps?: null
    ): PlatformFeeInfoUpdatedEventFilter;
  };

  estimateGas: {
    acceptOffer(
      _listingId: BigNumberish,
      _offeror: string,
      _currency: string,
      _totalPrice: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    buy(
      _listingId: BigNumberish,
      _buyFor: string,
      _quantity: BigNumberish,
      _currency: string,
      _totalPrice: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    cancelDirectListing(
      _listingId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    closeAuction(
      _listingId: BigNumberish,
      _closeFor: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    contractType(overrides?: CallOverrides): Promise<BigNumber>;

    contractURI(overrides?: CallOverrides): Promise<BigNumber>;

    contractVersion(overrides?: CallOverrides): Promise<BigNumber>;

    createListing(
      _params: IMarketplace.ListingParametersStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getPlatformFeeInfo(overrides?: CallOverrides): Promise<BigNumber>;

    offer(
      _listingId: BigNumberish,
      _quantityWanted: BigNumberish,
      _currency: string,
      _pricePerToken: BigNumberish,
      _expirationTimestamp: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setContractURI(
      _uri: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setPlatformFeeInfo(
      _platformFeeRecipient: string,
      _platformFeeBps: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateListing(
      _listingId: BigNumberish,
      _quantityToList: BigNumberish,
      _reservePricePerToken: BigNumberish,
      _buyoutPricePerToken: BigNumberish,
      _currencyToAccept: string,
      _startTime: BigNumberish,
      _secondsUntilEndTime: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    acceptOffer(
      _listingId: BigNumberish,
      _offeror: string,
      _currency: string,
      _totalPrice: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    buy(
      _listingId: BigNumberish,
      _buyFor: string,
      _quantity: BigNumberish,
      _currency: string,
      _totalPrice: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    cancelDirectListing(
      _listingId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    closeAuction(
      _listingId: BigNumberish,
      _closeFor: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    contractType(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    contractURI(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    contractVersion(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    createListing(
      _params: IMarketplace.ListingParametersStruct,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getPlatformFeeInfo(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    offer(
      _listingId: BigNumberish,
      _quantityWanted: BigNumberish,
      _currency: string,
      _pricePerToken: BigNumberish,
      _expirationTimestamp: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setContractURI(
      _uri: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setPlatformFeeInfo(
      _platformFeeRecipient: string,
      _platformFeeBps: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateListing(
      _listingId: BigNumberish,
      _quantityToList: BigNumberish,
      _reservePricePerToken: BigNumberish,
      _buyoutPricePerToken: BigNumberish,
      _currencyToAccept: string,
      _startTime: BigNumberish,
      _secondsUntilEndTime: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
