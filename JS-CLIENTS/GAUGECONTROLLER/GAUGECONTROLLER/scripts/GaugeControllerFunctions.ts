import { config } from "dotenv";
config();
import { GaugeControllerClient ,utils, constants} from "../src";
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

const { GAUGECONTROLLEREVENTS } = constants;

const {
  NODE_ADDRESS,
  EVENT_STREAM_ADDRESS,
  CHAIN_NAME,
  GAUGE_CONTROLLER_MASTER_KEY_PAIR_PATH,
  GAUGE_CONTROLLER_PAYMENT_AMOUNT
} = process.env;


const KEYS = Keys.Ed25519.parseKeyFiles(
  `${GAUGE_CONTROLLER_MASTER_KEY_PAIR_PATH}/public_key.pem`,
  `${GAUGE_CONTROLLER_MASTER_KEY_PAIR_PATH}/secret_key.pem`
);

const ROUTERKEYS = Keys.Ed25519.parseKeyFiles(
  `${GAUGE_CONTROLLER_MASTER_KEY_PAIR_PATH}/public_key.pem`,
  `${GAUGE_CONTROLLER_MASTER_KEY_PAIR_PATH}/secret_key.pem`
);


export class GaugeControllerFunctions {
  contractHash: string;
  gaugeController: GaugeControllerClient;
  constructor() {
    let _contractHash = fs.readFileSync('contractHash','utf8');
    this.contractHash = _contractHash.split("-").pop()!;
    this.gaugeController = new GaugeControllerClient(
      NODE_ADDRESS!,
      CHAIN_NAME!,
      EVENT_STREAM_ADDRESS!
    );
  }

  commitTransferOwnership =async (addr:string) => {
    await this.gaugeController.setContractHash(this.contractHash!);
    const commitTransferOwnershipDeployHash = await this.gaugeController.commit_transfer_ownership(
      KEYS!,
      addr!,
      GAUGE_CONTROLLER_PAYMENT_AMOUNT!
     );
     console.log("... commitTransferOwnership deploy hash: ", commitTransferOwnershipDeployHash);
    
     await getDeploy(NODE_ADDRESS!, commitTransferOwnershipDeployHash);
     console.log("... commitTransferOwnership function called successfully.");
  }

  applyTransferOwnership =async () => {
    await this.gaugeController.setContractHash(this.contractHash!);
    const applyTransferOwnershipDeployHash = await this.gaugeController.apply_transfer_ownership(
      KEYS!,
      GAUGE_CONTROLLER_PAYMENT_AMOUNT!
     );
     console.log("... applyTransferOwnership deploy hash: ", applyTransferOwnershipDeployHash);
    
     await getDeploy(NODE_ADDRESS!, applyTransferOwnershipDeployHash);
     console.log("... applyTransferOwnership function called successfully.");
  }

  checkpointGauge =async (addr:string) => {
    await this.gaugeController.setContractHash(this.contractHash!);
    const checkpointGaugeDeployHash = await this.gaugeController.checkpoint_gauge(
      KEYS!,
      addr!,
      GAUGE_CONTROLLER_PAYMENT_AMOUNT!
     );
     console.log("... checkpointGauge deploy hash: ", checkpointGaugeDeployHash);
    
     await getDeploy(NODE_ADDRESS!, checkpointGaugeDeployHash);
     console.log("... checkpointGauge function called successfully.");
  }

  checkpoint =async () => {
    await this.gaugeController.setContractHash(this.contractHash!);
    const checkpointDeployHash = await this.gaugeController.checkpoint(
      KEYS!,
      GAUGE_CONTROLLER_PAYMENT_AMOUNT!
     );
     console.log("... checkpoint deploy hash: ", checkpointDeployHash);
    
     await getDeploy(NODE_ADDRESS!, checkpointDeployHash);
     console.log("... checkpoint function called successfully.");
  }

  changeTypeWeight =async (typeId:string, weight:string) => {
    await this.gaugeController.setContractHash(this.contractHash!);
    const changeTypeWeightDeployHash = await this.gaugeController.change_type_weight(
      KEYS!,
      typeId!,
      weight!,
      GAUGE_CONTROLLER_PAYMENT_AMOUNT!
     );
     console.log("... changeTypeWeight deploy hash: ", changeTypeWeightDeployHash);
    
     await getDeploy(NODE_ADDRESS!, changeTypeWeightDeployHash);
     console.log("... changeTypeWeight function called successfully.");
  }

