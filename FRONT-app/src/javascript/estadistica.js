// estas 3 lineas de codigo hacen que el tamaño del html se adapte a la anchura del dispositivo y lo bloquee, de forma que es como si el css pusiera en el html los pixeles de la pantalla del dispositivo

const HTML = document.getElementById("html");
const ANCHO = HTML.offsetWidth;
const ALTO = HTML.offsetHeight;
HTML.style.width=""+ANCHO+"px";
HTML.style.height=""+ALTO+"px";
//------------------------------------//

/*********-hace que el tamaño de fuente siempre sea visible-*********/
const FS = document.getElementsByClassName("fs");

for (let i = 0; i < FS.length; i++) {
    const fs_Style = window.getComputedStyle(FS[i])
    FS[i].style.fontSize = ""+fs_Style.fontSize+"";
}
//------------------------------------//

/************categorias hardcodeadas GRAFICO 2********/
const RESPUESTA_1 = [
    {   
        dia: -1,
        nombre: "Libre",
        horas: 6,
        color: "#FCD8D4"
    },
    {
        dia: -1,
        nombre: "Trabajo",
        horas: 1 ,
        color: "#FDF6F0"
    },
    {
      dia: -1,
      nombre: "Ocio",
      horas: 14 ,
      color: "#F8E2CF"
    },    
    {
        dia: -1,
        nombre: "Ocio",
        horas: 12 ,
        color: "#F8E2CF"
    },
    {
        dia: -1,
        nombre: "Deporte",
        horas: 5 ,
        color: "#F5C6AA"
    },
    {   
        dia: -2,
        nombre: "Libre",
        horas: 7,
        color: "#FCD8D4"
    },
    {
        dia: -2,
        nombre: "Trabajo",
        horas: 3 ,
        color: "#FDF6F0"
    },
    {
        dia: -2,
        nombre: "Ocio",
        horas: 15 ,
        color: "#F8E2CF"
    },
    {
        dia: -2,
        nombre: "Deporte",
        horas: 4 ,
        color: "#F5C6AA"
    },
    {   
        dia: -3,
        nombre: "Libre",
        horas: 8,
        color: "#FCD8D4"
    },
    {
        dia: -3,
        nombre: "Trabajo",
        horas: 5 ,
        color: "#FDF6F0"
    },
    {
        dia: -3,
        nombre: "Ocio",
        horas: 10 ,
        color: "#F8E2CF"
    },
    {
        dia: -3,
        nombre: "Deporte",
        horas: 3 ,
        color: "#F5C6AA"
    },
    {   
        dia: -4,
        nombre: "Libre",
        horas: 5,
        color: "#FCD8D4"
    },
    {
        dia: -4,
        nombre: "Trabajo",
        horas: 6 ,
        color: "#FDF6F0"
    },
    {
        dia: -4,
        nombre: "Ocio",
        horas: 9 ,
        color: "#F8E2CF"
    },
    {
        dia: -4,
        nombre: "Deporte",
        horas: 6 ,
        color: "#F5C6AA"
    },
    {   
        dia: -5,
        nombre: "Libre",
        horas: 9,
        color: "#FCD8D4"
    },
    {
        dia: -5,
        nombre: "Trabajo",
        horas: 7 ,
        color: "#FDF6F0"
    },
    {
        dia: -5,
        nombre: "Ocio",
        horas: 11 ,
        color: "#F8E2CF"
    },
    {
        dia: -5,
        nombre: "Deporte",
        horas: 2 ,
        color: "#F5C6AA"
    },
    {   
        dia: -6,
        nombre: "Libre",
        horas: 3,
        color: "#FCD8D4"
    },
    {
        dia: -6,
        nombre: "Trabajo",
        horas: 8 ,
        color: "#FDF6F0"
    },
    {
        dia: -6,
        nombre: "Ocio",
        horas: 8 ,
        color: "#F8E2CF"
    },
    {
        dia: -6,
        nombre: "Deporte",
        horas: 7 ,
        color: "#F5C6AA"
    },
    {   
        dia: -7,
        nombre: "Libre",
        horas: 2,
        color: "#FCD8D4"
    },
    {
        dia: -7,
        nombre: "Trabajo",
        horas: 6,
        color: "#FDF6F0"
    },
    {
        dia: -7,
        nombre: "Ocio",
        horas: 15,
        color: "#F8E2CF"
    },
    {
        dia: -7,
        nombre: "Deporte",
        horas: 3,
        color: "#F5C6AA"
    }
    
]
//------------------------------------//

