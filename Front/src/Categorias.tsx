/**/
import { FC } from 'react';
import { Card, CardBody } from '@nextui-org/react';

interface Task {
  username: string;
  tarea: string;
  duracion: number;
  color_code: string;
}

const RESPUESTA_2: Task[] = [

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

// Reducción del array RESPUESTA_2
let resultado_2 = RESPUESTA_2.reduce(function (acumulador: Task[], elemento: Task) {
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

// Ordenar el array resultado_2
function compararMayorMenor(a: Task, b: Task) {
  return b.duracion - a.duracion;
}
resultado_2.sort(compararMayorMenor);

const Categories: FC = () => {
  return (
    <div className="flex justify-between items-center">
      <Card className="flex-grow p-4 text-black text-center" id="categoria_0" style={{ backgroundColor: resultado_2[0].color_code }}>
        {resultado_2[0].tarea}:
        <br />
        {resultado_2[0].duracion} horas
      </Card>
      <Card className="flex-grow p-4 ml-4 text-black text-center" id="categoria_1" style={{ backgroundColor: resultado_2[1].color_code }}>
        {resultado_2[1].tarea}:
        <br />
        {resultado_2[1].duracion} horas
      </Card>
      <Card className="flex-grow p-4 ml-4 text-black text-center" id="categoria_2" style={{ backgroundColor: resultado_2[2].color_code }}>
        {resultado_2[2].tarea}:
        <br />
        {resultado_2[2].duracion} horas
      </Card>
      <Card className="flex-grow p-4 ml-4 text-black text-center" id="categoria_3" style={{ backgroundColor: resultado_2[3].color_code }}>
        {resultado_2[3].tarea}:
        <br />
        {resultado_2[3].duracion} horas
      </Card>
    </div>
  );
};

export default Categories;

// 
