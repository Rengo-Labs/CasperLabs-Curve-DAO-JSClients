import {LiquidityGaugeV3SessionCode} from "./liquidityGaugeV3Contract";
let liquidityGaugeV3SessionCode = new LiquidityGaugeV3SessionCode();
liquidityGaugeV3SessionCode.transferFromSessionCode(process.argv[2]!,process.argv[3]!);

/*
    "Script transferFromSessionCode comments": {
        "Description" : "use it to call transferFromSessionCode through session code",
        "Syntax" : "npm run transferFromSessionCode <recipientAccountHahs> <amount>",
        "Example" : "npm run transferFromSessionCode 56b77636b3af55977cfeea4eb22d18394ee2aa2ba4b2afe3a13a91adc26a1222 10"
    },
*/
