var CurrentAccounts = []

var Account = function(userName, userBalance) {
  this.userName = userName;
  this.userBalance = userBalance;
}

var Account.prototype.changeBalance = function(inputAmount) {
  if (this.userBalance + inputAmount < 0) {
    alert("You are too poor!")
  } else {
    this.userBalance = this.userBalance + inputAmount;
  };
}
var validateAccount = function(currentAccount) {
  return currentAccount
}
CurrentAccounts.find(validateAccount)
