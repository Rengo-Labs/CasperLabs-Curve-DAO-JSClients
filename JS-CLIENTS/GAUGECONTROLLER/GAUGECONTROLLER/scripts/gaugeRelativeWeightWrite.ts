import {GaugeControllerSessionCode} from "./gaugeControllerContract";
let gaugeControllerSessionCode = new GaugeControllerSessionCode();
gaugeControllerSessionCode.gaugeRelativeWeightWrite( process.argv[2]!);

/*
    "Script gaugeRelativeWeightWrite comments": {
        "Description" : "use it to call gaugeRelativeWeightWrite through session code",
        "Syntax" : "npm run gaugeRelativeWeightWrite <address>",
        "Example" : "npm run gaugeRelativeWeightWrite 737588742efd608e68a1ae1bde3955d61e1d3f72b0e85f7755efe2f14363b943"
    },
*/
