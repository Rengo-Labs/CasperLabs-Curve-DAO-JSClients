import { config } from "dotenv";
config();
import { LIQUIDITYGAUGEV3Client ,utils} from "../src";
import { sleep, getDeploy } from "./utils";

import {
  CLValueBuilder,
  Keys,
  CLPublicKey,
  CLAccountHash,
  CLPublicKeyType,
  Contracts,
  CLByteArray
} from "casper-js-sdk";

import * as fs from 'fs';

const {
  NODE_ADDRESS,
  EVENT_STREAM_ADDRESS,
  CHAIN_NAME,
  
  LIQUIDITY_GAUGE_V3_MASTER_KEY_PAIR_PATH,
  LIQUIDITY_GAUGE_V3_PAYMENT_AMOUNT,
  LIQUIDITY_GAUGE_V3_ADDRESS,
  LIQUIDITY_GAUGE_V3_VALUE,
  LIQUIDITYGAUGEV3_CONTRACT_HASH,
  LIQUIDITY_GAUGE_V3_TOKEN,
  LIQUIDITY_GAUGE_V3_RECEIVER,
  LIQUIDITY_GAUGE_V3_TO,
  LIQUIDITY_GAUGE_V3_FROM,
  LIQUIDITY_GAUGE_V3_SPENDER,
  LIQUIDITY_GAUGE_V3_AMOUNT,
  LIQUIDITY_GAUGE_V3_REWARD_CONTRACT,
  LIQUIDITY_GAUGE_V3_CLAIM_SIG,
} = process.env;


const KEYS = Keys.Ed25519.parseKeyFiles(
  `${LIQUIDITY_GAUGE_V3_MASTER_KEY_PAIR_PATH}/public_key.pem`,
  `${LIQUIDITY_GAUGE_V3_MASTER_KEY_PAIR_PATH}/secret_key.pem`
);

// const ROUTERKEYS = Keys.Ed25519.parseKeyFiles(
//   `${MASTER_KEY_PAIR_PATH}/public_key.pem`,
//   `${MASTER_KEY_PAIR_PATH}/secret_key.pem`
// );

const liquidityGaugeV3 = new LIQUIDITYGAUGEV3Client(
  NODE_ADDRESS!,
  CHAIN_NAME!,
  EVENT_STREAM_ADDRESS!
);

export class LiquidityGaugeV3Functions {
  contractHash: string;
  liquidityGaugeV3: LIQUIDITYGAUGEV3Client;
  constructor() {
    let _contractHash = fs.readFileSync('contractHash','utf8');
    this.contractHash = _contractHash.split("-").pop()!;
    this.liquidityGaugeV3 = new LIQUIDITYGAUGEV3Client(
      NODE_ADDRESS!,
      CHAIN_NAME!,
      EVENT_STREAM_ADDRESS!
    );
  }

  decimals =async () => {
    await this.liquidityGaugeV3.setContractHash(this.contractHash!);
    const decimals = await this.liquidityGaugeV3.decimals();
    console.log(`... Contract decimals: ${decimals}`);
  }

  integrateCheckpoint =async () => {
    await this.liquidityGaugeV3.setContractHash(this.contractHash!);
    const integrateCheckpoint = await this.liquidityGaugeV3.integrateCheckpoint();
    console.log(`... Contract integrateCheckpoint: ${integrateCheckpoint}`);
  }

  claimedReward =async (addr:string, token:string) => {
    await this.liquidityGaugeV3.setContractHash(this.contractHash!);
    const claimedReward = await this.liquidityGaugeV3.claimedReward(addr!, token!);
    console.log(`... Contract claimedReward: ${claimedReward}`);
  }

  setRewardsReceiver=async (receiver:string) => {
    await this.liquidityGaugeV3.setContractHash(this.contractHash!);
    const setRewardsReceiverDeployHash = await this.liquidityGaugeV3.setRewardsReceiver(
      KEYS!,
      receiver!,
      LIQUIDITY_GAUGE_V3_PAYMENT_AMOUNT!
     );
     console.log("... setRewardsReceiver deploy hash: ", setRewardsReceiverDeployHash);
    
     await getDeploy(NODE_ADDRESS!, setRewardsReceiverDeployHash);
     console.log("... setRewardsReceiver function called successfully.");
  }

  kick =async () => {
    await this.liquidityGaugeV3.setContractHash(this.contractHash!);
    const kickDeployHash = await this.liquidityGaugeV3.kick(
      KEYS!,
      KEYS.publicKey,
      LIQUIDITY_GAUGE_V3_PAYMENT_AMOUNT!
     );
     console.log("... kick deploy hash: ", kickDeployHash);
    
     await getDeploy(NODE_ADDRESS!, kickDeployHash);
     console.log("... kick function called successfully.");
  }

