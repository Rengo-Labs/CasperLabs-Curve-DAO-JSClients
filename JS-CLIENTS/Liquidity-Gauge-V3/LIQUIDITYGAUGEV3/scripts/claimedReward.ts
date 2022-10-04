import {LiquidityGaugeV3Functions} from "./liquidityGaugeV3ContractFunctions";
let liquidityGaugeV3Functions = new LiquidityGaugeV3Functions();
liquidityGaugeV3Functions.claimedReward(process.argv[2]!,process.argv[3]!);

/*
    "Script claimedReward comments": {
        "Description" : "use it to claimed Reward",
        "Syntax" : "npm run claimedReward <addr> <token>",
        "Example" : "npm run claimedReward 4af852da890104582a535d90ea369a5b9a1bb1fcc19874fdaf9f8f6dc4abedae 4af852da890104582a535d90ea369a5b9a1bb1fcc19874fdaf9f8f6dc4abedae"
    },
*/
