import { config } from "dotenv";
config();
import { MINTERClient, utils, constants } from "../src";
import {  getDeploymentCount,updateDeploymentCount,getDeploy } from "./utils";

import {
  Keys,
} from "casper-js-sdk";

import * as fs from 'fs';

const {
  NODE_ADDRESS,
  EVENT_STREAM_ADDRESS,
  CHAIN_NAME,
  MINTER_WASM_PATH,
  MINTER_MASTER_KEY_PAIR_PATH,
  MINTER_INSTALL_PAYMENT_AMOUNT,
  MINTER_CONTRACT_NAME,
  MINTER_TOKEN,
  MINTER_CONTROLLER
} = process.env;

const KEYS = Keys.Ed25519.parseKeyFiles(
  `${MINTER_MASTER_KEY_PAIR_PATH}/public_key.pem`,
  `${MINTER_MASTER_KEY_PAIR_PATH}/secret_key.pem`
);

export const deployMinter = async (token:string,controller:string) => {
  const erc20 = new MINTERClient(
    NODE_ADDRESS!,
    CHAIN_NAME!,
    EVENT_STREAM_ADDRESS!
  );
  let contractName = MINTER_CONTRACT_NAME + getDeploymentCount();
  updateDeploymentCount();

  const installDeployHash = await erc20.install(
    KEYS,
    token!,
    controller!,
    contractName!,
    MINTER_INSTALL_PAYMENT_AMOUNT!,
    MINTER_WASM_PATH!
  );

  console.log(`... Contract installation deployHash: ${installDeployHash}`);

  await getDeploy(NODE_ADDRESS!, installDeployHash);

  console.log(`... Contract installed successfully.`);

  let accountInfo = await utils.getAccountInfo(NODE_ADDRESS!, KEYS.publicKey);

  console.log(`... Account Info: `);
  console.log(JSON.stringify(accountInfo, null, 2));

  const contractHash = await utils.getAccountNamedKeyValue(
    accountInfo,
    `${MINTER_CONTRACT_NAME!}_contract_hash`
  );
  fs.writeFileSync('contractHash',contractHash,{encoding:'utf8',flag:'w'});
  console.log(`... Contract Hash: ${contractHash}`);

  const packageHash = await utils.getAccountNamedKeyValue(
    accountInfo,
    `${MINTER_CONTRACT_NAME!}_package_hash`
  );
  fs.writeFileSync('packageHash',packageHash,{encoding:'utf8',flag:'w'});
  console.log(`... Package Hash: ${packageHash}`);
};
