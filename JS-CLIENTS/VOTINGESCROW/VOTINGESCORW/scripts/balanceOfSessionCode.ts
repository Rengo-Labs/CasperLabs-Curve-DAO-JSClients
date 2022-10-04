import {VotingEscrowSessionCode} from "./votingEscrowContract";
let votingEscrowSessionCode = new VotingEscrowSessionCode();
votingEscrowSessionCode.balanceOfSessionCode(process.argv[2]!);

/*
    "Script balanceOfSessionCode comments": {
        "Description" : "use it to get balance through SessionCode ",
        "Syntax" : "npm run balanceOfSessionCode t",
        "Example" : "npm run balanceOfSessionCode 123"
    },
*/
