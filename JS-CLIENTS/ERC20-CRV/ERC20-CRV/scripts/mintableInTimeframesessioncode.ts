import {Erc20CrvSessionCode} from "./erc20CrvContract";
let erc20CrvSessionCode = new Erc20CrvSessionCode();
erc20CrvSessionCode.mintableInTimeframesessioncode(process.argv[2]!,process.argv[3]!);

/*
    "Script mintableInTimeframesessioncode comments": {
        "Description" : "use it to call mintableInTimeframe through session code",
        "Syntax" : "npm run mintableInTimeframesessioncode <start> <end>",
        "Example" : "npm run mintableInTimeframesessioncode 50000000000 100000000000"
    },
*/
