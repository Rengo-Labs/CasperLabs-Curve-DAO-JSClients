import {LiquidityGaugeRewardFunctions} from "./liquidityGaugeRewardContractFunctions";
let liquidityGaugeRewardFunctions = new LiquidityGaugeRewardFunctions();
liquidityGaugeRewardFunctions.deposit(process.argv[2]!);

/*
    "Script deposit comments": {
        "Description" : "use it to deposit",
        "Syntax" : "npm run deposit <value>",
        "Example" : "npm run deposit 100"
    },
*/
