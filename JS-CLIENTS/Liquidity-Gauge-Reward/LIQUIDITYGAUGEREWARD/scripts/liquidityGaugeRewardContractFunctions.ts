import { config } from "dotenv";
config();
import { LIQUIDITYGAUGEREWARDClient ,utils} from "../src";
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
  
  LIQUIDITY_GAUGE_REWARD_MASTER_KEY_PAIR_PATH,
  LIQUIDITY_GAUGE_REWARD_PAYMENT_AMOUNT,
} = process.env;


const KEYS = Keys.Ed25519.parseKeyFiles(
  `${LIQUIDITY_GAUGE_REWARD_MASTER_KEY_PAIR_PATH}/public_key.pem`,
  `${LIQUIDITY_GAUGE_REWARD_MASTER_KEY_PAIR_PATH}/secret_key.pem`
);

export class LiquidityGaugeRewardFunctions {
  contractHash: string;
  liquidityGaugeReward: LIQUIDITYGAUGEREWARDClient;
  constructor() {
    let _contractHash = fs.readFileSync('contractHash','utf8');
    this.contractHash = _contractHash.split("-").pop()!;
    this.liquidityGaugeReward = new LIQUIDITYGAUGEREWARDClient(
      NODE_ADDRESS!,
      CHAIN_NAME!,
      EVENT_STREAM_ADDRESS!
    );
  }

  kick =async () => {
    await this.liquidityGaugeReward.setContractHash(this.contractHash!);
    const kickDeployHash = await this.liquidityGaugeReward.kick(
      KEYS!,
      KEYS.publicKey,
      LIQUIDITY_GAUGE_REWARD_PAYMENT_AMOUNT!
     );
     console.log("... kick deploy hash: ", kickDeployHash);
    
     await getDeploy(NODE_ADDRESS!, kickDeployHash);
     console.log("... kick function called successfully.");
  }

  setApproveDeposit =async () => {
    await this.liquidityGaugeReward.setContractHash(this.contractHash!);
    const setApproveDepositDeployHash = await this.liquidityGaugeReward.setApproveDeposit(
      KEYS!,
      KEYS.publicKey,
      true,
      LIQUIDITY_GAUGE_REWARD_PAYMENT_AMOUNT!
     );
     console.log("... setApproveDeposit deploy hash: ", setApproveDepositDeployHash);
    
     await getDeploy(NODE_ADDRESS!, setApproveDepositDeployHash);
     console.log("... setApproveDeposit function called successfully.");
  }

  deposit =async (value:string) => {
    await this.liquidityGaugeReward.setContractHash(this.contractHash!);
    const depositDeployHash = await this.liquidityGaugeReward.deposit(
      KEYS!,
      value!,
      KEYS.publicKey,
      LIQUIDITY_GAUGE_REWARD_PAYMENT_AMOUNT!
     );
     console.log("... deposit deploy hash: ", depositDeployHash);
    
     await getDeploy(NODE_ADDRESS!, depositDeployHash);
     console.log("... deposit function called successfully.");
  }

  withdraw =async (value:string) => {
    await this.liquidityGaugeReward.setContractHash(this.contractHash!);
    const withdrawDeployHash = await this.liquidityGaugeReward.withdraw(
      KEYS!,
      value!,
      true,
      LIQUIDITY_GAUGE_REWARD_PAYMENT_AMOUNT!
     );
     console.log("... withdraw deploy hash: ", withdrawDeployHash);
    
     await getDeploy(NODE_ADDRESS!, withdrawDeployHash);
     console.log("... withdraw function called successfully.");
  }

  claimRewards =async () => {
    await this.liquidityGaugeReward.setContractHash(this.contractHash!);
    const claimRewardsDeployHash = await this.liquidityGaugeReward.claimRewards(
      KEYS!,
      KEYS.publicKey,
      LIQUIDITY_GAUGE_REWARD_PAYMENT_AMOUNT!
     );
     console.log("... claimRewards deploy hash: ", claimRewardsDeployHash);
    
     await getDeploy(NODE_ADDRESS!, claimRewardsDeployHash);
     console.log("... claimRewards function called successfully.");
  }

  killMe =async () => {
    await this.liquidityGaugeReward.setContractHash(this.contractHash!);
    const killMeDeployHash = await this.liquidityGaugeReward.killMe(
      KEYS!,
      LIQUIDITY_GAUGE_REWARD_PAYMENT_AMOUNT!
     );
     console.log("... killMe deploy hash: ", killMeDeployHash);
    
     await getDeploy(NODE_ADDRESS!, killMeDeployHash);
     console.log("... killMe function called successfully.");
  }

  comitTransferOwnership =async () => {
    await this.liquidityGaugeReward.setContractHash(this.contractHash!);
    const comitTransferOwnershipDeployHash = await this.liquidityGaugeReward.comitTransferOwnership(
      KEYS!,
      KEYS.publicKey,
      LIQUIDITY_GAUGE_REWARD_PAYMENT_AMOUNT!
     );
     console.log("... comitTransferOwnership deploy hash: ", comitTransferOwnershipDeployHash);
    
     await getDeploy(NODE_ADDRESS!, comitTransferOwnershipDeployHash);
     console.log("... comitTransferOwnership function called successfully.");
  }

  applyTransferOwnership =async () => {
    await this.liquidityGaugeReward.setContractHash(this.contractHash!);
    const applyTransferOwnershipDeployHash = await this.liquidityGaugeReward.applyTransferOwnership(
      KEYS!,
      LIQUIDITY_GAUGE_REWARD_PAYMENT_AMOUNT!
    );
    console.log("...  deploy hash: ", applyTransferOwnershipDeployHash);
  
    await getDeploy(NODE_ADDRESS!, applyTransferOwnershipDeployHash);
    console.log("... applyTransferOwnership function called successfully.");
  }

  toggleExternalRewardsClaim =async () => {
    await this.liquidityGaugeReward.setContractHash(this.contractHash!);
    const toggleExternalRewardsClaimDeployHash = await this.liquidityGaugeReward.toggleExternalRewardsClaim(
      KEYS!,
      true,
      LIQUIDITY_GAUGE_REWARD_PAYMENT_AMOUNT!
     );
     console.log("... toggleExternalRewardsClaim deploy hash: ", toggleExternalRewardsClaimDeployHash);
    
     await getDeploy(NODE_ADDRESS!, toggleExternalRewardsClaimDeployHash);
     console.log("... toggleExternalRewardsClaim function called successfully.");
  }
}

