import { config } from "dotenv";
config();
import { LIQUIDITYGAUGEV3Client, utils } from "../src";
import { getDeploymentCount,updateDeploymentCount, getDeploy } from "./utils";

import {
  Keys,
} from "casper-js-sdk";
import * as fs from 'fs';

const {
  NODE_ADDRESS,
  EVENT_STREAM_ADDRESS,
  CHAIN_NAME,
  LIQUIDITY_GAUGE_V3_WASM_PATH,
  LIQUIDITY_GAUGE_V3_MASTER_KEY_PAIR_PATH,
  LIQUIDITY_GAUGE_V3_INSTALL_PAYMENT_AMOUNT,
  LIQUIDITY_GAUGE_V3_LP_ADDR,
  LIQUIDITY_GAUGE_V3_MINTER,
  LIQUIDITY_GAUGE_V3_CONTRACT_NAME,

  LIQUIDITY_GAUGE_V3_PACKAGE_HASH,
  LIQUIDITY_GAUGE_V3_PROXY_WASM_PATH,
  LIQUIDITY_GAUGE_V3_ADDR,
  LIQUIDITY_GAUGE_V3_TOKEN,
  LIQUIDITY_GAUGE_V3_RECIPIENT,
  LIQUIDITY_GAUGE_V3_AMOUNT,
} = process.env;

const KEYS = Keys.Ed25519.parseKeyFiles(
  `${LIQUIDITY_GAUGE_V3_MASTER_KEY_PAIR_PATH}/public_key.pem`,
  `${LIQUIDITY_GAUGE_V3_MASTER_KEY_PAIR_PATH}/secret_key.pem`
);

export const deployliquidityGaugeV3 = async (lpAddr:string, minter:string) => {
  const liquidityGaugeV3 = new LIQUIDITYGAUGEV3Client(
    NODE_ADDRESS!,
    CHAIN_NAME!,
    EVENT_STREAM_ADDRESS!
  );
  let contractName = LIQUIDITY_GAUGE_V3_CONTRACT_NAME + getDeploymentCount();
  updateDeploymentCount();

  const installDeployHash = await liquidityGaugeV3.install(
    KEYS,
    lpAddr!,
    minter!,
    KEYS.publicKey,
    contractName!,
    LIQUIDITY_GAUGE_V3_INSTALL_PAYMENT_AMOUNT!,
    LIQUIDITY_GAUGE_V3_WASM_PATH!

  );

  console.log(`... Contract installation deployHash: ${installDeployHash}`);

  await getDeploy(NODE_ADDRESS!, installDeployHash);

  console.log(`... Contract installed successfully.`);

  let accountInfo = await utils.getAccountInfo(NODE_ADDRESS!, KEYS.publicKey);

  console.log(`... Account Info: `);
  console.log(JSON.stringify(accountInfo, null, 2));

  const contractHash = await utils.getAccountNamedKeyValue(
    accountInfo,
    `${LIQUIDITY_GAUGE_V3_CONTRACT_NAME!}_contract_hash`
  );

  fs.writeFileSync('contractHash',contractHash,{encoding:'utf8',flag:'w'});
  console.log(`... Contract Hash: ${contractHash}`);

  const packageHash = await utils.getAccountNamedKeyValue(
    accountInfo,
    `${LIQUIDITY_GAUGE_V3_CONTRACT_NAME!}_package_hash`
  );
  fs.writeFileSync('packageHash',packageHash,{encoding:'utf8',flag:'w'});
  console.log(`... Package Hash: ${packageHash}`);

}

export class LiquidityGaugeV3SessionCode {
  packageHash: string;
  liquidityGaugeV3: LIQUIDITYGAUGEV3Client;
  constructor() {
    let _packageHash = fs.readFileSync('packageHash','utf8');
    this.packageHash = _packageHash.split("-").pop()!;
    this.liquidityGaugeV3 = new LIQUIDITYGAUGEV3Client(
      NODE_ADDRESS!,
      CHAIN_NAME!,
      EVENT_STREAM_ADDRESS!
    );
  }

