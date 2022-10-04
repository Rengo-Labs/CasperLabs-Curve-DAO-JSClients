import {VotingEscrowSessionCode} from "./votingEscrowContract";
let votingEscrowSessionCode = new VotingEscrowSessionCode();
votingEscrowSessionCode.balanceOfATSessionCode(process.argv[2]!);

/*
    "Script balanceOfATSessionCode comments": {
        "Description" : "use it to get balanceOfAT through SessionCode ",
        "Syntax" : "npm run balanceOfATSessionCode time",
        "Example" : "npm run balanceOfATSessionCode 123"
    },
*/
