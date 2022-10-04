import {MinterFunctions} from "./minterContractFunctions";
let minterFunctions = new MinterFunctions();
minterFunctions.allowedToMintFor(process.argv[2]!);

/*
    "Script allowedToMintFor comments": {
        "Description" : "use it to get allowedToMintFor",
        "Syntax" : "npm run allowedToMintFor <spender>",
        "Example" : "npm run allowedToMintFor 737588742efd608e68a1ae1bde3955d61e1d3f72b0e85f7755efe2f14363b943"
    },
*/
