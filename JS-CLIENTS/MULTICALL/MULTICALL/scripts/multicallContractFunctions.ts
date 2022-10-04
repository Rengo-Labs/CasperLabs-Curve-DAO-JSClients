import { config } from "dotenv";
config();
import { MULTICALLClient ,utils} from "../src";
import { sleep, getDeploy } from "./utils";

import * as fs from 'fs';

import {
  CLValueBuilder,
  Keys,
  CLPublicKey,
  CLAccountHash,
  CLPublicKeyType,
  Contracts,
  CLByteArray
} from "casper-js-sdk";


const {
  NODE_ADDRESS,
  EVENT_STREAM_ADDRESS,
  CHAIN_NAME,
  
  MULTICALL_MASTER_KEY_PAIR_PATH,
  MULTICALL_PAYMENT_AMOUNT,
  MULTICALL_CONTRACT_HASH,

} = process.env;


const KEYS = Keys.Ed25519.parseKeyFiles(
  `${MULTICALL_MASTER_KEY_PAIR_PATH}/public_key.pem`,
  `${MULTICALL_MASTER_KEY_PAIR_PATH}/secret_key.pem`
);

function splitdata(data:string)
{
    var temp=data.split('(');
    var result=temp[1].split(')');
    return result[0];
}

const multicall = new MULTICALLClient(
  NODE_ADDRESS!,
  CHAIN_NAME!,
  EVENT_STREAM_ADDRESS!
);

export class MulticallFunctions {
  contractHash: string;
  multicall: MULTICALLClient;
  constructor() {
    let _contractHash = fs.readFileSync('contractHash','utf8');
    this.contractHash = _contractHash.split("-").pop()!;
    this.multicall = new MULTICALLClient(
      NODE_ADDRESS!,
      CHAIN_NAME!,
      EVENT_STREAM_ADDRESS!
    );
  }
  aggregate =async (targetAddr:string[],functionName:string[],functionArgsName:string[], functionArgsValue:string[]) => {
    await this.multicall.setContractHash(this.contractHash!);
    const aggregateDeployHash = await multicall.aggregate(
      KEYS!,
      targetAddr!,
      functionName!,
      functionArgsName!,
      functionArgsValue!,
      MULTICALL_PAYMENT_AMOUNT!
     );
     console.log("... aggregate deploy hash: ", aggregateDeployHash);
    
     await getDeploy(NODE_ADDRESS!, aggregateDeployHash);
     console.log("... aggregate function called successfully.");
  }
}


