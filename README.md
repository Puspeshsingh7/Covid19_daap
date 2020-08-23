# Covid19_daap

Note :-  secrets file is removed for privacy

FOR PUBLIC NETWORK(Ropsten test network)
 
truffle Ethereum - Covid19_blockchain

 Run `npm install truffle-hdwallet-provider`

for 1st run
1. run `truffle compile`

2. Run `truffle develop`, then list of 10 accounts will come ,take any account and copy it.Also remember the private key corresponding to that account.
 Paste the account on  https://faucet.ropsten.be  and click on send ether
3. Run `truffle migrate --reset --network ropsten`
4. Run `npm install`
5. run `npm start`
6. on metamash selct Ropsten test network
7. import account, enter the private key from step 3.

Afterwards
1. run `truffle compile`
2. Run `truffle migrate --reset --network ropsten`
3. run `npm start`


Optional- Run `truffle test` on command line to test.

To publish on IPFS/IPNS
1. run `truffle compile`

2. Run `truffle develop`, then list of 10 accounts will come ,take any account and copy it.Also remember the private key corresponding to that account.
 Paste the account on  https://faucet.ropsten.be  and click on send ether
3. Run `truffle migrate --reset --network ropsten`
4. Run `npm install`
5. Run Ipfs
6. on command prompt ./ipfs add -r public

To publish on ipfs

7. Then on web browser, https://gateway.ipfs.io/ipfs/COPY PUBLIC HASH HERE
// This will publish on ipfs

Note: To publish on IPNS

7. On command prompt ./ipfs name publish COPY PUBLIC HASH HERE
8.7. Then on web browser, https://gateway.ipfs.io/ipns/COPY PEERID HASH HERE
// This will publish on ipns
