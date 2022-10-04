import {GaugeControllerFunctions} from "./GaugeControllerFunctions";
let gaugeControllerFunctions = new GaugeControllerFunctions();
gaugeControllerFunctions.pointsTypeWeight( process.argv[2]!);

/*
    "Script pointsTypeWeight comments": {
        "Description" : "use it to get points Type Weight",
        "Syntax" : "npm run pointsTypeWeight <spender>",
        "Example" : "npm run pointsTypeWeight 56b77636b3af55977cfeea4eb22d18394ee2aa2ba4b2afe3a13a91adc26a1222 "
    },
*/
