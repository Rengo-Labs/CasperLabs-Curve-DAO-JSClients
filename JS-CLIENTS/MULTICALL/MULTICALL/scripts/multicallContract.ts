import { config } from "dotenv";
config();
import { MULTICALLClient, utils } from "../src";
import { getDeploymentCount,updateDeploymentCount,getDeploy } from "./utils";

import {
  Keys,
} from "casper-js-sdk";

import * as fs from 'fs';

const {
  NODE_ADDRESS,
  EVENT_STREAM_ADDRESS,
  CHAIN_NAME,
  MULTICALL_MASTER_KEY_PAIR_PATH,
  MULTICALL_CONTRACT_NAME,
  MULTICALL_INSTALL_PAYMENT_AMOUNT,
  MULTICALL_WASM_PATH,
  MULTICALL_PACKAGE_HASH,
  MULTICALL_PROXY_WASM_PATH
} = process.env;

const KEYS = Keys.Ed25519.parseKeyFiles(
  `${MULTICALL_MASTER_KEY_PAIR_PATH}/public_key.pem`,
  `${MULTICALL_MASTER_KEY_PAIR_PATH}/secret_key.pem`
);

export const deployMulticall = async () => {
  const multicall = new MULTICALLClient(
    NODE_ADDRESS!,
    CHAIN_NAME!,
    EVENT_STREAM_ADDRESS!
  );

  let contractName = MULTICALL_CONTRACT_NAME + getDeploymentCount();
  updateDeploymentCount();

  const installDeployHash = await multicall.install(
    KEYS,
    contractName!,
    MULTICALL_INSTALL_PAYMENT_AMOUNT!,
    MULTICALL_WASM_PATH!
  );

  console.log(`... Contract installation deployHash: ${installDeployHash}`);

  await getDeploy(NODE_ADDRESS!, installDeployHash);

  console.log(`... Contract installed successfully.`);

  let accountInfo = await utils.getAccountInfo(NODE_ADDRESS!, KEYS.publicKey);

  console.log(`... Account Info: `);
  console.log(JSON.stringify(accountInfo, null, 2));

  const contractHash = await utils.getAccountNamedKeyValue(
    accountInfo,
    `${MULTICALL_CONTRACT_NAME!}_contract_hash`
  );
  fs.writeFileSync('contractHash',contractHash,{encoding:'utf8',flag:'w'});
  console.log(`... Contract Hash: ${contractHash}`);

  const packageHash = await utils.getAccountNamedKeyValue(
    accountInfo,
    `${MULTICALL_CONTRACT_NAME!}_package_hash`
  );
  fs.writeFileSync('packageHash',packageHash,{encoding:'utf8',flag:'w'});
  console.log(`... Package Hash: ${packageHash}`);
};

export class MulticallSessionCode {
  packageHash: string;
  multicall: MULTICALLClient;
  constructor() {
    let _packageHash = fs.readFileSync('packageHash','utf8');
    this.packageHash = _packageHash.split("-").pop()!;
    this.multicall = new MULTICALLClient(
      NODE_ADDRESS!,
      CHAIN_NAME!,
      EVENT_STREAM_ADDRESS!
    );
  }

  getCurrentBlockTimestampsessioncode = async () => {
    const getCurrentBlockTimestampsessioncodeDeployHash = await this.multicall.getCurrentBlockTimestampsessioncode(
      KEYS,
      "get_current_block_timestamp",
      this.packageHash!,
      MULTICALL_INSTALL_PAYMENT_AMOUNT!,
      MULTICALL_PROXY_WASM_PATH!
    );
  
    console.log(`... getCurrentBlockTimestampsessioncode Function deployHash: ${getCurrentBlockTimestampsessioncodeDeployHash}`);
  
    await getDeploy(NODE_ADDRESS!, getCurrentBlockTimestampsessioncodeDeployHash);
  
    console.log(`... getCurrentBlockTimestampsessioncode Function called successfully through sessionCode.`);
  
  };
}



//getCurrentBlockTimestampsessioncode();