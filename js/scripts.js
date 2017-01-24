var CurrentAccounts = []
var userIndex = -1;
var Account = function(userName) {
  this.userName = userName;
  this.userBalance = 0;
}

Account.prototype.changeBalance = function(inputAmount) {
  if (isNaN(inputAmount)){
    inputAmount = 0;
  }
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
 Account.prototype.getBalance =function() {
   return "$" + this.userBalance.toString();
}


$(function() {
    //event.preventdefault();
    $("#name-submit").click(function() {
        var inputtedUserName = $("#user-name").val();
        var userStatus = $("input:radio[name='user-status']:checked").val();

        var newAccount = new Account(inputtedUserName);


        function findUserName(Account) {
          return Account.userName === inputtedUserName;
        }
        userIndex = CurrentAccounts.findIndex(findUserName);

        if ((userIndex === -1) && (userStatus === "new")) { //new account
            CurrentAccounts.push(newAccount);
            userIndex = CurrentAccounts.findIndex(findUserName);
            var greetingName = CurrentAccounts[userIndex].userName
            var localBalance = CurrentAccounts[userIndex].userBalance
            $(".balance-change").slideDown(2000);
            $(".form").slideUp(2000);
            $("#greeting").text(greetingName);
            $("#current-balance").text(localBalance);
          } else if (userIndex !== -1 && userStatus === "new") { //account name taken
            alert("Account name is already taken")
          } else if (userIndex === -1 && userStatus === "existing") { //account name not found
            alert("Account name not found")
          } else { //existing account name found
            //NEED TO DISPLAY ACCOUNT INFO

          }
        });
        $("#update-balance").click(function(){
          var creditAmount = parseInt($("#credit").val());
          var debitAmount = parseInt($("#debit").val());
          console.log(userIndex);
          CurrentAccounts[userIndex].changeBalance(creditAmount);
          CurrentAccounts[userIndex].changeBalance(0-debitAmount);
          var outputBalance = CurrentAccounts[userIndex].getBalance();
          console.log(CurrentAccounts[userIndex].userBalance);
          $("#current-balance").text(outputBalance);

        })





    });
