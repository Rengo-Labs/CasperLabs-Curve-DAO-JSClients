import {LiquidityGaugeV3Functions} from "./liquidityGaugeV3ContractFunctions";
let liquidityGaugeV3Functions = new LiquidityGaugeV3Functions();
liquidityGaugeV3Functions.deposit(process.argv[2]!);

/*
    "Script deposit comments": {
        "Description" : "use it to deposit value",
        "Syntax" : "npm run deposit <value>",
        "Example" : "npm run deposit 10"
    },
*/
