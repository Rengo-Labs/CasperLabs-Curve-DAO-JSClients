import {GaugeControllerFunctions} from "./GaugeControllerFunctions";
let gaugeControllerFunctions = new GaugeControllerFunctions();
gaugeControllerFunctions.voteForGaugeWeights( process.argv[2]!,process.argv[3]!);

/*
    "Script voteForGaugeWeights comments": {
        "Description" : "use it to vote For Gauge Weights",
        "Syntax" : "npm run voteForGaugeWeights <name> <weight>",
        "Example" : "npm run voteForGaugeWeights 56b77636b3af55977cfeea4eb22d18394ee2aa2ba4b2afe3a13a91adc26a1222 0"
    },
*/
