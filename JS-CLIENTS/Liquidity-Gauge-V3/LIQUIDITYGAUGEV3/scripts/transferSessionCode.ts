import {LiquidityGaugeV3SessionCode} from "./liquidityGaugeV3Contract";
let liquidityGaugeV3SessionCode = new LiquidityGaugeV3SessionCode();
liquidityGaugeV3SessionCode.transferSessionCode(process.argv[2]!,process.argv[3]!);

/*
    "Script transferSessionCode comments": {
        "Description" : "use it to call transferSessionCode through session code",
        "Syntax" : "npm run transferSessionCode <recipientAccountHahs> <amount>",
        "Example" : "npm run transferSessionCode 56b77636b3af55977cfeea4eb22d18394ee2aa2ba4b2afe3a13a91adc26a1222 10"
    },
*/
