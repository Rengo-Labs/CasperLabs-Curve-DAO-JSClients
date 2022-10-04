import { config } from "dotenv";
config();
import { VOTINGESCROWClient, utils } from "../src";
import { getDeploymentCount,updateDeploymentCount,getDeploy } from "./utils";

import {
  Keys,
} from "casper-js-sdk";

import * as fs from 'fs';

const {
  NODE_ADDRESS,
  EVENT_STREAM_ADDRESS,
  CHAIN_NAME,
  VOTING_ESCROW_WASM_PATH,
  VOTING_ESCROW_MASTER_KEY_PAIR_PATH,
  VOTING_ESCROW_INSTALL_PAYMENT_AMOUNT,
  VOTING_ESCROW_NAME,
  VOTING_ESCROW_SYMBOL,
  VOTING_ESCROW_VERSION,
  VOTING_ESCROW_TOKEN_ADDR,
  VOTING_ESCROW_CONTRACT_NAME,

  VOTING_ESCROW_PACKAGE_HASH,
  VOTING_ESCROW_PROXY_WASM_PATH,
  VOTING_ESCROW_T,
  VOTING_ESCROW_TIME
} = process.env;

const KEYS = Keys.Ed25519.parseKeyFiles(
  `${VOTING_ESCROW_MASTER_KEY_PAIR_PATH}/public_key.pem`,
  `${VOTING_ESCROW_MASTER_KEY_PAIR_PATH}/secret_key.pem`
);

export const deployVotingEscrow = async (
  tokenAddr:string,
  name:string,
  symbol:string,
  version:string
  ) => {
  const votingEscrow = new VOTINGESCROWClient(
    NODE_ADDRESS!,
    CHAIN_NAME!,
    EVENT_STREAM_ADDRESS!
  );
  let contractName = VOTING_ESCROW_CONTRACT_NAME + getDeploymentCount();
  updateDeploymentCount();
  const installDeployHash = await votingEscrow.install(
    KEYS,
    tokenAddr!,
    name!,
    symbol!,
    version!,
    contractName!,
    VOTING_ESCROW_INSTALL_PAYMENT_AMOUNT!,
    VOTING_ESCROW_WASM_PATH!

  );

  console.log(`... Contract installation deployHash: ${installDeployHash}`);

  await getDeploy(NODE_ADDRESS!, installDeployHash);

  console.log(`... Contract installed successfully.`);

  let accountInfo = await utils.getAccountInfo(NODE_ADDRESS!, KEYS.publicKey);

  console.log(`... Account Info: `);
  console.log(JSON.stringify(accountInfo, null, 2));

  const contractHash = await utils.getAccountNamedKeyValue(
    accountInfo,
    `${VOTING_ESCROW_CONTRACT_NAME!}_contract_hash`
  );
  fs.writeFileSync('contractHash',contractHash,{encoding:'utf8',flag:'w'});
  console.log(`... Contract Hash: ${contractHash}`);

  const packageHash = await utils.getAccountNamedKeyValue(
    accountInfo,
    `${VOTING_ESCROW_CONTRACT_NAME!}_package_hash`
  );
  fs.writeFileSync('packageHash',packageHash,{encoding:'utf8',flag:'w'});
  console.log(`... Package Hash: ${packageHash}`);
};

export class VotingEscrowSessionCode {
  packageHash: string;
  votingEscrow: VOTINGESCROWClient;
  constructor() {
    let _packageHash = fs.readFileSync('packageHash','utf8');
    this.packageHash = _packageHash.split("-").pop()!;
    this.votingEscrow = new VOTINGESCROWClient(
      NODE_ADDRESS!,
      CHAIN_NAME!,
      EVENT_STREAM_ADDRESS!
    );
  }

  getLastUserSlopeSessionCode = async () => {
    const getLastUserSlopeSessionCodeDeployHash = await this.votingEscrow.getLastUserSlopeSessionCode(
      KEYS,
      "get_last_user_slope",
      this.packageHash!,
      KEYS.publicKey!,
      VOTING_ESCROW_INSTALL_PAYMENT_AMOUNT!,
      VOTING_ESCROW_PROXY_WASM_PATH!
    );
  
    console.log(`... getLastUserSlopeSessionCode Function deployHash: ${getLastUserSlopeSessionCodeDeployHash}`);
  
    await getDeploy(NODE_ADDRESS!, getLastUserSlopeSessionCodeDeployHash);
  
    console.log(`... getLastUserSlopeSessionCode Function called successfully through sessionCode.`);
  
  };

  balanceOfSessionCode = async (t:string) => {
    const balanceOfSessionCodeDeployHash = await this.votingEscrow.balanceOfSessionCode(
      KEYS,
      "balance_of",
      this.packageHash!,
      KEYS.publicKey!,
      t!,
      VOTING_ESCROW_INSTALL_PAYMENT_AMOUNT!,
      VOTING_ESCROW_PROXY_WASM_PATH!
    );
  
    console.log(`... balanceOfSessionCode Function deployHash: ${balanceOfSessionCodeDeployHash}`);
  
    await getDeploy(NODE_ADDRESS!, balanceOfSessionCodeDeployHash);
  
    console.log(`... balanceOfSessionCode Function called successfully through sessionCode.`);
  
  };

  balanceOfATSessionCode = async (time:string) => {
    const balanceOfAtSessionCodeDeployHash = await this.votingEscrow.balanceOfAtSessionCode(
      KEYS,
      "balance_of",
      this.packageHash!,
      KEYS.publicKey!,
      time!,
      VOTING_ESCROW_INSTALL_PAYMENT_AMOUNT!,
      VOTING_ESCROW_PROXY_WASM_PATH!
    );
  
    console.log(`... balanceOfAtSessionCode Function deployHash: ${balanceOfAtSessionCodeDeployHash}`);
  
    await getDeploy(NODE_ADDRESS!, balanceOfAtSessionCodeDeployHash);
  
    console.log(`... balanceOfAtSessionCode Function called successfully through sessionCode.`);
  
  };

  totalSupplySessionCode = async (t:string) => {
    const totalSupplySessionCodeDeployHash = await this.votingEscrow.totalSupplySessionCode(
      KEYS,
      "total_supply",
      this.packageHash!,
      t!,
      VOTING_ESCROW_INSTALL_PAYMENT_AMOUNT!,
      VOTING_ESCROW_PROXY_WASM_PATH!
    );
  
    console.log(`... totalSupplySessionCode Function deployHash: ${totalSupplySessionCodeDeployHash}`);
  
    await getDeploy(NODE_ADDRESS!, totalSupplySessionCodeDeployHash);
  
    console.log(`... totalSupplySessionCode Function called successfully through sessionCode.`);
  
  };

  totalSupplyAtSessionCode = async (time:string) => {
    const totalSupplyAtSessionCodeDeployHash = await this.votingEscrow.totalSupplyAtSessionCode(
      KEYS,
      "total_supply_at",
      this.packageHash!,
      time!,
      VOTING_ESCROW_INSTALL_PAYMENT_AMOUNT!,
      VOTING_ESCROW_PROXY_WASM_PATH!
    );
  
    console.log(`... totalSupplyAtSessionCode Function deployHash: ${totalSupplyAtSessionCodeDeployHash}`);
  
    await getDeploy(NODE_ADDRESS!, totalSupplyAtSessionCodeDeployHash);
  
    console.log(`... totalSupplyAtSessionCode Function called successfully through sessionCode.`);
  
  };

}







