
# CasperLabs-Liquidity-Gauge-Reward-jsClient

This folder has the fs filesystem code to read wasm and deploy Liquidty Gauge Reward contract and its functions

## Requirement

Make sure you have created and funded the keys before testing.

## Commands

1. Run ```npm ci``` command in JsClient Folder to install the node packages.
2. Run ```npm run deployLiquidityGaugeReward``` to deploy contracts to test-net.
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
    "deployLiquidityGaugeReward": "ts-node LIQUIDITYGAUGEREWARD/script/deployLiquidityGaugeReward.ts",
    "applyTransferOwnership": "ts-node LIQUIDITYGAUGEREWARD/script/applyTransferOwnership.ts",
    "claimableRewardSessionCode": "ts-node LIQUIDITYGAUGEREWARD/script/claimableRewardSessionCode.ts",
    "claimableTokensSessionCode": "ts-node LIQUIDITYGAUGEREWARD/script/claimableTokensSessionCode.ts",
    "claimRewards": "ts-node LIQUIDITYGAUGEREWARD/script/claimRewards.ts",
    "commitTransferOwnership": "ts-node LIQUIDITYGAUGEREWARD/script/commitTransferOwnership.ts",
    "deposit": "ts-node LIQUIDITYGAUGEREWARD/script/deposit.ts",
    "integrateCheckpointSessionCode": "ts-node LIQUIDITYGAUGEREWARD/script/integrateCheckpointSessionCode.ts",
    "kick": "ts-node LIQUIDITYGAUGEREWARD/script/kick.ts",
    "killMe": "ts-node LIQUIDITYGAUGEREWARD/script/killMe.ts",
    "setApproveDeposit": "ts-node LIQUIDITYGAUGEREWARD/script/setApproveDeposit.ts",
    "toggleExternalRewardsClaim": "ts-node LIQUIDITYGAUGEREWARD/script/toggleExternalRewardsClaim.ts",
    "userCheckpointSessionCode": "ts-node LIQUIDITYGAUGEREWARD/script/userCheckpointSessionCode.ts",
    "withdraw": "ts-node LIQUIDITYGAUGEREWARD/script/withdraw.ts",
    "admin": "ts-node LIQUIDITYGAUGEREWARD/script/admin.ts",
    "approvedToDeposit": "ts-node LIQUIDITYGAUGEREWARD/script/approvedToDeposit.ts",
    "balanceOf": "ts-node LIQUIDITYGAUGEREWARD/script/balanceOf.ts",
    "claimedRewardsFor": "ts-node LIQUIDITYGAUGEREWARD/script/claimedRewardsFor.ts",
    "controller": "ts-node LIQUIDITYGAUGEREWARD/script/controller.ts",
    "crvToken": "ts-node LIQUIDITYGAUGEREWARD/script/crvToken.ts",
    "futureAdmin": "ts-node LIQUIDITYGAUGEREWARD/script/futureAdmin.ts",
    "futureEpochTime": "ts-node LIQUIDITYGAUGEREWARD/script/futureEpochTime.ts",
    "inflationRate": "ts-node LIQUIDITYGAUGEREWARD/script/inflationRate.ts",
    "integrateCheckpointOf": "ts-node LIQUIDITYGAUGEREWARD/script/integrateCheckpointOf.ts",
    "integrateFraction": "ts-node LIQUIDITYGAUGEREWARD/script/integrateFraction.ts",
    "integrateInvSupply": "ts-node LIQUIDITYGAUGEREWARD/script/integrateInvSupply.ts",
    "integrateInvSupplyOf": "ts-node LIQUIDITYGAUGEREWARD/script/integrateInvSupplyOf.ts",
    "isClaimingRewards": "ts-node LIQUIDITYGAUGEREWARD/script/isClaimingRewards.ts",
    "isKilled": "ts-node LIQUIDITYGAUGEREWARD/script/isKilled.ts",
    "lpToken": "ts-node LIQUIDITYGAUGEREWARD/script/lpToken.ts",
    "minter": "ts-node LIQUIDITYGAUGEREWARD/script/minter.ts",
    "period": "ts-node LIQUIDITYGAUGEREWARD/script/period.ts",
    "periodTimestamp": "ts-node LIQUIDITYGAUGEREWARD/script/periodTimestamp.ts",
    "rewardContract": "ts-node LIQUIDITYGAUGEREWARD/script/rewardContract.ts",
    "rewardedToken": "ts-node LIQUIDITYGAUGEREWARD/script/rewardedToken.ts",
    "rewardIntegral": "ts-node LIQUIDITYGAUGEREWARD/script/rewardIntegral.ts",
    "rewardsFor": "ts-node LIQUIDITYGAUGEREWARD/script/rewardsFor.ts",
    "totalSupply": "ts-node LIQUIDITYGAUGEREWARD/script/totalSupply.ts",
    "votingEscrow": "ts-node LIQUIDITYGAUGEREWARD/script/votingEscrow.ts",
    "workingBalances": "ts-node LIQUIDITYGAUGEREWARD/script/workingBalances.ts",
    "workingSupply": "ts-node LIQUIDITYGAUGEREWARD/script/workingSupply.ts"

  },
```

Use the following commands to perform testing
```

npm run deployLiquidityGaugeReward
npm run applyTransferOwnership
npm run claimableRewardSessionCode
npm run claimableTokensSessionCode
npm run claimRewards
npm run commitTransferOwnership
npm run deposit
npm run integrateCheckpointSessionCode
npm run kick
npm run killMe
npm run setApproveDeposit
npm run toggleExternalRewardsClaim
npm run userCheckpointSessionCode
npm run withdraw
npm run admin
npm run approvedToDeposit
npm run balanceOf
npm run claimedRewardsFor
npm run controller
npm run crvToken
npm run futureAdmin
npm run futureEpochTime
npm run inflationRate
npm run integrateCheckpointOf
npm run integrateFraction
npm run integrateInvSupply
npm run integrateInvSupplyOf
npm run isClaimingRewards
npm run isKilled
npm run lpToken
npm run minter
npm run period
npm run periodTimestamp
npm run rewardContract
npm run rewardedToken
npm run rewardIntegral
npm run rewardsFor
npm run totalSupply
npm run votingEscrow
npm run workingBalances
npm run workingSupply


```

CONFIGURE .env BEFORE TESTING


go to Liquidity-Gauge-reward folder
run command npm ci
Copy keys folder to LIQUIDITYGAUGEREWARD folder OR generate key using keygen(if using keygen funds account)
