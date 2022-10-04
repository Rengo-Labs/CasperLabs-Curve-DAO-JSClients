import {VotingEscrowFunctions} from "./votingEscrowContractFunctions";
let votingEscrowFunctions = new VotingEscrowFunctions();
votingEscrowFunctions.depositFor(process.argv[2]!);

/*
    "Script depositFor comments": {
        "Description" : "use it to depositFor",
        "Syntax" : "npm run depositFor <value>",
        "Example" : "npm run depositFor 1000"
    },
*/
