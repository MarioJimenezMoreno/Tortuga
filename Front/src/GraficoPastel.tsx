import { Doughnut } from 'react-chartjs-2';
import { ArcElement, Tooltip, Legend, Chart } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend);

const RESPUESTA_2 = [
  {
    username: "Quim",
    tarea: "Libre",
    duracion: 10,
    color_code: "#FCD8D4"
  },
  {
    username: "Quim",
    tarea: "Libre",
    duracion: 20,
    color_code: "#FCD8D4"
  },
  {
    username: "Quim",
    tarea: "Trabajo",
    duracion: 36,
    color_code: "#FDF6F0"
  },
  {
    username: "Quim",
    tarea: "Trabajo",
    duracion: 106,
    color_code: "#FDF6F0"
  },
  {
    username: "Quim",
    tarea: "Ocio",
    duracion: 80,
    color_code: "#F8E2CF"
  },
  {
    username: "Quim",
    tarea: "Deporte",
    duracion: 30,
    color_code: "#F5C6AA"
  }
]
//------------------------------------//

// para el grafico de PASTEL Y CATEGORIA
let resultado_2 = RESPUESTA_2.reduce(function (acumulador, elemento) {
  let elementoExistente = acumulador.find(function (item) {
    return item.tarea === elemento.tarea;
  });

  if (elementoExistente) {
    elementoExistente.duracion += elemento.duracion;
  } else {
    acumulador.push(elemento);
  }

  return acumulador;
}, []);
//------------------------------------//

/*********-reorganiza el array de mayor a menor-*********/
function compararMayorMenor(a, b){
  return b.duracion - a.duracion;
}
resultado_2.sort(compararMayorMenor);
//------------------------------------//

// Datos para el gráfico
let color= [];
let dataset= [];
let categories = [];
resultado_2.forEach(element => {
  color.push(element.color_code);
  dataset.push(element.duracion);
  categories.push(element.tarea);
});

export let data = {
  labels: categories,
  datasets: [
    {
      label: 'Label',
      data: dataset,
      backgroundColor: color,
      borderColor: "#1B262C",
      borderWidth: 1,
    },
  ],
};

export let options: {
  scales: {
    y: {
      beginAtZero: true
    }
  }
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {      
      position: "right",
      labels: {
        color: "#000",
      }
    }
  },
}

function GraficoPastel() {
  return <Doughnut data={data} options={options} />;
}

export default GraficoPastel;
