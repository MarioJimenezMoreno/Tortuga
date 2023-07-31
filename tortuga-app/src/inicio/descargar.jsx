import React,{ useState } from 'react'
import "./inicio.css"

export default function Descargar() {
    const evento = () => setVariableA(!isExpanded);
    let content;
    let [isExpanded, setVariableA] = useState(false);


    if (isExpanded) {
        
        content = 
        <div>
            <div>Descargar</div>
            <div>
                <li>
                    To Be implemented
                </li>
            </div>
        </div>;
      } else {
        content = <div> Descargar </div>;
      }
  return (
    <div class="implement" id="download" onMouseEnter={evento} onMouseLeave={evento}>{content}</div>
  )
}
