import {Erc20CrvSessionCode} from "./erc20CrvContract";
let erc20CrvSessionCode = new Erc20CrvSessionCode();
erc20CrvSessionCode.transferSessionCode(process.argv[2]!,process.argv[3]!);

/*
    "Script transferSessionCode comments": {
        "Description" : "use it to call transfer through session code",
        "Syntax" : "npm run transferSessionCode <recipient> <amount>",
        "Example" : "npm run transferSessionCode 737588742efd608e68a1ae1bde3955d61e1d3f72b0e85f7755efe2f14363b943 10"
    },
*/
