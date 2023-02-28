import {VestingEscrowFactorySessionCode} from "./vestingEscrowContract";
let vestingEscrowFactorySessionCode = new VestingEscrowFactorySessionCode();
vestingEscrowFactorySessionCode.commitTransferOwnershipVefSessionCode(process.argv[2]!);

/*
    "Script commitTransferOwnershipVefSessionCode comments": {
        "Description" : "use it to get commit Transfer Ownership Vef through SessionCode",
        "Syntax" : "npm run commitTransferOwnershipVefSessionCode <address>",
        "Example" : "npm run commitTransferOwnershipVefSessionCode 737588742efd608e68a1ae1bde3955d61e1d3f72b0e85f7755efe2f14363b943"
    },
*/