  userCheckpointSessionCode = async () => {
    const userCheckpointSessionCodeDeployHash = await this.liquidityGaugeV3.userCheckpointSessionCode(
      KEYS,
      "user_checkpoint",
      this.packageHash!,
      KEYS.publicKey!,
      LIQUIDITY_GAUGE_V3_INSTALL_PAYMENT_AMOUNT!,
      LIQUIDITY_GAUGE_V3_PROXY_WASM_PATH!
    );
    console.log(`... userCheckpointSessionCode Function deployHash: ${userCheckpointSessionCodeDeployHash}`);
  
    await getDeploy(NODE_ADDRESS!, userCheckpointSessionCodeDeployHash);
  
    console.log(`... userCheckpointSessionCode Function called successfully through sessionCode.`);
  
  };

  claimableTokensSessionCode = async (addr:string) => {
    const claimableTokensSessionCodeDeployHash = await this.liquidityGaugeV3.claimableTokensSessionCode(
      KEYS,
      "claimable_tokens",
      this.packageHash!,
      addr!,
      LIQUIDITY_GAUGE_V3_INSTALL_PAYMENT_AMOUNT!,
      LIQUIDITY_GAUGE_V3_PROXY_WASM_PATH!
    );
    console.log(`... claimableTokensSessionCode Function deployHash: ${claimableTokensSessionCodeDeployHash}`);
  
    await getDeploy(NODE_ADDRESS!, claimableTokensSessionCodeDeployHash);
  
    console.log(`... claimableTokensSessionCode Function called successfully through sessionCode.`);
  };

  rewardContractSessionCode = async () => {
    const rewardContractSessionCodeDeployHash = await this.liquidityGaugeV3.rewardContractSessionCode(
      KEYS,
      "reward_contract",
      this.packageHash!,
      LIQUIDITY_GAUGE_V3_INSTALL_PAYMENT_AMOUNT!,
      LIQUIDITY_GAUGE_V3_PROXY_WASM_PATH!
    );
  
    console.log(`... rewardContractSessionCode Function deployHash: ${rewardContractSessionCodeDeployHash}`);
  
    await getDeploy(NODE_ADDRESS!, rewardContractSessionCodeDeployHash);
  
    console.log(`... rewardContractSessionCode Function called successfully through sessionCode.`);
  
  };

  lastClaimSessionCode = async () => {
    const lastClaimSessionCodeDeployHash = await this.liquidityGaugeV3.lastClaimSessionCode(
      KEYS,
      "last_claim",
      this.packageHash!,
      LIQUIDITY_GAUGE_V3_INSTALL_PAYMENT_AMOUNT!,
      LIQUIDITY_GAUGE_V3_PROXY_WASM_PATH!
    );
  
    console.log(`... lastClaimSessionCode Function deployHash: ${lastClaimSessionCodeDeployHash}`);
  
    await getDeploy(NODE_ADDRESS!, lastClaimSessionCodeDeployHash);
  
    console.log(`... lastClaimSessionCode Function called successfully through sessionCode.`);
  
  };

  claimedRewardSessionCode = async (token:string) => {
    const claimedRewardSessionCodeDeployHash = await this.liquidityGaugeV3.claimedRewardSessionCode(
      KEYS,
      "claimed_rewards",
      this.packageHash!,
      KEYS.publicKey!,
      token!,
      LIQUIDITY_GAUGE_V3_INSTALL_PAYMENT_AMOUNT!,
      LIQUIDITY_GAUGE_V3_PROXY_WASM_PATH!
    );
  
    console.log(`... claimedRewardSessionCode Function deployHash: ${claimedRewardSessionCodeDeployHash}`);
  
    await getDeploy(NODE_ADDRESS!, claimedRewardSessionCodeDeployHash);
  
    console.log(`... claimedRewardSessionCode Function called successfully through sessionCode.`);
  
  };

  claimableRewardSessionCode = async (token:string) => {
    const claimableRewardSessionCodeDeployHash = await this.liquidityGaugeV3.claimableRewardSessionCode(
      KEYS,
      "claimable_reward",
      this.packageHash!,
      KEYS.publicKey!,
      token!,
      LIQUIDITY_GAUGE_V3_INSTALL_PAYMENT_AMOUNT!,
      LIQUIDITY_GAUGE_V3_PROXY_WASM_PATH!
    );
  
    console.log(`... claimableRewardSessionCode Function deployHash: ${claimableRewardSessionCodeDeployHash}`);
  
    await getDeploy(NODE_ADDRESS!, claimableRewardSessionCodeDeployHash);
  
    console.log(`... claimableRewardSessionCode Function called successfully through sessionCode.`);
  
  };

