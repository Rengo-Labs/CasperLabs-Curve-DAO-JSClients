import {VotingEscrowFunctions} from "./votingEscrowContractFunctions";
let votingEscrowFunctions = new VotingEscrowFunctions();
votingEscrowFunctions.lockedEnd(process.argv[2]!);

/*
    "Script lockedEnd comments": {
        "Description" : "use it to get lockedEnd",
        "Syntax" : "npm run lockedEnd <address>",
        "Example" : "npm run lockedEnd 737588742efd608e68a1ae1bde3955d61e1d3f72b0e85f7755efe2f14363b943"
    },
*/
