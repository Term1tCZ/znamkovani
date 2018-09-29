function validateForm() {
    var username = document.forms["Login_Form"]["user"].value;
    var password = document.forms["Login_Form"]["pass"].value;
    var falseLog;
    if (username == "admin" && password == "admin") {
        //window.location.replace("uvod.html");
        document.Login_Form.action = "mojeZnamky.html";
        return false;
      }
    else if ((username == "" && password == "") || (username == null && password == null)) {
       falseLog = "Zadejte prosím přihlašovací údaje.";
    }
    else {
      falseLog = "Špatní uživatelské jméno nebo heslo.";
    }
      document.getElementById("flg").innerHTML = falseLog;
}

function back() {
   window.history.back();

}
