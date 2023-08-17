interface Task {
  startHour: string;
  endHour: string;
  category: string;
  color: string;
  name: string;
}

interface DayWithTasks {
  day: number;
  month: number;
  year: number;
  tasks: Task[];
}

function getDaysInYear(year: number): DayWithTasks[] {
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
}

const currentYear = new Date().getFullYear();
const daysOfThisYear = getDaysInYear(currentYear);

// Example of adding tasks to specific days
daysOfThisYear[0].tasks.push({
  startHour: "10:00 AM",
  endHour: "12:00 PM",
  category: "Work",
  color: "blue",
  name: "Meeting",
});

daysOfThisYear[15].tasks.push({
  startHour: "2:00 PM",
  endHour: "3:30 PM",
  category: "Study",
  color: "green",
  name: "Math",
});

console.log(daysOfThisYear);

const currentDate = new Date();
const currentDay = currentDate.getDate();
const currentMonth = currentDate.getMonth() + 1; // Months are 0-indexed

let currentDayIndex = -1;

for (let i = 0; i < daysOfThisYear.length; i++) {
  const day = daysOfThisYear[i];
  if (
    day.day === currentDay &&
    day.month === currentMonth &&
    day.year === currentYear
  ) {
    currentDayIndex = i;
    break;
  }
}

if (currentDayIndex !== -1) {
  console.log(
    `The current day is located at index ${currentDayIndex} in the array.`
  );
  console.log(
    daysOfThisYear[currentDayIndex].day +
      "-" +
      daysOfThisYear[currentDayIndex].month +
      "-" +
      daysOfThisYear[currentDayIndex].year
  );
} else {
  console.log("The current day was not found in the array.");
}
