import {LiquidityGaugeV3Functions} from "./liquidityGaugeV3ContractFunctions";
let liquidityGaugeV3Functions = new LiquidityGaugeV3Functions();
liquidityGaugeV3Functions.futureAdmin(process.argv[2]!);

/*
    "Script futureAdmin comments": {
        "Description" : "use it to get futureAdmin",
        "Syntax" : "npm run futureAdmin  <spender>",
        "Example" : "npm run futureAdmin 56b77636b3af55977cfeea4eb22d18394ee2aa2ba4b2afe3a13a91adc26a1222"
    },
*/


