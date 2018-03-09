  var attempt = 3; //
  function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if ( username == "nasty" && password == "admin1"){
      var d = new Date();
      d.setTime(d.getTime() + (30*24*60*60*1000));
      var expires = "expires=" + d.toGMTString();
      document.cookie = "username=ItsJustNasty" + expires;
      alert ("Login successfully");
      window.location = "dashboard.html"; 
      return false;
    } else if ( username == "pie" && password == "admin"){
      var d = new Date();
      d.setTime(d.getTime() + (30*24*60*60*1000));
      var expires = "expires=" + d.toGMTString();
      document.cookie = "username=TheFallingPie" + expires;
      alert ("Login successfully");
      window.location = "dashboard.html";
      return false;
    } else if ( username == "toni" && password == "admin"){
      var d = new Date();
      d.setTime(d.getTime() + (30*24*60*60*1000));
      var expires = "expires=" + d.toGMTString();
      document.cookie = "username=Toni" + expires;
      alert ("Login successfully");
      window.location = "dashboard.html";
      return false;
    } else{
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
