import {GaugeControllerFunctions} from "./GaugeControllerFunctions";
let gaugeControllerFunctions = new GaugeControllerFunctions();
gaugeControllerFunctions.checkpointGauge( process.argv[2]!);

/*
    "Script checkpointGauge comments": {
        "Description" : "use it to run checkpointGauge",
        "Syntax" : "npm run checkpointGauge <address>",
        "Example" : "npm run checkpointGauge 737588742efd608e68a1ae1bde3955d61e1d3f72b0e85f7755efe2f14363b943"
    },
*/
