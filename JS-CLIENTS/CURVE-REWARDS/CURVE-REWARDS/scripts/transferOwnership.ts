import {CurveRewardsFunctions} from "./curveRewardsContractFunctions";
let curveRewardsFunctions = new CurveRewardsFunctions();
curveRewardsFunctions.transferOwnership(process.argv[2]!);

/*
    "Script transferOwnership comments": {
        "Description" : "use it to change transfer ownership",
        "Syntax" : "npm run transferOwnership <newOwner>",
        "Example" : "npm run transferOwnership 56b77636b3af55977cfeea4eb22d18394ee2aa2ba4b2afe3a13a91adc26a1222"
    },
*/
