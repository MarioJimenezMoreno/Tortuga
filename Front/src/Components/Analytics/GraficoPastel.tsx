import { Doughnut } from "react-chartjs-2";
import {
  ArcElement,
  Tooltip,
  Legend,
  Chart,
  CategoryScale,
  LinearScale,
} from "chart.js";

Chart.register(ArcElement, Tooltip, Legend);

interface DataElement {
  username: string;
  name: string;
  duration: number;
  color_code: string;
}
const RESPUESTA_2 = [
  {
    username: "Quim",
    name: "Libre",
    duration: 10,
    color_code: "#74dfa2",
  },
  {
    username: "Quim",
    name: "Libre",
    duration: 20,
    color_code: "#74dfa2",
  },
  {
    username: "Quim",
    name: "Trabajo",
    duration: 36,
    color_code: "#f9c97c",
  },
  {
    username: "Quim",
    name: "Trabajo",
    duration: 106,
    color_code: "#f9c97c",
  },
  {
    username: "Quim",
    name: "Ocio",
    duration: 80,
    color_code: "#f871a0",
  },
  {
    username: "Quim",
    name: "Deporte",
    duration: 30,
    color_code: "#66aaf9",
  },
];

// para el grafico de PASTEL Y CATEGORIA
let resultado_2 = RESPUESTA_2.reduce(function (
  acumulador: DataElement[],
  elemento
) {
  let elementoExistente = acumulador.find(function (item) {
    return item.name === elemento.name;
  });

  if (elementoExistente) {
    elementoExistente.duration += elemento.duration;
  } else {
    acumulador.push(elemento);
  }

  return acumulador;
},
[]);

/*********-reorganiza el array de mayor a menor-*********/
function compararMayorMenor(a: DataElement, b: DataElement) {
  return b.duration - a.duration;
}
resultado_2.sort(compararMayorMenor);

// Datos para el gráfico
let color: string[] = [];
let dataset: number[] = [];
let categories: string[] = [];
resultado_2.forEach((element) => {
  color.push(element.color_code);
  dataset.push(element.duration);
  categories.push(element.name);
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
      label: "Label",
      data: dataset,
      backgroundColor: color,
      borderColor: "#1B262C",
      borderWidth: 1,
    },
  ],
};

export const options: ChartOptions = {
  scales: {
    y: [
      {
        beginAtZero: true,
      },
    ],
  },
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      position: "right",
      labels: {
        color: undefined,
      },
    },
  },
};

function GraficoPastel() {
  return <Doughnut data={data} options={options} height={340} />;
}

export default GraficoPastel;
