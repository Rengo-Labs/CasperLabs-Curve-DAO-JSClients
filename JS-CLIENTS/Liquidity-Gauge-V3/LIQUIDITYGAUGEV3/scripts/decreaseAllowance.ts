import {LiquidityGaugeV3Functions} from "./liquidityGaugeV3ContractFunctions";
let liquidityGaugeV3Functions = new LiquidityGaugeV3Functions();
liquidityGaugeV3Functions.decreaseAllowance(process.argv[2]!,process.argv[3]!);

/*
    "Script decreaseAllowance comments": {
        "Description" : "use it to decrease Allowance",
        "Syntax" : "npm run decreaseAllowance <spender> <amount>",
        "Example" : "npm run decreaseAllowance 56b77636b3af55977cfeea4eb22d18394ee2aa2ba4b2afe3a13a91adc26a1222 10"
    },
*/
