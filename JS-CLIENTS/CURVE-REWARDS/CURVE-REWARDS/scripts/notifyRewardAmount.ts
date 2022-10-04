import {CurveRewardsFunctions} from "./curveRewardsContractFunctions";
let curveRewardsFunctions = new CurveRewardsFunctions();
curveRewardsFunctions.notifyRewardAmount(process.argv[2]!);

/*
    "Script notifyRewardAmount comments": {
        "Description" : "use it to notify reward amount",
        "Syntax" : "npm run notifyRewardAmount <reward>",
        "Example" : "npm run notifyRewardAmount 20000000000"
    },
*/
