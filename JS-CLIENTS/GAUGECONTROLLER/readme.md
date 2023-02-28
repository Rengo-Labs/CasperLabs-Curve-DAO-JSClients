# CasperLabs-Gauge-Controller-jsClient

This folder has the fs filesystem code to read wasm and deploy Gauge Controller contract and its functions

## Requirement

Make sure you have created and funded the keys before testing.

## Commands

1. Run ```npm ci``` command in JsClient Folder to install the node packages.
2. Run ```npm run deployGaugeController``` to deploy contracts to test-net.
3. if you encounter this error then try again 
4. Must have atleast 500 CSPR for the deployment.
  ```
  type: 'system',
  errno: 'ETIMEDOUT',
  code: 'ETIMEDOUT'
  ```
5. On

Use the script file in package.json to perform the testing
```
  "scripts": {
    "deployGaugeController": "ts-node GAUGECONTROLLER/scripts/deployGaugeController.ts",
    "addGauge": "ts-node GAUGECONTROLLER/scripts/addGauge.ts",
    "addType": "ts-node GAUGECONTROLLER/scripts/addType.ts",
    "admin": "ts-node GAUGECONTROLLER/scripts/admin.ts",
    "applyTransferOwnership": "ts-node GAUGECONTROLLER/scripts/applyTransferOwnership.ts",
    "changeGaugeWeight": "ts-node GAUGECONTROLLER/scripts/changeGaugeWeight.ts",
    "changesSum": "ts-node GAUGECONTROLLER/scripts/changesSum.ts",
    "changesWeight": "ts-node GAUGECONTROLLER/scripts/changesWeight.ts",
    "changeTypeWeight": "ts-node GAUGECONTROLLER/scripts/changeTypeWeight.ts",
    "checkpoint": "ts-node GAUGECONTROLLER/scripts/checkpoint.ts",
    "checkpointGauge": "ts-node GAUGECONTROLLER/scripts/checkpointGauge.ts",
    "commitTransferOwnership": "ts-node GAUGECONTROLLER/scripts/commitTransferOwnership.ts",
    "futureAdmin": "ts-node GAUGECONTROLLER/scripts/futureAdmin.ts",
    "gaugeRelativeWeight": "ts-node GAUGECONTROLLER/scripts/gaugeRelativeWeight.ts",
    "gaugeRelativeWeightWrite": "ts-node GAUGECONTROLLER/scripts/gaugeRelativeWeightWrite.ts",
    "gauges": "ts-node GAUGECONTROLLER/scripts/gauges.ts",
    "gaugeTypeNames": "ts-node GAUGECONTROLLER/scripts/gaugeTypeNames.ts",
    "gaugeTypes": "ts-node GAUGECONTROLLER/scripts/gaugeTypes.ts",
    "getGaugeWeight": "ts-node GAUGECONTROLLER/scripts/getGaugeWeight.ts",
    "getHash": "ts-node GAUGECONTROLLER/scripts/getHash.ts",
    "getTotalWeight": "ts-node GAUGECONTROLLER/scripts/getTotalWeight.ts",
    "getTypeWeight": "ts-node GAUGECONTROLLER/scripts/getTypeWeight.ts",
    "getWeightsSumPerType": "ts-node GAUGECONTROLLER/scripts/getWeightsSumPerType.ts",
    "lastUserVote": "ts-node GAUGECONTROLLER/scripts/lastUserVote.ts",
    "nGauges": "ts-node GAUGECONTROLLER/scripts/nGauges.ts",
    "nGaugeTypes": "ts-node GAUGECONTROLLER/scripts/nGaugeTypes.ts",
    "packageHash": "ts-node GAUGECONTROLLER/scripts/packageHash.ts",
    "pointsSum": "ts-node GAUGECONTROLLER/scripts/pointsSum.ts",
    "pointsTotal": "ts-node GAUGECONTROLLER/scripts/pointsTotal.ts",
    "pointsTypeWeight": "ts-node GAUGECONTROLLER/scripts/pointsTypeWeight.ts",
    "pointsweight": "ts-node GAUGECONTROLLER/scripts/pointsweight.ts",
    "rewardCount": "ts-node GAUGECONTROLLER/scripts/rewardCount.ts",
    "timeSum": "ts-node GAUGECONTROLLER/scripts/timeSum.ts",
    "timeTotal": "ts-node GAUGECONTROLLER/scripts/timeTotal.ts",
    "timeTypeWeight": "ts-node GAUGECONTROLLER/scripts/timeTypeWeight.ts",
    "timeWeight": "ts-node GAUGECONTROLLER/scripts/timeWeight.ts",
    "token": "ts-node GAUGECONTROLLER/scripts/token.ts",
    "voteForGaugeWeights": "ts-node GAUGECONTROLLER/scripts/voteForGaugeWeights.ts",
    "voteUserPower": "ts-node GAUGECONTROLLER/scripts/voteUserPower.ts",
    "voteUserSlopes": "ts-node GAUGECONTROLLER/scripts/voteUserSlopes.ts",
    "votingEscrow": "ts-node GAUGECONTROLLER/scripts/votingEscrow.ts"
    
  },
```

Use the following commands to perform testing
```
npm run deployGaugeController
npm run addGauge
npm run addType
npm run admin
npm run applyTransferOwnership
npm run changeGaugeWeight
npm run changesSum
npm run changesWeight
npm run changeTypeWeight
npm run checkpoint
npm run checkpointGauge
npm run commitTransferOwnership
npm run futureAdmin
npm run gaugeRelativeWeight
npm run gaugeRelativeWeightWrite
npm run gauges
npm run gaugeTypeNames
npm run gaugeTypes
npm run getGaugeWeight
npm run getHash
npm run getTotalWeight
npm run getTypeWeight
npm run getWeightsSumPerType
npm run lastUserVote
npm run nGauges
npm run nGaugeTypes
npm run packageHash
npm run pointsSum
npm run pointsTotal
npm run pointsTypeWeight
npm run pointsweight
npm run rewardCount
npm run timeSum
npm run timeTotal
npm run timeTypeWeight
npm run timeWeight
npm run token
npm run voteForGaugeWeights
npm run voteUserPower
npm run voteUserSlopes
npm run votingEscro
```

CONFIGURE .env BEFORE TESTING


go to GAUGECONTROLLER JS-Client folder
run command npm ci
Copy keys folder to GAUGECONTROLLER folder OR generate key using keygen(if using keygen funds account)
