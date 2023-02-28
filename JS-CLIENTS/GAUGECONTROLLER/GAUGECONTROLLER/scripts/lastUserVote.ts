import {GaugeControllerFunctions} from "./GaugeControllerFunctions";
let gaugeControllerFunctions = new GaugeControllerFunctions();
gaugeControllerFunctions.lastUserVote( process.argv[2]!);

/*
    "Script lastUserVote comments": {
        "Description" : "use it to get lastUserVote",
        "Syntax" : "npm run lastUserVote <spender>",
        "Example" : "npm run lastUserVote 56b77636b3af55977cfeea4eb22d18394ee2aa2ba4b2afe3a13a91adc26a1222 "
    },
*/
