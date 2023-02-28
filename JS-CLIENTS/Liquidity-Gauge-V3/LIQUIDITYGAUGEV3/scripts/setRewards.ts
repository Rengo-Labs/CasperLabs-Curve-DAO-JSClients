import {LiquidityGaugeV3Functions} from "./liquidityGaugeV3ContractFunctions";
let liquidityGaugeV3Functions = new LiquidityGaugeV3Functions();
liquidityGaugeV3Functions.setRewards(process.argv[2]!,process.argv[3]!,[process.argv[3]]!);

/*
    "Script setRewards comments": {
        "Description" : "use it to set Rewards",
        "Syntax" : "npm run setRewards <rewardContract> <claimSig> <rewardTokens>",
        "Example" : "npm run setRewards 56b77636b3af55977cfeea4eb22d18394ee2aa2ba4b2afe3a13a91adc26a1222 claim 2 "
    },
*/
