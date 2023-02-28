import {LiquidityGaugeRewardFunctions} from "./liquidityGaugeRewardContractFunctions";
let liquidityGaugeRewardFunctions = new LiquidityGaugeRewardFunctions();
liquidityGaugeRewardFunctions.approvedToDeposit(process.argv[2]!);

/*
    "Script approvedToDeposit comments": {
        "Description" : "use it to get approvedToDeposit",
        "Syntax" : "npm run approvedToDeposit <spender>",
        "Example" : "npm run approvedToDeposit 267c011232d1c8d113474b20047f2aabd8d0a704ca9b34dad62cd8372c7a4790"
    },
*/

