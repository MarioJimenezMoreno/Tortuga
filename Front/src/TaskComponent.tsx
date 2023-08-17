import React from 'react';
import { Task } from './types';
import { differenceInMinutes, parse } from 'date-fns';

const containerHeight = 1000; // Altura del contenedor en píxeles

const calculatePositionAndSize = (task: Task) => {
  const startTime = parse(task.startHour, 'HH:mm', new Date());
  const endTime = parse(task.endHour, 'HH:mm', new Date());
  const totalMinutes = differenceInMinutes(endTime, startTime);

  const top = (startTime.getHours() * 60 + startTime.getMinutes()) / 1440 * containerHeight;
  const height = (totalMinutes / 1440) * containerHeight;

  return { top, height };
};

const TaskComponent: React.FC<{ task: Task }> = ({ task }) => {
  const { top, height } = calculatePositionAndSize(task);

  return (
    <div
      className="task"
      style={{
        position: 'absolute',
        top: `${top}px`,
        height: `${height}px`,
        width: '100%',
      }}
    >
      {task.title}
    </div>
  );
};

export default TaskComponent;