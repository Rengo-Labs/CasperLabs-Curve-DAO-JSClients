
# CasperLabs-ERC20-CRV-jsClient

This folder has the fs filesystem code to read wasm and deploy ERC20CRV contract and its functions

## Requirement

Make sure you have created and funded the keys before testing.

## Commands

1. Run ```npm ci``` command in JsClient Folder to install the node packages.
2. Run ```npm run deployErc20Crv``` to deploy contracts to test-net.
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
    "deployErc20Crv": "ts-node ERC20-CRV/scripts/erc20CrvDeploy.ts",
    "approve": "ts-node ERC20-CRV/scripts/approve.ts",
    "availableSupplysessioncode": "ts-node ERC20-CRV/scripts/availableSupplysessioncode.ts",
    "burn": "ts-node ERC20-CRV/scripts/burn.ts",
    "futureEpochTimeWritesessioncode": "ts-node ERC20-CRV/scripts/futureEpochTimeWritesessioncode.ts",
    "mintableInTimeframesessioncode": "ts-node ERC20-CRV/scripts/mintableInTimeframesessioncode.ts",
    "mintsessioncode": "ts-node ERC20-CRV/scripts/mintsessioncode.ts",
    "setAdmin": "ts-node ERC20-CRV/scripts/setAdmin.ts",
    "setMinter": "ts-node ERC20-CRV/scripts/setMinter.ts",
    "startEpochTimeWritesessioncode": "ts-node ERC20-CRV/scripts/startEpochTimeWritesessioncode.ts",
    "transferSessionCode": "ts-node ERC20-CRV/scripts/transferSessionCode.ts",
    "transferFromSessionCode": "ts-node ERC20-CRV/scripts/transferFromSessionCode.ts",
    "updateMiningParameters": "ts-node ERC20-CRV/scripts/updateMiningParameters.ts",
    "admin": "ts-node ERC20-CRV/scripts/admin.ts",
    "allowances": "ts-node ERC20-CRV/scripts/allowances.ts",
    "balanceOf": "ts-node ERC20-CRV/scripts/balanceOf.ts",
    "decimals": "ts-node ERC20-CRV/scripts/decimals.ts",
    "minter": "ts-node ERC20-CRV/scripts/minter.ts",
    "name": "ts-node ERC20-CRV/scripts/name.ts",
    "rate": "ts-node ERC20-CRV/scripts/rate.ts",
    "symbol": "ts-node ERC20-CRV/scripts/symbol.ts"
  },
```

Use the following commands to perform testing
```
npm run deployErc20Crv
npm run approve
npm run availableSupplysessioncode
npm run burn
npm run futureEpochTimeWritesessioncode
npm run mintableInTimeframesessioncode
npm run mintsessioncode
npm run setAdmin
npm run setMinter
npm run startEpochTimeWritesessioncode
npm run transferSessionCode
npm run transferFromSessionCode
npm run updateMiningParameters
npm run admin
npm run allowances
npm run balanceOf
npm run decimals
npm run minter
npm run name
npm run rate
npm run symbol


```

CONFIGURE .env BEFORE TESTING


go to ERC20-CRV folder
run command npm ci
Copy keys folder to ERC20-CRV folder OR generate key using keygen(if using keygen funds account)
