import { config } from "dotenv";
config();
import { VESTINGESCROWFACTORYClient, utils } from "../src";
import { getDeploymentCount,updateDeploymentCount, getDeploy } from "./utils";

import {
  Keys,
} from "casper-js-sdk";

import * as fs from 'fs';

const {
  NODE_ADDRESS,
  EVENT_STREAM_ADDRESS,
  CHAIN_NAME,
  VESTING_ESCROW_FACTORY_WASM_PATH,
  VESTING_ESCROW_FACTORY_MASTER_KEY_PAIR_PATH,
  VESTING_ESCROW_FACTORY_INSTALL_PAYMENT_AMOUNT,
  VESTING_ESCROW_FACTORY_TARGET,
  VESTING_ESCROW_FACTORY_CONTRACT_NAME,
  VESTING_ESCROW_FACTORY_PROXY_WASM_PATH
} = process.env;

const KEYS = Keys.Ed25519.parseKeyFiles(
  `${VESTING_ESCROW_FACTORY_MASTER_KEY_PAIR_PATH}/public_key.pem`,
  `${VESTING_ESCROW_FACTORY_MASTER_KEY_PAIR_PATH}/secret_key.pem`
);

export const deployVestingEscrowFactory = async (target:string) => {
  const vestingEscrowFactory = new VESTINGESCROWFACTORYClient(
    NODE_ADDRESS!,
    CHAIN_NAME!,
    EVENT_STREAM_ADDRESS!
  );
  let contractName = VESTING_ESCROW_FACTORY_CONTRACT_NAME + getDeploymentCount();
  updateDeploymentCount();

  const installDeployHash = await vestingEscrowFactory.install(
    KEYS,
    target!,
    KEYS.publicKey,
    contractName!,
    VESTING_ESCROW_FACTORY_INSTALL_PAYMENT_AMOUNT!,
    VESTING_ESCROW_FACTORY_WASM_PATH!

  );

  console.log(`... Contract installation deployHash: ${installDeployHash}`);

  await getDeploy(NODE_ADDRESS!, installDeployHash);

  console.log(`... Contract installed successfully.`);

  let accountInfo = await utils.getAccountInfo(NODE_ADDRESS!, KEYS.publicKey);

  console.log(`... Account Info: `);
  console.log(JSON.stringify(accountInfo, null, 2));

  const contractHash = await utils.getAccountNamedKeyValue(
    accountInfo,
    `${VESTING_ESCROW_FACTORY_CONTRACT_NAME!}_contract_hash`
  );
  fs.writeFileSync('contractHash',contractHash,{encoding:'utf8',flag:'w'});
  console.log(`... Contract Hash: ${contractHash}`);

  const packageHash = await utils.getAccountNamedKeyValue(
    accountInfo,
    `${VESTING_ESCROW_FACTORY_CONTRACT_NAME!}_package_hash`
  );
  fs.writeFileSync('packageHash',packageHash,{encoding:'utf8',flag:'w'});
  console.log(`... Package Hash: ${packageHash}`);
};

export class VestingEscrowFactorySessionCode {
  packageHash: string;
  vestingEscrowFactory: VESTINGESCROWFACTORYClient;
  constructor() {
    let _packageHash = fs.readFileSync('packageHash','utf8');
    this.packageHash = _packageHash.split("-").pop()!;
    this.vestingEscrowFactory = new VESTINGESCROWFACTORYClient(
      NODE_ADDRESS!,
      CHAIN_NAME!,
      EVENT_STREAM_ADDRESS!
    );
  }

  vestedOfSessionCode = async (recipient:string) => {
    const vestedOfSessionCodeDeployHash = await this.vestingEscrowFactory.vestedOfSessionCode(
      KEYS,
      "vested_of",
      this.packageHash!,
      recipient!,
      VESTING_ESCROW_FACTORY_INSTALL_PAYMENT_AMOUNT!,
      VESTING_ESCROW_FACTORY_PROXY_WASM_PATH!
    );
  
    console.log(`... vestedOfSessionCode Function deployHash: ${vestedOfSessionCodeDeployHash}`);
  
    let result = await getDeploy(NODE_ADDRESS!, vestedOfSessionCodeDeployHash);
  
    console.log(`... vestedOfSessionCode Function called successfully through sessionCode.`);

    console.log("vestedOfSessionCode Function Result: ",result);
  
  };

