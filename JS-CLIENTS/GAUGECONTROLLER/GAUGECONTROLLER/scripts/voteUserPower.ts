import {GaugeControllerFunctions} from "./GaugeControllerFunctions";
let gaugeControllerFunctions = new GaugeControllerFunctions();
gaugeControllerFunctions.voteUserPower( process.argv[2]!);

/*
    "Script voteUserPower comments": {
        "Description" : "use it to get vote User Power",
        "Syntax" : "npm run voteUserPower <owner>",
        "Example" : "npm run voteUserPower 56b77636b3af55977cfeea4eb22d18394ee2aa2ba4b2afe3a13a91adc26a1222 "
    },
*/
