import {GaugeControllerFunctions} from "./GaugeControllerFunctions";
let gaugeControllerFunctions = new GaugeControllerFunctions();
gaugeControllerFunctions.pointsweight( process.argv[2]!);

/*
    "Script pointsweight comments": {
        "Description" : "use it to get points weight",
        "Syntax" : "npm run pointsweight <spender>",
        "Example" : "npm run pointsweight 56b77636b3af55977cfeea4eb22d18394ee2aa2ba4b2afe3a13a91adc26a1222 "
    },
*/
