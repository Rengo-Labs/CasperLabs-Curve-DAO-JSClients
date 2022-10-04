import {GaugeControllerFunctions} from "./GaugeControllerFunctions";
let gaugeControllerFunctions = new GaugeControllerFunctions();
gaugeControllerFunctions.timeWeight( process.argv[2]!);

/*
    "Script timeWeight comments": {
        "Description" : "use it to get time Weight",
        "Syntax" : "npm run timeWeight <spender>",
        "Example" : "npm run timeWeight 56b77636b3af55977cfeea4eb22d18394ee2aa2ba4b2afe3a13a91adc26a1222 "
    },
*/
