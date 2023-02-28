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

  minter =async () => {
    await this.liquidityGaugeReward.setContractHash(this.contractHash!);
    const minter = await this.liquidityGaugeReward.minter();
    console.log(`... minter: ${minter}`);
  }

  crvToken =async () => {
    await this.liquidityGaugeReward.setContractHash(this.contractHash!);
    const crvToken = await this.liquidityGaugeReward.crvToken();
    console.log(`... crvToken: ${crvToken}`);
  }

  lpToken =async () => {
    await this.liquidityGaugeReward.setContractHash(this.contractHash!);
    const lpToken = await this.liquidityGaugeReward.lpToken();
    console.log(`... lpToken: ${lpToken}`);
  }

  controller =async () => {
    await this.liquidityGaugeReward.setContractHash(this.contractHash!);
    const controller = await this.liquidityGaugeReward.controller();
    console.log(`... controller: ${controller}`);
  }

  votingEscrow =async () => {
    await this.liquidityGaugeReward.setContractHash(this.contractHash!);
    const votingEscrow = await this.liquidityGaugeReward.votingEscrow();
    console.log(`... votingEscrow: ${votingEscrow}`);
  }

  balanceOf =async () => {
    await this.liquidityGaugeReward.setContractHash(this.contractHash!);
    const balanceOf = await this.liquidityGaugeReward.balanceOf(KEYS.publicKey.toAccountHashStr()!);
    console.log(`... balanceOf: ${balanceOf}`);
  }

  totalSupply =async () => {
    await this.liquidityGaugeReward.setContractHash(this.contractHash!);
    const totalSupply = await this.liquidityGaugeReward.totalSupply();
    console.log(`... totalSupply: ${totalSupply}`);
  }

  futureEpochTime =async () => {
    await this.liquidityGaugeReward.setContractHash(this.contractHash!);
    const futureEpochTime = await this.liquidityGaugeReward.futureEpochTime();
    console.log(`... futureEpochTime: ${futureEpochTime}`);
  }

  approvedToDeposit =async (spender:string) => {
    await this.liquidityGaugeReward.setContractHash(this.contractHash!);
    const approvedToDeposit = await this.liquidityGaugeReward.approvedToDeposit(KEYS.publicKey.toAccountHashStr()!,spender!);
    console.log(`... approvedToDeposit: ${approvedToDeposit}`);
  }

  workingBalances =async () => {
    await this.liquidityGaugeReward.setContractHash(this.contractHash!);
    const workingBalances = await this.liquidityGaugeReward.workingBalances(KEYS.publicKey.toAccountHashStr()!);
    console.log(`... workingBalances: ${workingBalances}`);
  }

  workingSupply =async () => {
    await this.liquidityGaugeReward.setContractHash(this.contractHash!);
    const workingSupply = await this.liquidityGaugeReward.workingSupply();
    console.log(`... workingSupply: ${workingSupply}`);
  }

  period =async () => {
    await this.liquidityGaugeReward.setContractHash(this.contractHash!);
    const period = await this.liquidityGaugeReward.period();
    console.log(`... period: ${period}`);
  }

  periodTimestamp =async () => {
    await this.liquidityGaugeReward.setContractHash(this.contractHash!);
    const periodTimestamp = await this.liquidityGaugeReward.periodTimestamp(KEYS.publicKey.toAccountHashStr()!);
    console.log(`... periodTimestamp: ${periodTimestamp}`);
  }

  integrateInvSupply =async () => {
    await this.liquidityGaugeReward.setContractHash(this.contractHash!);
    const integrateInvSupply = await this.liquidityGaugeReward.integrateInvSupply(KEYS.publicKey.toAccountHashStr()!);
    console.log(`... integrateInvSupply: ${integrateInvSupply}`);
  }

  integrateInvSupplyOf =async () => {
    await this.liquidityGaugeReward.setContractHash(this.contractHash!);
    const integrateInvSupplyOf = await this.liquidityGaugeReward.integrateInvSupplyOf(KEYS.publicKey.toAccountHashStr()!);
    console.log(`... integrateInvSupplyOf: ${integrateInvSupplyOf}`);
  }

  integrateCheckpointOf =async () => {
    await this.liquidityGaugeReward.setContractHash(this.contractHash!);
    const integrateCheckpointOf = await this.liquidityGaugeReward.integrateCheckpointOf(KEYS.publicKey.toAccountHashStr()!);
    console.log(`... integrateCheckpointOf: ${integrateCheckpointOf}`);
  }

  integrateFraction =async () => {
    await this.liquidityGaugeReward.setContractHash(this.contractHash!);
    const integrateFraction = await this.liquidityGaugeReward.integrateFraction(KEYS.publicKey.toAccountHashStr()!);
    console.log(`... integrateFraction: ${integrateFraction}`);
  }

  inflationRate =async () => {
    await this.liquidityGaugeReward.setContractHash(this.contractHash!);
    const inflationRate = await this.liquidityGaugeReward.inflationRate();
    console.log(`... inflationRate: ${inflationRate}`);
  }

  rewardContract =async () => {
    await this.liquidityGaugeReward.setContractHash(this.contractHash!);
    const rewardContract = await this.liquidityGaugeReward.rewardContract();
    console.log(`... rewardContract: ${rewardContract}`);
  }

  rewardedToken =async () => {
    await this.liquidityGaugeReward.setContractHash(this.contractHash!);
    const rewardedToken = await this.liquidityGaugeReward.rewardedToken();
    console.log(`... rewardedToken: ${rewardedToken}`);
  }

  rewardIntegral =async () => {
    await this.liquidityGaugeReward.setContractHash(this.contractHash!);
    const rewardIntegral = await this.liquidityGaugeReward.rewardIntegral();
    console.log(`... rewardIntegral: ${rewardIntegral}`);
  }

  rewardIntegralFor =async () => {
    await this.liquidityGaugeReward.setContractHash(this.contractHash!);
    const rewardIntegralFor = await this.liquidityGaugeReward.rewardIntegralFor(KEYS.publicKey.toAccountHashStr()!);
    console.log(`... rewardIntegralFor: ${rewardIntegralFor}`);
  }

  rewardsFor =async () => {
    await this.liquidityGaugeReward.setContractHash(this.contractHash!);
    const rewardsFor = await this.liquidityGaugeReward.rewardsFor(KEYS.publicKey.toAccountHashStr()!);
    console.log(`... rewardsFor: ${rewardsFor}`);
  }

  claimedRewardsFor =async () => {
    await this.liquidityGaugeReward.setContractHash(this.contractHash!);
    const claimedRewardsFor = await this.liquidityGaugeReward.claimedRewardsFor(KEYS.publicKey.toAccountHashStr()!);
    console.log(`... claimedRewardsFor: ${claimedRewardsFor}`);
  }

  admin =async () => {
    await this.liquidityGaugeReward.setContractHash(this.contractHash!);
    const admin = await this.liquidityGaugeReward.admin();
    console.log(`... admin: ${admin}`);
  }

  futureAdmin =async () => {
    await this.liquidityGaugeReward.setContractHash(this.contractHash!);
    const futureAdmin = await this.liquidityGaugeReward.futureAdmin();
    console.log(`... futureAdmin: ${futureAdmin}`);
  }

  isKilled =async () => {
    await this.liquidityGaugeReward.setContractHash(this.contractHash!);
    const isKilled = await this.liquidityGaugeReward.isKilled();
    console.log(`... isKilled: ${isKilled}`);
  }

  isClaimingRewards =async () => {
    await this.liquidityGaugeReward.setContractHash(this.contractHash!);
    const isClaimingRewards = await this.liquidityGaugeReward.isClaimingRewards();
    console.log(`... isClaimingRewards: ${isClaimingRewards}`);
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

  commitTransferOwnership =async () => {
    await this.liquidityGaugeReward.setContractHash(this.contractHash!);
    const commitTransferOwnershipDeployHash = await this.liquidityGaugeReward.commitTransferOwnership(
      KEYS!,
      KEYS.publicKey,
      LIQUIDITY_GAUGE_REWARD_PAYMENT_AMOUNT!
     );
     console.log("... commitTransferOwnership deploy hash: ", commitTransferOwnershipDeployHash);
    
     await getDeploy(NODE_ADDRESS!, commitTransferOwnershipDeployHash);
     console.log("... commitTransferOwnership function called successfully.");
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

