import React from 'react';
import { Task } from '../../types';
import { differenceInMinutes, parse } from 'date-fns';
import { Card, CardBody, Divider } from '@nextui-org/react';

const containerHeight = 1200;

const calculatePositionAndSize = (task: Task) => {
  const startTime = parse(task.beggining_hour, 'HH:mm', new Date());
  const endTime = parse(task.final_hour, 'HH:mm', new Date());
  const totalMinutes = differenceInMinutes(endTime, startTime);

  const top = (startTime.getHours() * 60 + startTime.getMinutes()) / 1440 * containerHeight;
  const height = (totalMinutes / 1440) * containerHeight;

  return { top, height };
};

const TaskComponent: React.FC<{task:Task, position:"absolute" | "static"}> = ({task,position}) => {

  const { top, height } = calculatePositionAndSize(task);

  const style: React.CSSProperties = {
    position: position,
    top: position ? `${top}px` : '0',
    minHeight: `${height}px`,
    maxHeight: "auto",
    backgroundColor: task.color_code,
    width: '80%',
    marginInline: '5px' 
  };
  
  return (
      <Card fullWidth style={style}>
        <CardBody className='flex flex-row gap-2 p-2'>
        <div className="flex flex-col text-xs justify-between">
        <p>{task.beggining_hour}</p>        
        <p>{task.final_hour}</p> 
        </div>
        <Divider className='h-auto' orientation='vertical'/>
        <p className='font-bold'>{task.title}:</p>{task.description}
        </CardBody>
      </Card>
  );
};

export default TaskComponent;