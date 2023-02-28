
# CasperLabs-Liquidity-Gauge-V3-jsClient

This folder has the fs filesystem code to read wasm and deploy Liquidity Gauge V3 contract and its functions

## Requirement

Make sure you have created and funded the keys before testing.

## Commands

1. Run ```npm ci``` command in JsClient Folder to install the node packages.
2. Run ```npm run deployLiquidityGaugeV3``` to deploy contracts to test-net.
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
    "deployliquidityGaugeV3": "ts-node LIQUIDITYGAUGEV3/scripts/deployliquidityGaugeV3.ts",
    "acceptTransferOwnership": "ts-node LIQUIDITYGAUGEV3/scripts/acceptTransferOwnership.ts",
    "approve": "ts-node LIQUIDITYGAUGEV3/scripts/approve.ts",
    "claimableRewardSessionCode": "ts-node LIQUIDITYGAUGEV3/scripts/claimableRewardSessionCode.ts",
    "claimableRewardWriteSessionCode": "ts-node LIQUIDITYGAUGEV3/scripts/claimableRewardWriteSessionCode.ts",
    "claimableTokensSessionCode": "ts-node LIQUIDITYGAUGEV3/scripts/claimableTokensSessionCode.ts",
    "claimedReward": "ts-node LIQUIDITYGAUGEV3/scripts/claimedReward.ts",
    "commitTransferOwnership": "ts-node LIQUIDITYGAUGEV3/scripts/commitTransferOwnership.ts",
    "decimals": "ts-node LIQUIDITYGAUGEV3/scripts/decimals.ts",
    "decreaseAllowanceSessionCode": "ts-node LIQUIDITYGAUGEV3/scripts/decreaseAllowanceSessionCode.ts",
    "deposit": "ts-node LIQUIDITYGAUGEV3/scripts/deposit.ts",
    "increaseAllowanceSessionCode": "ts-node LIQUIDITYGAUGEV3/scripts/increaseAllowanceSessionCode.ts",
    "integrateCheckpoint": "ts-node LIQUIDITYGAUGEV3/scripts/integrateCheckpoint.ts",
    "kick": "ts-node LIQUIDITYGAUGEV3/scripts/kick.ts",
    "lastClaimSessionCode": "ts-node LIQUIDITYGAUGEV3/scripts/lastClaimSessionCode.ts",
    "rewardContractSessionCode": "ts-node LIQUIDITYGAUGEV3/scripts/rewardContractSessionCode.ts",
    "setKilled": "ts-node LIQUIDITYGAUGEV3/scripts/setKilled.ts",
    "setRewards": "ts-node LIQUIDITYGAUGEV3/scripts/setRewards.ts",
    "setRewardsReceiver": "ts-node LIQUIDITYGAUGEV3/scripts/setRewardsReceiver.ts",
    "transferFromSessionCode": "ts-node LIQUIDITYGAUGEV3/scripts/transferFromSessionCode.ts",
    "transferSessionCode": "ts-node LIQUIDITYGAUGEV3/scripts/transferSessionCode.ts",
    "userCheckpointSessionCode": "ts-node LIQUIDITYGAUGEV3/scripts/userCheckpointSessionCode.ts",
    "withdraw": "ts-node LIQUIDITYGAUGEV3/scripts/withdraw.ts",
    "admin": "ts-node LIQUIDITYGAUGEV3/scripts/admin.ts",
    "allowances": "ts-node LIQUIDITYGAUGEV3/scripts/allowances.ts",
    "balanceOf": "ts-node LIQUIDITYGAUGEV3/scripts/balanceOf.ts",
    "claimedRewardSessionCode": "ts-node LIQUIDITYGAUGEV3/scripts/claimedRewardSessionCode.ts",
    "controller": "ts-node LIQUIDITYGAUGEV3/scripts/controller.ts",
    "crvToken": "ts-node LIQUIDITYGAUGEV3/scripts/crvToken.ts",
    "futureAdmin": "ts-node LIQUIDITYGAUGEV3/scripts/futureAdmin.ts",
    "futureEpochTime": "ts-node LIQUIDITYGAUGEV3/scripts/futureEpochTime.ts",
    "inflationRate": "ts-node LIQUIDITYGAUGEV3/scripts/inflationRate.ts",
    "integrateCheckpointOf": "ts-node LIQUIDITYGAUGEV3/scripts/integrateCheckpointOf.ts",
    "integrateFraction": "ts-node LIQUIDITYGAUGEV3/scripts/integrateFraction.ts",
    "integrateInvSupply": "ts-node LIQUIDITYGAUGEV3/scripts/integrateInvSupply.ts",
    "integrateInvSupplyOf": "ts-node LIQUIDITYGAUGEV3/scripts/integrateInvSupplyOf.ts",
    "isKilled": "ts-node LIQUIDITYGAUGEV3/scripts/isKilled.ts",
    "lpToken": "ts-node LIQUIDITYGAUGEV3/scripts/lpToken.ts",
    "minter": "ts-node LIQUIDITYGAUGEV3/scripts/minter.ts",
    "name": "ts-node LIQUIDITYGAUGEV3/scripts/name.ts",
    "period": "ts-node LIQUIDITYGAUGEV3/scripts/period.ts",
    "periodTimestamp": "ts-node LIQUIDITYGAUGEV3/scripts/periodTimestamp.ts",
    "rewardIntegral": "ts-node LIQUIDITYGAUGEV3/scripts/rewardIntegral.ts",
    "rewardIntegralFor": "ts-node LIQUIDITYGAUGEV3/scripts/rewardIntegralFor.ts",
    "rewardsReceiver": "ts-node LIQUIDITYGAUGEV3/scripts/rewardsReceiver.ts",
    "rewardTokens": "ts-node LIQUIDITYGAUGEV3/scripts/rewardTokens.ts",
    "symbol": "ts-node LIQUIDITYGAUGEV3/scripts/symbol.ts",
    "totalSupply": "ts-node LIQUIDITYGAUGEV3/scripts/totalSupply.ts",
    "votingEscrow": "ts-node LIQUIDITYGAUGEV3/scripts/votingEscrow.ts",
    "workingBalances": "ts-node LIQUIDITYGAUGEV3/scripts/workingBalances.ts",
    "workingSupply": "ts-node LIQUIDITYGAUGEV3/scripts/workingSupply.ts"
  },
