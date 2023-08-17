<<<<<<< HEAD
import React,{ useState } from 'react'
import "./Estadisticas.css";
import GraficoPastel from "./GraficoPastel";
import GraficoBarras from "./GraficoBarras";
=======
import "./Estadisticas.css";
import GraficoPastel from "./GraficoPastel";
import GraficoBarras from "./GraficoBarras";
import Header from "./Header";
import {Card, CardBody} from '@nextui-org/react'
>>>>>>> fa6ab08258b84bab05402012150d6dea4caec861
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
    {/* <div id="html">
      <div className="container">
    <div className="menu_container rel">
      <div className="perfil fs rel">soy el perfil</div>
      <div className="feature_container">
        <div className="feature fs rel">feature</div>
        <div className="feature fs rel">feature</div>
        <div className="feature fs rel">feature</div>
        <div className="feature fs rel">feature</div>
        <div className="feature fs rel">feature</div>
      </div>
    </div>

    
    <div className="container-2 fs2">
      <div className="categorias"> Categorias</div>
      <div className="horas_container">
        <div className="horas_categorias fs2 rel" id="categoria_0">categoria</div>
        <div className="horas_categorias fs2 rel" id="categoria_1">categoria</div>
        <div className="horas_categorias fs2 rel" id="categoria_2">categoria</div>
        <div className="horas_categorias fs2 rel" id="categoria_3">categoria</div>
      </div>
    </div>

    <div className="graficos_container">
      <div className="horas_libres_container rel">
        <div className="fs2" id="grafico_barras_titulo"></div> */}
        <Card><CardBody><GraficoBarras/></CardBody></Card>
      {/* </div>
      <div className="categorias_grafico_container rel">
        <div className="fs2" id="grafico_pastel_titulo"></div> */}
        <Card><CardBody><GraficoPastel/></CardBody></Card>        
      {/* </div>
    </div>
  </div></div> */}
  </>
)
}