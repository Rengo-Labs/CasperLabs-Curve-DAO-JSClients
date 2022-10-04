import {Erc20CrvFunctions} from "./erc20CrvContractFunctions";
let erc20CrvFunctions = new Erc20CrvFunctions();
erc20CrvFunctions.burn(process.argv[2]!);

/*
    "Script burn comments": {
        "Description" : "use it to burn tokens",
        "Syntax" : "npm run burn <value>",
        "Example" : "npm run burn 10"
    },
*/
