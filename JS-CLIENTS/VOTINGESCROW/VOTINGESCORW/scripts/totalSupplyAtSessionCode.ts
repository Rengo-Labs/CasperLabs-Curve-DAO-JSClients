import {VotingEscrowSessionCode} from "./votingEscrowContract";
let votingEscrowSessionCode = new VotingEscrowSessionCode();
votingEscrowSessionCode.totalSupplyAtSessionCode(process.argv[2]!);

/*
    "Script totalSupplyAtSessionCode comments": {
        "Description" : "use it to get totalSupplyAt through SessionCode ",
        "Syntax" : "npm run totalSupplyAtSessionCode time",
        "Example" : "npm run totalSupplyAtSessionCode 123"
    },
*/
