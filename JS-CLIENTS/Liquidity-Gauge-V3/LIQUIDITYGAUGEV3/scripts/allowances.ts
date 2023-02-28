import {LiquidityGaugeV3Functions} from "./liquidityGaugeV3ContractFunctions";
let liquidityGaugeV3Functions = new LiquidityGaugeV3Functions();
liquidityGaugeV3Functions.allowances(process.argv[2]!);

/*
    "Script allowances comments": {
        "Description" : "use it to get allowances",
        "Syntax" : "npm run allowances <spender>",
        "Example" : "npm run allowances 56b77636b3af55977cfeea4eb22d18394ee2aa2ba4b2afe3a13a91adc26a1222"
    },
*/
