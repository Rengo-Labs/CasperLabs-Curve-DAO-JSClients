import { config } from "dotenv";
config();
import { MINTERClient ,utils, constants} from "../src";
import { sleep, getDeploy } from "./utils";

import {
  Keys
} from "casper-js-sdk";
import * as fs from 'fs';

const { ERC20Events } = constants;

const {
  NODE_ADDRESS,
  EVENT_STREAM_ADDRESS,
  CHAIN_NAME,
  MINTER_MASTER_KEY_PAIR_PATH,
  MINTER_CONTRACT,
  MINTER_PAYMENT_AMOUNT
} = process.env;


const KEYS = Keys.Ed25519.parseKeyFiles(
  `${MINTER_MASTER_KEY_PAIR_PATH}/public_key.pem`,
  `${MINTER_MASTER_KEY_PAIR_PATH}/secret_key.pem`
);

const ROUTERKEYS = Keys.Ed25519.parseKeyFiles(
  `${MINTER_MASTER_KEY_PAIR_PATH}/public_key.pem`,
  `${MINTER_MASTER_KEY_PAIR_PATH}/secret_key.pem`
);

function splitdata(data:string)
{
    var temp=data.split('(');
    var result=temp[1].split(')');
    return result[0];
}

export class MinterFunctions {
  contractHash: string;
  minter: MINTERClient;
  constructor() {
    let _contractHash = fs.readFileSync('contractHash','utf8');
    this.contractHash = _contractHash.split("-").pop()!;
    this.minter = new MINTERClient(
      NODE_ADDRESS!,
      CHAIN_NAME!,
      EVENT_STREAM_ADDRESS!
    );
  }

  mint =async (gaugeAddr:string) => {
    await this.minter.setContractHash(this.contractHash!);
    const mintDeployHash = await this.minter.mint(
      KEYS,
      gaugeAddr!,
      MINTER_PAYMENT_AMOUNT!
    );
    console.log("... mint deploy hash: ", mintDeployHash);
  
    await getDeploy(NODE_ADDRESS!, mintDeployHash);
    console.log("... mint function called successfully");
  }

  mintMany =async (gaugeAddr:string) => {
    await this.minter.setContractHash(this.contractHash!);
    const mintManyDeployHash = await this.minter.mint_many(
      KEYS,
      gaugeAddr!,
      MINTER_PAYMENT_AMOUNT!
    );
    console.log("... mintMany deploy hash: ", mintManyDeployHash);
  
    await getDeploy(NODE_ADDRESS!, mintManyDeployHash);
    console.log("... mintMany function called successfully");
  }

  mintFor =async (gaugeAddr:string) => {
    await this.minter.setContractHash(this.contractHash!);
    const mintForDeployHash = await this.minter.mint_for(
      KEYS,
      gaugeAddr!,
      KEYS.publicKey!,
      MINTER_PAYMENT_AMOUNT!
    );
    console.log("... mintFor deploy hash: ", mintForDeployHash);
  
    await getDeploy(NODE_ADDRESS!, mintForDeployHash);
    console.log("... mintFor function called successfully");
  }

  toggleApproveMint =async (mintingUser:string) => {
    await this.minter.setContractHash(this.contractHash!);
    const toggleApproveMintDeployHash = await this.minter.toggle_approve_mint(
      KEYS,
      mintingUser!,
      MINTER_PAYMENT_AMOUNT!
    );
    console.log("... toggleApproveMint deploy hash: ", toggleApproveMintDeployHash);
  
    await getDeploy(NODE_ADDRESS!, toggleApproveMintDeployHash);
    console.log("... toggleApproveMint function called successfully");
  }

  allowedToMintFor =async (spender:string) => {
    await this.minter.setContractHash(this.contractHash!);
    const allowedToMintFor = await this.minter.allowed_to_mint_for(KEYS.publicKey.toAccountHashStr()!,spender!);
    console.log(`... Contract allowedToMintFor: ${allowedToMintFor}`);
  }

  minted =async (spender:string) => {
    await this.minter.setContractHash(this.contractHash!);
    const minted = await this.minter.minted(KEYS.publicKey.toAccountHashStr()!,spender!);
    console.log(`... Contract minted: ${minted}`);
  }

  token =async () => {
    await this.minter.setContractHash(this.contractHash!);
    const token = await this.minter.token();
    console.log(`... Contract token: ${token}`);
  }

  controller =async () => {
    await this.minter.setContractHash(this.contractHash!);
    const controller = await this.minter.controller();
    console.log(`... controller token: ${controller}`);
  }
}

