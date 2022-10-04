import {CurveRewardsFunctions} from "./curveRewardsContractFunctions";
let curveRewardsFunctions = new CurveRewardsFunctions();
curveRewardsFunctions.withdraw(process.argv[2]!);

/*
    "Script withdraw comments": {
        "Description" : "use it to withdraw",
        "Syntax" : "npm run withdraw <amount>",
        "Example" : "npm run withdraw 20000000000"
    },
*/
