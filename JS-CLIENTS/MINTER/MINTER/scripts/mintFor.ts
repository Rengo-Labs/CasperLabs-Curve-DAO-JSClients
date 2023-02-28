import {MinterFunctions} from "./minterContractFunctions";
let minterFunctions = new MinterFunctions();
minterFunctions.mintFor(process.argv[2]!);

/*
    "Script mintFor comments": {
        "Description" : "use it to mintFor",
        "Syntax" : "npm run mintFor <liquidityGaugeRewardPackageHash>",
        "Example" : "npm run mintFor 737588742efd608e68a1ae1bde3955d61e1d3f72b0e85f7755efe2f14363b943"
    },
*/
