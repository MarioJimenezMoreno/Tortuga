
import { Doughnut } from 'react-chartjs-2';
import { ArcElement, Tooltip, Legend, Chart } from 'chart.js';
import axios from "axios";
import { useEffect, useState } from 'react';
import { ChartData, ChartOptions, DataElement } from '../../types';

Chart.register(ArcElement, Tooltip, Legend);

const GraficoPastel = () => {

  const [tasks, setTasks] = useState<DataElement[]>([]);
  const [colors, setColors] = useState<string[]>([]);
  const [datasets, setDatasets] = useState<number[]>([]);
  const [categories, setCategories] = useState<string[]>([]);

  const hardcodedResponse = [{
    username: "Quim",
    name: "Libre",
    duration: 10,
    color_code: "#FCD8D4"
  },
  {
    username: "Quim",
    name: "Libre",
    duration: 20,
    color_code: "#FCD8D4"
  },
  {
    username: "Quim",
    name: "Trabajo",
    duration: 36,
    color_code: "#FDF6F0"
  },
  {
    username: "Quim",
    name: "Trabajo",
    duration: 106,
    color_code: "#FDF6F0"
  },
  {
    username: "Quim",
    name: "Ocio",
    duration: 80,
    color_code: "#F8E2CF"
  },
  {
    username: "Quim",
    name: "Deporte",
    duration: 30,
    color_code: "#F5C6AA"
  }];
  
  function compararMayorMenor(a: DataElement, b: DataElement) {
    return b.duration - a.duration;
  }
  
  let resultado = tasks.reduce(function (acumulador: DataElement[], elemento) {
    let elementoExistente = acumulador.find(function (item) {
      return item.name === elemento.name;
    });
  
    if (elementoExistente) {
      elementoExistente.duration += elemento.duration;
    } else {
      acumulador.push(elemento);
    }
  
    return acumulador;
  }, []);

  resultado.sort(compararMayorMenor);
  
  // Faltaría implementar setColors setDatasets setCategories
  resultado.forEach(element => {
    colors.push(element.color_code);
    datasets.push(element.duration);
    categories.push(element.name);
  });

  const fetchTasks = () => {
  axios
.get('http://localhost:8080/api/stats', {
  params: {
    // Aquí tus parámetros de consulta
    username: "QUIM"//MODIFICAR
  }
})
  .then(response => {
    // Manejar la respuesta del servidor
    console.log('Respuesta:', response.data);
    setTasks(response.data);
  })
  .catch(error => {
    // Manejar errores
    console.error('Error:', error);
    setTasks(hardcodedResponse)
    console.log("Hardcoded: "+ tasks)
  });
};

  const data: ChartData = {
    labels: categories,
    datasets: [
      {
        label: 'Label',
        data: datasets,
        backgroundColor: colors,
        borderColor: "#1B262C",
        borderWidth: 1,
      },
    ],
  };
  
  const options: ChartOptions = {
    scales: {
      y: [{
        beginAtZero: true // no existe pero si funciona ok
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

  useEffect(() => {
    setTasks([]);
    fetchTasks();
  }, []);

  
  return(
  <Doughnut data={data} options={options} height={340} />
  )
}

export default GraficoPastel;