```

Use the following commands to perform testing
```

npm run deployliquidityGaugeV3
npm run acceptTransferOwnership
npm run approve
npm run claimableRewardSessionCode
npm run claimableRewardWriteSessionCode
npm run claimableTokensSessionCode
npm run claimRewards
npm run commitTransferOwnership
npm run decimals
npm run decreaseAllowanceSessionCode
npm run deposit
npm run increaseAllowanceSessionCode
npm run integrateCheckpoint
npm run kick
npm run lastClaimSessionCode
npm run rewardContractSessionCode
npm run setKilled
npm run setRewards
npm run setRewardsReceiver
npm run transferFromSessionCode
npm run transferSessionCode
npm run userCheckpointSessionCode
npm run withdraw
npm run admin
npm run allowances
npm run balanceOf
npm run claimedRewardSessionCode
npm run controller
npm run crvToken
npm run futureAdmin
npm run futureEpochTime
npm run inflationRate
npm run integrateCheckpointOf
npm run integrateFraction
npm run integrateInvSupply
npm run integrateInvSupplyOf
npm run isKilled
npm run lpToken
npm run minter
npm run name
npm run period
npm run periodTimestamp
npm run rewardIntegralFor
npm run rewardTokens
npm run rewardIntegral
npm run rewardsReceiver
npm run symbol
npm run totalSupply
npm run votingEscrow
npm run workingBalances
npm run workingSupply


```

CONFIGURE .env BEFORE TESTING


go to Liquidity-Gauge-V3 folder
run command npm ci
Copy keys folder to LIQUIDITYGAUGEV3 folder OR generate key using keygen(if using keygen funds account)
