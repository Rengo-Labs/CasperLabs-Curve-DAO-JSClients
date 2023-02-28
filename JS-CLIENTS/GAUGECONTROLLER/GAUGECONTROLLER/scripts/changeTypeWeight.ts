import {GaugeControllerFunctions} from "./GaugeControllerFunctions";
let gaugeControllerFunctions = new GaugeControllerFunctions();
gaugeControllerFunctions.changeTypeWeight( process.argv[2]!,process.argv[3]!);

/*
    "Script changeTypeWeight comments": {
        "Description" : "use it to  change type weight",
        "Syntax" : "npm run changeTypeWeight <typeId> <weight>",
        "Example" : "npm run changeTypeWeight 1 2"
    },
*/
