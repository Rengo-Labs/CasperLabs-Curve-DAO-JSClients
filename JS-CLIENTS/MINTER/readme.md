# CasperLabs-MINTER-jsClient

This folder has the fs filesystem code to read wasm and deploy Minter contract and its functions

## Requirement

Make sure you have created and funded the keys before testing.

## Commands

1. Run ```npm ci``` command in JsClient Folder to install the node packages.
2. Run ```npm run deployMinter``` to deploy contracts to test-net.
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
    "deployMinter": "ts-node MINTER/scripts/deployMinter.ts",
    "allowedToMintFor": "ts-node MINTER/scripts/allowedToMintFor.ts",
    "controller": "ts-node MINTER/scripts/controller.ts",
    "mint": "ts-node MINTER/scripts/mint.ts",
    "minted": "ts-node MINTER/scripts/minted.ts",
    "mintFor": "ts-node MINTER/scripts/mintFor.ts",
    "mintMany": "ts-node MINTER/scripts/mintMany.ts",
    "toggleApproveMint": "ts-node MINTER/scripts/toggleApproveMint.ts",
    "token": "ts-node MINTER/scripts/token.ts"
  },
```

Use the following commands to perform testing
```
npm run deployMinter
npm run allowedToMintFor
npm run controller
npm run mint
npm run minted
npm run mintFor
npm run mintMany
npm run toggleApproveMint
npm run token

```

CONFIGURE .env BEFORE TESTING


go to MINTER folder
run command npm ci
Copy keys folder to MINTER folder OR generate key using keygen(if using keygen funds account)
