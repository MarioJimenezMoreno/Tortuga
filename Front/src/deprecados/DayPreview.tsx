import React from 'react';

interface Task {
  startHour: string;
  endHour: string;
  category: string;
  color: string;
  name: string;
}

interface DayPreviewProps {
  day: number;
  month: number;
  year: number;
  tasks: Task[];
}

const DayPreview: React.FC<DayPreviewProps> = ({ day, month, year, tasks }) => {
  return (
    <div className="dayPreview">
      <h3 className="dayHeader">{`${day}/${month}/${year}`}</h3>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default DayPreview;