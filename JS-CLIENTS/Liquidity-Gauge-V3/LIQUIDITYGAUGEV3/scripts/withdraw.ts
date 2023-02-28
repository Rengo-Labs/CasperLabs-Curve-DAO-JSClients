import {LiquidityGaugeV3Functions} from "./liquidityGaugeV3ContractFunctions";
let liquidityGaugeV3Functions = new LiquidityGaugeV3Functions();
liquidityGaugeV3Functions.withdraw(process.argv[2]!);

/*
    "Script withdraw comments": {
        "Description" : "use it to withdraw value",
        "Syntax" : "npm run withdraw <value>",
        "Example" : "npm run withdraw 10"
    },
*/
