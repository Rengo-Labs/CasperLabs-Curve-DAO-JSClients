import {CurveRewardsFunctions} from "./curveRewardsContractFunctions";
let curveRewardsFunctions = new CurveRewardsFunctions();
curveRewardsFunctions.stake(process.argv[2]!);

/*
    "Script stake comments": {
        "Description" : "use it to get stake",
        "Syntax" : "npm run stake <amount>",
        "Example" : "npm run stake 20000000000"
    },
*/
