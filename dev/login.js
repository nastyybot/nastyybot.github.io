  var attempt = 3; //
  function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if ( username == "nasty" && password == "admin1"){
      document.cookie = "username=ItsJustNasty";
      alert ("Login successfully");
      window.location = "dashboard.html"; 
      return false;
    } else if ( username == "pie" && password == "admin"){
      document.cookie = "username=TheFallingPie";
      alert ("Login successfully");
      window.location = "dashboard.html";
      return false;
    } else if ( username == "toni" && password == "admin"){
      document.cookie = "username=Toni";
      alert ("Login successfully");
      window.location = "dashboard.html";
      return false;
    } else {
      attempt --;// Decrementing by one.
      alert("You have left "+attempt+" attempt;");
      // Disabling fields after 3 attempts.
      if( attempt == 0){
        document.getElementById("username").disabled = true;
        document.getElementById("password").disabled = true;
        document.getElementById("submit").disabled = true;
        return false;
      }
  }
}
