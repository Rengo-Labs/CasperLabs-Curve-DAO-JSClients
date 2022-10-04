import {VestingEscrowFactorySessionCode} from "./vestingEscrowContract";
let vestingEscrowFactorySessionCode = new VestingEscrowFactorySessionCode();
vestingEscrowFactorySessionCode.lockedOfSessionCode(process.argv[2]!);

/*
    "Script lockedOfSessionCode comments": {
        "Description" : "use it to get lockedOf through SessionCode",
        "Syntax" : "npm run lockedOfSessionCode <recipientAccountHash>",
        "Example" : "npm run lockedOfSessionCode 737588742efd608e68a1ae1bde3955d61e1d3f72b0e85f7755efe2f14363b943"
    },
*/
