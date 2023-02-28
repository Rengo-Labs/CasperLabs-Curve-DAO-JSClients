import {VotingEscrowSessionCode} from "./votingEscrowContract";
let votingEscrowSessionCode = new VotingEscrowSessionCode();
votingEscrowSessionCode.userPointHistoryTsSessionCode(process.argv[2]!);

/*
    "Script userPointHistoryTsSessionCode comments": {
        "Description" : "use it to get userPointHistoryTs through SessionCode ",
        "Syntax" : "npm run userPointHistoryTsSessionCode <idx>",
        "Example" : "npm run userPointHistoryTsSessionCode 123"
    },
*/
