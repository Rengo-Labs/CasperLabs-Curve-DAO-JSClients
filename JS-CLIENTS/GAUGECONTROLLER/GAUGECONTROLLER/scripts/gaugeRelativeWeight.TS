import {GaugeControllerSessionCode} from "./gaugeControllerContract";
let gaugeControllerSessionCode = new GaugeControllerSessionCode();
gaugeControllerSessionCode.gaugeRelativeWeight( process.argv[2]!);

/*
    "Script gaugeRelativeWeight comments": {
        "Description" : "use it to call gaugeRelativeWeight through session code",
        "Syntax" : "npm run gaugeRelativeWeight <address>",
        "Example" : "npm run gaugeRelativeWeight 737588742efd608e68a1ae1bde3955d61e1d3f72b0e85f7755efe2f14363b943"
    },
*/
