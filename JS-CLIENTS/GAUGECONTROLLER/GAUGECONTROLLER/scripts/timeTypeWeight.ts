import {GaugeControllerFunctions} from "./GaugeControllerFunctions";
let gaugeControllerFunctions = new GaugeControllerFunctions();
gaugeControllerFunctions.timeTypeWeight( process.argv[2]!);

/*
    "Script timeTypeWeight comments": {
        "Description" : "use it to get time Type Weight",
        "Syntax" : "npm run timeTypeWeight <owner>",
        "Example" : "npm run timeTypeWeight 56b77636b3af55977cfeea4eb22d18394ee2aa2ba4b2afe3a13a91adc26a1222 "
    },
*/
