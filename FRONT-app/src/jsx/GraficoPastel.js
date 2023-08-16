import React from 'react';
import { Doughnut } from  "react-chartjs-2";

/************categorias hardcodeadas GRAFICO 2 Y CATEGORIAS********/
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
  //      grafico PASTEL y CATEGORIAS     //  

/*********-reorganiza el array de mayor a menor-*********/
function compararMayorMenor(a, b) {
    return b.duracion - a.duracion;
  }
  resultado_2.sort(compararMayorMenor);
  //------------------------------------//
// Datos para el gráfico
let color_array_2 = [];
let data_array_2 = [];
let categoria_array_2 = [];
resultado_2.forEach(element => {
  color_array_2.push(element.color_code);
  data_array_2.push(element.duracion);
  categoria_array_2.push(element.tarea);
});

let datos_2 = {
  labels: categoria_array_2,
  datasets: [{
    data: data_array_2,
    backgroundColor: color_array_2,
    borderWidth: 1,
    borderColor: "#1B262C"
  }]
};

let opciones_2 = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        
        position: "right",
        labels: {
          color: "#000",
         /*  font: {
            size: parseFloat(FUENTE_GRAFICO.fontSize)
          }, */
        }
      }
    },
  };

function Pastel(){
    return <Doughnut data={datos_2} options={opciones_2}/>
}
export default Pastel();