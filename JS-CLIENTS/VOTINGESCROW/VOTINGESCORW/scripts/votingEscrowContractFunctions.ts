import { config } from "dotenv";
config();
import { VOTINGESCROWClient ,utils} from "../src";
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
  VOTING_ESCROW_MASTER_KEY_PAIR_PATH,
  VOTING_ESCROW_PAYMENT_AMOUNT,
  VOTING_ESCROW_T,
  VOTING_ESCROW_ADDRESS,
  VOTING_ESCROW_IDX,
  VOTING_ESCROW_VALUE,
  VOTING_ESCROW_UNLOCK_TIME,
  VOTING_ESCROW_BLOCK,
  VOTINGESCROW_CONTRACT_HASH
} = process.env;


const KEYS = Keys.Ed25519.parseKeyFiles(
  `${VOTING_ESCROW_MASTER_KEY_PAIR_PATH}/public_key.pem`,
  `${VOTING_ESCROW_MASTER_KEY_PAIR_PATH}/secret_key.pem`
);

export class VotingEscrowFunctions {
  contractHash: string;
  votingEscrow: VOTINGESCROWClient;
  constructor() {
    let _contractHash = fs.readFileSync('contractHash','utf8');
    this.contractHash = _contractHash.split("-").pop()!;
    this.votingEscrow = new VOTINGESCROWClient(
      NODE_ADDRESS!,
      CHAIN_NAME!,
      EVENT_STREAM_ADDRESS!
    );
  }

  userPointHistoryTs =async (address:string, idx:string) => {
    await this.votingEscrow.setContractHash(this.contractHash!);
    const userPointHistoryTs = await this.votingEscrow.userPointHistoryTs(address!,idx!);
    console.log(`... Contract userPointHistoryTs: ${userPointHistoryTs}`);
  }

  lockedEnd =async (address:string) => {
    await this.votingEscrow.setContractHash(this.contractHash!);
    const lockedEnd = await this.votingEscrow.lockedEnd(address!);
    console.log(`... Contract lockedEnd: ${lockedEnd}`);
  }

  unlockTime =async () => {
    await this.votingEscrow.setContractHash(this.contractHash!);
    const unlockTime = await this.votingEscrow.unlockTime();
    console.log(`... Contract unlockTime: ${unlockTime}`);
  }

  commitTransferOwnership =async () => {
    await this.votingEscrow.setContractHash(this.contractHash!);
    const commitTransferOwnershipDeployHash = await this.votingEscrow.commitTransferOwnership(
      KEYS!,
      KEYS.publicKey,
      VOTING_ESCROW_PAYMENT_AMOUNT!
    );
    console.log("... commitTransferOwnership deploy hash: ", commitTransferOwnershipDeployHash);
  
    await getDeploy(NODE_ADDRESS!, commitTransferOwnershipDeployHash);
    console.log("... commitTransferOwnership function called successfully.");
  }

  applyTransferOwnership =async () => {
    await this.votingEscrow.setContractHash(this.contractHash!);
    const applyTransferOwnershipDeployHash = await this.votingEscrow.applyTransferOwnership(
      KEYS!,
      VOTING_ESCROW_PAYMENT_AMOUNT!
    );
    console.log("...  deploy hash: ", applyTransferOwnershipDeployHash);
  
    await getDeploy(NODE_ADDRESS!, applyTransferOwnershipDeployHash);
    console.log("... applyTransferOwnership function called successfully.");
  
  }

  checkpoint=async () => {
    await this.votingEscrow.setContractHash(this.contractHash!);
    const checkpointDeployHash = await this.votingEscrow.checkpoint(
      KEYS!,
      VOTING_ESCROW_PAYMENT_AMOUNT!
    );
    console.log("... checkpoint deploy hash: ", checkpointDeployHash);
  
    await getDeploy(NODE_ADDRESS!, checkpointDeployHash);
    console.log("... checkpoint function called successfully");
  }

  depositFor =async (value:string) => {
    await this.votingEscrow.setContractHash(this.contractHash!);
    const depositForDeployHash = await this.votingEscrow.depositFor(
      KEYS,
      KEYS.publicKey!,
      value!,
      VOTING_ESCROW_PAYMENT_AMOUNT!
    );
    console.log("... depositFor deploy hash: ", depositForDeployHash);
  
    await getDeploy(NODE_ADDRESS!, depositForDeployHash);
    console.log("... depositFor function called successfully");
  }

  createlock=async (value:string,unlockTime:string) => {
    await this.votingEscrow.setContractHash(this.contractHash!);
    const createlockDeployHash = await this.votingEscrow.createlock(
      KEYS!,
      value!!,
      unlockTime!,
      VOTING_ESCROW_PAYMENT_AMOUNT!
    );
    console.log("... createlock deploy hash: ", createlockDeployHash);
  
    await getDeploy(NODE_ADDRESS!, createlockDeployHash);
    console.log("... createlock function called successfully");
  }

  increaseAmount =async (value:string) => {
    await this.votingEscrow.setContractHash(this.contractHash!);
    const increaseAmountDeployHash = await this.votingEscrow.increaseAmount(
      KEYS,
      value!,
      VOTING_ESCROW_PAYMENT_AMOUNT!
    );
    console.log("... increaseAmount deploy hash: ", increaseAmountDeployHash);
  
    await getDeploy(NODE_ADDRESS!, increaseAmountDeployHash);
    console.log("... increaseAmount function called successfully");
  }

  increaseUnlockTime =async (unlockTime:string) => {
    await this.votingEscrow.setContractHash(this.contractHash!);
    const increaseUnlockTimeDeployHash = await this.votingEscrow.increaseUnlockTime(
      KEYS,
      unlockTime!,
      VOTING_ESCROW_PAYMENT_AMOUNT!
    );
    console.log("... increaseUnlockTime deploy hash: ", increaseUnlockTimeDeployHash);
  
    await getDeploy(NODE_ADDRESS!, increaseUnlockTimeDeployHash);
    console.log("... increaseUnlockTime function called successfully"); 
  }

  withdraw =async () => {
    await this.votingEscrow.setContractHash(this.contractHash!);
    const withdrawDeployHash = await this.votingEscrow.withdraw(
      KEYS,
      VOTING_ESCROW_PAYMENT_AMOUNT!
    );
    console.log("... withdraw deploy hash: ", withdrawDeployHash);
  
    await getDeploy(NODE_ADDRESS!, withdrawDeployHash);
    console.log("... withdraw function called successfully");
  }

  changeController =async () => {
    await this.votingEscrow.setContractHash(this.contractHash!);
    const changeControllerDeployHash = await this.votingEscrow.changeController(
      KEYS,
      KEYS.publicKey,
      VOTING_ESCROW_PAYMENT_AMOUNT!
    );
    console.log("... changeController deploy hash: ", changeControllerDeployHash);
  
    await getDeploy(NODE_ADDRESS!, changeControllerDeployHash);
    console.log("... changeController function called successfully");
  }
}

