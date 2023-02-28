import {deployErc20Crv} from "./erc20CrvContract";
deployErc20Crv(process.argv[2]!,process.argv[3]!,process.argv[4]!);

/*
    "Script deployErc20Crv comments": {
        "Description" : "use it to deploy erc20Crv",
        "Syntax" : "npm run deployErc20Crv <name> <symbol> <decimal>",
        "Example" : "npm run deployErc20Crv erc20crv erc 2"
    },
*/
