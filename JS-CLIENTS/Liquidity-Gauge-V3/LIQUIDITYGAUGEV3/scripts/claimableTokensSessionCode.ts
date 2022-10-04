import {LiquidityGaugeV3SessionCode} from "./liquidityGaugeV3Contract";
let liquidityGaugeV3SessionCode = new LiquidityGaugeV3SessionCode();
liquidityGaugeV3SessionCode.claimableTokensSessionCode(process.argv[2]!);

/*
    "Script claimableTokensSessionCode comments": {
        "Description" : "use it to call claimableTokensSessionCode through session code",
        "Syntax" : "npm run claimableTokensSessionCode <addr>",
        "Example" : "npm run claimableTokensSessionCode 56b77636b3af55977cfeea4eb22d18394ee2aa2ba4b2afe3a13a91adc26a1222"
    },
*/
