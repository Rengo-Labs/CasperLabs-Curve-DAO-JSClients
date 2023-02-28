import {deployLiquidityGaugeReward} from "./liquidityGaugeRewardContract";
deployLiquidityGaugeReward(process.argv[2]!,process.argv[3]!,process.argv[4]!,process.argv[5]!);

/*
    "Script deployLiquidityGaugeReward comments": {
        "Description" : "use it to deploy erc20Crv",
        "Syntax" : "npm run deployLiquidityGaugeReward <lpAddress> <minter> <rewardContract> <rewardToken>",
        "Example" : "npm run deployLiquidityGaugeReward 267c011232d1c8d113474b20047f2aabd8d0a704ca9b34dad62cd8372c7a4790 267c011232d1c8d113474b20047f2aabd8d0a704ca9b34dad62cd8372c7a4790 267c011232d1c8d113474b20047f2aabd8d0a704ca9b34dad62cd8372c7a4790 267c011232d1c8d113474b20047f2aabd8d0a704ca9b34dad62cd8372c7a4790"
    },
*/