  balanceOfSessionCode = async (recipient:string) => {
    const balanceOfSessionCodeDeployHash = await this.vestingEscrowFactory.balanceOfSessionCode(
      KEYS,
      "balance_of",
      this.packageHash!,
      recipient!,
      VESTING_ESCROW_FACTORY_INSTALL_PAYMENT_AMOUNT!,
      VESTING_ESCROW_FACTORY_PROXY_WASM_PATH!
    );
  
    console.log(`... balanceOfSessionCode Function deployHash: ${balanceOfSessionCodeDeployHash}`);
  
    let result = await getDeploy(NODE_ADDRESS!, balanceOfSessionCodeDeployHash);
  
    console.log(`... balanceOfSessionCode Function called successfully through sessionCode.`);

    console.log("balanceOfSessionCode Function Result: ",result);
  
  };

  vestedSupplySessionCode = async () => {
    const vestedSupplySessionCodeDeployHash = await this.vestingEscrowFactory.vestedSupplySessionCode(
      KEYS,
      "vested_supply",
      this.packageHash!,
      VESTING_ESCROW_FACTORY_INSTALL_PAYMENT_AMOUNT!,
      VESTING_ESCROW_FACTORY_PROXY_WASM_PATH!
    );
  
    console.log(`... vestedSupplySessionCode Function deployHash: ${vestedSupplySessionCodeDeployHash}`);
  
    await getDeploy(NODE_ADDRESS!, vestedSupplySessionCodeDeployHash);
  
    console.log(`... vestedSupplySessionCode Function called successfully through sessionCode.`);
  
  };

  lockedSupplySessionCode = async () => {
    const lockedSupplySessionCodeDeployHash = await this.vestingEscrowFactory.lockedSupplySessionCode(
      KEYS,
      "locked_supply",
      this.packageHash!,
      VESTING_ESCROW_FACTORY_INSTALL_PAYMENT_AMOUNT!,
      VESTING_ESCROW_FACTORY_PROXY_WASM_PATH!
    );
  
    console.log(`... lockedSupplySessionCode Function deployHash: ${lockedSupplySessionCodeDeployHash}`);
  
    await getDeploy(NODE_ADDRESS!, lockedSupplySessionCodeDeployHash);
  
    console.log(`... lockedSupplySessionCode Function called successfully through sessionCode.`);
  
  };

  lockedOfSessionCode = async (recipient:string) => {
    const lockedOfSessionCodeDeployHash = await this.vestingEscrowFactory.lockedOfSessionCode(
      KEYS,
      "locked_of",
      this.packageHash!,
      recipient!,
      VESTING_ESCROW_FACTORY_INSTALL_PAYMENT_AMOUNT!,
      VESTING_ESCROW_FACTORY_PROXY_WASM_PATH!
    );
  
    console.log(`... lockedOfSessionCode Function deployHash: ${lockedOfSessionCodeDeployHash}`);
  
    await getDeploy(NODE_ADDRESS!, lockedOfSessionCodeDeployHash);
  
    console.log(`... lockedOfSessionCode Function called successfully through sessionCode.`);
  
  };

  commitTransferOwnershipSessionCode = async (addr:string) => {
    const commitTransferOwnershipSessionCodeDeployHash = await this.vestingEscrowFactory.commitTransferOwnershipSessionCode(
      KEYS,
      "commit_transfer_owership",
      this.packageHash!,
      addr!,
      VESTING_ESCROW_FACTORY_INSTALL_PAYMENT_AMOUNT!,
      VESTING_ESCROW_FACTORY_PROXY_WASM_PATH!
    );
  
    console.log(`... commitTransferOwnershipSessionCode Function deployHash: ${commitTransferOwnershipSessionCodeDeployHash}`);
  
    await getDeploy(NODE_ADDRESS!, commitTransferOwnershipSessionCodeDeployHash);
  
    console.log(`... commitTransferOwnershipSessionCode Function called successfully through sessionCode.`);
  
  };

