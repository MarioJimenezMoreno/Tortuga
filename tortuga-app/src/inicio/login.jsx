import React,{ useState } from 'react'
import "./inicio.css"

export default function Login() {
    const evento = () => setVariableA(!isExpanded);
    let content;
    let [isExpanded, setVariableA] = useState(false);


    if (isExpanded) {
        
        content = 
        <div>
            <button>Log in</button>
            <div>
                <li>
                    To Be implemented
                </li>
            </div>
        </div>;
      } else {
        content = <button>Log in </button>;
      }
  return (
    <div class="implement" id="login" onClick={evento}>{content}</div>
  )
}