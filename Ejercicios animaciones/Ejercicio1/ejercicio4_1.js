

    var cont = 1;
    var  inter = setInterval(mostrar, 1000);
    
 function mostrar(){
     if(cont == 4){
        clearInterval(inter);
        for(let i = 1; i < 5; i++){
            let ele = document.getElementById('t'+i);
            ele.addEventListener("click" , clickText);
        }
     }
    let ele = document.getElementById('t'+cont);
    ele.style.display = "initial";
    cont++;
 }

function clickText(){
    // document.getElementById('t1').style.display = "none";
    // document.getElementById('t2').style.display = "none";
    // document.getElementById('t3').style.display = "none";
    // document.getElementById('t4').style.display = "none";
    var cont2 = 4;
    var  inter2 = setInterval(ocultar, 200);
     function ocultar(){
        if(cont2 == 1){
            clearInterval(inter2);
            cont = 1;
            inter = setInterval(mostrar, 1000);
        }
        let ele = document.getElementById('t'+cont2);
        ele.removeEventListener("click", clickText);
        ele.style.display = "none";
        cont2--;
         
    }
}




