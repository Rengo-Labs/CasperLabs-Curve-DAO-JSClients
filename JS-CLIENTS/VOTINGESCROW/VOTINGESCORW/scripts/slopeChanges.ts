import {VotingEscrowFunctions} from "./votingEscrowContractFunctions";
let votingEscrowFunctions = new VotingEscrowFunctions();
votingEscrowFunctions.slopeChanges(process.argv[2]!);

/*
    "Script slopeChanges comments": {
        "Description" : "use it to get slopeChanges",
        "Syntax" : "npm run slopeChanges <time> ",
        "Example" : "npm run slopeChanges 123"
    },
*/
