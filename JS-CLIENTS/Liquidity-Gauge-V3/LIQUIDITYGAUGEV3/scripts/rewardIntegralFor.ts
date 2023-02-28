import {LiquidityGaugeV3Functions} from "./liquidityGaugeV3ContractFunctions";
let liquidityGaugeV3Functions = new LiquidityGaugeV3Functions();
liquidityGaugeV3Functions.rewardIntegralFor(process.argv[2]!);

/*
    "Script rewardIntegralFor comments": {
        "Description" : "use it to get rewardIntegralFor",
        "Syntax" : "npm run rewardIntegralFor  <spender>",
        "Example" : "npm run rewardIntegralFor 56b77636b3af55977cfeea4eb22d18394ee2aa2ba4b2afe3a13a91adc26a1222"
    },
*/


