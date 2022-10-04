import {Erc20CrvFunctions} from "./erc20CrvContractFunctions";
let erc20CrvFunctions = new Erc20CrvFunctions();
erc20CrvFunctions.mint(process.argv[2]!);

/*
    "Script mint comments": {
        "Description" : "use it to mint tokens",
        "Syntax" : "npm run mint <amount>",
        "Example" : "npm run mint 10"
    },
*/
