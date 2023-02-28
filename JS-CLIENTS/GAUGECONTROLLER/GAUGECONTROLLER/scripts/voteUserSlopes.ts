import {GaugeControllerFunctions} from "./GaugeControllerFunctions";
let gaugeControllerFunctions = new GaugeControllerFunctions();
gaugeControllerFunctions.voteUserSlopes( process.argv[2]!);

/*
    "Script voteUserSlopes comments": {
        "Description" : "use it to get vote User Slopes",
        "Syntax" : "npm run voteUserSlopes <spender>",
        "Example" : "npm run voteUserSlopes 56b77636b3af55977cfeea4eb22d18394ee2aa2ba4b2afe3a13a91adc26a1222 "
    },
*/
