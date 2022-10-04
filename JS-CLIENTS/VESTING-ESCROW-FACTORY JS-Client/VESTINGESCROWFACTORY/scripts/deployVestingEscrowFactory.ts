import {deployVestingEscrowFactory} from "./vestingEscrowContract";
deployVestingEscrowFactory(process.argv[2]!);

/*
    "Script deployVestingEscrowFactory comments": {
        "Description" : "use it to deploy vesting escorw factory",
        "Syntax" : "npm run deployVestingEscrowFactory <tokenPackageHash>",
        "Example" : "npm run deployVestingEscrowFactory 267c011232d1c8d113474b20047f2aabd8d0a704ca9b34dad62cd8372c7a4790"
    },
*/
