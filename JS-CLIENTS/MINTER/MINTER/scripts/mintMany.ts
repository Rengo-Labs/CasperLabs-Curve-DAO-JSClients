import {MinterFunctions} from "./minterContractFunctions";
let minterFunctions = new MinterFunctions();
minterFunctions.mintMany(process.argv[2]!);

/*
    "Script mintMany comments": {
        "Description" : "use it to mintMany",
        "Syntax" : "npm run mintMany <liquidityGaugeRewardPackageHash>",
        "Example" : "npm run mintMany 737588742efd608e68a1ae1bde3955d61e1d3f72b0e85f7755efe2f14363b943"
    },
*/
