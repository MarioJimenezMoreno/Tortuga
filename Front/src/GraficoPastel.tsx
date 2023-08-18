
import { Doughnut } from 'react-chartjs-2';
import { ArcElement, Tooltip, Legend, Chart, CategoryScale, LinearScale } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend);

interface DataElement {
  username: string;
  tarea: string;
  duracion: number;
  color_code: string;
}
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
];

// para el grafico de PASTEL Y CATEGORIA
let resultado_2 = RESPUESTA_2.reduce(function (acumulador: DataElement[], elemento) {
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

/*********-reorganiza el array de mayor a menor-*********/
function compararMayorMenor(a: DataElement, b: DataElement) {
  return b.duracion - a.duracion;
}
resultado_2.sort(compararMayorMenor);

// Datos para el gráfico
let color: string[] = [];
let dataset: number[] = [];
let categories: string[] = [];
resultado_2.forEach(element => {
  color.push(element.color_code);
  dataset.push(element.duracion);
  categories.push(element.tarea);
});

export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string[];
    borderColor: string;
    borderWidth: number;
  }[];
}

export interface ChartOptions {
  scales: {
    y: LinearScale[];
  };
  responsive: boolean;
  maintainAspectRatio: boolean;
  plugins: {
    legend: {
      position: string;
      labels: {
        color: string;
      };
    };
  };
}

export const data: ChartData = {
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

export const options: ChartOptions = {
  scales: {
    y: [{
      beginAtZero: true
    }],
  },
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      position: "right",
      labels: {
        color: "#fff",
      },
    },
  },
};

function GraficoPastel() {
  return <Doughnut data={data} options={options} height={340} />;
}

export default GraficoPastel;
