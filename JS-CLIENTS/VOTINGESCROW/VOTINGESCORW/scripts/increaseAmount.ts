import {VotingEscrowFunctions} from "./votingEscrowContractFunctions";
let votingEscrowFunctions = new VotingEscrowFunctions();
votingEscrowFunctions.increaseAmount(process.argv[2]!);

/*
    "Script increaseAmount comments": {
        "Description" : "use it to increase Amount",
        "Syntax" : "npm run increaseAmount <value>",
        "Example" : "npm run increaseAmount 1000"
    },
*/
