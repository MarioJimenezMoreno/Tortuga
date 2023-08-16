/* import './App.css'; */
/* import "./css/inicio.css" */
import Nav from './jsx/nav';
import Cuerpo from './jsx/cuerpo';
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Estadisticas from "./jsx/Estadisticas";


function App() {
  return (
    <div>
      
      <Estadisticas/>
      
    </div>
  );
}

export default App;
