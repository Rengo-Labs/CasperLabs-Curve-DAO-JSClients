import {MinterFunctions} from "./minterContractFunctions";
let minterFunctions = new MinterFunctions();
minterFunctions.mint(process.argv[2]!);

/*
    "Script mint comments": {
        "Description" : "use it to mint",
        "Syntax" : "npm run mint <liquidityGaugeRewardPackageHash>",
        "Example" : "npm run mint 737588742efd608e68a1ae1bde3955d61e1d3f72b0e85f7755efe2f14363b943"
    },
*/
