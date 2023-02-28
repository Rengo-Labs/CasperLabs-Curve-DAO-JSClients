import {deployCurveRewards} from "./curveRewards";
deployCurveRewards(process.argv[2]!,process.argv[3]!);

/*
    "Script deployCurveRewards comments": {
        "Description" : "use it to deploy CurveRewards",
        "Syntax" : "npm run deployCurveRewards <tokenPackageHash> <rewardPackageHash>",
        "Example" : "npm run deployCurveRewards 56b77636b3af55977cfeea4eb22d18394ee2aa2ba4b2afe3a13a91adc26a1222 56b77636b3af55977cfeea4eb22d18394ee2aa2ba4b2afe3a13a91adc26a1222"
    },
*/
