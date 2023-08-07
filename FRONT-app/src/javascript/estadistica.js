// estas 3 lineas de codigo hacen que el tamaño del html se adapte a la anchura del dispositivo y lo bloquee, de forma que es como si el css pusiera en el html los pixeles de la pantalla del dispositivo

const HTML = document.getElementById("html");
const ANCHO = HTML.offsetWidth;
const ALTO = HTML.offsetHeight;
HTML.style.width = "" + ANCHO + "px";
HTML.style.height = "" + ALTO + "px";
//------------------------------------//

/*********-fetch-*********/
async function fetching() {
const request = await fetch('api/login', {
  method: 'GET',
  headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
  },
  body: JSON.stringify( fetch_data )
});
}
fetching();
//------------------------------------//

/*********-hace que el tamaño de fuente siempre sea visible-*********/
const FS = document.getElementsByClassName("fs");
const FS2 = document.getElementsByClassName("fs2");

for (let i = 0; i < FS.length; i++) {
  const fs_Style = window.getComputedStyle(FS[i])
  FS[i].style.fontSize = "" + fs_Style.fontSize + "";
  
}
for (let i = 0; i < FS2.length; i++) {
  const fs_Style = window.getComputedStyle(FS2[i])
  FS2[i].style.fontSize = "" + fs_Style.fontSize + "";
  
}
//------------------------------------//

/************categorias hardcodeadas GRAFICO 2********/
const RESPUESTA_1 = [
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

]
//------------------------------------//

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

/*********-hacer los graficos-*********/

// esta linea de codigo me estandariza el tamaño de fuente segun el tamaño del div del grafico
const FUENTE_GRAFICO = window.getComputedStyle(document.getElementById("grafico_barras"));

// proceso de estandarizacion //

// para el grafico de BARRAS
let resultado = RESPUESTA_1.reduce(function (acumulador, elemento) {
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

//      grafico BARRAS     //  

// Obtener un objeto con días únicos
const diasUnicos = [...new Set(resultado.map(item => item.dia))];

// Preparar un objeto para los datos del gráfico
const data = {
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
  },
    []),
};

// Configuración del gráfico
const config = {
  type: 'bar',
  data: data,
  options: {
    plugins: {
      legend: {
        labels: {
          color: "#000",
          font: {
            size: parseFloat(FUENTE_GRAFICO.fontSize)
          },
        }
      }
    },
    scales: {
      x: {
        stacked: true,
        ticks: {
          color: "#000", // Cambiar color del eje Y
          font: {
            size: parseFloat(FUENTE_GRAFICO.fontSize), // Cambiar tamaño de fuente del eje Y
          },
        },
        grid: {
          /* color: "#000" // Cambiar color de la grilla */
        },
      },
      y: {
        stacked: true,
        beginAtZero: true,
        ticks: {
          color: "#000", // Cambiar color del eje Y
          font: {
            size: parseFloat(FUENTE_GRAFICO.fontSize), // Cambiar tamaño de fuente del eje Y
          },
        },
        grid: {
          /* color: "#000" // Cambiar color de la grilla */
        },
      },
    },
    layout: {
      height: {

      },
    },
  },
};

// CREAR grafico de BARRAS //
const GRAFICO_BARRAS = document.getElementById("grafico_barras").getContext("2d");
new Chart(GRAFICO_BARRAS, config);

//      grafico PASTEL y CATEGORIAS     //  

/*********-reorganiza el array de mayor a menor-*********/
function compararMayorMenor(a, b) {
  return b.duracion - a.duracion;
}
resultado_2.sort(compararMayorMenor);
//------------------------------------//

// Obtener el elemento canvas del HTML
const CTX = document.getElementById("grafico_pastel").getContext("2d");

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

// Opciones de personalización
let opciones_2 = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "right",
      labels: {
        color: "#000",
        font: {
          size: parseFloat(FUENTE_GRAFICO.fontSize)
        },
      }
    }
  }
};

// Crear el gráfico PASTEL
let grafico_pastel = new Chart(CTX, {
  type: "doughnut",
  data: datos_2,
  options: opciones_2
});
//------------------------------------//

/*********-reorganizar los divs segun las horas-*********/
//definiendo los divs//
const CAT_0 = document.getElementById("categoria_0");
const CAT_1 = document.getElementById("categoria_1");
const CAT_2 = document.getElementById("categoria_2");
const CAT_3 = document.getElementById("categoria_3");
//primer div//
CAT_0.style.backgroundColor = resultado_2[0].color_code;
CAT_0.innerText = resultado_2[0].tarea + ":\n" + resultado_2[0].duracion + " horas";
//segundo div//
CAT_1.style.backgroundColor = resultado_2[1].color_code;
CAT_1.innerText = resultado_2[1].tarea + ":\n" + resultado_2[1].duracion + " horas";
//tercer div//
CAT_2.style.backgroundColor = resultado_2[2].color_code;
CAT_2.innerText = resultado_2[2].tarea + ":\n" + resultado_2[2].duracion + " horas";
//cuarto div//
CAT_3.style.backgroundColor = resultado_2[3].color_code;
CAT_3.innerText = resultado_2[3].tarea + ":\n" + resultado_2[3].duracion + " horas";
//------------------------------------//



