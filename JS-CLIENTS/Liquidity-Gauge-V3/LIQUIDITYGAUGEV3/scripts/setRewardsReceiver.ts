import {LiquidityGaugeV3Functions} from "./liquidityGaugeV3ContractFunctions";
let liquidityGaugeV3Functions = new LiquidityGaugeV3Functions();
liquidityGaugeV3Functions.setRewardsReceiver(process.argv[2]!);

/*
    "Script setRewardsReceiver comments": {
        "Description" : "use it to set Rewards Receiver",
        "Syntax" : "npm run setRewardsReceiver <receiver>",
        "Example" : "npm run setRewardsReceiver 56b77636b3af55977cfeea4eb22d18394ee2aa2ba4b2afe3a13a91adc26a1222"
    },
*/
