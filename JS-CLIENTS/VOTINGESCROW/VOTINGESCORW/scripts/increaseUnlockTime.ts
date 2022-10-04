import {VotingEscrowFunctions} from "./votingEscrowContractFunctions";
let votingEscrowFunctions = new VotingEscrowFunctions();
votingEscrowFunctions.increaseUnlockTime(process.argv[2]!);

/*
    "Script increaseUnlockTime comments": {
        "Description" : "use it to increase UnlockTime ",
        "Syntax" : "npm run increaseUnlockTime <unlockTime>",
        "Example" : "npm run increaseUnlockTime 604800"
    },
*/
