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

  applyTransferOwnershipVef =async () => {
    await this.vestingEscrowFactory.setContractHash(this.contractHash!);
    const applyTransferOwnershipVefDeployHash = await this.vestingEscrowFactory.applyTransferOwnershipVef(
      KEYS!,
      VESTING_ESCROW_FACTORY_PAYMENT_AMOUNT!
     );
     console.log("... applyTransferOwnershipVef deploy hash: ", applyTransferOwnershipVefDeployHash);
    
     await getDeploy(NODE_ADDRESS!, applyTransferOwnershipVefDeployHash);
     console.log("... applyTransferOwnershipVef function called successfully.");
  }

  commitTransferOwnershipVef=async () => {
    await this.vestingEscrowFactory.setContractHash(this.contractHash!);
    const commitTransferOwnershipVefDeployHash = await this.vestingEscrowFactory.commitTransferOwnershipVef(
      KEYS!,
      KEYS.publicKey,
      VESTING_ESCROW_FACTORY_PAYMENT_AMOUNT!
     );
     console.log("... commitTransferOwnershipVef deploy hash: ", commitTransferOwnershipVefDeployHash);
    
     await getDeploy(NODE_ADDRESS!, commitTransferOwnershipVefDeployHash);
     console.log("... commitTransferOwnershipVef function called successfully.");
  }

  VestingContract =async (token:string,amount:string,duration:string,start:string) => {
    await this.vestingEscrowFactory.setContractHash(this.contractHash!);
    const deployVestingContractDeployHash = await this.vestingEscrowFactory.deployVestingContract(
      KEYS!,
      token!,
      KEYS.publicKey,
      amount!,
      true,
      duration!,
      start!,
      VESTING_ESCROW_FACTORY_PAYMENT_AMOUNT!
     );
     console.log("... deployVestingContract deploy hash: ", deployVestingContractDeployHash);
    
     await getDeploy(NODE_ADDRESS!, deployVestingContractDeployHash);
     console.log("... deployVestingContract function called successfully.");
  }

  initialize =async (token:string,recipient:string,amount:string,startTime:string,endTime:string) => {
    await this.vestingEscrowFactory.setContractHash(this.contractHash!);
    const initializeDeployHash = await this.vestingEscrowFactory.initialize(
      KEYS!,
      KEYS.publicKey,
      token!,
      recipient!,
      amount!,
      startTime!,
      endTime!,
      true,
      VESTING_ESCROW_FACTORY_PAYMENT_AMOUNT!
     );
     console.log("... initialize deploy hash: ", initializeDeployHash);
    
     await getDeploy(NODE_ADDRESS!, initializeDeployHash);
     console.log("... initialize function called successfully.");
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

// const test = async () => {

//   await vestingEscrowFactory.setContractHash(VESTINGESCROWFACTORY_CONTRACT_HASH!);

//   //balanceOf


//  //vestedSupply
//  const vestedSupplyDeployHash = await vestingEscrowFactory.vestedSupply(
//   KEYS!,
//   VESTING_ESCROW_FACTORY_PAYMENT_AMOUNT!
//  );
//  console.log("... vestedSupply deploy hash: ", vestedSupplyDeployHash);

//  await getDeploy(NODE_ADDRESS!, vestedSupplyDeployHash);
//  console.log("... vestedSupply function called successfully.");

//  //lockedSupply
//  const lockedSupplyDeployHash = await vestingEscrowFactory.lockedSupply(
//   KEYS!,
//   VESTING_ESCROW_FACTORY_PAYMENT_AMOUNT!
//  );
//  console.log("... lockedSupply deploy hash: ", lockedSupplyDeployHash);

//  await getDeploy(NODE_ADDRESS!, lockedSupplyDeployHash);
//  console.log("... lockedSupply function called successfully.");

//  //lockedOf
//  const lockedOfDeployHash = await vestingEscrowFactory.lockedOf(
//   KEYS!,
//   VESTING_ESCROW_FACTORY_RECIPIENT!,
//   VESTING_ESCROW_FACTORY_PAYMENT_AMOUNT!
//  );
//  console.log("... lockedOf deploy hash: ", lockedOfDeployHash);

//  await getDeploy(NODE_ADDRESS!, lockedOfDeployHash);
//  console.log("... lockedOf function called successfully.");

//  //commitTransferOwnership
//  const commitTransferOwnershipDeployHash = await vestingEscrowFactory.commitTransferOwnership(
//   KEYS!,
//   KEYS.publicKey,
//   VESTING_ESCROW_FACTORY_PAYMENT_AMOUNT!
//  );
//  console.log("... commitTransferOwnership deploy hash: ", commitTransferOwnershipDeployHash);

//  await getDeploy(NODE_ADDRESS!, commitTransferOwnershipDeployHash);
//  console.log("... commitTransferOwnership function called successfully.");

//  //applyTransferOwnership
//  const applyTransferOwnershipDeployHash = await vestingEscrowFactory.applyTransferOwnership(
//   KEYS!,
//   VESTING_ESCROW_FACTORY_PAYMENT_AMOUNT!
//  );
//  console.log("... applyTransferOwnership deploy hash: ", applyTransferOwnershipDeployHash);

//  await getDeploy(NODE_ADDRESS!, applyTransferOwnershipDeployHash);
//  console.log("... applyTransferOwnership function called successfully.");

//  //claim


// };


// vestedOf =async (recipient:string) => {
//   await this.vestingEscrowFactory.setContractHash(this.contractHash!);
//   const vestedOfDeployHash = await this.vestingEscrowFactory.vestedOf(
//     KEYS!,
//     VESTING_ESCROW_FACTORY_RECIPIENT!,
//     VESTING_ESCROW_FACTORY_PAYMENT_AMOUNT!
//    );
//    console.log("... vestedOf deploy hash: ", vestedOfDeployHash);
  
//    await getDeploy(NODE_ADDRESS!, vestedOfDeployHash);
//    console.log("... vestedOf function called successfully.");
// }

// balanceOf=async () => {
//   await this.vestingEscrowFactory.setContractHash(this.contractHash!);
//   const balanceOfDeployHash = await this.vestingEscrowFactory.balanceOf(
//     KEYS!,
//     VESTING_ESCROW_FACTORY_RECIPIENT!,
//     VESTING_ESCROW_FACTORY_PAYMENT_AMOUNT!
//    );
//    console.log("... balanceOf deploy hash: ", balanceOfDeployHash);
  
//    await getDeploy(NODE_ADDRESS!, balanceOfDeployHash);
//    console.log("... balanceOf function called successfully."); 
// }