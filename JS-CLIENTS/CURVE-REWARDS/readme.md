
# CasperLabs-Curve-Rewards-jsClient

This folder has the fs filesystem code to read wasm and deploy Curve Rewards contract and its functions

## Requirement

Make sure you have created and funded the keys before testing.

## Commands

1. Run ```npm ci``` command in JsClient Folder to install the node packages.
2. Run ```npm run deployCurveRewards``` to deploy contracts to test-net.
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
    "deployCurveRewards": "ts-node CURVE-REWARDS/scripts/deployCurveRewardsContract.ts",
    "balanceOf": "ts-node CURVE-REWARDS/scripts/balanceOf.ts",
    "earnedSessionCode": "ts-node CURVE-REWARDS/scripts/earnedSessionCode.ts",
    "exit": "ts-node CURVE-REWARDS/scripts/exit.ts",
    "getReward": "ts-node CURVE-REWARDS/scripts/getReward.ts",
    "lastTimeRewardApplicableSessionCode": "ts-node CURVE-REWARDS/scripts/lastTimeRewardApplicableSessionCode.ts",
    "notifyRewardAmount": "ts-node CURVE-REWARDS/scripts/notifyRewardAmount.ts",
    "ownerJsClient": "ts-node CURVE-REWARDS/scripts/ownerJsClient.ts",
    "renounceOwnership": "ts-node CURVE-REWARDS/scripts/renounceOwnership.ts",
    "rewardPerTokenSessionCode": "ts-node CURVE-REWARDS/scripts/rewardPerTokenSessionCode.ts",
    "setRewardDistribution": "ts-node CURVE-REWARDS/scripts/setRewardDistribution.ts",
    "stake": "ts-node CURVE-REWARDS/scripts/stake.ts",
    "stakeLp": "ts-node CURVE-REWARDS/scripts/stakeLp.ts",
    "totalSupplyJsClient": "ts-node CURVE-REWARDS/scripts/totalSupplyJsClient.ts",
    "transferOwnership": "ts-node CURVE-REWARDS/scripts/transferOwnership.ts",
    "withdraw": "ts-node CURVE-REWARDS/scripts/withdraw.ts",
    "withdrawLp": "ts-node CURVE-REWARDS/scripts/withdrawLp.ts",
    "duration": "ts-node CURVE-REWARDS/scripts/duration.ts",
    "isOwnersessioncode": "ts-node CURVE-REWARDS/scripts/isOwnersessioncode.ts",
    "lastUpdateTime": "ts-node CURVE-REWARDS/scripts/lastUpdateTime.ts",
    "periodFinish": "ts-node CURVE-REWARDS/scripts/periodFinish.ts",
    "rewardPerTokenStored": "ts-node CURVE-REWARDS/scripts/rewardPerTokenStored.ts",
    "rewardRate": "ts-node CURVE-REWARDS/scripts/rewardRate.ts",
    "rewards": "ts-node CURVE-REWARDS/scripts/rewards.ts",
    "snx": "ts-node CURVE-REWARDS/scripts/snx.ts",
    "uni": "ts-node CURVE-REWARDS/scripts/uni.ts",
    "userRewardPerTokenPaid": "ts-node CURVE-REWARDS/scripts/userRewardPerTokenPaid.ts"
    
  },
```

Use the following commands to perform testing
```
npm run deployCurveRewards
npm run balanceOf
npm run earnedSessionCode
npm run exit
npm run getReward
npm run lastTimeRewardApplicableSessionCode
npm run notifyRewardAmount
npm run ownerJsClient
npm run renounceOwnership
npm run rewardPerTokenSessionCode
npm run setRewardDistribution
npm run stake
npm run stakeLp
npm run totalSupplyJsClient
npm run totalSupplyJsClient
npm run transferOwnership
npm run withdraw
npm run withdrawLp
npm run duration
npm run isOwnersessioncode
npm run lastUpdateTime
npm run periodFinish
npm run rewardPerTokenStored
npm run rewardRate
npm run rewards
npm run snx
npm run uni
npm run userRewardPerTokenPaid

```

CONFIGURE .env BEFORE TESTING


go to CURVE-REWARDS folder
run command npm ci
Copy keys folder to CURVE-REWARDS folder OR generate key using keygen(if using keygen funds account)
