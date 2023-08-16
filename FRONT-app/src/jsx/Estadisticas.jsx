import "../css/estadistica.css"
import "../jsx/GraficoPastel"
import GraficoPastel from "../jsx/GraficoPastel";

  function Estadisticas() {

  return (
    <div>
      <div class="container-2 fs2">
        <div class="categorias"> Categorias</div>
        <div class="horas_container">
          <div class="horas_categorias fs2 rel" id="categoria_0">categoria</div>
          <div class="horas_categorias fs2 rel" id="categoria_1">categoria</div>
          <div class="horas_categorias fs2 rel" id="categoria_2">categoria</div>
          <div class="horas_categorias fs2 rel" id="categoria_3">categoria</div>
        </div>
      </div>

      <div class="graficos_container">
        <div class="horas_libres_container rel">
          <div class="fs2" id="grafico_barras_titulo"></div>
          <canvas class="fs" id="grafico_barras"></canvas>
        </div>
        <div class="categorias_grafico_container rel">
          <div class="fs2" id="grafico_pastel_titulo"></div>
          <canvas> <GraficoPastel/></canvas>
          
        </div>
      </div>
    </div>
  )
}
/* <Header/>
    <Bar/> */
export default Estadisticas;
// ChartJS.register(ArcElement, Tooltip, Legend);

// <Doughnut data={datos_2}/>