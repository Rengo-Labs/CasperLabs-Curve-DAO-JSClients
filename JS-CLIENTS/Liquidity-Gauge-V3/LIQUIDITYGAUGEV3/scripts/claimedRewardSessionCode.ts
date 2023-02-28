import {LiquidityGaugeV3SessionCode} from "./liquidityGaugeV3Contract";
let liquidityGaugeV3SessionCode = new LiquidityGaugeV3SessionCode();
liquidityGaugeV3SessionCode.claimedRewardSessionCode(process.argv[2]!);

/*
    "Script claimedRewardSessionCode comments": {
        "Description" : "use it to call claimedRewards through session code",
        "Syntax" : "npm run claimedRewardSessionCode <token>",
        "Example" : "npm run claimedRewardSessionCode 56b77636b3af55977cfeea4eb22d18394ee2aa2ba4b2afe3a13a91adc26a1222 "
    },
*/
