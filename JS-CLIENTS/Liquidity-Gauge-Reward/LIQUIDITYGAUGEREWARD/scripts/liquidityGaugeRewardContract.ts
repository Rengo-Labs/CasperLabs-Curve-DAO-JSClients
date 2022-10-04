import { config } from "dotenv";
config();
import { LIQUIDITYGAUGEREWARDClient, utils } from "../src";
import { getDeploymentCount,updateDeploymentCount, getDeploy } from "./utils";

import {
  Keys,
} from "casper-js-sdk";
import * as fs from 'fs';

const {
  NODE_ADDRESS,
  EVENT_STREAM_ADDRESS,
  CHAIN_NAME,
  LIQUIDITY_GAUGE_REWARD_WASM_PATH,
  LIQUIDITY_GAUGE_REWARD_MASTER_KEY_PAIR_PATH,
  LIQUIDITY_GAUGE_REWARD_INSTALL_PAYMENT_AMOUNT,
  LIQUIDITY_GAUGE_REWARD_CONTRACT_NAME,
  LIQUIDITY_GAUGE_REWARD_PROXY_WASM_PATH
} = process.env;

const KEYS = Keys.Ed25519.parseKeyFiles(
  `${LIQUIDITY_GAUGE_REWARD_MASTER_KEY_PAIR_PATH}/public_key.pem`,
  `${LIQUIDITY_GAUGE_REWARD_MASTER_KEY_PAIR_PATH}/secret_key.pem`
);

export const deployLiquidityGaugeReward = async (LpAddress:string, minter:string,rewardContract:string,rewardedToken:string) => {
  const liquidityGaugeReward = new LIQUIDITYGAUGEREWARDClient(
    NODE_ADDRESS!,
    CHAIN_NAME!,
    EVENT_STREAM_ADDRESS!
  );
  let contractName = LIQUIDITY_GAUGE_REWARD_CONTRACT_NAME + getDeploymentCount();
  updateDeploymentCount();
  const installDeployHash = await liquidityGaugeReward.install(
    KEYS,
    LpAddress!,
    minter!,
    rewardContract!,
    rewardedToken!,
    KEYS.publicKey,
    contractName!,
    LIQUIDITY_GAUGE_REWARD_INSTALL_PAYMENT_AMOUNT!,
    LIQUIDITY_GAUGE_REWARD_WASM_PATH!

  );

  console.log(`... Contract installation deployHash: ${installDeployHash}`);

  await getDeploy(NODE_ADDRESS!, installDeployHash);

  console.log(`... Contract installed successfully.`);

  let accountInfo = await utils.getAccountInfo(NODE_ADDRESS!, KEYS.publicKey);

  console.log(`... Account Info: `);
  console.log(JSON.stringify(accountInfo, null, 2));

  const contractHash = await utils.getAccountNamedKeyValue(
    accountInfo,
    `${LIQUIDITY_GAUGE_REWARD_CONTRACT_NAME!}_contract_hash`
  );

  fs.writeFileSync('contractHash',contractHash,{encoding:'utf8',flag:'w'});
  console.log(`... Contract Hash: ${contractHash}`);

  const packageHash = await utils.getAccountNamedKeyValue(
    accountInfo,
    `${LIQUIDITY_GAUGE_REWARD_CONTRACT_NAME!}_package_hash`
  );
  fs.writeFileSync('packageHash',packageHash,{encoding:'utf8',flag:'w'});
  console.log(`... Package Hash: ${packageHash}`);
}

export class LiquidityGaugeRewardSessionCode {
  packageHash: string;
  liquidityGaugeReward: LIQUIDITYGAUGEREWARDClient;
  constructor() {
    let _packageHash = fs.readFileSync('packageHash','utf8');
    this.packageHash = _packageHash.split("-").pop()!;
    this.liquidityGaugeReward = new LIQUIDITYGAUGEREWARDClient(
      NODE_ADDRESS!,
      CHAIN_NAME!,
      EVENT_STREAM_ADDRESS!
    );
  }

  userCheckpointSessionCode = async () => {
    const userCheckpointSessionCodeDeployHash = await this.liquidityGaugeReward.userCheckpointSessionCode(
      KEYS,
      "user_checkpoint",
      this.packageHash!,
      KEYS.publicKey!,
      LIQUIDITY_GAUGE_REWARD_INSTALL_PAYMENT_AMOUNT!,
      LIQUIDITY_GAUGE_REWARD_PROXY_WASM_PATH!
    );
  
    console.log(`... userCheckpointSessionCode Function deployHash: ${userCheckpointSessionCodeDeployHash}`);
  
    await getDeploy(NODE_ADDRESS!, userCheckpointSessionCodeDeployHash);
  
    console.log(`... userCheckpointSessionCode Function called successfully through sessionCode.`);
  
  };

  claimableTokensSessionCode = async () => {
    const claimableTokensSessionCodeDeployHash = await this.liquidityGaugeReward.claimableTokensSessionCode(
      KEYS,
      "claimable_tokens",
      this.packageHash!,
      KEYS.publicKey!,
      LIQUIDITY_GAUGE_REWARD_INSTALL_PAYMENT_AMOUNT!,
      LIQUIDITY_GAUGE_REWARD_PROXY_WASM_PATH!
    );
  
    console.log(`... claimableTokensSessionCode Function deployHash: ${claimableTokensSessionCodeDeployHash}`);
  
    await getDeploy(NODE_ADDRESS!, claimableTokensSessionCodeDeployHash);
  
    console.log(`... claimableTokensSessionCode Function called successfully through sessionCode.`);
  
  };

  claimableRewardSessionCode = async () => {
    const claimableRewardSessionCodeDeployHash = await this.liquidityGaugeReward.claimableRewardSessionCode(
      KEYS,
      "claimable_reward",
      this.packageHash!,
      KEYS.publicKey!,
      LIQUIDITY_GAUGE_REWARD_INSTALL_PAYMENT_AMOUNT!,
      LIQUIDITY_GAUGE_REWARD_PROXY_WASM_PATH!
    );
  
    console.log(`... claimableRewardSessionCode Function deployHash: ${claimableRewardSessionCodeDeployHash}`);
  
    await getDeploy(NODE_ADDRESS!, claimableRewardSessionCodeDeployHash);
  
    console.log(`... claimableRewardSessionCode Function called successfully through sessionCode.`);
  
  };

  integrateCheckpointSessionCode = async () => {
    const integrateCheckpointSessionCodeDeployHash = await this.liquidityGaugeReward.integrateCheckpointSessionCode(
      KEYS,
      "integrate_checkpoint",
      this.packageHash!,
      LIQUIDITY_GAUGE_REWARD_INSTALL_PAYMENT_AMOUNT!,
      LIQUIDITY_GAUGE_REWARD_PROXY_WASM_PATH!
    );
  
    console.log(`... integrateCheckpointSessionCode Function deployHash: ${integrateCheckpointSessionCodeDeployHash}`);
  
    await getDeploy(NODE_ADDRESS!, integrateCheckpointSessionCodeDeployHash);
  
    console.log(`... integrateCheckpointSessionCode Function called successfully through sessionCode.`);
  
  };

}
