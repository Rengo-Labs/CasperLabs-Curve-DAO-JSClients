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

  token =async () => {
    await this.votingEscrow.setContractHash(this.contractHash!);
    const token = await this.votingEscrow.token();
    console.log(`... token: ${token}`);
  }

  supply =async () => {
    await this.votingEscrow.setContractHash(this.contractHash!);
    const supply = await this.votingEscrow.supply();
    console.log(`... supply: ${supply}`);
  }

  locked =async () => {
    await this.votingEscrow.setContractHash(this.contractHash!);
    const locked = await this.votingEscrow.locked();
    console.log(`... locked: ${locked}`);
  }

  epoch =async () => {
    await this.votingEscrow.setContractHash(this.contractHash!);
    const epoch = await this.votingEscrow.epoch();
    console.log(`... epoch: ${epoch}`);
  }

  pointHistory =async (epoch: string) => {
    await this.votingEscrow.setContractHash(this.contractHash!);
    const pointHistory = await this.votingEscrow.pointHistory(epoch!);
    console.log(`... pointHistory: ${pointHistory}`);
  }

  userPointHistory =async (user: string, epoch: string) => {
    await this.votingEscrow.setContractHash(this.contractHash!);
    const userPointHistory = await this.votingEscrow.userPointHistory(user!, epoch!);
    console.log(`... userPointHistory: ${userPointHistory}`);
  }

  userPointEpoch =async (user: string) => {
    await this.votingEscrow.setContractHash(this.contractHash!);
    const userPointEpoch = await this.votingEscrow.userPointEpoch(user!);
    console.log(`... userPointEpoch: ${userPointEpoch}`);
  }

  slopeChanges =async (time: string) => {
    await this.votingEscrow.setContractHash(this.contractHash!);
    const slopeChanges = await this.votingEscrow.slopeChanges(time!);
    console.log(`... slopeChanges: ${slopeChanges}`);
  }

  controller =async () => {
    await this.votingEscrow.setContractHash(this.contractHash!);
    const controller = await this.votingEscrow.controller();
    console.log(`... controller: ${controller}`);
  }

  transfersEnabled =async () => {
    await this.votingEscrow.setContractHash(this.contractHash!);
    const transfersEnabled = await this.votingEscrow.transfersEnabled();
    console.log(`... transfersEnabled: ${transfersEnabled}`);
  }

  name =async () => {
    await this.votingEscrow.setContractHash(this.contractHash!);
    const name = await this.votingEscrow.name();
    console.log(`... name: ${name}`);
  }

  symbol =async () => {
    await this.votingEscrow.setContractHash(this.contractHash!);
    const symbol = await this.votingEscrow.symbol();
    console.log(`... symbol: ${symbol}`);
  }

  version =async () => {
    await this.votingEscrow.setContractHash(this.contractHash!);
    const version = await this.votingEscrow.version();
    console.log(`... version: ${version}`);
  }

  decimals =async () => {
    await this.votingEscrow.setContractHash(this.contractHash!);
    const decimals = await this.votingEscrow.decimals();
    console.log(`... decimals: ${decimals}`);
  }

  admin =async () => {
    await this.votingEscrow.setContractHash(this.contractHash!);
    const admin = await this.votingEscrow.admin();
    console.log(`... admin: ${admin}`);
  }

  futureAdmin =async () => {
    await this.votingEscrow.setContractHash(this.contractHash!);
    const futureAdmin = await this.votingEscrow.futureAdmin();
    console.log(`... futureAdmin: ${futureAdmin}`);
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

  depositFor =async (addr: string, value:string) => {
    await this.votingEscrow.setContractHash(this.contractHash!);
    const depositForDeployHash = await this.votingEscrow.depositFor(
      KEYS,
      addr!,
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

