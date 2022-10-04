import {deployMinter} from "./minterContract";
deployMinter(process.argv[2]!,process.argv[3]!);

/*
    "Script deployMinter comments": {
        "Description" : "use it to deploy Minter",
        "Syntax" : "npm run deployMinter <erc20crvPackageHash> <gaugeControllerPackageHash>",
        "Example" : "npm run deployMinter 267c011232d1c8d113474b20047f2aabd8d0a704ca9b34dad62cd8372c7a4790 267c011232d1c8d113474b20047f2aabd8d0a704ca9b34dad62cd8372c7a4790"
    },
*/
