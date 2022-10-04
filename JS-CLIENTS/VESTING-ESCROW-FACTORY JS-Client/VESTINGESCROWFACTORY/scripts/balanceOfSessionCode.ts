import {VestingEscrowFactorySessionCode} from "./vestingEscrowContract";
let vestingEscrowFactorySessionCode = new VestingEscrowFactorySessionCode();
vestingEscrowFactorySessionCode.balanceOfSessionCode(process.argv[2]!);

/*
    "Script balanceOfSessionCode comments": {
        "Description" : "use it to get balanceOf through SessionCode",
        "Syntax" : "npm run balanceOfSessionCode <recipientAccountHash>",
        "Example" : "npm run balanceOfSessionCode 737588742efd608e68a1ae1bde3955d61e1d3f72b0e85f7755efe2f14363b943"
    },
*/
