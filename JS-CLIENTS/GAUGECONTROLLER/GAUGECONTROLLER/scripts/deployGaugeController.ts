import {deployGaugeController} from "./gaugeControllerContract";
deployGaugeController(process.argv[2]!,process.argv[3]!);

/*
    "Script deployGaugeController comments": {
        "Description" : "use it to deploy GaugeController",
        "Syntax" : "npm run deployGaugeController <token> <votingEscrowPackageHash>",
        "Example" : "npm run deployGaugeController 737588742efd608e68a1ae1bde3955d61e1d3f72b0e85f7755efe2f14363b943 56b77636b3af55977cfeea4eb22d18394ee2aa2ba4b2afe3a13a91adc26a1222"
    },
*/
