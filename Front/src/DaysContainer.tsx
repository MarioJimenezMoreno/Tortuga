import React from 'react';
import { format } from 'date-fns';
import TaskComponent from './TaskComponent';
import { DaysContainerProps } from './types';

const DaysContainer: React.FC<DaysContainerProps> = ({ tasks, selectedDate }) => {
  return (
    <div className="dayContainer">
    <div className="dateTitle"><p>{format(selectedDate, 'eeee, dd/MM/yyyy')}</p></div>
      {tasks.map(task => (
        <TaskComponent key={task.title} task={task} />
      ))}
    </div>
  );
};

export default DaysContainer;