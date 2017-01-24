var CurrentAccounts = []
var userIndex = -1;
var Account = function(userName) {
  this.userName = userName;
  this.userBalance = 0;
}
var myAccount = new Account("Charlie");
myAccount.userBalance = 5000000;
CurrentAccounts.push(myAccount);

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

 Account.prototype.getBalance =function() {
   var displayBalance = this.userBalance * 100;
   displayBalance = Math.round(displayBalance);
   displayBalance = (displayBalance / 100);
   return "$" + displayBalance.toString();
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
            var greetingName = CurrentAccounts[userIndex].userName
            var localBalance = CurrentAccounts[userIndex].userBalance
            $(".balance-change").slideDown(2000);
            $(".form").slideUp(2000);
            $("#greeting").text(greetingName);
            $("#current-balance").text(localBalance);
          }
        });
        $("#update-balance").click(function(){
          var creditAmount = parseFloat($("#credit").val());
          var debitAmount = parseFloat($("#debit").val());
          console.log(userIndex);
          CurrentAccounts[userIndex].changeBalance(creditAmount);
          CurrentAccounts[userIndex].changeBalance(0-debitAmount);
          var outputBalance = CurrentAccounts[userIndex].getBalance();
          console.log(CurrentAccounts[userIndex].userBalance);
          $("#current-balance").text(outputBalance);

        })
        $("#logout").click(function(){
          $(".balance-change").slideUp(2000);
          $(".form").slideDown(2000);
        });


    });