  changeGaugeWeight =async (addr:string, weight:string) => {
    await this.gaugeController.setContractHash(this.contractHash!);
    const changeGaugeWeightDeployHash = await this.gaugeController.change_gauge_weight(
      KEYS!,
      addr!,
      weight!,
      GAUGE_CONTROLLER_PAYMENT_AMOUNT!
     );
     console.log("... changeGaugeWeight deploy hash: ", changeGaugeWeightDeployHash);
    
     await getDeploy(NODE_ADDRESS!, changeGaugeWeightDeployHash);
     console.log("... changeGaugeWeight function called successfully.");
  }

  addType =async (name:string, weight:string) => {
    await this.gaugeController.setContractHash(this.contractHash!);
    const addTypeDeployHash = await this.gaugeController.add_type(
      KEYS!,
      name!,
      weight!,
      GAUGE_CONTROLLER_PAYMENT_AMOUNT!
     );
     console.log("... addType deploy hash: ", addTypeDeployHash);
    
     await getDeploy(NODE_ADDRESS!, addTypeDeployHash);
     console.log("... addType function called successfully.");
  }

  addGauge =async (addr:string,gaugeType:string ,weight:string) => {
    await this.gaugeController.setContractHash(this.contractHash!);
    const addGaugeDeployHash = await this.gaugeController.add_gauge(
      KEYS!,
      addr!,
      gaugeType!,
      weight!,
      GAUGE_CONTROLLER_PAYMENT_AMOUNT!
     );
     console.log("... addGauge deploy hash: ", addGaugeDeployHash);
    
     await getDeploy(NODE_ADDRESS!, addGaugeDeployHash);
     console.log("... addGauge function called successfully.");
  }

  voteForGaugeWeights =async (gaugeAddr:string,userWeight:string) => {
    await this.gaugeController.setContractHash(this.contractHash!);
    const voteForGaugeWeightsDeployHash = await this.gaugeController.vote_for_gauge_weights(
      KEYS!,
      gaugeAddr!,
      userWeight!,
      GAUGE_CONTROLLER_PAYMENT_AMOUNT!
     );
     console.log("... voteForGaugeWeights deploy hash: ", voteForGaugeWeightsDeployHash);
    
     await getDeploy(NODE_ADDRESS!, voteForGaugeWeightsDeployHash);
     console.log("... voteForGaugeWeights function called successfully.");
  }

  //gauegTypes also has sessioncode
  gaugeTypes =async (owner:string) => {
    await this.gaugeController.setContractHash(this.contractHash!);
    const gaugeTypes = await this.gaugeController.gauge_types_(owner!);
    console.log(`... gaugeTypes: ${gaugeTypes}`);
  }

  gaugeTypeNames =async (owner:string) => {
    await this.gaugeController.setContractHash(this.contractHash!);
    const gaugeTypeNames = await this.gaugeController.gauge_type_names(owner!);
    console.log(`... gaugeTypeNames: ${gaugeTypeNames}`);
  }

  voteUserSlopes =async (spender:string) => {
    await this.gaugeController.setContractHash(this.contractHash!);
    const voteUserSlopes = await this.gaugeController.vote_user_slopes( KEYS.publicKey.toAccountHashStr()!,spender!);
    console.log(`... voteUserSlopes: ${voteUserSlopes}`);
  }

  voteUserPower =async (owner:string) => {
    await this.gaugeController.setContractHash(this.contractHash!);
    const voteUserPower = await this.gaugeController.vote_user_power(owner!);
    console.log(`... voteUserPower: ${voteUserPower}`);
  }

  lastUserVote =async ( spender:string) => {
    await this.gaugeController.setContractHash(this.contractHash!);
    const lastUserVote = await this.gaugeController.last_user_vote(KEYS.publicKey.toAccountHashStr()!, spender!);
    console.log(`... lastUserVote: ${lastUserVote}`);
  }

  pointsweight =async ( spender:string) => {
    await this.gaugeController.setContractHash(this.contractHash!);
    const pointsweight = await this.gaugeController.points_weight(KEYS.publicKey.toAccountHashStr()!, spender!);
    console.log(`... pointsweight: ${pointsweight}`);
  }

  changesWeight =async ( spender:string) => {
    await this.gaugeController.setContractHash(this.contractHash!);
    const changesWeight = await this.gaugeController.changes_weight(KEYS.publicKey.toAccountHashStr()!, spender!);
    console.log(`... changesWeight: ${changesWeight}`);
  }

