import {LiquidityGaugeV3Functions} from "./liquidityGaugeV3ContractFunctions";
let liquidityGaugeV3Functions = new LiquidityGaugeV3Functions();
liquidityGaugeV3Functions.integrateCheckpointOf(process.argv[2]!);

/*
    "Script integrateCheckpointOf comments": {
        "Description" : "use it to get integrateCheckpointOf",
        "Syntax" : "npm run integrateCheckpointOf <spender>",
        "Example" : "npm run integrateCheckpointOf 56b77636b3af55977cfeea4eb22d18394ee2aa2ba4b2afe3a13a91adc26a1222"
    },
*/


