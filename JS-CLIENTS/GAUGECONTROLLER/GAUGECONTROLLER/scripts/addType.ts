import {GaugeControllerFunctions} from "./GaugeControllerFunctions";
let gaugeControllerFunctions = new GaugeControllerFunctions();
gaugeControllerFunctions.addType( process.argv[2]!,process.argv[3]!);

/*
    "Script addType comments": {
        "Description" : "use it to add type",
        "Syntax" : "npm run addType <name> <weight>",
        "Example" : "npm run addType name 2"
    },
*/
