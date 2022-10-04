import {GaugeControllerSessionCode} from "./gaugeControllerContract";
let gaugeControllerSessionCode = new GaugeControllerSessionCode();
gaugeControllerSessionCode.getGaugeWeight( process.argv[2]!);

/*
    "Script getGaugeWeight comments": {
        "Description" : "use it to call getGaugeWeight through session code",
        "Syntax" : "npm run getGaugeWeight <address>",
        "Example" : "npm run getGaugeWeight 737588742efd608e68a1ae1bde3955d61e1d3f72b0e85f7755efe2f14363b943"
    },
*/
