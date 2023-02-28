import {VestingEscrowFactorySessionCode} from "./vestingEscrowContract";
let vestingEscrowFactorySessionCode = new VestingEscrowFactorySessionCode();
vestingEscrowFactorySessionCode.deployVestingContractSessionCode(process.argv[2]!,process.argv[3]!,process.argv[4]!,process.argv[5]!);

/*
    "Script deployVestingContractSessionCode comments": {
        "Description" : "use it to call deploy VestingContract simple through SessionCode",
        "Syntax" : "npm run deployVestingContractSessionCode <token> <amount> <duration> <start>",
        "Example" : "npm run deployVestingContractSessionCode 4af852da890104582a535d90ea369a5b9a1bb1fcc19874fdaf9f8f6dc4abedae 10 20304001 100000"
    },
*/
