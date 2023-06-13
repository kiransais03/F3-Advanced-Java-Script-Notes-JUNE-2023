// Class syntax is a syntatic sugar
// for constructor function, Under the hood same
// constructor function is made.

class BankAccount{
    name;
    accountNumber;
    balance=0;
    constructor(customerName,balance){
        this.name=customerName;
        this.accountNumber=Math.floor((Math.random() * 1000000) + 1);
        this.balance=balance;
    }
    deposit(amount){
        this.balance+=amount;
    }
}


const pcAccount = new BankAccount('pc',500);
console.log(pcAccount);
pcAccount.deposit(1000);
console.log(pcAccount);
const vijayAccount = new BankAccount('vijay',100000);
