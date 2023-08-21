import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimeKeeper from "react-timekeeper";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import { TaskCreatorProps } from "../../types";
import { format } from "date-fns";
import axios from "axios";
import { differenceInMinutes, parse } from "date-fns";

const TaskCreator = ({
  selectedDate,
  isOpen,
  onOpenChange,
  onSuccess,
}: TaskCreatorProps) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [category, setCategory] = useState("");
  const [begginingHour, setStartTime] = useState("");
  const [finalHour, setEndTime] = useState("");
  const [date, setDate] = useState(selectedDate);
  const [colorCode, setColorCode] = useState("");

  const [isFormValid, setIsFormValid] = useState(false);
  const [showStartTime, setShowStartTime] = useState(false);
  const [showEndTime, setShowEndTime] = useState(false);

  const [selectedKey, setSelectedKey] = useState(
    new Set(["Choose a category"])
  );

  const handleCreateTask = () => {
    const startTime = parse(begginingHour, "HH:mm", new Date());
    const endTime = parse(finalHour, "HH:mm", new Date());
    const totalMinutes = differenceInMinutes(endTime, startTime);

    switch (category) {
      case "work":
        setColorCode("bg-success-300");
        break;
      case "entertainment":
        setColorCode("bg-warning-300");
        break;
      case "cook":
        setColorCode("bg-danger-300");
        break;
      case "sport":
        setColorCode("bg-primary-300");
        break;
    }

    const newTask = {
      title: taskTitle,
      description: taskDescription,
      beggining_hour: begginingHour,
      final_hour: finalHour,
      duration: totalMinutes,
      category: category,
      date: format(date, "yyyy-MM-dd"),
      color_code: colorCode,
    };
    console.log(newTask);
    axios
      .post(`http://localhost:8080//api/tasks`, newTask)
      .then((response) => {
        console.log("Tarea creada:", response.data);
        onSuccess();
      })
      .catch((error) => {
        console.error("Error al crear la tarea:", error);
        onSuccess();
      });
  };

  const handleInputChange = () => {
    if (
      taskTitle !== "" &&
      taskDescription !== "" &&
      category !== "" &&
      begginingHour !== "" &&
      finalHour !== ""
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  const handleHourSetUp = () => {
    if (begginingHour > finalHour && finalHour != "") {
      setEndTime("");
    }
  };

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Add new task
              </ModalHeader>
              <ModalBody>
                <Input
                  isRequired
                  autoFocus
                  label="Title"
                  placeholder="Enter task title"
                  type="text"
                  variant="bordered"
                  value={taskTitle}
                  onChange={(e) => {
                    setTaskTitle(e.target.value);
                    handleInputChange();
                  }}
                />
                <Input
                  label="Description"
                  placeholder="Enter a short description"
                  type="text"
                  variant="bordered"
                  onChange={(e) => {
                    setTaskDescription(e.target.value);
                    handleInputChange();
                  }}
                />
                <Dropdown>
                  <DropdownTrigger>
                    <Button variant="bordered" className="capitalize">
                      {selectedKey}
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu
                    variant="flat"
                    aria-label="Single selection actions"
                    disallowEmptySelection
                    selectionMode="single"
                    selectedKeys={selectedKey}
                    onSelectionChange={(newSelectedKeys) => {
                      const selectedKeyArray = Array.from(newSelectedKeys);
                      //@ts-ignore
                      setSelectedKey(newSelectedKeys);
                      //@ts-ignore
                      setCategory(selectedKeyArray[0]);
                      handleInputChange();
                    }}
                  >
                    <DropdownItem key="work">Work</DropdownItem>
                    <DropdownItem key="sport">Sport</DropdownItem>
                    <DropdownItem key="entertainment">
                      Entertainment
                    </DropdownItem>
                    <DropdownItem key="cook">Cook</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
                <div className="hourContainer">
                  <div className="startHour">
                    <span>INITIAL HOUR</span>
                    {showStartTime && (
                      <TimeKeeper
                        time="00:00"
                        onChange={(newTime) =>
                          setStartTime(newTime.formatted24)
                        }
                        hour24Mode
                        onDoneClick={() => {
                          setShowStartTime(false),
                            handleHourSetUp(),
                            handleInputChange();
                        }}
                        switchToMinuteOnHourSelect
                      />
                    )}
                    {!showStartTime && (
                      <button onClick={() => setShowStartTime(true)}>
                        Select
                      </button>
                    )}
                    <span>Start time: {begginingHour}</span>
                  </div>
                  <div className="endHour">
                    <span>END HOUR</span>
                    {showEndTime && (
                      <TimeKeeper
                        time="23:59"
                        onChange={(newTime) => setEndTime(newTime.formatted24)}
                        hour24Mode
                        disabledTimeRange={{ from: "23:59", to: begginingHour }}
                        onDoneClick={() => {
                          setShowEndTime(false), handleInputChange();
                        }}
                        switchToMinuteOnHourSelect
                      />
                    )}
                    {!showEndTime && (
                      <button
                        // disabled={!startTimeValid}
                        onClick={() => setShowEndTime(true)}
                      >
                        Select
                      </button>
                    )}
                    <span>End time: {finalHour}</span>
                  </div>
                </div>
                <DatePicker
                  selected={date}
                  onChange={(date) => setDate(date || new Date())}
                  dateFormat="dd/MM/yyyy"
                />
                <span>Date is {date.toLocaleDateString()}</span>
              </ModalBody>
              <ModalFooter>
                <Button
                  onClick={() => {
                    handleCreateTask();
                    onClose();
                  }}
                  color="primary"
                  disabled={!isFormValid}
                >
                  Create Task
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default TaskCreator;