  applyTransferOwnershipSessionCode = async () => {
    const applyTransferOwnershipSessionCodeDeployHash = await this.vestingEscrowFactory.applyTransferOwnershipSessionCode(
      KEYS,
      "apply_transfer_ownership",
      this.packageHash!,
      VESTING_ESCROW_FACTORY_INSTALL_PAYMENT_AMOUNT!,
      VESTING_ESCROW_FACTORY_PROXY_WASM_PATH!
    );
  
    console.log(`... applyTransferOwnershipSessionCode Function deployHash: ${applyTransferOwnershipSessionCodeDeployHash}`);
  
    await getDeploy(NODE_ADDRESS!, applyTransferOwnershipSessionCodeDeployHash);
  
    console.log(`... applyTransferOwnershipSessionCode Function called successfully through sessionCode.`);
  
  };

  applyTransferOwnershipVefSessionCode = async () => {
    const applyTransferOwnershipVefSessionCodeDeployHash = await this.vestingEscrowFactory.applyTransferOwnershipVefSessionCode(
      KEYS,
      "apply_transfer_ownership_vef",
      this.packageHash!,
      VESTING_ESCROW_FACTORY_INSTALL_PAYMENT_AMOUNT!,
      VESTING_ESCROW_FACTORY_PROXY_WASM_PATH!
    );
  
    console.log(`... applyTransferOwnershipVefSessionCode Function deployHash: ${applyTransferOwnershipVefSessionCodeDeployHash}`);
  
    await getDeploy(NODE_ADDRESS!, applyTransferOwnershipVefSessionCodeDeployHash);
  
    console.log(`... applyTransferOwnershipVefSessionCode Function called successfully through sessionCode.`);
  
  };

  commitTransferOwnershipVefSessionCode = async (addr:string) => {
    const commitTransferOwnershipVefSessionCodeDeployHash = await this.vestingEscrowFactory.commitTransferOwnershipVefSessionCode(
      KEYS,
      "commit_transfer_owership_vef",
      this.packageHash!,
      addr!,
      VESTING_ESCROW_FACTORY_INSTALL_PAYMENT_AMOUNT!,
      VESTING_ESCROW_FACTORY_PROXY_WASM_PATH!
    );
  
    console.log(`... commitTransferOwnershipVefSessionCode Function deployHash: ${commitTransferOwnershipVefSessionCodeDeployHash}`);
  
    await getDeploy(NODE_ADDRESS!, commitTransferOwnershipVefSessionCodeDeployHash);
  
    console.log(`... commitTransferOwnershipVefSessionCode Function called successfully through sessionCode.`);
  
  };

  deployVestingContractSessionCode = async (token:string,amount:string,duration:string,start:string) => {
    const deployVestingContractSessionCodeDeployHash = await this.vestingEscrowFactory.deployVestingContractSessionCode(
      KEYS,
      "deploy_vesting_contract",
      this.packageHash!,
      token!,
      KEYS.publicKey,
      amount!,
      true,
      duration!,
      start!,
      VESTING_ESCROW_FACTORY_INSTALL_PAYMENT_AMOUNT!,
      VESTING_ESCROW_FACTORY_PROXY_WASM_PATH!
    );
  
    console.log(`... deployVestingContractSessionCode Function deployHash: ${deployVestingContractSessionCodeDeployHash}`);
  
    await getDeploy(NODE_ADDRESS!, deployVestingContractSessionCodeDeployHash);
  
    console.log(`... deployVestingContractSessionCode Function called successfully through sessionCode.`);
  
  };

  initializeSessionCode = async (token:string,recipient:string,amount:string,startTime:string,endTime:string) => {
    const initializeSessionCodeDeployHash = await this.vestingEscrowFactory.initializeSessionCode(
      KEYS,
      "initialize",
      this.packageHash!,
      KEYS.publicKey,
      token!,
      recipient!,
      amount!,
      startTime!,
      endTime!,
      true,
      VESTING_ESCROW_FACTORY_INSTALL_PAYMENT_AMOUNT!,
      VESTING_ESCROW_FACTORY_PROXY_WASM_PATH!
    );
  
    console.log(`... initializeSessionCode Function deployHash: ${initializeSessionCodeDeployHash}`);
  
    await getDeploy(NODE_ADDRESS!, initializeSessionCodeDeployHash);
  
    console.log(`... initializeSessionCode Function called successfully through sessionCode.`);
  
  };
  
}

