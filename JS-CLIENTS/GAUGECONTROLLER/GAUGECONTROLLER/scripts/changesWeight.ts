import {GaugeControllerFunctions} from "./GaugeControllerFunctions";
let gaugeControllerFunctions = new GaugeControllerFunctions();
gaugeControllerFunctions.changesWeight( process.argv[2]!);

/*
    "Script changesWeight comments": {
        "Description" : "use it to get changes Weight",
        "Syntax" : "npm run changesWeight <spender>",
        "Example" : "npm run changesWeight 56b77636b3af55977cfeea4eb22d18394ee2aa2ba4b2afe3a13a91adc26a1222 "
    },
*/
