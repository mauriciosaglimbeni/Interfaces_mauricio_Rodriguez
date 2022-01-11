var cont = 0;
var contador = document.getElementById('contador');
function start(){
    document.getElementById('pickNum').addEventListener("onblur",getNum);
    document.getElementById('iniciar').addEventListener("onclick", iniciar);
    document.getElementById('parar').addEventListener("onclick", parar);
    
}
function getNum(){
    var num = document.getElementById('pickNum').value;
}
function iniciar(){
    var to = setTimeout(timesOut, num*1000);
    var inter = setInterval(interval,1000);
}
function timesOut(){
    contador.style.color = "red";
}
function interval(){
    let ele = document.getElementById('contador');
    if(cont >= 0 && cont <= num){
        ele.innerHTML = cont;
    }else{
        clearInterval(inter);
    }
}
window.onload = start;