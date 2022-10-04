import {Erc20CrvFunctions} from "./erc20CrvContractFunctions";
let erc20CrvFunctions = new Erc20CrvFunctions();
erc20CrvFunctions.transferFrom(process.argv[2]!,process.argv[3]!);

/*
    "Script transferFrom comments": {
        "Description" : "use it to transfer tokens from owner to other account",
        "Syntax" : "npm run transferFrom <recipient> <amount>",
        "Example" : "npm run transferFrom 737588742efd608e68a1ae1bde3955d61e1d3f72b0e85f7755efe2f14363b943 10"
    },
*/
