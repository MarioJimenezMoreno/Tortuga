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

const TaskCreator = ({
  handleNewTask,
  selectedDate,
  isOpen,
  onOpenChange,
}: TaskCreatorProps) => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [category, setCategory] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [startTimeValid, setStartTimeValid] = useState(false);
  const [startDate, setStartDate] = useState(selectedDate);
  const [showStartTime, setShowStartTime] = useState(false);
  const [showEndTime, setShowEndTime] = useState(false);

  const [selectedKey, setSelectedKey] = useState(
    new Set(["Choose a category"])
  );

  const handleCreateTask = () => {
    handleNewTask();
  };

  const handleInputChange = () => {
    if (
      taskName !== "" &&
      category !== "" &&
      startTime !== "" &&
      endTime !== ""
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  const handleHourSetUp = () => {
    if (startTime > endTime && endTime != "") {
      setEndTime("");
    }
    if (startTime != "") {
      setStartTimeValid(true);
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
                  value={taskName}
                  onChange={(e) => {
                    setTaskName(e.target.value);
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
                    onSelectionChange={setSelectedKey}
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
                          setShowStartTime(false), handleHourSetUp();
                        }}
                        switchToMinuteOnHourSelect
                      />
                    )}
                    {!showStartTime && (
                      <button onClick={() => setShowStartTime(true)}>
                        Select
                      </button>
                    )}
                    <span>Start time: {startTime}</span>
                  </div>
                  <div className="endHour">
                    <span>END HOUR</span>
                    {showEndTime && (
                      <TimeKeeper
                        time="23:59"
                        onChange={(newTime) => setEndTime(newTime.formatted24)}
                        hour24Mode
                        disabledTimeRange={{ from: "23:59", to: startTime }}
                        onDoneClick={() => setShowEndTime(false)}
                        switchToMinuteOnHourSelect
                      />
                    )}
                    {!showEndTime && (
                      <button
                        disabled={!startTimeValid}
                        onClick={() => setShowEndTime(true)}
                      >
                        Select
                      </button>
                    )}
                    <span>End time: {endTime}</span>
                  </div>
                </div>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date || new Date())}
                  dateFormat="dd/MM/yyyy"
                />
                <span>Date is {startDate.toLocaleDateString()}</span>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="primary"
                  onPress={() => {
                    handleCreateTask;
                    onClose;
                  }}
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
