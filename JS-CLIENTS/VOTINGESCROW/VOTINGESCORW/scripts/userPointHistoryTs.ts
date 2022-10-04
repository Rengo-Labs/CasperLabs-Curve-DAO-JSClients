import {VotingEscrowFunctions} from "./votingEscrowContractFunctions";
let votingEscrowFunctions = new VotingEscrowFunctions();
votingEscrowFunctions.userPointHistoryTs(process.argv[2]!,process.argv[3]!);

/*
    "Script userPointHistoryTs comments": {
        "Description" : "use it to get userPointHistoryTs",
        "Syntax" : "npm run userPointHistoryTs <addressAccountHash> <idx>",
        "Example" : "npm run userPointHistoryTs 737588742efd608e68a1ae1bde3955d61e1d3f72b0e85f7755efe2f14363b943 10"
    },
*/
