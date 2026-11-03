let btnComprobar = document.getElementById("btnComprobar");
btnComprobar.addEventListener("click", comprobar);

function comprobar() {
    let win = true;
    let respuesta1 = document.getElementById("inputP1").value;
    let imgR1 = document.getElementById("imgR1");
    if (respuesta1 == "Protocolo"){
        imgR1.src = "assets/verdad.avif";
    }
    else{
        imgR1.src = "assets/error.png";
        win = false;
    }
    imgR1.style.visibility = "visible";

    let respuesta2 = document.getElementById("inputP2").value;
    let imgR2 = document.getElementById("imgR2");
    if (respuesta2 == "Python"){
        imgR2.src = "assets/verdad.avif";
    }
    else{
        imgR2.src = "assets/error.png";
        win = false;
    }
    imgR2.style.visibility = "visible";

    
    
    
    
    
    
    
    if (win==true){
        let divTrofeo = document.createElement("div");
        let imgTrofeo = document.createElement("img");
        let mains = document.getElementsByTagName("main");
        let miMain = mains[0];


        imgTrofeo.src = "assets/trofeo.png";
        divTrofeo.appendChild(imgTrofeo);
        miMain.appendChild(divTrofeo);
        divTrofeo.id = "divTrofeo";
    }
}

function limpiar(){
    
}