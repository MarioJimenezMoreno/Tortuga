import { FC } from 'react';
import { Card } from '@nextui-org/react';

interface TaskAnalytics {
  username: string;
  name: string;
  duration: number;
  color_code: string;
}

const RESPUESTA_2: TaskAnalytics[] = [

  {
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
  }
];

// Reducción del array RESPUESTA_2
let resultado = RESPUESTA_2.reduce(function (acumulador: TaskAnalytics[], elemento: TaskAnalytics) {
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

// Ordenar el array resultado
function compararMayorMenor(a: TaskAnalytics, b: TaskAnalytics) {
  return b.duration - a.duration;
}
resultado.sort(compararMayorMenor);

const Categories: FC = () => {
  return (
    <div className="flex justify-between items-center">
      <Card className="flex-grow p-4 text-black text-center" id="categoria_0" style={{ backgroundColor: resultado[0].color_code }}>
        {resultado[0].name}:
        <br />
        {resultado[0].duration} horas
      </Card>
      <Card className="flex-grow p-4 ml-4 text-black text-center" id="categoria_1" style={{ backgroundColor: resultado[1].color_code }}>
        {resultado[1].name}:
        <br />
        {resultado[1].duration} horas
      </Card>
      <Card className="flex-grow p-4 ml-4 text-black text-center" id="categoria_2" style={{ backgroundColor: resultado[2].color_code }}>
        {resultado[2].name}:
        <br />
        {resultado[2].duration} horas
      </Card>
      <Card className="flex-grow p-4 ml-4 text-black text-center" id="categoria_3" style={{ backgroundColor: resultado[3].color_code }}>
        {resultado[3].name}:
        <br />
        {resultado[3].duration} horas
      </Card>
    </div>
  );
};

export default Categories;

// 
