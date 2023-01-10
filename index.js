const { Blockchain, Transaction } = require('./src/blockchain');

let newChain = new Blockchain();

newChain.createTransaction(new Transaction('address1', 'address2', 100));
newChain.createTransaction(new Transaction('address2', 'address1', 50));

console.log('\nStarting the miner...');
newChain.minePendingTransactions('hieptran');

console.log('\nBalance of hieptran is:', newChain.getBalanceOfAddress('hieptran'));

console.log('\n Starting the miner again...');
newChain.minePendingTransactions('hieptran');

console.log('\nBalance of hieptran is:', newChain.getBalanceOfAddress('hieptran'));