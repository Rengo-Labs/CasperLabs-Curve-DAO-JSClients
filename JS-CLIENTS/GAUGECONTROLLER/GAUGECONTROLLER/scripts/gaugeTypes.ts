import {GaugeControllerSessionCode} from "./gaugeControllerContract";
let gaugeControllerSessionCode = new GaugeControllerSessionCode();
gaugeControllerSessionCode.gaugeTypes( process.argv[2]!);

/*
    "Script gaugeTypes comments": {
        "Description" : "use it to call gaugeTypes through session code",
        "Syntax" : "npm run gaugeTypes <address>",
        "Example" : "npm run gaugeTypes 737588742efd608e68a1ae1bde3955d61e1d3f72b0e85f7755efe2f14363b943"
    },
*/
