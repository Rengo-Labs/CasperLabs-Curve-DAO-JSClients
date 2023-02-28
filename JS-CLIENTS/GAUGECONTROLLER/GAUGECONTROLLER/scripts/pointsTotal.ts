import {GaugeControllerFunctions} from "./GaugeControllerFunctions";
let gaugeControllerFunctions = new GaugeControllerFunctions();
gaugeControllerFunctions.pointsTotal( process.argv[2]!);

/*
    "Script pointsTotal comments": {
        "Description" : "use it to get pointsTotal",
        "Syntax" : "npm run pointsTotal <owner>",
        "Example" : "npm run pointsTotal 56b77636b3af55977cfeea4eb22d18394ee2aa2ba4b2afe3a13a91adc26a1222 "
    },
*/
