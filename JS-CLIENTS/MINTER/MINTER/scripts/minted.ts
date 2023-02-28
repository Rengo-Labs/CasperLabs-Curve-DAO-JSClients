import {MinterFunctions} from "./minterContractFunctions";
let minterFunctions = new MinterFunctions();
minterFunctions.minted(process.argv[2]!);

/*
    "Script minted comments": {
        "Description" : "use it to get minted",
        "Syntax" : "npm run minted <spender>",
        "Example" : "npm run minted 737588742efd608e68a1ae1bde3955d61e1d3f72b0e85f7755efe2f14363b943"
    },
*/
