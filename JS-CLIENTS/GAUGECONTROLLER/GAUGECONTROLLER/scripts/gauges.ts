import {GaugeControllerFunctions} from "./GaugeControllerFunctions";
let gaugeControllerFunctions = new GaugeControllerFunctions();
gaugeControllerFunctions.gauges( process.argv[2]!);

/*
    "Script gauges comments": {
        "Description" : "use it to get gauges",
        "Syntax" : "npm run gauges <spender>",
        "Example" : "npm run gauges 56b77636b3af55977cfeea4eb22d18394ee2aa2ba4b2afe3a13a91adc26a1222 "
    },
*/
