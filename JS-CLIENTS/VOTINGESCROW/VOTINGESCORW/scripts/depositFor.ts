import {VotingEscrowFunctions} from "./votingEscrowContractFunctions";
let votingEscrowFunctions = new VotingEscrowFunctions();
votingEscrowFunctions.depositFor(process.argv[2]!, process.argv[3]!);

/*
    "Script depositFor comments": {
        "Description" : "use it to depositFor",
        "Syntax" : "npm run depositFor <addr> <value>",
        "Example" : "npm run depositFor 737588742efd608e68a1ae1bde3955d61e1d3f72b0e85f7755efe2f14363b943 1000"
    },
*/
