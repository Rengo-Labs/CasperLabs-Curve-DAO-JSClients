import { config } from "dotenv";
config();
import { CURVEREWARDSClient} from "../src";
import { sleep, getDeploy } from "./utils";
import * as fs from 'fs';

import {
  CLValueBuilder,
  Keys,
  CLPublicKey,
  CLAccountHash,
  CLPublicKeyType,
  Contracts,
  CLByteArray
} from "casper-js-sdk";


const {
  NODE_ADDRESS,
  EVENT_STREAM_ADDRESS,
  CHAIN_NAME,
  
  CURVE_REWARDS_MASTER_KEY_PAIR_PATH,
  CURVE_REWARDS_PAYMENT_AMOUNT,
  CURVE_REWARDS_CONTRACT_HASH,
  CURVE_REWARDS_OWNER,
  CURVE_REWARDS_AMOUNT,
  CURVE_REWARDS_DISTRIBUTION,
  CURVE_REWARDS_REWARD,
  CURVE_REWARDS_NEW_OWNER

} = process.env;


const KEYS = Keys.Ed25519.parseKeyFiles(
  `${CURVE_REWARDS_MASTER_KEY_PAIR_PATH}/public_key.pem`,
  `${CURVE_REWARDS_MASTER_KEY_PAIR_PATH}/secret_key.pem`
);


class CurveRewardsFunctions {
  contractHash: string;
  curveRewards: CURVEREWARDSClient;
  constructor() {
    let _contractHash = fs.readFileSync('contractHash','utf8');
    this.contractHash = _contractHash.split("-").pop()!;
    this.curveRewards = new CURVEREWARDSClient(
      NODE_ADDRESS!,
      CHAIN_NAME!,
      EVENT_STREAM_ADDRESS!
    );
  }
  totalSupplyJsClient =async () => {
    await this.curveRewards.setContractHash(this.contractHash!);
    const totalSupplyJsClient = await this.curveRewards.totalSupplyJsClient();
    console.log(`... totalSupply: ${totalSupplyJsClient}`);
  }

  ownerJsClient =async () => {
    await this.curveRewards.setContractHash(this.contractHash!);
    const ownerJsClient = await this.curveRewards.ownerJsClient();
    console.log(`... owner: ${ownerJsClient}`);
  }

  isOwnerJsClient =async () => {
   await this.curveRewards.setContractHash(this.contractHash!);
   const isOwnerJsClient = await this.curveRewards.isOwnerJsClient();
   console.log(`... isOwner: ${isOwnerJsClient}`);
  }

  // //balanceOf
  balanceOf =async () => {
    await this.curveRewards.setContractHash(this.contractHash!);
   const balanceOf = await this.curveRewards.balanceOf(KEYS.publicKey.toAccountHashStr()!);
   console.log(`... balance: ${balanceOf}`);
  }

  stakeLp =async (amount:string) => {
    await this.curveRewards.setContractHash(this.contractHash!);
    const stakeLpDeployHash = await this.curveRewards.stakeLp(
      KEYS!,
      amount!,
      CURVE_REWARDS_PAYMENT_AMOUNT!
     );
     console.log("... stakeLp deploy hash: ", stakeLpDeployHash);
    
     await getDeploy(NODE_ADDRESS!, stakeLpDeployHash);
     console.log("... stakeLp function called successfully.");
  }

  withdrawLp =async (amount:string) => {
    await this.curveRewards.setContractHash(this.contractHash!);
    const withdrawLpDeployHash = await this.curveRewards.withdrawLp(
      KEYS!,
      amount!,
      CURVE_REWARDS_PAYMENT_AMOUNT!
     );
     console.log("... withdrawLp deploy hash: ", withdrawLpDeployHash);
    
     await getDeploy(NODE_ADDRESS!, withdrawLpDeployHash);
     console.log("... withdrawLp function called successfully.");
  }

