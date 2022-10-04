import {GaugeControllerFunctions} from "./GaugeControllerFunctions";
let gaugeControllerFunctions = new GaugeControllerFunctions();
gaugeControllerFunctions.changeGaugeWeight( process.argv[2]!,process.argv[3]!);

/*
    "Script changeGaugeWeight comments": {
        "Description" : "use it to  change gauge weight",
        "Syntax" : "npm run changeGaugeWeight <address> <weight>",
        "Example" : "npm run changeGaugeWeight 56b77636b3af55977cfeea4eb22d18394ee2aa2ba4b2afe3a13a91adc26a1222 2"
    },
*/
