import React from 'react';
import { format } from 'date-fns';
import TaskComponent from './TaskComponent';
import { DaysContainerProps } from './types';
import { Switch } from '@nextui-org/react'

const DaysContainer: React.FC<DaysContainerProps> = ({ tasks, selectedDate }) => {

  const [position, setPosition] = React.useState<"absolute" | "static">("static");

  const handlePositionChange = () => {
    setPosition(prevPosition => prevPosition === "absolute" ? "static" : "absolute");
  };

  return (
    <div className="dayContainer sticky">
    <div className="dateTitle flex justify-between"><p>{format(selectedDate, 'eeee, dd/MM/yyyy')}</p><Switch
      onChange={handlePositionChange}
      size="sm"
      color="primary"
      ></Switch>
      </div>
      {tasks.map(task => (
        <TaskComponent key={task.title} task={task} position={position} />
      ))}
    </div>
  );
};

export default DaysContainer;