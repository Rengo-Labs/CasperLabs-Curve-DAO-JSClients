import {CurveRewardsFunctions} from "./curveRewardsContractFunctions";
let curveRewardsFunctions = new CurveRewardsFunctions();
curveRewardsFunctions.withdrawLp(process.argv[2]!);

/*
    "Script withdrawLp comments": {
        "Description" : "use it to withdraw",
        "Syntax" : "npm run withdrawLp <amount>",
        "Example" : "npm run withdrawLp 20000000000"
    },
*/
