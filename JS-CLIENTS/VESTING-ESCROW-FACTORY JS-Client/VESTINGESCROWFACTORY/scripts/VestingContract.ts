import {VestingEscrowFactoryFunctions} from "./vestingEscrowContractFunctions";
let vestingEscrowFactoryFunctions = new VestingEscrowFactoryFunctions();
vestingEscrowFactoryFunctions.VestingContract(process.argv[2]!,process.argv[3]!,process.argv[4]!,process.argv[5]!);

/*
    "Script VestingContract comments": {
        "Description" : "use it to call deploy vesting escrow simple function",
        "Syntax" : "npm run VestingContract <token> <amount> <duration> <start>",
        "Example" : "npm run VestingContract 4af852da890104582a535d90ea369a5b9a1bb1fcc19874fdaf9f8f6dc4abedae 10 20304001 100000"
    },
*/
