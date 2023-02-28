import { config } from "dotenv";
config();
import { GaugeControllerClient, utils, constants } from "../src";
import { getDeploymentCount,updateDeploymentCount, getDeploy } from "./utils";

import {
  Keys,
} from "casper-js-sdk";
import * as fs from 'fs';

const {
  NODE_ADDRESS,
  EVENT_STREAM_ADDRESS,
  CHAIN_NAME,
  GAUGE_CONTROLLER_WASM_PATH,
  GAUGE_CONTROLLER_MASTER_KEY_PAIR_PATH,
  GAUGE_CONTROLLER_INSTALL_PAYMENT_AMOUNT,
  GAUGE_CONTROLLER_CONTRACT_NAME,
  GAUGE_CONTROLLER_TOKEN,
  GAUGE_CONTROLLER_VOTING_ESCROW,
  GAUGE_CONTROLLER_CONTRACT_PACKAGE,
  GAUGE_CONTROLLER_PAYMENT_AMOUNT,
  GAUGE_CONTROLLER_PURSE_PROXY_WASM_PATH
} = process.env;

const KEYS = Keys.Ed25519.parseKeyFiles(
  `${GAUGE_CONTROLLER_MASTER_KEY_PAIR_PATH}/public_key.pem`,
  `${GAUGE_CONTROLLER_MASTER_KEY_PAIR_PATH}/secret_key.pem`
);

export const deployGaugeController = async (token:string, votingEscrowPackageHash:string) => {
  const gaugeController = new GaugeControllerClient(
    NODE_ADDRESS!,
    CHAIN_NAME!,
    EVENT_STREAM_ADDRESS!
  );
  let contractName = GAUGE_CONTROLLER_CONTRACT_NAME + getDeploymentCount();
  updateDeploymentCount();
  const installDeployHash = await gaugeController.install(
    KEYS,
    token!,
    votingEscrowPackageHash!,
    contractName!,
    GAUGE_CONTROLLER_INSTALL_PAYMENT_AMOUNT!,
    GAUGE_CONTROLLER_WASM_PATH!
  );

  console.log(`... Contract installation deployHash: ${installDeployHash}`);

  await getDeploy(NODE_ADDRESS!, installDeployHash);

  console.log(`... Contract installed successfully.`);

  let accountInfo = await utils.getAccountInfo(NODE_ADDRESS!, KEYS.publicKey);

  console.log(`... Account Info: `);
  console.log(JSON.stringify(accountInfo, null, 2));

  const contractHash = await utils.getAccountNamedKeyValue(
    accountInfo,
    `${GAUGE_CONTROLLER_CONTRACT_NAME!}_contract_hash`
  );
  fs.writeFileSync('contractHash',contractHash,{encoding:'utf8',flag:'w'});
  console.log(`... Contract Hash: ${contractHash}`);

  const packageHash = await utils.getAccountNamedKeyValue(
    accountInfo,
    `${GAUGE_CONTROLLER_CONTRACT_NAME!}_package_hash`
  );
  fs.writeFileSync('packageHash',packageHash,{encoding:'utf8',flag:'w'});
  console.log(`... Package Hash: ${packageHash}`);
}

export class GaugeControllerSessionCode {
  packageHash: string;
  gaugeController: GaugeControllerClient;
  constructor() {
    let _packageHash = fs.readFileSync('packageHash','utf8');
    this.packageHash = _packageHash.split("-").pop()!;
    this.gaugeController = new GaugeControllerClient(
      NODE_ADDRESS!,
      CHAIN_NAME!,
      EVENT_STREAM_ADDRESS!
    );
  }

  getGaugeWeight = async (addr : string) => {
    const installDeployHash = await this.gaugeController.installSessionCodeParamKeyAddr(
      KEYS,
      this.packageHash!,
      "get_gauge_weight",
      addr,
      GAUGE_CONTROLLER_PAYMENT_AMOUNT!,
      GAUGE_CONTROLLER_PURSE_PROXY_WASM_PATH!
    );
  
    console.log(`... get_gauge_weight Function deployHash: ${installDeployHash}`);
  
    await getDeploy(NODE_ADDRESS!, installDeployHash);
  
    console.log(`... get_gauge_weight Function called successfully through sessionCode.`);
  
  };

