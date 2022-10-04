import {deployVotingEscrow} from "./votingEscrowContract";
deployVotingEscrow(process.argv[2]!,process.argv[3]!,process.argv[4]!,process.argv[5]!);

/*
    "Script deployVotingEscrow comments": {
        "Description" : "use it to deploy liquidity gauge v3",
        "Syntax" : "npm run deployVotingEscrow <erc20PackageHash> <name> <symbol> <version>",
        "Example" : "npm run deployVotingEscrow 267c011232d1c8d113474b20047f2aabd8d0a704ca9b34dad62cd8372c7a4790 votingEscrow VE 1"
    },
*/
