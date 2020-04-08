/* A retailer offers a rewards program to its customers, awarding points based on each recorded purchase. 
 A customer receives 2 points for every dollar spent over $100 in each transaction, 
plus 1 point for every dollar spent over $50 in each transaction 
(e.g. a $120 purchase = 2x$20 + 1x$50 = 90 points).
Given a record of every transaction during a three month period,
 calculate the reward points earned for each customer per month and total. */

 function calculateRewards(price) {
    let result = 0;

    if (price >= 50 && price < 100) {
        result = price - 50;
    } else if (price > 100) {
        result = 2 * (price - 100) + 50;
    }

    return result;
}

class Transaction {
    constructor(price) {
        this.price = price;
        this.rewards = calculateRewards(price);
        this.transactionDate = new Date();
    }
}

class TransactionList {
    constructor() {
        this.list = [];
    }

    getLast3MonthsList() {
        const today = new Date();
        const threeOldDate = today.setMonth(today.getMonth() - 3);
        let filteredList = this.list
            .filter(trans => trans.transactionDate > threeOldDate)
            .sort((a, b) => b.transactionDate - a.transactionDate);

        return filteredList;
    }

    getAllTransactions() {
        return this.list.sort((a, b) => b.transactionDate - a.transactionDate);
    }

    addTransaction(price) {
        const transaction = new Transaction(price);

        this.list.push(transaction);
    }

    getTotalRewards() {
        return this.list.length ? this.list.reduce((acc, key) => key.rewards + acc, 0) : 0;
    }

    rewardPerMonth() {
        let last3MonthRewards = [];

        for (let i = 0; i < 3; i += 1) {
            last3MonthRewards[i] = this.list
                .filter(trans => trans.transactionDate.getMonth() === new Date().getMonth() - i)
                .reduce((acc, key) => key.rewards + acc, 0);
        }

        return last3MonthRewards;
    }
}

let myTransactionList = new TransactionList();

myTransactionList.addTransaction(120);
myTransactionList.addTransaction(154);
myTransactionList.addTransaction(54);
myTransactionList.addTransaction(200);
myTransactionList.addTransaction(20);
myTransactionList.addTransaction(300);
let allTransactions = myTransactionList.getAllTransactions();

console.log(allTransactions);