  gaugeTypes = async (addr : string) => {
    const installDeployHash = await this.gaugeController.installSessionCodeParamKeyAddr(
      KEYS,
      this.packageHash!,
      "gauge_types",
      addr,
      GAUGE_CONTROLLER_PAYMENT_AMOUNT!,
      GAUGE_CONTROLLER_PURSE_PROXY_WASM_PATH!
    );
  
    console.log(`... gauge_types Function deployHash: ${installDeployHash}`);
  
    await getDeploy(NODE_ADDRESS!, installDeployHash);
  
    console.log(`... gauge_types Function called successfully through sessionCode.`);
  
  };

  gaugeRelativeWeight = async (addr : string) => {
    const installDeployHash = await this.gaugeController.installSessionCodeParamKeyAddr(
      KEYS,
      this.packageHash!,
      "gauge_relative_weight",
      addr,
      GAUGE_CONTROLLER_PAYMENT_AMOUNT!,
      GAUGE_CONTROLLER_PURSE_PROXY_WASM_PATH!
    );
  
    console.log(`... gauge_relative_weight Function deployHash: ${installDeployHash}`);
  
    await getDeploy(NODE_ADDRESS!, installDeployHash);
  
    console.log(`... gauge_relative_weight Function called successfully through sessionCode.`);
  
  };

  gaugeRelativeWeightWrite = async (addr : string) => {

    const installDeployHash = await this.gaugeController.installSessionCodeParamKeyAddr(
      KEYS,
      this.packageHash!,
      "gauge_relative_weight_write",
      addr,
      GAUGE_CONTROLLER_PAYMENT_AMOUNT!,
      GAUGE_CONTROLLER_PURSE_PROXY_WASM_PATH!
    );
  
    console.log(`... gauge_relative_weight_write Function deployHash: ${installDeployHash}`);
  
    await getDeploy(NODE_ADDRESS!, installDeployHash);
  
    console.log(`... gauge_relative_weight_write Function called successfully through sessionCode.`);
  
  };

  getTypeWeight = async (type_id : string) => {

    const installDeployHash = await this.gaugeController.installSessionCodeParamU128TypeId(
      KEYS,
      this.packageHash!,
      "get_type_weight",
      type_id,
      GAUGE_CONTROLLER_PAYMENT_AMOUNT!,
      GAUGE_CONTROLLER_PURSE_PROXY_WASM_PATH!
    );
  
    console.log(`... get_type_weight Function deployHash: ${installDeployHash}`);
  
    await getDeploy(NODE_ADDRESS!, installDeployHash);
  
    console.log(`... get_type_weight Function called successfully through sessionCode.`);
  
  };

  getWeightsSumPerType = async (type_id : string) => {

    const installDeployHash = await this.gaugeController.installSessionCodeParamU128TypeId(
      KEYS,
      this.packageHash!,
      "get_weights_sum_per_type",
      type_id,
      GAUGE_CONTROLLER_PAYMENT_AMOUNT!,
      GAUGE_CONTROLLER_PURSE_PROXY_WASM_PATH!
    );
  
    console.log(`... get_weights_sum_per_type Function deployHash: ${installDeployHash}`);
  
    await getDeploy(NODE_ADDRESS!, installDeployHash);
  
    console.log(`... get_weights_sum_per_type Function called successfully through sessionCode.`);
  
  };

  getTotalWeight = async () => {
    const installDeployHash = await this.gaugeController.installSessionCodeNoParam(
      KEYS,
      this.packageHash!,
      "get_total_weight",
      GAUGE_CONTROLLER_PAYMENT_AMOUNT!,
      GAUGE_CONTROLLER_PURSE_PROXY_WASM_PATH!
    );
  
    console.log(`... get_total_weight Function deployHash: ${installDeployHash}`);
  
    await getDeploy(NODE_ADDRESS!, installDeployHash);
  
    console.log(`... get_total_weight Function called successfully through sessionCode.`);
  
  };
}


