import {Erc20CrvSessionCode} from "./erc20CrvContract";
let erc20CrvSessionCode = new Erc20CrvSessionCode();
erc20CrvSessionCode.transferFromSessionCode(process.argv[2]!,process.argv[3]!);

/*
    "Script transferFromSessionCode comments": {
        "Description" : "use it to tansfer tokens From owner to recipient through session code",
        "Syntax" : "npm run transferFromSessionCode <recipient> <amount>",
        "Example" : "npm run transferFromSessionCode 737588742efd608e68a1ae1bde3955d61e1d3f72b0e85f7755efe2f14363b943 10"
    },
*/