  claimableRewardWriteSessionCode = async (token:string) => {
    const claimableRewardWriteSessionCodeDeployHash = await this.liquidityGaugeV3.claimableRewardWriteSessionCode(
      KEYS,
      "claimable_reward_write",
      this.packageHash!,
      KEYS.publicKey!,
      token!,
      LIQUIDITY_GAUGE_V3_INSTALL_PAYMENT_AMOUNT!,
      LIQUIDITY_GAUGE_V3_PROXY_WASM_PATH!
    );
    console.log(`... claimableRewardWriteSessionCode Function deployHash: ${claimableRewardWriteSessionCodeDeployHash}`);
  
    await getDeploy(NODE_ADDRESS!, claimableRewardWriteSessionCodeDeployHash);
  
    console.log(`... claimableRewardWriteSessionCode Function called successfully through sessionCode.`);
  
  };

  transferSessionCode = async (recipient:string, amount:string) => {
    const transferSessionCodeDeployHash = await this.liquidityGaugeV3.transferSessionCode(
      KEYS,
      "transfer",
      this.packageHash!,
      recipient!,
      amount!,
      LIQUIDITY_GAUGE_V3_INSTALL_PAYMENT_AMOUNT!,
      LIQUIDITY_GAUGE_V3_PROXY_WASM_PATH!
    );
  
    console.log(`... transferSessionCode Function deployHash: ${transferSessionCodeDeployHash}`);
  
    await getDeploy(NODE_ADDRESS!, transferSessionCodeDeployHash);
  
    console.log(`... transferSessionCode Function called successfully through sessionCode.`);
  
  };

  transferFromSessionCode = async (recipient:string, amount:string) => {
    const transferFromSessionCodeDeployHash = await this.liquidityGaugeV3.transferFromSessionCode(
      KEYS,
      "transfer_from",
      this.packageHash!,
      KEYS.publicKey!,
      recipient!,
      amount!,
      LIQUIDITY_GAUGE_V3_INSTALL_PAYMENT_AMOUNT!,
      LIQUIDITY_GAUGE_V3_PROXY_WASM_PATH!
    );
  
    console.log(`... transferFromSessionCode Function deployHash: ${transferFromSessionCodeDeployHash}`);
  
    await getDeploy(NODE_ADDRESS!, transferFromSessionCodeDeployHash);
  
    console.log(`... transferFromSessionCode Function called successfully through sessionCode.`);
  
  };

  increaseAllowanceSessionCode = async (spender:string, amount:string) => {
    const increaseAllowanceSessionCodeDeployHash = await this.liquidityGaugeV3.increaseAllowanceSessionCode(
      KEYS,
      "increase_allowance",
      this.packageHash!,
      spender!,
      amount!,
      LIQUIDITY_GAUGE_V3_INSTALL_PAYMENT_AMOUNT!,
      LIQUIDITY_GAUGE_V3_PROXY_WASM_PATH!
    );
  
    console.log(`... increaseAllowanceSessionCode Function deployHash: ${increaseAllowanceSessionCodeDeployHash}`);
  
    await getDeploy(NODE_ADDRESS!, increaseAllowanceSessionCodeDeployHash);
  
    console.log(`... increaseAllowanceSessionCode Function called successfully through sessionCode.`);
  
  };

  decreaseAllowanceSessionCode = async (spender:string, amount:string) => {
    const decreaseAllowanceSessionCodeDeployHash = await this.liquidityGaugeV3.decreaseAllowanceSessionCode(
      KEYS,
      "decrease_allowance",
      this.packageHash!,
      spender!,
      amount!,
      LIQUIDITY_GAUGE_V3_INSTALL_PAYMENT_AMOUNT!,
      LIQUIDITY_GAUGE_V3_PROXY_WASM_PATH!
    );
  
    console.log(`... decreaseAllowanceSessionCode Function deployHash: ${decreaseAllowanceSessionCodeDeployHash}`);
  
    await getDeploy(NODE_ADDRESS!, decreaseAllowanceSessionCodeDeployHash);
  
    console.log(`... decreaseAllowanceSessionCode Function called successfully through sessionCode.`);
  
  };
}

