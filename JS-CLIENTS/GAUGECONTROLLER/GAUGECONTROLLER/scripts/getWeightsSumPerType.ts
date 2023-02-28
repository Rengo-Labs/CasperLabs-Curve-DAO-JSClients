import {GaugeControllerSessionCode} from "./gaugeControllerContract";
let gaugeControllerSessionCode = new GaugeControllerSessionCode();
gaugeControllerSessionCode.getWeightsSumPerType( process.argv[2]!);

/*
    "Script getWeightsSumPerType comments": {
        "Description" : "use it to call getWeightsSumPerType through session code",
        "Syntax" : "npm run getWeightsSumPerType <tokenId>",
        "Example" : "npm run getWeightsSumPerType 1"
    },
*/
