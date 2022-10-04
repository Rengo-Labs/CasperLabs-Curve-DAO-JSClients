import {CurveRewardsFunctions} from "./curveRewardsContractFunctions";
let curveRewardsFunctions = new CurveRewardsFunctions();
curveRewardsFunctions.setRewardDistribution(process.argv[2]!);

/*
    "Script setRewardDistribution comments": {
        "Description" : "use it to set reward distribution",
        "Syntax" : "npm run setRewardDistribution <distribution>",
        "Example" : "npm run setRewardDistribution 56b77636b3af55977cfeea4eb22d18394ee2aa2ba4b2afe3a13a91adc26a1222"
    },
*/
