# Ethereum - Covid19_blockchain

FOR LOCAL HOSTING

- Start the local blockchain may be by using [Ganache](https://www.trufflesuite.com/ganache ) and connect your browser to it using [metamask](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en "Add its extension in chrome")
- Compile the smart contract by writing `truffle compile`
- Run the migration running `truffle migrate --reset`
- Start the web client using command `npm start`
#### To run test  ####
Run `truffle test` on command line



NOTE-- The nodes_modules is provided, so no need to use npm install as there may be version issues of dependencies. Also, before shifting to new metamash account ,refresh the browser as
        some browsers show this in console //MetaMask will soon stop reloading pages on network change.