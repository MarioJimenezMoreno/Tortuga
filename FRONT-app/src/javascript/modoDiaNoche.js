const CONTAINER = document.getElementById("container");
const ESFERA = document.getElementById("esfera");
const COLOR_1 = document.getElementsByClassName("color1");
const COLOR_2 = document.getElementsByClassName("color2");
const COLOR_3 = document.getElementsByClassName("color3");
const COLOR_4 = document.getElementsByClassName("color4");

let colores_array =["#1B262C","#0F4C75","#3282B8","#BBE1FA"];
let oscuro = false;
color();

function modo_luz() {
    
    if (oscuro) {
        
        /* colores oscuro e izquierda */
        colores_array = ["#1B262C","#0F4C75","#3282B8","#BBE1FA"];
        CONTAINER.style.flexDirection="row";
        ESFERA.innerText="🌙";

    }
    else{
        /* colores de dia y derecha */
        colores_array = ["#BBE1FA","#3282B8","#0F4C75","#1B262C"];
        CONTAINER.style.flexDirection="row-reverse";
        ESFERA.innerText="☀";
    }
    oscuro=!oscuro;
    color();
}

function color() {
    
    for (let i = 0; i < COLOR_1.length; i++) {
        const elemento = COLOR_1[i];
        // Hacer algo con el elemento, por ejemplo, cambiar el fondo de color
        elemento.style.backgroundColor = ""+colores_array[0]+"";
    }
    for (let i = 0; i < COLOR_2.length; i++) {
        const elemento = COLOR_2[i];
        // Hacer algo con el elemento, por ejemplo, cambiar el fondo de color
        elemento.style.backgroundColor = ""+colores_array[1]+"";
    }
    for (let i = 0; i < COLOR_3.length; i++) {
        const elemento = COLOR_3[i];
        // Hacer algo con el elemento, por ejemplo, cambiar el fondo de color
        elemento.style.backgroundColor = ""+colores_array[2]+"";
    }
    for (let i = 0; i < COLOR_4.length; i++) {
        const elemento = COLOR_4[i];
        // Hacer algo con el elemento, por ejemplo, cambiar el fondo de color
        elemento.style.backgroundColor = ""+colores_array[3]+"";
    }
}