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

  name =async () => {
    await this.erc20Crv.setContractHash(this.contractHash!);
    const name = await this.erc20Crv.name();
    console.log(`... name: ${name}`);
  }

  symbol =async () => {
    await this.erc20Crv.setContractHash(this.contractHash!);
    const symbol = await this.erc20Crv.symbol();
    console.log(`... symbol: ${symbol}`);
  }

  decimals =async () => {
    await this.erc20Crv.setContractHash(this.contractHash!);
    const decimals = await this.erc20Crv.decimals();
    console.log(`... decimals: ${decimals}`);
  }

  balanceOf =async () => {
    await this.erc20Crv.setContractHash(this.contractHash!);
    const balanceOf = await this.erc20Crv.balanceOf(KEYS.publicKey.toAccountHashStr()!);
    console.log(`... balanceOf: ${balanceOf}`);
  }

  allowances =async (spender:string) => {
    await this.erc20Crv.setContractHash(this.contractHash!);
    const allowances = await this.erc20Crv.allowances(KEYS.publicKey.toAccountHashStr()!,spender!);
    console.log(`... allowances: ${allowances}`);
  }

  minter =async () => {
    await this.erc20Crv.setContractHash(this.contractHash!);
    const minter = await this.erc20Crv.minter();
    console.log(`... minter: ${minter}`);
  }

  admin =async () => {
    await this.erc20Crv.setContractHash(this.contractHash!);
    const admin = await this.erc20Crv.admin();
    console.log(`... admin: ${admin}`);
  }

  rate =async () => {
    await this.erc20Crv.setContractHash(this.contractHash!);
    const rate = await this.erc20Crv.rate();
    console.log(`... rate: ${rate}`);
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


}

