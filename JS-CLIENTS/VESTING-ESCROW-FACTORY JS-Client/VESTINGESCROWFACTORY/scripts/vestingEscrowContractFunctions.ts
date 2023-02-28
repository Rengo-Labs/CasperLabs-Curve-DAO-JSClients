import { config } from "dotenv";
config();
import { VESTINGESCROWFACTORYClient ,utils} from "../src";
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
  
  VESTING_ESCROW_FACTORY_MASTER_KEY_PAIR_PATH,
  VESTING_ESCROW_FACTORY_PAYMENT_AMOUNT,
  VESTINGESCROWFACTORY_CONTRACT_HASH,
  VESTING_ESCROW_FACTORY_TOKEN,
  VESTING_ESCROW_FACTORY_AMOUNT,
  VESTING_ESCROW_FACTORY_VESTING_DURATION,
  VESTING_ESCROW_FACTORY_VESTING_START,
  VESTING_ESCROW_FACTORY_RECIPIENT,
  VESTING_ESCROW_FACTORY_START_TIME,
  VESTING_ESCROW_FACTORY_END_TIME,
} = process.env;


const KEYS = Keys.Ed25519.parseKeyFiles(
  `${VESTING_ESCROW_FACTORY_MASTER_KEY_PAIR_PATH}/public_key.pem`,
  `${VESTING_ESCROW_FACTORY_MASTER_KEY_PAIR_PATH}/secret_key.pem`
);

// const ROUTERKEYS = Keys.Ed25519.parseKeyFiles(
//   `${MASTER_KEY_PAIR_PATH}/public_key.pem`,
//   `${MASTER_KEY_PAIR_PATH}/secret_key.pem`
// );

function splitdata(data:string)
{
    var temp=data.split('(');
    var result=temp[1].split(')');
    return result[0];
}

const vestingEscrowFactory = new VESTINGESCROWFACTORYClient(
  NODE_ADDRESS!,
  CHAIN_NAME!,
  EVENT_STREAM_ADDRESS!
);

export class VestingEscrowFactoryFunctions {
  contractHash: string;
  vestingEscrowFactory: VESTINGESCROWFACTORYClient;
  constructor() {
    let _contractHash = fs.readFileSync('contractHash','utf8');
    this.contractHash = _contractHash.split("-").pop()!;
    this.vestingEscrowFactory = new VESTINGESCROWFACTORYClient(
      NODE_ADDRESS!,
      CHAIN_NAME!,
      EVENT_STREAM_ADDRESS!
    );
  }

  packageHash =async () => {
    await this.vestingEscrowFactory.setContractHash(this.contractHash!);
    const packageHash = await this.vestingEscrowFactory.packageHash();
    console.log(`... Contract packageHash: ${packageHash}`);
  }

  adminVef =async () => {
    await this.vestingEscrowFactory.setContractHash(this.contractHash!);
    const adminVef = await this.vestingEscrowFactory.adminVef();
    console.log(`... Contract adminVef: ${adminVef}`);
  }

  target =async () => {
    await this.vestingEscrowFactory.setContractHash(this.contractHash!);
    const target = await this.vestingEscrowFactory.target();
    console.log(`... Contract target: ${target}`);
  }

  futureAdminVef =async () => {
    await this.vestingEscrowFactory.setContractHash(this.contractHash!);
    const futureAdminVef = await this.vestingEscrowFactory.futureAdminVef();
   console.log(`... Contract futureAdminVef: ${futureAdminVef}`);
  }

  token =async () => {
    await this.vestingEscrowFactory.setContractHash(this.contractHash!);
    const token = await this.vestingEscrowFactory.token();
    console.log(`... Contract token: ${token}`);
  }

  startTime =async () => {
    await this.vestingEscrowFactory.setContractHash(this.contractHash!);
    const startTime = await this.vestingEscrowFactory.startTime();
    console.log(`... Contract startTime: ${startTime}`);
  }

  endTime =async () => {
    await this.vestingEscrowFactory.setContractHash(this.contractHash!);
    const endTime = await this.vestingEscrowFactory.endTime();
    console.log(`... Contract endTime: ${endTime}`);
  }

  initialLockedSupply =async () => {
    await this.vestingEscrowFactory.setContractHash(this.contractHash!);
    const initialLockedSupply = await this.vestingEscrowFactory.initialLockedSupply();
   console.log(`... Contract initialLockedSupply: ${initialLockedSupply}`);
  }

  canDisable =async () => {
    await this.vestingEscrowFactory.setContractHash(this.contractHash!);
    const canDisable = await this.vestingEscrowFactory.canDisable();
    console.log(`... Contract canDisable: ${canDisable}`);
  }

  admin =async () => {
    await this.vestingEscrowFactory.setContractHash(this.contractHash!);
    const admin = await this.vestingEscrowFactory.admin();
    console.log(`... Contract admin: ${admin}`);
  }

  futureAdmin =async () => {
    await this.vestingEscrowFactory.setContractHash(this.contractHash!);
    const futureAdmin = await this.vestingEscrowFactory.futureAdmin();
    console.log(`... Contract futureAdmin: ${futureAdmin}`);
  }

  initialLocked =async () => {
    await this.vestingEscrowFactory.setContractHash(this.contractHash!);
    const initialLocked = await this.vestingEscrowFactory.initialLocked(KEYS.publicKey.toAccountHashStr()!);
   console.log(`... Contract initialLocked: ${initialLocked}`);
  }

  totalClaimed =async () => {
    await this.vestingEscrowFactory.setContractHash(this.contractHash!);
    const totalClaimed = await this.vestingEscrowFactory.totalClaimed(KEYS.publicKey.toAccountHashStr()!);
    console.log(`... Contract totalClaimed: ${totalClaimed}`);
  }

  disabledAt =async () => {
    await this.vestingEscrowFactory.setContractHash(this.contractHash!);
    const disabledAt = await this.vestingEscrowFactory.disabledAt(KEYS.publicKey.toAccountHashStr()!);
   console.log(`... Contract disabledAt: ${disabledAt}`);
  }

  toggleDisable =async (recipient:string) => {
    await this.vestingEscrowFactory.setContractHash(this.contractHash!);
    const toggleDisableDeployHash = await this.vestingEscrowFactory.toggleDisable(
      KEYS!,
      recipient!,
      VESTING_ESCROW_FACTORY_PAYMENT_AMOUNT!
     );
     console.log("... toggleDisable deploy hash: ", toggleDisableDeployHash);
    
     await getDeploy(NODE_ADDRESS!, toggleDisableDeployHash);
     console.log("... toggleDisable function called successfully.");
  }

  disableCanDisable=async () => {
    await this.vestingEscrowFactory.setContractHash(this.contractHash!);
    const disableCanDisableDeployHash = await this.vestingEscrowFactory.disableCanDisable(
      KEYS!,
      VESTING_ESCROW_FACTORY_PAYMENT_AMOUNT!
     );
     console.log("... disableCanDisable deploy hash: ", disableCanDisableDeployHash);
    
     await getDeploy(NODE_ADDRESS!, disableCanDisableDeployHash);
     console.log("... disableCanDisable function called successfully.");
  }

  claim=async () => {
    await this.vestingEscrowFactory.setContractHash(this.contractHash!);
    const claimDeployHash = await this.vestingEscrowFactory.claim(
      KEYS!,
      KEYS.publicKey,
      VESTING_ESCROW_FACTORY_PAYMENT_AMOUNT!
     );
     console.log("... claim deploy hash: ", claimDeployHash);
    
     await getDeploy(NODE_ADDRESS!, claimDeployHash);
     console.log("... claim function called successfully.");
  }

 
}
