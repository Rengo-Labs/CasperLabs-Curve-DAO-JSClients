import {VestingEscrowFactorySessionCode} from "./vestingEscrowContract";
let vestingEscrowFactorySessionCode = new VestingEscrowFactorySessionCode();
vestingEscrowFactorySessionCode.initializeSessionCode(process.argv[2]!,process.argv[3]!,process.argv[4]!,process.argv[5]!,process.argv[6]!);

/*
    "Script initializeSessionCode comments": {
        "Description" : "use it to call initialize function through session code",
        "Syntax" : "npm run initializeSessionCode <token> <recipient> <amount> <startTime> <endTime>",
        "Example" : "npm run initializeSessionCode 4af852da890104582a535d90ea369a5b9a1bb1fcc19874fdaf9f8f6dc4abedae 4af852da890104582a535d90ea369a5b9a1bb1fcc19874fdaf9f8f6dc4abedae 10 10000 100001"
    },
*/
