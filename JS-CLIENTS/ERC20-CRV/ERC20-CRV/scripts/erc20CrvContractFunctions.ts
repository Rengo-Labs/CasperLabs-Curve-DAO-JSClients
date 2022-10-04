import { config } from "dotenv";
config();
import { ERC20CRVClient ,utils} from "../src";
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
  
  ERC20CRV_MASTER_KEY_PAIR_PATH,
  ERC20CRV_PAYMENT_AMOUNT,
  ERC20CRV_VALUE,
  ERC20CRV_CONTRACT_HASH,
  ERC20CRV_SPENDER,
  ERC20CRV_AMOUNT,
  ERC20CRV_START,
  ERC20CRV_END,
  ERC20CRV_RECIPIENT,

} = process.env;


const KEYS = Keys.Ed25519.parseKeyFiles(
  `${ERC20CRV_MASTER_KEY_PAIR_PATH}/public_key.pem`,
  `${ERC20CRV_MASTER_KEY_PAIR_PATH}/secret_key.pem`
);

export class Erc20CrvFunctions {
  contractHash: string;
  erc20Crv: ERC20CRVClient;
  constructor() {
    let _contractHash = fs.readFileSync('contractHash','utf8');
    this.contractHash = _contractHash.split("-").pop()!;
    this.erc20Crv = new ERC20CRVClient(
      NODE_ADDRESS!,
      CHAIN_NAME!,
      EVENT_STREAM_ADDRESS!
    );
  }

  setMinter =async () => {
    await this.erc20Crv.setContractHash(this.contractHash!);
    const setMinterDeployHash = await this.erc20Crv.setMinter(
      KEYS!,
      KEYS.publicKey,
      ERC20CRV_PAYMENT_AMOUNT!
     );
     console.log("... setMinter deploy hash: ", setMinterDeployHash);
    
     await getDeploy(NODE_ADDRESS!, setMinterDeployHash);
     console.log("... setMinter function called successfully.");
  }

  burn =async (value:string) => {
    await this.erc20Crv.setContractHash(this.contractHash!);
    const burnDeployHash = await this.erc20Crv.burn(
      KEYS!,
      value!,
      ERC20CRV_PAYMENT_AMOUNT!
     );
     console.log("... burn deploy hash: ", burnDeployHash);
    
     await getDeploy(NODE_ADDRESS!, burnDeployHash);
     console.log("... burn function called successfully.");
  }

  setAdmin =async () => {
    await this.erc20Crv.setContractHash(this.contractHash!);
    const setAdminDeployHash = await this.erc20Crv.setAdmin(
      KEYS!,
      KEYS.publicKey,
      ERC20CRV_PAYMENT_AMOUNT!
     );
     console.log("... setAdmin deploy hash: ", setAdminDeployHash);
    
     await getDeploy(NODE_ADDRESS!, setAdminDeployHash);
     console.log("... setAdmin function called successfully.");
  }

  updateMiningParameters =async () => {
    await this.erc20Crv.setContractHash(this.contractHash!);
    const updateMiningParametersDeployHash = await this.erc20Crv.updateMiningParameters(
      KEYS!,
      ERC20CRV_PAYMENT_AMOUNT!
     );
     console.log("... updateMiningParameters deploy hash: ", updateMiningParametersDeployHash);
    
     await getDeploy(NODE_ADDRESS!, updateMiningParametersDeployHash);
     console.log("... updateMiningParameters function called successfully.");
  }

  mint =async (amount:string) => {
    await this.erc20Crv.setContractHash(this.contractHash!);
    const mintJsClientDeployHash = await this.erc20Crv.mintJsClient(
      KEYS!,
      KEYS.publicKey,
      amount!,
      ERC20CRV_PAYMENT_AMOUNT!
     );
     console.log("... mintJsClient deploy hash: ", mintJsClientDeployHash);
    
     await getDeploy(NODE_ADDRESS!, mintJsClientDeployHash);
     console.log("... mintJsClient function called successfully.");
  }

  transferFrom =async (recipient:string, amount:string) => {
    await this.erc20Crv.setContractHash(this.contractHash!);
    const transferFromDeployHash = await this.erc20Crv.transferFrom(
      KEYS!,
      KEYS.publicKey,
      recipient!,
      amount!,
      ERC20CRV_PAYMENT_AMOUNT!
     );
     console.log("... transferFrom deploy hash: ", transferFromDeployHash);
    
     await getDeploy(NODE_ADDRESS!, transferFromDeployHash);
     console.log("... transferFrom function called successfully.");
  }

  approve =async (spender:string,amount:string) => {
    await this.erc20Crv.setContractHash(this.contractHash!);
    const approveDeployHash = await this.erc20Crv.approve(
      KEYS!,
      spender!,
      amount!,
      ERC20CRV_PAYMENT_AMOUNT!
     );
     console.log("... approve deploy hash: ", approveDeployHash);
    
     await getDeploy(NODE_ADDRESS!, approveDeployHash);
     console.log("... approve function called successfully.");
  }

  transfer =async (recipient:string,amount:string) => {
    await this.erc20Crv.setContractHash(this.contractHash!);
    const transferDeployHash = await this.erc20Crv.transfer(
      KEYS!,
      recipient!,
      amount!,
      ERC20CRV_PAYMENT_AMOUNT!
     );
     console.log("... transfer deploy hash: ", transferDeployHash);
    
     await getDeploy(NODE_ADDRESS!, transferDeployHash);
     console.log("... transfer function called successfully.");
  }


}

