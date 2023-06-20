// OOP? -> Object Oriented Programming
// It is just a way of programming

// others ways of programming -> Functional

// The same way OOPs work

// we hide complex things inside class
// & the properties which are important
// to interact with class are exposed.

function BankAccount(customerName, balace=0){
    this.customerName=customerName;
    this.accountNo = Math.floor((Math.random() * 1000000) + 1);
    this.balace = balace;
}
BankAccount.prototype.deposit = function (amount) {
  this.balace += amount;
};

BankAccount.prototype.withdraw = function (amount) {
  this.balace -= amount;
};

const pcAccount = new BankAccount('pc',500);
const loveAccount = new BankAccount('love',5000);
const vijayAccount = new BankAccount('vijay',650000000);

console.log(pcAccount);
console.log(loveAccount);
console.log(vijayAccount);


pcAccount.prototype; 
// console.log(BankAccount.__proto__);





