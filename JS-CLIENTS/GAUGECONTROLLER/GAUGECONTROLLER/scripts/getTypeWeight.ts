import {GaugeControllerSessionCode} from "./gaugeControllerContract";
let gaugeControllerSessionCode = new GaugeControllerSessionCode();
gaugeControllerSessionCode.getTypeWeight( process.argv[2]!);

/*
    "Script getTypeWeight comments": {
        "Description" : "use it to call getTypeWeight through session code",
        "Syntax" : "npm run getTypeWeight <tokenId>",
        "Example" : "npm run getTypeWeight 1"
    },
*/
