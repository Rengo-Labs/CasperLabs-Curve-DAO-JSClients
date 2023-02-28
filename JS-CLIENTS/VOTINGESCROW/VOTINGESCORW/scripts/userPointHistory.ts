import {VotingEscrowFunctions} from "./votingEscrowContractFunctions";
let votingEscrowFunctions = new VotingEscrowFunctions();
votingEscrowFunctions.userPointHistory(process.argv[2]!, process.argv[3]!);

/*
    "Script userPointHistory comments": {
        "Description" : "use it to get userPointHistory",
        "Syntax" : "npm run userPointHistory <user> <epoch>",
        "Example" : "npm run userPointHistory 737588742efd608e68a1ae1bde3955d61e1d3f72b0e85f7755efe2f14363b943 123"
    },
*/
