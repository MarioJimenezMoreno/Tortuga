export interface Task {
  title: string;
  description: string;
  beggining_hour: string;
  final_hour: string;
  duration: string;
  category: string;
  date: string;
  color_code: string;
}

export interface Data {
  username: string;
  email: string;
  phone: string;
  password: string;
}

export interface CalendarProps {
  selectedDate: Date;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date>>;
}

export interface TaskCreatorProps extends ModalProps {
  handleNewTask: () => void;
  selectedDate: Date;
}

export interface ModalProps {
  isOpen: boolean;
  onOpenChange: () => void;
}

export interface DaysContainerLoaderProps {
  selectedDate: Date;
}
export interface DaysContainerProps {
  tasks: Task[];
  selectedDate: Date;
}

export interface Categories {
  username: string;
  tarea: string;
  duracion: number;
  color_code: string;
}
