import {VestingEscrowFactoryFunctions} from "./vestingEscrowContractFunctions";
let vestingEscrowFactoryFunctions = new VestingEscrowFactoryFunctions();
vestingEscrowFactoryFunctions.toggleDisable(process.argv[2]!);

/*
    "Script toggleDisable comments": {
        "Description" : "use it to toggle Disable",
        "Syntax" : "npm run toggleDisable <recipient>",
        "Example" : "npm run toggleDisable 4af852da890104582a535d90ea369a5b9a1bb1fcc19874fdaf9f8f6dc4abedae"
    },
*/
