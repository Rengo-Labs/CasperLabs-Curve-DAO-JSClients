# CasperLabs-VOTING-ESCROW-jsClient

This folder has the fs filesystem code to read wasm and deploy Voting Escrow contract and its functions

## Requirement

Make sure you have created and funded the keys before testing.

## Commands

1. Run ```npm ci``` command in JsClient Folder to install the node packages.
2. Run ```npm run deployVotingEscrow``` to deploy contracts to test-net.
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
    "deployVotingEscrow": "ts-node VOTINGESCROW/scripts/deployVotingEscrow.ts",
    "applyTransferOwnership": "ts-node VOTINGESCROW/scripts/applyTransferOwnership.ts",
    "balanceOfATSessionCode": "ts-node VOTINGESCROW/scripts/balanceOfATSessionCode.ts",
    "balanceOfSessionCode": "ts-node VOTINGESCROW/scripts/balanceOfSessionCode.ts",
    "changeController": "ts-node VOTINGESCROW/scripts/changeController.ts",
    "checkpoint": "ts-node VOTINGESCROW/scripts/checkpoint.ts",
    "commitTransferOwnership": "ts-node VOTINGESCROW/scripts/commitTransferOwnership.ts",
    "createlock": "ts-node VOTINGESCROW/scripts/createlock.ts",
    "depositFor": "ts-node VOTINGESCROW/scripts/depositFor.ts",
    "getLastUserSlopeSessionCode": "ts-node VOTINGESCROW/scripts/getLastUserSlopeSessionCode.ts",
    "increaseAmount": "ts-node VOTINGESCROW/scripts/increaseAmount.ts",
    "increaseUnlockTime": "ts-node VOTINGESCROW/scripts/increaseUnlockTime.ts",
    "totalSupplyAtSessionCode": "ts-node VOTINGESCROW/scripts/totalSupplyAtSessionCode.ts",
    "totalSupplySessionCode": "ts-node VOTINGESCROW/scripts/totalSupplySessionCode.ts",
    "withdraw": "ts-node VOTINGESCROW/scripts/deployVotingEscrow.ts",
    "admin": "ts-node VOTINGESCROW/scripts/admin.ts",
    "controller": "ts-node VOTINGESCROW/scripts/controller.ts",
    "decimals": "ts-node VOTINGESCROW/scripts/decimals.ts",
    "epoch": "ts-node VOTINGESCROW/scripts/epoch.ts",
    "futureAdmin": "ts-node VOTINGESCROW/scripts/futureAdmin.ts",
    "locked": "ts-node VOTINGESCROW/scripts/locked.ts",
    "lockedEndSessionCode": "ts-node VOTINGESCROW/scripts/lockedEndSessionCode.ts",
    "name": "ts-node VOTINGESCROW/scripts/name.ts",
    "pointHistory": "ts-node VOTINGESCROW/scripts/pointHistory.ts",
    "slopeChanges": "ts-node VOTINGESCROW/scripts/slopeChanges.ts",
    "supply": "ts-node VOTINGESCROW/scripts/supply.ts",
    "symbol": "ts-node VOTINGESCROW/scripts/symbol.ts",
    "token": "ts-node VOTINGESCROW/scripts/token.ts",
    "transfersEnabled": "ts-node VOTINGESCROW/scripts/transfersEnabled.ts",
    "userPointEpoch": "ts-node VOTINGESCROW/scripts/userPointEpoch.ts",
    "userPointHistory": "ts-node VOTINGESCROW/scripts/userPointHistory.ts",
    "userPointHistoryTsSessionCode": "ts-node VOTINGESCROW/scripts/userPointHistoryTsSessionCode.ts",
    "version": "ts-node VOTINGESCROW/scripts/version.ts"
  },
```

Use the following commands to perform testing
```
npm run deployVotingEscrow
npm run applyTransferOwnership
npm run balanceOfATSessionCode
npm run balanceOfSessionCode
npm run changeController
npm run checkpoint
npm run commitTransferOwnership
npm run createlock
npm run depositFor
npm run getLastUserSlopeSessionCode
npm run increaseAmount
npm run increaseUnlockTime
npm run totalSupplyAtSessionCode
npm run totalSupplySessionCode
npm run withdraw
npm run admin
npm run controller
npm run decimals
npm run epoch
npm run futureAdmin
npm run locked
npm run lockedEndSessionCode
npm run name
npm run pointHistory
npm run slopeChanges
npm run supply
npm run symbol
npm run token
npm run transfersEnabled
npm run userPointEpoch
npm run userPointHistory
npm run userPointHistoryTsSessionCode
npm run version

```

CONFIGURE .env BEFORE TESTING


go to VOTINGESCROW JS-Client folder
run command npm ci
Copy keys folder to VOTINGESCROW folder OR generate key using keygen(if using keygen funds account)
