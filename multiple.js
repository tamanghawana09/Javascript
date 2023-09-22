function multiple(){
    var num = document.getElementById("number").value;
    var result;
    var display =" ";
    num = parseInt(num);
    result = parseInt(result);
    for(i=1;i<=20;i++){
        result = num * i + " ";
        display += num + "*" + i + "=" + result;
        document.getElementById("ans").textContent = display; 
    }    
}