  timeWeight =async ( spender:string) => {
    await this.gaugeController.setContractHash(this.contractHash!);
    const timeWeight = await this.gaugeController.time_weight( spender!);
    console.log(`... timeWeight: ${timeWeight}`);
  }

  gauges =async ( spender:string) => {
    await this.gaugeController.setContractHash(this.contractHash!);
    const gauges = await this.gaugeController.gauges( spender!);
    console.log(`... gauges: ${gauges}`);
  }

  timeSum =async ( owner:string) => {
    await this.gaugeController.setContractHash(this.contractHash!);
    const timeSum = await this.gaugeController.time_sum( owner!);
    console.log(`... timeSum: ${timeSum}`);
  }

  pointsSum =async ( spender:string) => {
    await this.gaugeController.setContractHash(this.contractHash!);
    const pointsSum = await this.gaugeController.points_sum(KEYS.publicKey.toAccountHashStr()!, spender!);
    console.log(`... pointsSum: ${pointsSum}`);
  }

  changesSum =async ( spender:string) => {
    await this.gaugeController.setContractHash(this.contractHash!);
    const changesSum = await this.gaugeController.changes_sum(KEYS.publicKey.toAccountHashStr()!, spender!);
    console.log(`... changesSum: ${changesSum}`);
  }

  pointsTotal =async ( owner:string) => {
    await this.gaugeController.setContractHash(this.contractHash!);
    const pointsTotal = await this.gaugeController.points_total( owner!);
    console.log(`... pointsTotal: ${pointsTotal}`);
  }

  pointsTypeWeight =async ( spender:string) => {
    await this.gaugeController.setContractHash(this.contractHash!);
    const pointsTypeWeight = await this.gaugeController.points_type_weight(KEYS.publicKey.toAccountHashStr()!, spender!);
    console.log(`... pointsTypeWeight: ${pointsTypeWeight}`);
  }

  timeTypeWeight =async ( owner:string) => {
    await this.gaugeController.setContractHash(this.contractHash!);
    const timeTypeWeight = await this.gaugeController.time_type_weight( owner!);
    console.log(`... timeTypeWeight: ${timeTypeWeight}`);
  }

  timeTotal =async () => {
    await this.gaugeController.setContractHash(this.contractHash!);
    const timeTotal = await this.gaugeController.time_total();
    console.log(`... timeTotal: ${timeTotal}`);
  }

  admin =async () => {
    await this.gaugeController.setContractHash(this.contractHash!);
    const admin = await this.gaugeController.admin();
    console.log(`... admin: ${admin}`);
  }

  futureAdmin =async () => {
    await this.gaugeController.setContractHash(this.contractHash!);
    const futureAdmin = await this.gaugeController.future_admin();
    console.log(`... futureAdmin: ${futureAdmin}`);
  }

  token =async () => {
    await this.gaugeController.setContractHash(this.contractHash!);
    const token = await this.gaugeController.token();
    console.log(`... token: ${token}`);
  }

  nGaugeTypes =async () => {
    await this.gaugeController.setContractHash(this.contractHash!);
    const nGaugeTypes = await this.gaugeController.n_gauge_types();
    console.log(`... nGaugeTypes: ${nGaugeTypes}`);
  }

  nGauges =async () => {
    await this.gaugeController.setContractHash(this.contractHash!);
    const nGauges = await this.gaugeController.n_gauges();
    console.log(`... nGauges: ${nGauges}`);
  }

  votingEscrow =async () => {
    await this.gaugeController.setContractHash(this.contractHash!);
    const votingEscrow = await this.gaugeController.voting_escrow();
    console.log(`... votingEscrow: ${votingEscrow}`);
  }

  rewardCount =async () => {
    await this.gaugeController.setContractHash(this.contractHash!);
    const rewardCount = await this.gaugeController.reward_count();
    console.log(`... rewardCount: ${rewardCount}`);
  }

  getHash =async () => {
    await this.gaugeController.setContractHash(this.contractHash!);
    const getHash = await this.gaugeController.get_hash();
    console.log(`... getHash: ${getHash}`);
  }

  packageHash =async () => {
    await this.gaugeController.setContractHash(this.contractHash!);
    const packageHash = await this.gaugeController.package_hash();
    console.log(`... packageHash: ${packageHash}`);
  }
 
}


