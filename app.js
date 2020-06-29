function getNumber(num){
    var output = document.getElementById("outresult")
    output.value += num;
}
function clearResult(){
    var output = document.getElementById("outresult");
    output.value = "";
}
function getResult(){
    var output = document.getElementById("outresult");
    output.value = eval(output.value)
}