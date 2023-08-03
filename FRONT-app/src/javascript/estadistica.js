// estas 3 lineas de codigo hacen que el tamaño del html se adapte a la anchura del dispositivo y lo bloquee, de forma que es como si el css pusiera en el html los pixeles de la pantalla del dispositivo

const HTML = document.getElementById("html");
const ANCHO = HTML.offsetWidth;
const ALTO = HTML.offsetHeight;
HTML.style.width=""+ANCHO+"px";
HTML.style.height=""+ALTO+"px";
//------------------------------------//
/************categorias hardcodeadas********/
const LIBRE = {
    nombre: "Libre",
    horas: 40,
    color: "#FCD8D4"
};
const TRABAJO = {
    nombre: "Trabajo",
    horas: 36,
    color: "#FDF6F0"
};
const OCIO = {
    nombre: "Ocio",
    horas: 80,
    color: "#F8E2CF"
};
const DEPORTE = {
    nombre: "Deporte",
    horas: 30,
    color: "#F5C6AA"
};

let horas_array = [];
//------------------------------------//
/*********-añadir todas las horas a un array-*********/
//se tendra que pasar a un for para aplicar a todos los elemenos del json recibidos "probablemente"//
horas_array.push(LIBRE);
horas_array.push(TRABAJO);
horas_array.push(OCIO);
horas_array.push(DEPORTE);
//------------------------------------//
/*********-reorganiza el array de mayor a menor-*********/
function compararMayorMenor(a, b) {
    return b.horas - a.horas;
  }  
horas_array.sort(compararMayorMenor);
console.log(horas_array);
//------------------------------------//
/*********-reorganizar los divs segun las horas-*********/
//definiendo los divs//
const CAT_0 =document.getElementById("categoria_0");
const CAT_1 =document.getElementById("categoria_1");
const CAT_2 =document.getElementById("categoria_2");
const CAT_3 =document.getElementById("categoria_3");
//primer div//
CAT_0.style.backgroundColor=horas_array[0].color;
CAT_0.innerText = horas_array[0].nombre+":\n"+horas_array[0].horas+" horas";
//segundo div//
CAT_1.style.backgroundColor=horas_array[1].color;
CAT_1.innerText = horas_array[1].nombre+":\n"+horas_array[1].horas+" horas";
//tercer div//
CAT_2.style.backgroundColor=horas_array[2].color;
CAT_2.innerText = horas_array[2].nombre+":\n"+horas_array[2].horas+" horas";
//cuarto div//
CAT_3.style.backgroundColor=horas_array[3].color;
CAT_3.innerText = horas_array[3].nombre+":\n"+horas_array[3].horas+" horas";



