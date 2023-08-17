import { useState } from 'react';
import TimeKeeper from 'react-timekeeper';

function TimePickerComponent() {
    const [selectedTime, setSelectedTime] = useState('00:00');
    
    const handleTimeChange = (newTime: { formatted24: string }) => {
      setSelectedTime(newTime.formatted24);
    };
  
    return (
      <div>
        <TimeKeeper
          time={selectedTime}
          onChange={handleTimeChange}
        />
        <div>
          Selected Time: {selectedTime}
        </div>
      </div>
    );
  }
  
  export default TimePickerComponent;