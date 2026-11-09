let btnComprobar = document.getElementById("btnComprobar");
btnComprobar.addEventListener("click", comprobar);

function comprobar() {
    let win = true;
    
    // Pregunta 1
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

    // Pregunta 2
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

    // Pregunta 3
    let radioCorrecto = document.getElementById("inputP3_2").checked;
    let imgR3 = document.getElementById("imgR3");
    if (radioCorrecto) {
        imgR3.src = "assets/verdad.avif";
    } else {
        imgR3.src = "assets/error.png";
        win = false;
    }
    imgR3.style.visibility = "visible";

    // Pregunta 4
    let chk1 = document.getElementById("inputP4_1").checked;
    let chk2 = document.getElementById("inputP4_2").checked;
    let chk3 = document.getElementById("inputP4_3").checked;
    let imgR4 = document.getElementById("imgR4");
    if (chk1 && !chk2 && chk3) {
        imgR4.src = "assets/verdad.avif";
    } else {
        imgR4.src = "assets/error.png";
        win = false;
    }
    imgR4.style.visibility = "visible";

    // Pregunta 5
    let respuesta5 = document.getElementById("inputP5").value;
    let imgR5 = document.getElementById("imgR5");
    if (respuesta5 == "8"){
        imgR5.src = "assets/verdad.avif";
    }
    else{
        imgR5.src = "assets/error.png";
        win = false;
    }
    imgR5.style.visibility = "visible";

    
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