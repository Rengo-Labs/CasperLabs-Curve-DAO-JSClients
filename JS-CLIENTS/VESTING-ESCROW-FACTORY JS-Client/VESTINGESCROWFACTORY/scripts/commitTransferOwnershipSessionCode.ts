import {VestingEscrowFactorySessionCode} from "./vestingEscrowContract";
let vestingEscrowFactorySessionCode = new VestingEscrowFactorySessionCode();
vestingEscrowFactorySessionCode.commitTransferOwnershipSessionCode(process.argv[2]!);

/*
    "Script commitTransferOwnershipSessionCode comments": {
        "Description" : "use it to get commit Transfer Ownership through SessionCode",
        "Syntax" : "npm run commitTransferOwnershipSessionCode <address>",
        "Example" : "npm run commitTransferOwnershipSessionCode 737588742efd608e68a1ae1bde3955d61e1d3f72b0e85f7755efe2f14363b943"
    },
*/