  deposit =async (value:string) => {
    await this.liquidityGaugeV3.setContractHash(this.contractHash!);
    const depositDeployHash = await this.liquidityGaugeV3.deposit(
      KEYS!,
      value!,
      KEYS.publicKey,
      true,
      LIQUIDITY_GAUGE_V3_PAYMENT_AMOUNT!
     );
     console.log("... deposit deploy hash: ", depositDeployHash);
    
     await getDeploy(NODE_ADDRESS!, depositDeployHash);
     console.log("... deposit function called successfully.");
  }

  withdraw =async (value:string) => {
    await this.liquidityGaugeV3.setContractHash(this.contractHash!);
    const withdrawDeployHash = await this.liquidityGaugeV3.withdraw(
      KEYS!,
      value!,
      true,
      LIQUIDITY_GAUGE_V3_PAYMENT_AMOUNT!
     );
     console.log("... withdraw deploy hash: ", withdrawDeployHash);
    
     await getDeploy(NODE_ADDRESS!, withdrawDeployHash);
     console.log("... withdraw function called successfully.");
  }

  approve =async (spender:string, amount:string) => {
    await this.liquidityGaugeV3.setContractHash(this.contractHash!);
    const approveDeployHash = await liquidityGaugeV3.approve(
      KEYS!,
      spender!,
      amount!,
      LIQUIDITY_GAUGE_V3_PAYMENT_AMOUNT!
     );
     console.log("... approve deploy hash: ", approveDeployHash);
    
     await getDeploy(NODE_ADDRESS!, approveDeployHash);
     console.log("... approve function called successfully.");
  }

  increaseAllowance =async (spender:string, amount:string) => {
    await this.liquidityGaugeV3.setContractHash(this.contractHash!);
    const increaseAllowanceDeployHash = await this.liquidityGaugeV3.increaseAllowance(
      KEYS!,
      spender!,
      amount!,
      LIQUIDITY_GAUGE_V3_PAYMENT_AMOUNT!
     );
     console.log("... increaseAllowance deploy hash: ", increaseAllowanceDeployHash);
    
     await getDeploy(NODE_ADDRESS!, increaseAllowanceDeployHash);
     console.log("... increaseAllowance function called successfully.");
  }

  decreaseAllowance =async (spender:string,amount:string ) => {
    await this.liquidityGaugeV3.setContractHash(this.contractHash!);
    const decreaseAllowanceDeployHash = await this.liquidityGaugeV3.decreaseAllowance(
      KEYS!,
      spender!,
      amount!,
      LIQUIDITY_GAUGE_V3_PAYMENT_AMOUNT!
     );
     console.log("... decreaseAllowance deploy hash: ", decreaseAllowanceDeployHash);
    
     await getDeploy(NODE_ADDRESS!, decreaseAllowanceDeployHash);
     console.log("... decreaseAllowance function called successfully.");
  }

  setRewards =async (rewardContract:string,claimSig:string, rewardTokens:Array<string>) => {
    await this.liquidityGaugeV3.setContractHash(this.contractHash!);
    const setRewardsDeployHash = await this.liquidityGaugeV3.setRewards(
      KEYS!,
      rewardContract!,
      claimSig!,
      rewardTokens!,
      LIQUIDITY_GAUGE_V3_PAYMENT_AMOUNT!
     );
     console.log("... setRewards deploy hash: ", setRewardsDeployHash);
    
     await getDeploy(NODE_ADDRESS!, setRewardsDeployHash);
     console.log("... setRewards function called successfully.");
  }

  setKilled =async () => {
    await this.liquidityGaugeV3.setContractHash(this.contractHash!);
    const setKilledDeployHash = await this.liquidityGaugeV3.setKilled(
      KEYS!,
      true,
      LIQUIDITY_GAUGE_V3_PAYMENT_AMOUNT!
     );
     console.log("... setKilled deploy hash: ", setKilledDeployHash);
    
     await getDeploy(NODE_ADDRESS!, setKilledDeployHash);
     console.log("... setKilled function called successfully.");
  }

  comitTransferOwnership =async () => {
    await this.liquidityGaugeV3.setContractHash(this.contractHash!);
    const comitTransferOwnershipDeployHash = await this.liquidityGaugeV3.comitTransferOwnership(
      KEYS!,
      KEYS.publicKey,
      LIQUIDITY_GAUGE_V3_PAYMENT_AMOUNT!
     );
     console.log("... comitTransferOwnership deploy hash: ", comitTransferOwnershipDeployHash);
    
     await getDeploy(NODE_ADDRESS!, comitTransferOwnershipDeployHash);
     console.log("... comitTransferOwnership function called successfully.");
  }

  acceptTransferOwnership =async () => {
    await this.liquidityGaugeV3.setContractHash(this.contractHash!);
    const acceptTransferOwnershipDeployHash = await this.liquidityGaugeV3.acceptTransferOwnership(
      KEYS!,
      LIQUIDITY_GAUGE_V3_PAYMENT_AMOUNT!
    );
    console.log("... acceptTransferOwnership deploy hash: ", acceptTransferOwnershipDeployHash);
  
    await getDeploy(NODE_ADDRESS!, acceptTransferOwnershipDeployHash);
    console.log("... acceptTransferOwnershipOwnership function called successfully.");
  }

}

