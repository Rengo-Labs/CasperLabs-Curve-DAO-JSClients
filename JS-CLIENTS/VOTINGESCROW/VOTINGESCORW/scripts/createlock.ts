import {VotingEscrowFunctions} from "./votingEscrowContractFunctions";
let votingEscrowFunctions = new VotingEscrowFunctions();
votingEscrowFunctions.createlock(process.argv[2]!,process.argv[3]!);

/*
    "Script createlock comments": {
        "Description" : "use it to create lock",
        "Syntax" : "npm run createlock <value> <unlockTime>",
        "Example" : "npm run createlock 1000 604800"
    },
*/
