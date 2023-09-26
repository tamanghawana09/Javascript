
function vali(){
    var Uname = document.getElementById("username").value;
    var Unumber = document.getElementById("number").value;
    Unumber = parseInt(Unumber);
    
    var regUsername = /^[a-z A-Z 0-9 \. _ -]+ $/;
    var regPass =/^[0-9] + $/;

    if(regUsername.test(Uname)){
        console.log("Valid username");
        alert("Valid user name");
    }else{
        alert("Invalid username");
    }
    if(regPass.test(Unumber)){
        alert("Valid number");
    }
    else{
        alert("Invalid number");
    }

}
