import { config } from "dotenv";
config();
import { ERC20CRVClient, utils } from "../src";
import { getDeploymentCount,updateDeploymentCount, getDeploy } from "./utils";

import {
  Keys,
} from "casper-js-sdk";
import * as fs from 'fs';

const {
  NODE_ADDRESS,
  EVENT_STREAM_ADDRESS,
  CHAIN_NAME,
  ERC20CRV_WASM_PATH,
  ERC20CRV_MASTER_KEY_PAIR_PATH,
  ERC20CRV_INSTALL_PAYMENT_AMOUNT,
  ERC20CRV_TOKEN_NAME,
  ERC20CRV_TOKEN_SYMBOL,
  ERC20CRV_DECIMALS,
  ERC20CRV_CONTRACT_NAME,
  ERC20CRV_PACKAGE_HASH,
  ERC20CRV_PROXY_WASM_PATH,
  ERC20CRV_START,
  ERC20CRV_END,
  ERC20CRV_AMOUNT
} = process.env;

const KEYS = Keys.Ed25519.parseKeyFiles(
  `${ERC20CRV_MASTER_KEY_PAIR_PATH}/public_key.pem`,
  `${ERC20CRV_MASTER_KEY_PAIR_PATH}/secret_key.pem`
);

export const deployErc20Crv = async (name:string, symbol:string,decimal:string) => {
  const erc20Crv = new ERC20CRVClient(
    NODE_ADDRESS!,
    CHAIN_NAME!,
    EVENT_STREAM_ADDRESS!
  );
  let contractName = ERC20CRV_CONTRACT_NAME + getDeploymentCount();
  updateDeploymentCount();
  const installDeployHash = await erc20Crv.install(
    KEYS,
    name!,
    symbol!,
    decimal!,
    contractName!,
    ERC20CRV_INSTALL_PAYMENT_AMOUNT!,
    ERC20CRV_WASM_PATH!
  );
  console.log(`... Contract installation deployHash: ${installDeployHash}`);

  await getDeploy(NODE_ADDRESS!, installDeployHash);

  console.log(`... Contract installed successfully.`);

  let accountInfo = await utils.getAccountInfo(NODE_ADDRESS!, KEYS.publicKey);

  console.log(`... Account Info: `);
  console.log(JSON.stringify(accountInfo, null, 2));

  const contractHash = await utils.getAccountNamedKeyValue(
    accountInfo,
    `${ERC20CRV_CONTRACT_NAME!}_contract_hash`
  );
  fs.writeFileSync('contractHash',contractHash,{encoding:'utf8',flag:'w'});
  console.log(`... Contract Hash: ${contractHash}`);

  const packageHash = await utils.getAccountNamedKeyValue(
    accountInfo,
    `${ERC20CRV_CONTRACT_NAME!}_package_hash`
  );
  fs.writeFileSync('packageHash',packageHash,{encoding:'utf8',flag:'w'});
  console.log(`... Package Hash: ${packageHash}`);

}

export class Erc20CrvSessionCode {
  packageHash: string;
  erc20Crv: ERC20CRVClient;
  constructor() {
    let _packageHash = fs.readFileSync('packageHash','utf8');
    this.packageHash = _packageHash.split("-").pop()!;
    this.erc20Crv = new ERC20CRVClient(
      NODE_ADDRESS!,
      CHAIN_NAME!,
      EVENT_STREAM_ADDRESS!
    );
  }

  startEpochTimeWritesessioncode =async () => {
    const startEpochTimeWritesessioncodeDeployHash = await this.erc20Crv.startEpochTimeWritesessioncode(
      KEYS,
      "start_epoch_time_write",
      this.packageHash!,
      ERC20CRV_INSTALL_PAYMENT_AMOUNT!,
      ERC20CRV_PROXY_WASM_PATH!
    );
  
    console.log(`... startEpochTimeWritesessioncode Function deployHash: ${startEpochTimeWritesessioncodeDeployHash}`);
  
    await getDeploy(NODE_ADDRESS!, startEpochTimeWritesessioncodeDeployHash);
  
    console.log(`... startEpochTimeWritesessioncode Function called successfully through sessionCode.`);
  }

  futureEpochTimeWritesessioncode =async () => {
    const futureEpochTimeWritesessioncodeDeployHash = await this.erc20Crv.futureEpochTimeWritesessioncode(
      KEYS,
      "future_epoch_time_write",
      this.packageHash!,
      ERC20CRV_INSTALL_PAYMENT_AMOUNT!,
      ERC20CRV_PROXY_WASM_PATH!
    );
  
    console.log(`... futureEpochTimeWritesessioncode Function deployHash: ${futureEpochTimeWritesessioncodeDeployHash}`);
  
    await getDeploy(NODE_ADDRESS!, futureEpochTimeWritesessioncodeDeployHash);
  
    console.log(`... futureEpochTimeWritesessioncode Function called successfully through sessionCode.`);
  }

  availableSupplysessioncode = async () => {
    const availableSupplysessioncodeDeployHash = await this.erc20Crv.availableSupplysessioncode(
      KEYS,
      "available_supply",
      this.packageHash!,
      ERC20CRV_INSTALL_PAYMENT_AMOUNT!,
      ERC20CRV_PROXY_WASM_PATH!
    );
  
    console.log(`... availableSupplysessioncode Function deployHash: ${availableSupplysessioncodeDeployHash}`);
  
    await getDeploy(NODE_ADDRESS!, availableSupplysessioncodeDeployHash);
  
    console.log(`... availableSupplysessioncode Function called successfully through sessionCode.`);
  
  };

  mintableInTimeframesessioncode = async (start:string,end:string) => {
    const mintableInTimeframesessioncodeDeployHash = await this.erc20Crv.mintableInTimeframesessioncode(
      KEYS,
      "mintable_in_timeframe",
      this.packageHash!,
      start!,
      end!,
      ERC20CRV_INSTALL_PAYMENT_AMOUNT!,
      ERC20CRV_PROXY_WASM_PATH!
    );
  
    console.log(`... mintableInTimeframesessioncode Function deployHash: ${mintableInTimeframesessioncodeDeployHash}`);
  
    await getDeploy(NODE_ADDRESS!, mintableInTimeframesessioncodeDeployHash);
  
    console.log(`... mintableInTimeframesessioncode Function called successfully through sessionCode.`);
  
  };

  mintsessioncode = async (amount:string) => {
    const mintsessioncodeDeployHash = await this.erc20Crv.mintsessioncode(
      KEYS,
      "mint",
      this.packageHash!,
      KEYS.publicKey!,
      amount!,
      ERC20CRV_INSTALL_PAYMENT_AMOUNT!,
      ERC20CRV_PROXY_WASM_PATH!
    );
  
    console.log(`... mintsessioncode Function deployHash: ${mintsessioncodeDeployHash}`);
  
    await getDeploy(NODE_ADDRESS!, mintsessioncodeDeployHash);
  
    console.log(`... mintsessioncode Function called successfully through sessionCode.`);
  
  };

}



