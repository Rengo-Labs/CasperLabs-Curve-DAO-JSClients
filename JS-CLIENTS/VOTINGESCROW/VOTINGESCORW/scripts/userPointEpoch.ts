import {VotingEscrowFunctions} from "./votingEscrowContractFunctions";
let votingEscrowFunctions = new VotingEscrowFunctions();
votingEscrowFunctions.userPointEpoch(process.argv[2]!);

/*
    "Script userPointEpoch comments": {
        "Description" : "use it to get userPointEpoch",
        "Syntax" : "npm run userPointEpoch <user> ",
        "Example" : "npm run userPointEpoch 737588742efd608e68a1ae1bde3955d61e1d3f72b0e85f7755efe2f14363b943"
    },
*/
