
# CasperLabs-MULTICALL-jsClient

This folder has the fs filesystem code to read wasm and deploy MULTICALL contract and its functions

## Requirement

Make sure you have created and funded the keys before testing.

## Commands

1. Run ```npm ci``` command in JsClient Folder to install the node packages.
2. Run ```npm run deployMulticall``` to deploy contracts to test-net.
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
    "deployMulticall": "ts-node MULTICALL/scripts/deployMulticall.ts",
    "aggregate": "ts-node MULTICALL/scripts/aggregate.ts",
    "getCurrentBlockTimestampsessioncode": "ts-node MULTICALL/scripts/getCurrentBlockTimestampsessioncode.ts"
  },
```

Use the following commands to perform testing
```
npm run deployMulticall
npm run aggregate
npm run getCurrentBlockTimestampsessioncode

```

CONFIGURE .env BEFORE TESTING


go to MULTICALL folder
run command npm ci
Copy keys folder to MULTICALL folder OR generate key using keygen(if using keygen funds account)
