import React from 'react'
import "./inicio.css"
import galapago from './img/galapago.jpg'
import grupo_tortugas from './img/grupo_tortugas.jpg'

export default function Cuerpo() {
  return (
    <div id="box-2">
        <div class="box_texto flex"> 
          <div class="cont_imagen">
            <img class="imagen" src={galapago} alt="placeholder" />
          </div>
          <div class="textos">
            <h1 class="titulo">Boostea tu PRODUCTIVIDAD</h1>
            <div class="parrafo">
              Con esta aplicación podrás organizarte como nunca antes con la
              revolucionaria tecnologia tortuga
            </div>
          </div>
        </div>
        <div class="box_texto flex der"> 
          <div class="cont_imagen">
            <img class="imagen" src={grupo_tortugas} alt="placeholder" />
          </div>
          <div class="textos">
            <h1 class="titulo">O tu vida social</h1>
            <div class="parrafo">
              Permite que Tortuga Corporation calcule, analice y recomiende tus actividades de ocio.
            </div>
          </div>
        </div>
      </div>
  )
}
