# CasperLabs-VESTING-ESCROW-FACTORY-jsClient

This folder has the fs filesystem code to read wasm and deploy Curve Rewards contract and its functions

## Requirement

Make sure you have created and funded the keys before testing.

## Commands

1. Run ```npm ci``` command in JsClient Folder to install the node packages.
2. Run ```npm run deployVestingEscrowFactory``` to deploy contracts to test-net.
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
    "deployVestingEscrowFactory": "ts-node VESTINGESCROWFACTORY/scripts/deployVestingEscrowFactory.ts",
    "adminVef": "ts-node VESTINGESCROWFACTORY/scripts/adminVef.ts",
    "applyTransferOwnershipSessionCode": "ts-node VESTINGESCROWFACTORY/scripts/applyTransferOwnershipSessionCode.ts",
    "applyTransferOwnershipVefSessionCode": "ts-node VESTINGESCROWFACTORY/scripts/applyTransferOwnershipVefSessionCode.ts",
    "balanceOfSessionCode": "ts-node VESTINGESCROWFACTORY/scripts/balanceOfSessionCode.ts",
    "claim": "ts-node VESTINGESCROWFACTORY/scripts/claim.ts",
    "commitTransferOwnershipSessionCode": "ts-node VESTINGESCROWFACTORY/scripts/commitTransferOwnershipSessionCode.ts",
    "commitTransferOwnershipVefSessionCode": "ts-node VESTINGESCROWFACTORY/scripts/commitTransferOwnershipVefSessionCode.ts",
    "disableCanDisable": "ts-node VESTINGESCROWFACTORY/scripts/disableCanDisable.ts",
    "futureAdminVef": "ts-node VESTINGESCROWFACTORY/scripts/futureAdminVef.ts",
    "initializeSessionCode": "ts-node VESTINGESCROWFACTORY/scripts/initializeSessionCode.ts",
    "lockedOfSessionCode": "ts-node VESTINGESCROWFACTORY/scripts/lockedOfSessionCode.ts",
    "lockedSupplySessionCode": "ts-node VESTINGESCROWFACTORY/scripts/lockedSupplySessionCode.ts",
    "packageHash": "ts-node VESTINGESCROWFACTORY/scripts/packageHash.ts",
    "target": "ts-node VESTINGESCROWFACTORY/scripts/target.ts",
    "toggleDisable": "ts-node VESTINGESCROWFACTORY/scripts/toggleDisable.ts",
    "vestedOfSessionCode": "ts-node VESTINGESCROWFACTORY/scripts/vestedOfSessionCode.ts",
    "vestedSupplySessionCode": "ts-node VESTINGESCROWFACTORY/scripts/vestedSupplySessionCode.ts",
    "deployVestingContractSessionCode": "ts-node VESTINGESCROWFACTORY/scripts/deployVestingContractSessionCode.ts",
    "admin": "ts-node VESTINGESCROWFACTORY/scripts/admin.ts",
    "canDisable": "ts-node VESTINGESCROWFACTORY/scripts/canDisable.ts",
    "disabledAt": "ts-node VESTINGESCROWFACTORY/scripts/disabledAt.ts",
    "endTime": "ts-node VESTINGESCROWFACTORY/scripts/endTime.ts",
    "futureAdmin": "ts-node VESTINGESCROWFACTORY/scripts/futureAdmin.ts",
    "initialLocked": "ts-node VESTINGESCROWFACTORY/scripts/initialLocked.ts",
    "initialLockedSupply": "ts-node VESTINGESCROWFACTORY/scripts/initialLockedSupply.ts",
    "startTime": "ts-node VESTINGESCROWFACTORY/scripts/startTime.ts",
    "token": "ts-node VESTINGESCROWFACTORY/scripts/token.ts",
    "totalClaimed": "ts-node VESTINGESCROWFACTORY/scripts/totalClaimed.ts"
  },
```

Use the following commands to perform testing
```
npm run deployVestingEscrowFactory
npm run adminVef
npm run applyTransferOwnershipSessionCode
npm run applyTransferOwnershipVefSessionCode
npm run balanceOfSessionCode
npm run claim
npm run commitTransferOwnershipSessionCode
npm run commitTransferOwnershipVefSessionCode
npm run disableCanDisable
npm run futureAdminVef
npm run initializeSessionCode
npm run lockedOfSessionCode
npm run lockedSupplySessionCode
npm run packageHash
npm run target
npm run toggleDisable
npm run vestedOfSessionCode
npm run vestedSupplySessionCode
npm run deployVestingContractSessionCode
npm run admin
npm run canDisable
npm run disabledAt
npm run endTime
npm run futureAdmin
npm run initialLocked
npm run initialLockedSupply
npm run startTime
npm run token
npm run totalClaimed

```

CONFIGURE .env BEFORE TESTING


go to VESTING-ESCROW-FACTORY JS-Client folder
run command npm ci
Copy keys folder to VESTINGESCROWFACTORY folder OR generate key using keygen(if using keygen funds account)
