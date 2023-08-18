

  //------------------------------------//
  import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  
  // Definir la interfaz para los elementos en RESPUESTA_1
  interface RespuestaItem {
    username: string;
    dia: number;
    tarea: string;
    duracion: number;
    color_code: string;
  }
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  const RESPUESTA_1: RespuestaItem[] = [
      {
        username: "Quim",
        dia: -1,
        tarea: "Libre",
        duracion: 6,
        color_code: "#FCD8D4"
      },
      {
        username: "Quim",
        dia: -1,
        tarea: "Trabajo",
        duracion: 1,
        color_code: "#FDF6F0"
      },
      {
        username: "Quim",
        dia: -1,
        tarea: "Ocio",
        duracion: 14,
        color_code: "#F8E2CF"
      },
      {
        username: "Quim",
        dia: -1,
        tarea: "Ocio",
        duracion: 12,
        color_code: "#F8E2CF"
      },
      {
        username: "Quim",
        dia: -1,
        tarea: "Deporte",
        duracion: 5,
        color_code: "#F5C6AA"
      },
      {
        username: "Quim",
        dia: -2,
        tarea: "Libre",
        duracion: 7,
        color_code: "#FCD8D4"
      },
      {
        username: "Quim",
        dia: -2,
        tarea: "Trabajo",
        duracion: 3,
        color_code: "#FDF6F0"
      },
      {
        username: "Quim",
        dia: -2,
        tarea: "Ocio",
        duracion: 15,
        color_code: "#F8E2CF"
      },
      {
        username: "Quim",
        dia: -2,
        tarea: "Deporte",
        duracion: 4,
        color_code: "#F5C6AA"
      },
      {
        username: "Quim",
        dia: -3,
        tarea: "Libre",
        duracion: 8,
        color_code: "#FCD8D4"
      },
      {
        username: "Quim",
        dia: -3,
        tarea: "Trabajo",
        duracion: 5,
        color_code: "#FDF6F0"
      },
      {
        username: "Quim",
        dia: -3,
        tarea: "Ocio",
        duracion: 10,
        color_code: "#F8E2CF"
      },
      {
        username: "Quim",
        dia: -3,
        tarea: "Deporte",
        duracion: 3,
        color_code: "#F5C6AA"
      },
      {
        username: "Quim",
        dia: -4,
        tarea: "Libre",
        duracion: 5,
        color_code: "#FCD8D4"
      },
      {
        username: "Quim",
        dia: -4,
        tarea: "Trabajo",
        duracion: 6,
        color_code: "#FDF6F0"
      },
      {
        username: "Quim",
        dia: -4,
        tarea: "Ocio",
        duracion: 9,
        color_code: "#F8E2CF"
      },
      {
        username: "Quim",
        dia: -4,
        tarea: "Deporte",
        duracion: 6,
        color_code: "#F5C6AA"
      },
      {
        username: "Quim",
        dia: -5,
        tarea: "Libre",
        duracion: 9,
        color_code: "#FCD8D4"
      },
      {
        username: "Quim",
        dia: -5,
        tarea: "Trabajo",
        duracion: 7,
        color_code: "#FDF6F0"
      },
      {
        username: "Quim",
        dia: -5,
        tarea: "Ocio",
        duracion: 11,
        color_code: "#F8E2CF"
      },
      {
        username: "Quim",
        dia: -5,
        tarea: "Deporte",
        duracion: 2,
        color_code: "#F5C6AA"
      },
      {
        username: "Quim",
        dia: -6,
        tarea: "Libre",
        duracion: 3,
        color_code: "#FCD8D4"
      },
      {
        username: "Quim",
        dia: -6,
        tarea: "Trabajo",
        duracion: 8,
        color_code: "#FDF6F0"
      },
      {
        username: "Quim",
        dia: -6,
        tarea: "Ocio",
        duracion: 8,
        color_code: "#F8E2CF"
      },
      {
        username: "Quim",
        dia: -6,
        tarea: "Deporte",
        duracion: 7,
        color_code: "#F5C6AA"
      },
      {
        username: "Quim",
        dia: -7,
        tarea: "Libre",
        duracion: 2,
        color_code: "#FCD8D4"
      },
      {
        username: "Quim",
        dia: -7,
        tarea: "Trabajo",
        duracion: 6,
        color_code: "#FDF6F0"
      },
      {
        username: "Quim",
        dia: -7,
        tarea: "Ocio",
        duracion: 15,
        color_code: "#F8E2CF"
      },
      {
        username: "Quim",
        dia: -7,
        tarea: "Deporte",
        duracion: 3,
        color_code: "#F5C6AA"
      }
    
  ];
  
  //------------------------------------//
  
  // para el grafico de BARRAS
  let resultado: RespuestaItem[] = RESPUESTA_1.reduce(function (acumulador, elemento) {
    let elementoExistente = acumulador.find(function (item) {
      return item.dia === elemento.dia && item.tarea === elemento.tarea;
    });
  
    if (elementoExistente) {
      elementoExistente.duracion += elemento.duracion;
    } else {
      acumulador.push(elemento);
    }
  
    return acumulador;
  }, []);
  
  //------------------------------------//
  
  // Obtener un objeto con días únicos
  const diasUnicos: number[] = [...new Set(resultado.map(item => item.dia))];
  
  // Preparar un objeto para los datos del gráfico
  export const data = {
    labels: diasUnicos.map(dia => `Día ${dia}`),
    datasets: resultado.reduce((datasets, item) => {
      const datasetIndex = datasets.findIndex(ds => ds.label === item.tarea);
      if (datasetIndex !== -1) {
        datasets[datasetIndex].data.push(item.duracion);
        datasets[datasetIndex].backgroundColor.push(item.color_code);
      } else {
        datasets.push({
          label: item.tarea,
          data: [item.duracion],
          backgroundColor: [item.color_code],
        });
      }
      return datasets;
    }, [] as { label: string; data: number[]; backgroundColor: string[] }[]),
  };
  
  // Configuración del gráfico
  export const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: '#fff',
        },
      },
    },
    scales: {
      x: {
        stacked: true,
        ticks: {
          color: '#fff', // Cambiar color del eje Y
        },
        grid: {
          /* color: "#000" // Cambiar color de la grilla */
        },
      },
      y: {
        stacked: true,
        beginAtZero: true,
        max: 24,
  
        ticks: {
          stepSize: 6,
          color: '#fff', // Cambiar color del eje Y
        },
        grid: {
          /* color: "#000" // Cambiar color de la grilla */
        },
      },
    },
  };
  
  function GraficoBarras() {
    return <div><Bar options={options} data={data} height={340} /></div>
    
  }
  
  export default GraficoBarras;
  