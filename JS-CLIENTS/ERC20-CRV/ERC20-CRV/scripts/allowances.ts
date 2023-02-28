import {Erc20CrvFunctions} from "./erc20CrvContractFunctions";
let erc20CrvFunctions = new Erc20CrvFunctions();
erc20CrvFunctions.allowances(process.argv[2]!);

/*
    "Script allowances comments": {
        "Description" : "use it to set allowances",
        "Syntax" : "npm run allowances <spender>",
        "Example" : "npm run allowances 737588742efd608e68a1ae1bde3955d61e1d3f72b0e85f7755efe2f14363b943"
    },
*/
