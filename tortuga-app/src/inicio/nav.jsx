import React,{ useState } from 'react'
import Toimplement from './toimplement'
import "./inicio.css"
import tortuga from './img/tortuga.png'
import Descargar from './descargar'
import Guia from './guia'
import Login from './login'
import Signin from './signin'


export default function Nav() {
    

  return (
    <div class="flex" id="box-1">
        <div><img id="logo" src={tortuga} alt="placeholder" /></div>
        <div class="flex" id="box-nav">
          <div class="flex" id="box-prop">
            <Descargar/>
            <Guia/>
          </div>
          <div class="flex" id="box-log">
            <Login/>
            <Signin/>
          </div>
        </div>
    </div>
    
  )
}
