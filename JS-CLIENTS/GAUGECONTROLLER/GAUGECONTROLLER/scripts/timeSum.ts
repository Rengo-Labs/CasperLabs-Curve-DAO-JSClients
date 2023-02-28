import {GaugeControllerFunctions} from "./GaugeControllerFunctions";
let gaugeControllerFunctions = new GaugeControllerFunctions();
gaugeControllerFunctions.timeSum( process.argv[2]!);

/*
    "Script timeSum comments": {
        "Description" : "use it to get time Sum",
        "Syntax" : "npm run timeSum <owner>",
        "Example" : "npm run timeSum 56b77636b3af55977cfeea4eb22d18394ee2aa2ba4b2afe3a13a91adc26a1222 "
    },
*/
