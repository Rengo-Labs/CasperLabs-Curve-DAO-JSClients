import {MulticallFunctions} from "./multicallContractFunctions";
let multicallFunctions = new MulticallFunctions();
multicallFunctions.aggregate([process.argv[2]]!,[process.argv[3]]!,[process.argv[4]]!,[process.argv[5]]!);

/*
    "Script aggregate comments": {
        "Description" : "use it to call aggregate",
        "Syntax" : "npm run aggregate <targetAddr> <functionName> <functionArgsName> <functionArgsValue>",
        "Example" : "npm run aggregate 4af852da890104582a535d90ea369a5b9a1bb1fcc19874fdaf9f8f6dc4abedae name name 4af852da890104582a535d90ea369a5b9a1bb1fcc19874fdaf9f8f6dc4abedae"
    },
*/
