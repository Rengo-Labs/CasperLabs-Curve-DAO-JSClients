import {MinterFunctions} from "./minterContractFunctions";
let minterFunctions = new MinterFunctions();
minterFunctions.toggleApproveMint(process.argv[2]!);

/*
    "Script toggleApproveMint comments": {
        "Description" : "use it to toggleApproveMint",
        "Syntax" : "npm run toggleApproveMint <tokenPackageHash>",
        "Example" : "npm run toggleApproveMint 737588742efd608e68a1ae1bde3955d61e1d3f72b0e85f7755efe2f14363b943"
    },
*/
