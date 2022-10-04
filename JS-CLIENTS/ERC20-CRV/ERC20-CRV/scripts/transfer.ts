import {Erc20CrvFunctions} from "./erc20CrvContractFunctions";
let erc20CrvFunctions = new Erc20CrvFunctions();
erc20CrvFunctions.transfer(process.argv[2]!,process.argv[3]!);

/*
    "Script transfer comments": {
        "Description" : "use it to transfer tokens",
        "Syntax" : "npm run transfer <recipient> <amount>",
        "Example" : "npm run transfer 737588742efd608e68a1ae1bde3955d61e1d3f72b0e85f7755efe2f14363b943 10"
    },
*/