/************categorias hardcodeadas GRAFICO 2 Y CATEGORIAS********/
const RESPUESTA_2 = [
    {
        nombre: "Libre",
        horas: 10,
        color: "#FCD8D4"
    },
    {
      nombre: "Libre",
      horas: 20,
      color: "#FCD8D4"
  },
    {
        nombre: "Trabajo",
        horas: 36,
        color: "#FDF6F0"
    },
    {
      nombre: "Trabajo",
      horas: 106,
      color: "#FDF6F0"
  },
    {
        nombre: "Ocio",
        horas: 80,
        color: "#F8E2CF"
    },
    {
        nombre: "Deporte",
        horas: 30,
        color: "#F5C6AA"
    }
]
//------------------------------------//

/*********-hacer los graficos-*********/

// esta linea de codigo me estandariza el tamaño de fuente segun el tamaño del div del grafico
const FUENTE_GRAFICO = window.getComputedStyle(document.getElementById("grafico_barras"));

  // proceso de estandarizacion //

  // para el grafico de BARRAS
  let resultado = RESPUESTA_1.reduce(function(acumulador, elemento) {
    let elementoExistente = acumulador.find(function(item) {
      
      return item.dia === elemento.dia && item.nombre === elemento.nombre;
      
    });
  
    if (elementoExistente) {
      elementoExistente.horas += elemento.horas;
    } else {
      acumulador.push(elemento);
    }
  
    return acumulador;
  }, []);

  // para el grafico de PASTEL Y CATEGORIA
  let resultado_2 = RESPUESTA_2.reduce(function(acumulador, elemento) {
    let elementoExistente = acumulador.find(function(item) {
      return item.nombre === elemento.nombre;
    });
  
    if (elementoExistente) {
      elementoExistente.horas += elemento.horas;
    } else {
      acumulador.push(elemento);
    }
  
    return acumulador;
  }, []);
  console.log(resultado_2);
  //------------------------------------//

  //      grafico BARRAS     //  

 // Obtener un objeto con días únicos
 const diasUnicos = [...new Set(resultado.map(item => item.dia))];

// Preparar un objeto para los datos del gráfico
const data = {
  labels: diasUnicos.map(dia => `Día ${dia}`),
  datasets: resultado.reduce((datasets, item) => {
    const datasetIndex = datasets.findIndex(ds => ds.label === item.nombre);
    if (datasetIndex !== -1) {
      datasets[datasetIndex].data.push(item.horas);
      datasets[datasetIndex].backgroundColor.push(item.color);
    } else {
      datasets.push({
        label: item.nombre,
        data: [item.horas],
        backgroundColor: [item.color],
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
          color: "#000" // Cambiar color de la grilla
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
          color: "#000" // Cambiar color de la grilla
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
  return b.horas - a.horas;
}  
resultado_2.sort(compararMayorMenor);
//------------------------------------//

// Obtener el elemento canvas del HTML
const CTX = document.getElementById("grafico_pastel").getContext("2d");

// Datos para el gráfico
let color_array_2 =[];
let data_array_2 = [];
let categoria_array_2 = [];
resultado_2.forEach(element => {
    color_array_2.push(element.color);
    data_array_2.push(element.horas);
    categoria_array_2.push(element.nombre);
});

let datos_2 = {
    labels: categoria_array_2,
    datasets: [{
      data: data_array_2,
      backgroundColor: color_array_2,
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
    type: "pie",
    data: datos_2,
    options: opciones_2
  });
//------------------------------------//

/*********-reorganizar los divs segun las horas-*********/
//definiendo los divs//
const CAT_0 =document.getElementById("categoria_0");
const CAT_1 =document.getElementById("categoria_1");
const CAT_2 =document.getElementById("categoria_2");
const CAT_3 =document.getElementById("categoria_3");
//primer div//
CAT_0.style.backgroundColor=resultado_2[0].color;
CAT_0.innerText = resultado_2[0].nombre+":\n"+resultado_2[0].horas+" horas";
//segundo div//
CAT_1.style.backgroundColor=resultado_2[1].color;
CAT_1.innerText = resultado_2[1].nombre+":\n"+resultado_2[1].horas+" horas";
//tercer div//
CAT_2.style.backgroundColor=resultado_2[2].color;
CAT_2.innerText = resultado_2[2].nombre+":\n"+resultado_2[2].horas+" horas";
//cuarto div//
CAT_3.style.backgroundColor=resultado_2[3].color;
CAT_3.innerText = resultado_2[3].nombre+":\n"+resultado_2[3].horas+" horas";
//------------------------------------//



