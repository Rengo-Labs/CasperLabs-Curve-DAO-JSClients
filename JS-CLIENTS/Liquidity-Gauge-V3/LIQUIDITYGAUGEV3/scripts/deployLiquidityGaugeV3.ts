import {deployliquidityGaugeV3} from "./liquidityGaugeV3Contract";
deployliquidityGaugeV3(process.argv[2]!,process.argv[3]!);

/*
    "Script deployliquidityGaugeV3 comments": {
        "Description" : "use it to deploy liquidity gauge v3",
        "Syntax" : "npm run deployliquidityGaugeV3 <lpAddress> <minter>",
        "Example" : "npm run deployliquidityGaugeV3 267c011232d1c8d113474b20047f2aabd8d0a704ca9b34dad62cd8372c7a4790 267c011232d1c8d113474b20047f2aabd8d0a704ca9b34dad62cd8372c7a4790"
    },
*/
