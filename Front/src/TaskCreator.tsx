
import React, { useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import TimeKeeper from 'react-timekeeper';
import {TaskCreatorProps} from './types'

const TaskCreator: React.FC<TaskCreatorProps> = ({handleNewTask, selectedDate}) => {

    const [taskName, setTaskName] = useState("");
    const [category, setCategory] = useState("");
    const [startTime, setStartTime] = useState("")
    const [endTime, setEndTime] = useState("")
    const [isFormValid, setIsFormValid] = useState(false);
    const [startTimeValid, setStartTimeValid] = useState(false);
    const [startDate, setStartDate] = useState(selectedDate);
    const [showStartTime, setShowStartTime] = useState(false)
    const [showEndTime, setShowEndTime] = useState(false)

    const handleCreateTask = () => {
        handleNewTask();
    };
    
    const handleInputChange = () => {
      if (taskName !== "" && category !== "" && startTime !== "" && endTime !== "") {
        setIsFormValid(true);
      } else {
        setIsFormValid(false);
      }
    };
    
    const handleHourSetUp = () => {
      if(startTime > endTime && endTime != ""){
        setEndTime("");
      }
      if(startTime != "") {
        setStartTimeValid(true);
      }
    }

      return (
        <div className="taskCreatorContainer">
          <div className="taskCreatorWindow">
            <h2>New Task</h2>
            <div className="nameContainer">
              <span>NAME</span>
              <input
                type="text"
                name="taskName"
                className="taskNameInput"
                maxLength={10}
                required
                value={taskName}
                onChange={(e) => {
                  setTaskName(e.target.value);
                  handleInputChange();
                }}
              />
              </div>
              <div className="categoryContainer">
              <span>CATEGORY</span>
              <select
                name="category"
                className="categoryInput"
                required
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                  handleInputChange();
                }}
              >
            <option value="">Selecciona una categoría</option>
            <option value="Ocio">Ocio</option>
            <option value="Estudio">Estudio</option>
            <option value="Trabajo">Trabajo</option>
              </select>
              </div>
              <div className="hourContainer">
              <div className="startHour">
              <span>INITIAL HOUR</span>
            {showStartTime &&
                <TimeKeeper
                    time = '00:00'
                    onChange={(newTime) => setStartTime(newTime.formatted24)}
                    hour24Mode
                    onDoneClick={() => {setShowStartTime(false), handleHourSetUp()}}
                    switchToMinuteOnHourSelect
                />
            }
                        {!showStartTime &&
                <button onClick={() => setShowStartTime(true) }>Select</button>
            }
            <span>Start time: {startTime}</span>

        </div>
        <div className="endHour">
            <span>END HOUR</span>
            {showEndTime &&
                <TimeKeeper
                    time = '23:59'
                    onChange={(newTime) => setEndTime(newTime.formatted24)}
                    hour24Mode
                    disabledTimeRange={{from: '23:59', to: startTime}}
                    onDoneClick={() => setShowEndTime(false)}
                    switchToMinuteOnHourSelect
                />
            }
             {!showEndTime &&
                <button disabled={!startTimeValid} onClick={() => setShowEndTime(true)}>Select</button>
            }
            <span>End time: {endTime}</span>
           
        </div>
        </div>
        <div className="datePickerContainer">
        <span>Pick a date:</span>
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date || new Date())}  dateFormat="dd/MM/yyyy" />
              <span>Date is {startDate.toLocaleDateString()}</span>
              </div>
              <button
                type="button"
                className="createTaskBtn"
                disabled={!isFormValid}
                onClick={handleCreateTask}
              >
                Create
              </button>
          </div>
        </div>
      );
    };

export default TaskCreator;