  setRewardDistribution =async (distribution:string) => {
    await this.curveRewards.setContractHash(this.contractHash!);
    const setRewardDistributionDeployHash = await this.curveRewards.setRewardDistribution(
      KEYS!,
      distribution!,
      CURVE_REWARDS_PAYMENT_AMOUNT!
     );
     console.log("... setRewardDistribution deploy hash: ", setRewardDistributionDeployHash);
    
     await getDeploy(NODE_ADDRESS!, setRewardDistributionDeployHash);
     console.log("... setRewardDistribution function called successfully.");
  }

  stake =async (amount:string) => {
    await this.curveRewards.setContractHash(this.contractHash!);
    const stakeDeployHash = await this.curveRewards.stake(
      KEYS!,
      amount!,
      CURVE_REWARDS_PAYMENT_AMOUNT!
     );
     console.log("... stake deploy hash: ", stakeDeployHash);
    
     await getDeploy(NODE_ADDRESS!, stakeDeployHash);
     console.log("... stake function called successfully.");
  }

  withdraw =async (amount:string) => {
    await this.curveRewards.setContractHash(this.contractHash!);
    const withdrawDeployHash = await this.curveRewards.withdraw(
      KEYS!,
      amount!,
      CURVE_REWARDS_PAYMENT_AMOUNT!
     );
     console.log("... withdraw deploy hash: ", withdrawDeployHash);
    
     await getDeploy(NODE_ADDRESS!, withdrawDeployHash);
     console.log("... withdraw function called successfully.");
  }

  getReward =async () => {
    await this.curveRewards.setContractHash(this.contractHash!);
    const getRewardDeployHash = await this.curveRewards.getReward(
      KEYS!,
      CURVE_REWARDS_PAYMENT_AMOUNT!
     );
     console.log("... getReward deploy hash: ", getRewardDeployHash);
    
     await getDeploy(NODE_ADDRESS!, getRewardDeployHash);
     console.log("... getReward function called successfully.");
  }

  exit =async () => {
    await this.curveRewards.setContractHash(this.contractHash!);
    const exitDeployHash = await this.curveRewards.exit(
      KEYS!,
      CURVE_REWARDS_PAYMENT_AMOUNT!
     );
     console.log("... exit deploy hash: ", exitDeployHash);
    
     await getDeploy(NODE_ADDRESS!, exitDeployHash);
     console.log("... exit function called successfully.");
  }

  notifyRewardAmount =async (reward:string) => {
    await this.curveRewards.setContractHash(this.contractHash!);
    const notifyRewardAmountDeployHash = await this.curveRewards.notifyRewardAmount(
      KEYS!,
      reward!,
      CURVE_REWARDS_PAYMENT_AMOUNT!
     );
     console.log("... notifyRewardAmount deploy hash: ", notifyRewardAmountDeployHash);
    
     await getDeploy(NODE_ADDRESS!, notifyRewardAmountDeployHash);
     console.log("... notifyRewardAmount function called successfully.");
  }

  renounceOwnership =async () => {
    await this.curveRewards.setContractHash(this.contractHash!);
    const renounceOwnershipDeployHash = await this.curveRewards.renounceOwnership(
      KEYS!,
      CURVE_REWARDS_PAYMENT_AMOUNT!
     );
     console.log("... renounceOwnership deploy hash: ", renounceOwnershipDeployHash);
    
     await getDeploy(NODE_ADDRESS!, renounceOwnershipDeployHash);
     console.log("... renounceOwnership function called successfully.");
  }

  transferOwnership =async (newOwner:string) => {
    await this.curveRewards.setContractHash(this.contractHash!);
    const transferOwnershipDeployHash = await this.curveRewards.transferOwnership(
      KEYS!,
      newOwner!,
      CURVE_REWARDS_PAYMENT_AMOUNT!
     );
     console.log("... transferOwnership deploy hash: ", transferOwnershipDeployHash);
    
     await getDeploy(NODE_ADDRESS!, transferOwnershipDeployHash);
     console.log("... transferOwnership function called successfully.")
  }
  

}
export{CurveRewardsFunctions}


