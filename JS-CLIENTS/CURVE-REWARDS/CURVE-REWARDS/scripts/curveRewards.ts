import { config } from "dotenv";
config();
import { CURVEREWARDSClient, utils } from "../src";
import { getDeploymentCount,updateDeploymentCount,getDeploy } from "./utils";

import {
  Keys,
} from "casper-js-sdk";
import * as fs from 'fs';

const {
  NODE_ADDRESS,
  EVENT_STREAM_ADDRESS,
  CHAIN_NAME,
  CURVE_REWARDS_MASTER_KEY_PAIR_PATH,
  CURVE_REWARDS_TOKEN,
  CURVE_REWARDS_REWARD,
  CURVE_REWARDS_CONTRACT_NAME,
  CURVE_REWARDS_INSTALL_PAYMENT_AMOUNT,
  CURVE_REWARDS_WASM_PATH,
  CURVE_REWARDS_PROXY_WASM_PATH,
  CURVE_REWARDS_PACKAGE_HASH
,
} = process.env;

const KEYS = Keys.Ed25519.parseKeyFiles(
  `${CURVE_REWARDS_MASTER_KEY_PAIR_PATH}/public_key.pem`,
  `${CURVE_REWARDS_MASTER_KEY_PAIR_PATH}/secret_key.pem`
);

export const deployCurveRewards = async (tokenPackageHash:string, rewardPackageHash:string) => {
  const curveRewards = new CURVEREWARDSClient(
    NODE_ADDRESS!,
    CHAIN_NAME!,
    EVENT_STREAM_ADDRESS!
  );

  let contractName = CURVE_REWARDS_CONTRACT_NAME + getDeploymentCount();
  updateDeploymentCount();
  const installDeployHash = await curveRewards.install(
    KEYS,
    tokenPackageHash!,
    rewardPackageHash!,
    contractName!,
    CURVE_REWARDS_INSTALL_PAYMENT_AMOUNT!,
    CURVE_REWARDS_WASM_PATH!,
  );

  console.log(`... Contract installation deployHash: ${installDeployHash}`);

  await getDeploy(NODE_ADDRESS!, installDeployHash);

  console.log(`... Contract deployed successfully.`);

  let accountInfo = await utils.getAccountInfo(NODE_ADDRESS!, KEYS.publicKey);

  console.log(`... Account Info: `);
  console.log(JSON.stringify(accountInfo, null, 2));

  const contractHash = await utils.getAccountNamedKeyValue(
    accountInfo,
    `${contractName!}_contract_hash`
  );
  fs.writeFileSync('contractHash',contractHash,{encoding:'utf8',flag:'w'});

  console.log(`... Contract Hash: ${contractHash}`);

  const packageHash = await utils.getAccountNamedKeyValue(
    accountInfo,
    `${contractName!}_package_hash`
  );

  fs.writeFileSync('packageHash',packageHash,{encoding:'utf8',flag:'w'});
  console.log(`... Package Hash: ${packageHash}`);
};

class CurveRewardsSessionCode {
  packageHash: string;
  curveRewards: CURVEREWARDSClient;
  constructor() {
    let _packageHash = fs.readFileSync('packageHash','utf8');
    this.packageHash = _packageHash.split("-").pop()!;
    this.curveRewards = new CURVEREWARDSClient(
      NODE_ADDRESS!,
      CHAIN_NAME!,
      EVENT_STREAM_ADDRESS!
    );
  }

   lastTimeRewardApplicableSessionCode = async () => {
  
    const lastTimeRewardApplicableJsClientsessioncodeDeployHash = await this.curveRewards.lastTimeRewardApplicableJsClientsessioncode(
      KEYS,
      this.packageHash!,
      "last_time_reward_applicable",
      CURVE_REWARDS_INSTALL_PAYMENT_AMOUNT!,
      CURVE_REWARDS_PROXY_WASM_PATH!
    );
  
    console.log(`... lastTimeRewardApplicableJsClientsessioncode Function deployHash: ${lastTimeRewardApplicableJsClientsessioncodeDeployHash}`);
  
    await getDeploy(NODE_ADDRESS!, lastTimeRewardApplicableJsClientsessioncodeDeployHash);
  
    console.log(`... lastTimeRewardApplicableJsClientsessioncode Function called successfully through sessionCode.`);
  
  };

    rewardPerTokenSessionCode = async () => {
    const rewardPerTokenJsClientsessioncodeDeployHash = await this.curveRewards.rewardPerTokenJsClientsessioncode(
      KEYS,
      this.packageHash!,
      "reward_per_token",
      CURVE_REWARDS_INSTALL_PAYMENT_AMOUNT!,
      CURVE_REWARDS_PROXY_WASM_PATH!
    );
    console.log(`... rewardPerTokenJsClientsessioncode Function deployHash: ${rewardPerTokenJsClientsessioncodeDeployHash}`);

    await getDeploy(NODE_ADDRESS!, rewardPerTokenJsClientsessioncodeDeployHash);
  
    console.log(`... rewardPerTokenJsClientsessioncode Function called successfully through sessionCode.`);
  
  };

   earnedSessionCode = async () => {
  
    const earnedJsClientsessioncodeDeployHash = await this.curveRewards.earnedJsClientsessioncode(
      KEYS,
      this.packageHash!,
      "earned",
      KEYS.publicKey,
      CURVE_REWARDS_INSTALL_PAYMENT_AMOUNT!,
      CURVE_REWARDS_PROXY_WASM_PATH!
    );
  
    console.log(`... earnedJsClientsessioncode Function deployHash: ${earnedJsClientsessioncodeDeployHash}`);
  
    await getDeploy(NODE_ADDRESS!, earnedJsClientsessioncodeDeployHash);
  
    console.log(`... earnedJsClientsessioncode Function called successfully through sessionCode.`);
  
  };
  
} 

export{CurveRewardsSessionCode};
