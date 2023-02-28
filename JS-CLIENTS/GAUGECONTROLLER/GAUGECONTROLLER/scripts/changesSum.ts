import {GaugeControllerFunctions} from "./GaugeControllerFunctions";
let gaugeControllerFunctions = new GaugeControllerFunctions();
gaugeControllerFunctions.changesSum( process.argv[2]!);

/*
    "Script changesSum comments": {
        "Description" : "use it to get changesSum",
        "Syntax" : "npm run changesSum <spender>",
        "Example" : "npm run changesSum 56b77636b3af55977cfeea4eb22d18394ee2aa2ba4b2afe3a13a91adc26a1222 "
    },
*/
