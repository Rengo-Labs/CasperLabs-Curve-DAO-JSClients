import {GaugeControllerFunctions} from "./GaugeControllerFunctions";
let gaugeControllerFunctions = new GaugeControllerFunctions();
gaugeControllerFunctions.pointsSum( process.argv[2]!);

/*
    "Script pointsSum comments": {
        "Description" : "use it to get points Sum",
        "Syntax" : "npm run pointsSum <spender>",
        "Example" : "npm run pointsSum 56b77636b3af55977cfeea4eb22d18394ee2aa2ba4b2afe3a13a91adc26a1222 "
    },
*/
