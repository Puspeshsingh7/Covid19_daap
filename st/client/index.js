import Web3 from 'web3';
import Covid19_blockchain from '../../build/contracts/Covid19_blockchain.json';

let web3;
let crud;

const initWeb3 = () => {
  return new Promise((resolve, reject) => {
    if(typeof window.ethereum !== 'undefined') {
      const web3 = new Web3(window.ethereum);
      window.ethereum.enable()
        .then(() => {
          resolve(
            new Web3(window.ethereum)
          );
        })
        .catch(e => {
          reject(e);
        });
      return;
    }
    if(typeof window.web3 !== 'undefined') {
      return resolve(
        new Web3(window.web3.currentProvider)
      );
    }
    resolve(new Web3('http://localhost:9545'));
  });
};

const initContract = () => {
    const deploymentKey = Object.keys(Covid19_blockchain.networks)[0];
  return new web3.eth.Contract(
      Covid19_blockchain.abi, 
      Covid19_blockchain
      .networks[deploymentKey]
      .address
  );
};

const initApp = () => {
    
    const $srhstatename = document.getElementById('srhstatename');
    const $srhstatenameresult = document.getElementById('srhstatenameresult');
  let accounts = [];

  web3.eth.getAccounts()
  .then(_accounts => {
    accounts = _accounts;
  });

 

  $srhstatename.addEventListener('submit', (e) => {
    e.preventDefault();
    const statename = e.target.elements[0].value;
        crud.methods.Search_statename(statename).call()
    .then(result => {
        $srhstatenameresult.innerHTML = `   
        ${result[2]}   = ${result[3]} ,
        ${result[4]}   = ${result[5]} , 
        ${result[6]}   = ${result[7]} ,
        ${result[8]}   = ${result[9]} ,
        ${result[10]}  = ${result[11]}`;
            })
    .catch(_e => {
      $srhstatenameresult.innerHTML = `Ooops... there was an error while trying to read state name ${statename}`;
    });
  });

};

document.addEventListener('DOMContentLoaded', () => {
  initWeb3()
    .then(_web3 => {
      web3 = _web3;
      crud = initContract();
      initApp(); 
    })
        .catch(e => console.log(e.message));
   
});