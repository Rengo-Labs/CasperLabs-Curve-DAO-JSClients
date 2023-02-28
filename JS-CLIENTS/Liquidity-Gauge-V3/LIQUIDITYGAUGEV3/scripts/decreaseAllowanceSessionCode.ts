import {LiquidityGaugeV3SessionCode} from "./liquidityGaugeV3Contract";
let liquidityGaugeV3SessionCode = new LiquidityGaugeV3SessionCode();
liquidityGaugeV3SessionCode.decreaseAllowanceSessionCode(process.argv[2]!, process.argv[3]!);

/*
    "Script decreaseAllowanceSessionCode comments": {
        "Description" : "use it to call decreaseAllowanceSessionCode through session code",
        "Syntax" : "npm run decreaseAllowanceSessionCode <spender> <amount>",
        "Example" : "npm run decreaseAllowanceSessionCode 56b77636b3af55977cfeea4eb22d18394ee2aa2ba4b2afe3a13a91adc26a1222 10"
    },
*/
