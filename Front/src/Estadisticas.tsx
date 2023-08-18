
import GraficoPastel from "./GraficoPastel";
import GraficoBarras from "./GraficoBarras";
import Categories from "./Categorias";
import Header from "./Header";
import {Card, CardBody} from '@nextui-org/react'
/* const HTML = document.getElementById("html");
const ANCHO = HTML.offsetWidth;
const ALTO = HTML.offsetHeight;
HTML.style.width = "" + ANCHO + "px";
HTML.style.height = "" + ALTO + "px"; */

/*********-hace que el tamaño de fuente siempre sea visible-*********/

/* const FS = document.getElementsByClassName("fs");
const FS2 = document.getElementsByClassName("fs2");

for (let i = 0; i < FS.length; i++) {
  const fs_Style = window.getComputedStyle(FS[i])
  FS[i].style.fontSize = "" + fs_Style.fontSize + "";
  
}
for (let i = 0; i < FS2.length; i++) {
  const fs_Style = window.getComputedStyle(FS2[i])
  FS2[i].style.fontSize = "" + fs_Style.fontSize + "";
  
} */

//------------------------------------//
export default function Estadisticas() {
  return(
    <>
    <Header/>
    
        <Card className="mb-4"><CardBody><Categories/></CardBody></Card>
        <div className="flex justify-between">
          <Card className=""><CardBody className=""><GraficoBarras/></CardBody></Card>
          <Card className=""><CardBody><GraficoPastel/></CardBody></Card>
        </div>
                
      
  </>
)
}