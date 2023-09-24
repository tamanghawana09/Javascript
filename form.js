
function validate(){
    var username = document.getElementById("user").value;
    var pass = document.getElementById("Upass");
    var userpass = pass.value;

    if(username.length < 6){
        alert("Enter your full name");
        return false;
    }
    else if(pass.length < 6){
        document.getElementById("error").textContent = "Password is small";
        userpass.value ="";
        userpass.style.border = "Solid 2px red";
        return false;
    }

}