import {VotingEscrowSessionCode} from "./votingEscrowContract";
let votingEscrowSessionCode = new VotingEscrowSessionCode();
votingEscrowSessionCode.totalSupplySessionCode(process.argv[2]!);

/*
    "Script totalSupplySessionCode comments": {
        "Description" : "use it to get totalSupply through SessionCode ",
        "Syntax" : "npm run totalSupplySessionCode t",
        "Example" : "npm run totalSupplySessionCode 123"
    },
*/
