import React,{ useState } from 'react'
import "./inicio.css"

export default function Guia() {
    const evento = () => setVariableA(!isExpanded);
    let content;
    let [isExpanded, setVariableA] = useState(false);


    if (isExpanded) {
        
        content = 
        <div>
            <div>Guia</div>
            <div>
                <li>
                    To Be implemented
                </li>
            </div>
        </div>;
      } else {
        content = <div>Guia </div>;
      }
  return (
    <div class="implement" id="guide" onMouseEnter={evento} onMouseLeave={evento}>{content}</div>
  )
}