import {GaugeControllerFunctions} from "./GaugeControllerFunctions";
let gaugeControllerFunctions = new GaugeControllerFunctions();
gaugeControllerFunctions.commitTransferOwnership( process.argv[2]!);

/*
    "Script commitTransferOwnership comments": {
        "Description" : "use it to commit transfer ownership",
        "Syntax" : "npm run commitTransferOwnership <address>",
        "Example" : "npm run commitTransferOwnership 737588742efd608e68a1ae1bde3955d61e1d3f72b0e85f7755efe2f14363b943"
    },
*/
