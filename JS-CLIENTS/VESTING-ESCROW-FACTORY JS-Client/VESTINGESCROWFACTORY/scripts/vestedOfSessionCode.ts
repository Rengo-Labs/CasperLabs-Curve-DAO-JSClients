import {VestingEscrowFactorySessionCode} from "./vestingEscrowContract";
let vestingEscrowFactorySessionCode = new VestingEscrowFactorySessionCode();
vestingEscrowFactorySessionCode.vestedOfSessionCode(process.argv[2]!);

/*
    "Script vestedOfSessionCode comments": {
        "Description" : "use it to get vestedOf through SessionCode",
        "Syntax" : "npm run vestedOfSessionCode <recipientAccountHash>",
        "Example" : "npm run vestedOfSessionCode 737588742efd608e68a1ae1bde3955d61e1d3f72b0e85f7755efe2f14363b943"
    },
*/
