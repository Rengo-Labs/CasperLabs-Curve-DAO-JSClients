import {GaugeControllerFunctions} from "./GaugeControllerFunctions";
let gaugeControllerFunctions = new GaugeControllerFunctions();
gaugeControllerFunctions.addGauge( process.argv[2]!,process.argv[3]!,process.argv[4]!);

/*
    "Script addGauge comments": {
        "Description" : "use it to  add gauge",
        "Syntax" : "npm run addGauge <address> <gaugeType> <weight>",
        "Example" : "npm run addGauge 56b77636b3af55977cfeea4eb22d18394ee2aa2ba4b2afe3a13a91adc26a1222 0 2"
    },
*/
