import React from 'react';
import { Task } from './types';
import { differenceInMinutes, parse } from 'date-fns';
import { Card, CardBody, CardHeader, Divider } from '@nextui-org/react';
const containerHeight = 1000;

const calculatePositionAndSize = (task: Task) => {
  const startTime = parse(task.beggining_hour, 'HH:mm', new Date());
  const endTime = parse(task.final_hour, 'HH:mm', new Date());
  const totalMinutes = differenceInMinutes(endTime, startTime);

  const top = (startTime.getHours() * 60 + startTime.getMinutes()) / 1440 * containerHeight;
  const height = (totalMinutes / 1440) * containerHeight;

  return { top, height };
};

const TaskComponent: React.FC<{ task: Task }> = ({ task }) => {
  const { top, height } = calculatePositionAndSize(task);

  return (
      <Card className="flex flex-row" style={{
        position: 'static',
        top: `${top}px`,
        height: `${height}px`,
        width: '80%',        
      }} >
        <CardHeader>

        </CardHeader>
        <Divider/>
        <CardBody>
        {task.title}<span>: </span>{task.description}
        </CardBody>
      </Card>
  );
};

export default TaskComponent;