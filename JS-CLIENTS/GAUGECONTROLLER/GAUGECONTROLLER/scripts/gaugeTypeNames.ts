import {GaugeControllerFunctions} from "./GaugeControllerFunctions";
let gaugeControllerFunctions = new GaugeControllerFunctions();
gaugeControllerFunctions.gaugeTypeNames( process.argv[2]!);

/*
    "Script gaugeTypeNames comments": {
        "Description" : "use it to get gauge Type Names",
        "Syntax" : "npm run gaugeTypeNames <owner>",
        "Example" : "npm run gaugeTypeNames 56b77636b3af55977cfeea4eb22d18394ee2aa2ba4b2afe3a13a91adc26a1222 "
    },
*/
