import {Erc20CrvFunctions} from "./erc20CrvContractFunctions";
let erc20CrvFunctions = new Erc20CrvFunctions();
erc20CrvFunctions.approve(process.argv[2]!,process.argv[3]!);

/*
    "Script approve comments": {
        "Description" : "use it to approve tokens for spender",
        "Syntax" : "npm run approve <spender> <amount>",
        "Example" : "npm run approve 737588742efd608e68a1ae1bde3955d61e1d3f72b0e85f7755efe2f14363b943 10"
    },
*/
