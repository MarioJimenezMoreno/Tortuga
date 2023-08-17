import React from 'react';
import DayPreview from './DayPreview';

interface DayWithTasks {
  day: number;
  month: number;
  year: number;
  tasks: Task[];
}

interface Task {
  startHour: string;
  endHour: string;
  category: string;
  color: string;
  name: string;
}

const getDaysInYear = (year: number): DayWithTasks[] => {
  const daysInYear: DayWithTasks[] = [];
  for (let month = 1; month <= 12; month++) {
    const daysInMonth = new Date(year, month, 0).getDate();
    for (let day = 1; day <= daysInMonth; day++) {
      daysInYear.push({
        day: day,
        month: month,
        year: year,
        tasks: [],
      });
    }
  }
  return daysInYear;
};

const DaysContainer2: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const daysOfThisYear: DayWithTasks[] = getDaysInYear(currentYear);

  return (
    <div className="daysContainer">
      {daysOfThisYear.map((day, index) => (
        <DayPreview
          key={index}
          day={day.day}
          month={day.month}
          year={day.year}
          tasks={day.tasks}
        />
      ))}
    </div>
  );
};

export default DaysContainer2;