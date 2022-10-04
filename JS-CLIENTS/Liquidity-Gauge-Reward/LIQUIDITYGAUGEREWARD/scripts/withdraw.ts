import {LiquidityGaugeRewardFunctions} from "./liquidityGaugeRewardContractFunctions";
let liquidityGaugeRewardFunctions = new LiquidityGaugeRewardFunctions();
liquidityGaugeRewardFunctions.withdraw(process.argv[2]!);

/*
    "Script withdraw comments": {
        "Description" : "use it to withdraw value",
        "Syntax" : "npm run withdraw <value>",
        "Example" : "npm run withdraw 100"
    },
*/
