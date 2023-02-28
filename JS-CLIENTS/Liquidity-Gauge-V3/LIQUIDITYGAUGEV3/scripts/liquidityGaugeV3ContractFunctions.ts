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

  minter =async () => {
    await this.liquidityGaugeV3.setContractHash(this.contractHash!);
    const minter = await this.liquidityGaugeV3.minter();
    console.log(`... minter: ${minter}`);
  }

  crvToken =async () => {
    await this.liquidityGaugeV3.setContractHash(this.contractHash!);
    const crvToken = await this.liquidityGaugeV3.crvToken();
    console.log(`... crvToken: ${crvToken}`);
  }

  lpToken =async () => {
    await this.liquidityGaugeV3.setContractHash(this.contractHash!);
    const lpToken = await this.liquidityGaugeV3.lpToken();
    console.log(`... lpToken: ${lpToken}`);
  }

  controller =async () => {
    await this.liquidityGaugeV3.setContractHash(this.contractHash!);
    const controller = await this.liquidityGaugeV3.controller();
    console.log(`... controller: ${controller}`);
  }

  votingEscrow =async () => {
    await this.liquidityGaugeV3.setContractHash(this.contractHash!);
    const votingEscrow = await this.liquidityGaugeV3.votingEscrow();
    console.log(`... votingEscrow: ${votingEscrow}`);
  }

  futureEpochTime =async () => {
    await this.liquidityGaugeV3.setContractHash(this.contractHash!);
    const futureEpochTime = await this.liquidityGaugeV3.futureEpochTime();
    console.log(`... futureEpochTime: ${futureEpochTime}`);
  }

  balanceOf =async () => {
    await this.liquidityGaugeV3.setContractHash(this.contractHash!);
    const balanceOf = await this.liquidityGaugeV3.balanceOf(KEYS.publicKey.toAccountHashStr()!);
    console.log(`... balanceOf: ${balanceOf}`);
  }

  totalSupply =async () => {
    await this.liquidityGaugeV3.setContractHash(this.contractHash!);
    const totalSupply = await this.liquidityGaugeV3.totalSupply();
    console.log(`... totalSupply: ${totalSupply}`);
  }

  allowances =async (spender: string) => {
    await this.liquidityGaugeV3.setContractHash(this.contractHash!);
    const allowances = await this.liquidityGaugeV3.allowances(KEYS.publicKey.toAccountHashStr()!,spender!);
    console.log(`... allowances: ${allowances}`);
  }

  name =async () => {
    await this.liquidityGaugeV3.setContractHash(this.contractHash!);
    const name = await this.liquidityGaugeV3.name();
    console.log(`... name: ${name}`);
  }

  symbol =async () => {
    await this.liquidityGaugeV3.setContractHash(this.contractHash!);
    const symbol = await this.liquidityGaugeV3.symbol();
    console.log(`... symbol: ${symbol}`);
  }

  workingBalances =async () => {
    await this.liquidityGaugeV3.setContractHash(this.contractHash!);
    const workingBalances = await this.liquidityGaugeV3.workingBalances(KEYS.publicKey.toAccountHashStr()!);
    console.log(`... workingBalances: ${workingBalances}`);
  }

  workingSupply =async () => {
    await this.liquidityGaugeV3.setContractHash(this.contractHash!);
    const workingSupply = await this.liquidityGaugeV3.workingSupply();
    console.log(`... workingSupply: ${workingSupply}`);
  }

  period =async (spender: string) => {
    await this.liquidityGaugeV3.setContractHash(this.contractHash!);
    const period = await this.liquidityGaugeV3.period();
    console.log(`... period: ${period}`);
  }

  periodTimestamp =async () => {
    await this.liquidityGaugeV3.setContractHash(this.contractHash!);
    const periodTimestamp = await this.liquidityGaugeV3.periodTimestamp(KEYS.publicKey.toAccountHashStr()!);
    console.log(`... periodTimestamp: ${periodTimestamp}`);
  }

  integrateInvSupply =async () => {
    await this.liquidityGaugeV3.setContractHash(this.contractHash!);
    const integrateInvSupply = await this.liquidityGaugeV3.integrateInvSupply(KEYS.publicKey.toAccountHashStr()!);
    console.log(`... integrateInvSupply: ${integrateInvSupply}`);
  }

  integrateInvSupplyOf =async () => {
    await this.liquidityGaugeV3.setContractHash(this.contractHash!);
    const integrateInvSupplyOf = await this.liquidityGaugeV3.integrateInvSupplyOf(KEYS.publicKey.toAccountHashStr()!);
    console.log(`... integrateInvSupplyOf: ${integrateInvSupplyOf}`);
  }

  integrateCheckpointOf =async (spender: string) => {
    await this.liquidityGaugeV3.setContractHash(this.contractHash!);
    const integrateCheckpointOf = await this.liquidityGaugeV3.integrateCheckpointOf(KEYS.publicKey.toAccountHashStr()!);
    console.log(`... integrateCheckpointOf: ${integrateCheckpointOf}`);
  }

  integrateFraction =async () => {
    await this.liquidityGaugeV3.setContractHash(this.contractHash!);
    const integrateFraction = await this.liquidityGaugeV3.integrateFraction(KEYS.publicKey.toAccountHashStr()!);
    console.log(`... integrateFraction: ${integrateFraction}`);
  }

  inflationRate =async () => {
    await this.liquidityGaugeV3.setContractHash(this.contractHash!);
    const inflationRate = await this.liquidityGaugeV3.inflationRate();
    console.log(`... inflationRate: ${inflationRate}`);
  }

  rewardTokens =async () => {
    await this.liquidityGaugeV3.setContractHash(this.contractHash!);
    const rewardTokens = await this.liquidityGaugeV3.rewardTokens(KEYS.publicKey.toAccountHashStr()!);
    console.log(`... rewardTokens: ${rewardTokens}`);
  }

  rewardsReceiver =async (spender: string) => {
    await this.liquidityGaugeV3.setContractHash(this.contractHash!);
    const rewardsReceiver = await this.liquidityGaugeV3.rewardsReceiver(KEYS.publicKey.toAccountHashStr()!);
    console.log(`... rewardsReceiver: ${rewardsReceiver}`);
  }

  rewardIntegral =async () => {
    await this.liquidityGaugeV3.setContractHash(this.contractHash!);
    const rewardIntegral = await this.liquidityGaugeV3.rewardIntegral(KEYS.publicKey.toAccountHashStr()!);
    console.log(`... rewardIntegral: ${rewardIntegral}`);
  }

  rewardIntegralFor =async (spender:string) => {
    await this.liquidityGaugeV3.setContractHash(this.contractHash!);
    const rewardIntegralFor = await this.liquidityGaugeV3.rewardIntegralFor(KEYS.publicKey.toAccountHashStr()!,spender!);
    console.log(`... rewardIntegralFor: ${rewardIntegralFor}`);
  }

  admin =async () => {
    await this.liquidityGaugeV3.setContractHash(this.contractHash!);
    const admin = await this.liquidityGaugeV3.admin();
    console.log(`... admin: ${admin}`);
  }

  futureAdmin =async (spender:string) => {
    await this.liquidityGaugeV3.setContractHash(this.contractHash!);
    const futureAdmin = await this.liquidityGaugeV3.futureAdmin();
    console.log(`... futureAdmin: ${futureAdmin}`);
  }

  isKilled =async () => {
    await this.liquidityGaugeV3.setContractHash(this.contractHash!);
    const isKilled = await this.liquidityGaugeV3.isKilled();
    console.log(`... isKilled: ${isKilled}`);
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

  claimRewards=async (receiver:string) => {
    await this.liquidityGaugeV3.setContractHash(this.contractHash!);
    const claimRewardsDeployHash = await this.liquidityGaugeV3.claimRewards(
      KEYS!,
      KEYS.publicKey,
      receiver!,
      LIQUIDITY_GAUGE_V3_PAYMENT_AMOUNT!
     );
     console.log("... claimRewards deploy hash: ", claimRewardsDeployHash);
    
     await getDeploy(NODE_ADDRESS!, claimRewardsDeployHash);
     console.log("... claimRewards function called successfully.");
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

  commitTransferOwnership =async () => {
    await this.liquidityGaugeV3.setContractHash(this.contractHash!);
    const commitTransferOwnershipDeployHash = await this.liquidityGaugeV3.commitTransferOwnership(
      KEYS!,
      KEYS.publicKey,
      LIQUIDITY_GAUGE_V3_PAYMENT_AMOUNT!
     );
     console.log("... commitTransferOwnership deploy hash: ", commitTransferOwnershipDeployHash);
    
     await getDeploy(NODE_ADDRESS!, commitTransferOwnershipDeployHash);
     console.log("... commitTransferOwnership function called successfully.");
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

