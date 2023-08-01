import React,{ useState } from 'react'
import "../css/inicio.css";

export default function Signin() {
    const evento = () => setVariableA(!isExpanded);
    let content;
    let [isExpanded, setVariableA] = useState(false);


    if (isExpanded) {
        
        content = 
        <div>
            <button>Sign in</button>
            <div>
                <li>
                    To Be implemented
                </li>
            </div>
        </div>;
      } else {
        content = <button>Sign in </button>;
      }
  return (
    <div className="implement" id="signin" onClick={evento}>{content}</div>
  )
}