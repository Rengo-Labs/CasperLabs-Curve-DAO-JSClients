import {LiquidityGaugeV3SessionCode} from "./liquidityGaugeV3Contract";
let liquidityGaugeV3SessionCode = new LiquidityGaugeV3SessionCode();
liquidityGaugeV3SessionCode.claimableRewardSessionCode(process.argv[2]!);

/*
    "Script claimableRewardSessionCode comments": {
        "Description" : "use it to call claimableRewardSessionCode through session code",
        "Syntax" : "npm run claimableRewardSessionCode <token>",
        "Example" : "npm run claimableRewardSessionCode 56b77636b3af55977cfeea4eb22d18394ee2aa2ba4b2afe3a13a91adc26a1222"
    },
*/
