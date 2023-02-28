import {VotingEscrowFunctions} from "./votingEscrowContractFunctions";
let votingEscrowFunctions = new VotingEscrowFunctions();
votingEscrowFunctions.pointHistory(process.argv[2]!);

/*
    "Script pointHistory comments": {
        "Description" : "use it to get pointHistory",
        "Syntax" : "npm run pointHistory <epoch>",
        "Example" : "npm run pointHistory 123"
    },
*/
