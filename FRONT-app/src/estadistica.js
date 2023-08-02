// estas 3 lineas de codigo hacen que el tamaño del html se adapte a la anchura del dispositivo y lo bloquee, de forma que es como si el css pusiera en el html los pixeles de la pantalla del dispositivo

const HTML = document.getElementById("html");
const ANCHO = HTML.offsetWidth;
const ALTO = HTML.offsetHeight;
HTML.style.width=""+ANCHO+"px";
HTML.style.height=""+ALTO+"px";
//------------------------------------//

