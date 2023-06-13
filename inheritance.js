/// BankAccount Constructor function
function BankAccount(customerName, balance=0){
    this.customerName=customerName;
    this.accountNo = Math.floor((Math.random() * 1000000) + 1);
    this.balance = balance;
}
BankAccount.prototype.deposit = function (amount) {
  this.balance += amount;
};

BankAccount.prototype.withdraw = function (amount) {
  this.balance -= amount;
};

// inheritance hardcoded
// /// CurrentAccount Constructor function
// function CurrentAccount(customerName, balance=0){
//     this.customerName=customerName;
//     this.accountNo = Math.floor((Math.random() * 1000000) + 1);
//     this.balance = balance;
//     this.transaction = 500000; // 5 lakhs
// }
// CurrentAccount.prototype.deposit = function (amount) {
//   this.balance += amount;
// };

// CurrentAccount.prototype.withdraw = function (amount) {
//   this.balance -= amount;
// };
// CurrentAccount.prototype.businessLoan = function (amount) {
//     console.log(`taking business loan: ${amount}`)
//   };


/// SavingAccount Constructor function
// function SavingAccount(customerName, balance=0){
//     this.customerName=customerName;
//     this.accountNo = Math.floor((Math.random() * 1000000) + 1);
//     this.balance = balance;
//     this.transaction = 100000; // 1 lakhs
// }
// SavingAccount.prototype.deposit = function (amount) {
//   this.balance += amount;
// };

// SavingAccount.prototype.withdraw = function (amount) {
//   this.balance -= amount;
// };
// SavingAccount.prototype.personalLoan = function (amount) {
//     console.log(`taking personalLoan: ${amount}`)
//   };

function CurrentAccount(customerName, balance=0){
    // this.customerName=customerName;
    // this.accountNo = Math.floor((Math.random() * 1000000) + 1);
    // this.balance = balance;
    // -> run constructor of BankAccount
    // BankAccount.call(this,customerName,balance);
    this.transaction = 500000; // 5 lakhs
}
CurrentAccount.prototype.deposit = function (amount) {
  this.balance += amount;
};

CurrentAccount.prototype.withdraw = function (amount) {
  this.balance -= amount;
};
CurrentAccount.prototype.businessLoan = function (amount) {
    console.log(`taking business loan: ${amount}`)
  };



function SavingAccount(customerName, balance=0){
    this.customerName=customerName;
    this.accountNo = Math.floor((Math.random() * 1000000) + 1);
    this.balance = balance;
    this.transaction = 100000; // 1 lakhs
}
SavingAccount.prototype.deposit = function (amount) {
  this.balance += amount;
};

SavingAccount.prototype.withdraw = function (amount) {
  this.balance -= amount;
};
SavingAccount.prototype.personalLoan = function (amount) {
    console.log(`taking personalLoan: ${amount}`)
  };


//   Call bind apply
//    