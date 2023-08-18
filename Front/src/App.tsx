import React, { useState, useEffect } from "react";
import Header from "./Header";
import Calendar from "./Calendar";
import DaysContainer from "./DaysContainer";
import TaskCreator from "./TaskCreator";
import { Task } from './types';
import axios from 'axios'; 
import DaysContainerLoader from "./DaysContainerLoader";
import { format } from 'date-fns';
import { Button } from '@nextui-org/react'
import EditIcon from "./IconComponents/EditIcon";

const App: React.FC = () => {

  const [taskCreatorVisible, setTaskCreatorVisible] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleNewTask = () => {
    setTaskCreatorVisible(!taskCreatorVisible);    
  };
  const hardcodedTasks: Task[] = [
    {
      title: "Meeting with Team",
      description: "Discuss project progress and updates with the team.",
      beggining_hour: "10:00",
      final_hour: "11:30",
      duration: "1 hour 30 minutes",
      category: "Meeting",
      date: format(selectedDate, 'dd/MM/yyyy'),
    },
    {
      title: "Write Blog Post",
      description: "Write an informative blog post about recent industry trends.",
      beggining_hour: "14:00",
      final_hour: "16:00",
      duration: "2 hours",
      category: "Content Creation",
      date: format(selectedDate, 'dd/MM/yyyy'),
    },
    {
      title: "Gym Workout",
      description: "Hit the gym for a cardio and strength training session.",
      beggining_hour: "17:30",
      final_hour: "18:30",
      duration: "1 hour",
      category: "Health & Fitness",
      date: format(selectedDate, 'dd/MM/yyyy'),
    },
    {
      title: "Read Book",
      description: "Read chapters 5-8 of 'The Great Novel'",
      beggining_hour: "20:00",
      final_hour: "21:30",
      duration: "1 hour 30 minutes",
      category: "Personal Development",
      date: format(selectedDate, 'dd/MM/yyyy'),
    },
    {
      title: "Cook Dinner",
      description: "Prepare a healthy and delicious dinner.",
      beggining_hour: "19:00",
      final_hour: "20:00",
      duration: "1 hour",
      category: "Cooking",
      date: format(selectedDate, 'dd/MM/yyyy'),
    },
  ];

  useEffect(() => {
    axios.get(`/api/tasks?date=${format(selectedDate, 'yyyy-MM-dd')}`)
      .then(response => {
        setTasks(response.data);
      })
      .catch(error => {
        console.error('Error fetching tasks:', error);
        setTasks(hardcodedTasks)
      });
  }, []);

  return (
    <>
      <Header/>
      <Calendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
      {tasks.length > 0 ? (
        <DaysContainer tasks={tasks} selectedDate={selectedDate}/>
      ) : (
        <DaysContainerLoader selectedDate={selectedDate} />
      )}
      <Button radius="full" startContent={<EditIcon/>} size="lg" isIconOnly className="fixed newTaskButton" color="primary" onPress={handleNewTask}></Button>
      {taskCreatorVisible && (
        <>
          <div className="fader" onClick={handleNewTask}></div>
          <TaskCreator  handleNewTask={handleNewTask} selectedDate={selectedDate}/>
        </>
      )}
    </>
  );
};

export default App;
