import {Erc20CrvSessionCode} from "./erc20CrvContract";
let erc20CrvSessionCode = new Erc20CrvSessionCode();
erc20CrvSessionCode.mintsessioncode(process.argv[2]!);

/*
    "Script mintsessioncode comments": {
        "Description" : "use it to call mint through session code",
        "Syntax" : "npm run mintsessioncode <amount>",
        "Example" : "npm run mintsessioncode 10"
    },
*/
