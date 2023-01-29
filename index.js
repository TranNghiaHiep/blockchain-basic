const { Blockchain, Transaction } = require('./src/blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('1a68be92e2ccb2e050d8c8dff4959baa5bd0e1df9983aac5b83b507c56742257');
const myWalletAddress = myKey.getPublic('hex');

let newChain = new Blockchain();

// newChain.createTransaction(new Transaction('address1', 'address2', 100));
// newChain.createTransaction(new Transaction('address2', 'address1', 50));
const tx1 = new Transaction(myWalletAddress, 'publicKey', 10);
tx1.signTransaction(myKey);
newChain.addTransaction(tx1);

// console.log('\nStarting the miner...');
// newChain.minePendingTransactions('hieptran');

// console.log('\nBalance of hieptran is:', newChain.getBalanceOfAddress('hieptran'));

console.log('\n Starting the miner again...');
newChain.minePendingTransactions(myWalletAddress);

console.log('\nBalance of hieptran is:', newChain.getBalanceOfAddress(myWalletAddress));