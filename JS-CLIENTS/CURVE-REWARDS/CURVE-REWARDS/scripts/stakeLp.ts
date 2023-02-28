import {CurveRewardsFunctions} from "./curveRewardsContractFunctions";
let curveRewardsFunctions = new CurveRewardsFunctions();
curveRewardsFunctions.stakeLp(process.argv[2]!);

/*
    "Script stakeLp comments": {
        "Description" : "use it to get stakeLp amount",
        "Syntax" : "npm run stakeLp <amount>",
        "Example" : "npm run stakeLp 20000000000"
    },
*/
