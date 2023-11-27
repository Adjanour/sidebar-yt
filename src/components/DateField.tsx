// import React, { useState } from 'react';
// import type { RadioChangeEvent } from 'antd';
// import { DatePicker, Radio, Space } from 'antd';
// import type { SizeType } from 'antd/es/config-provider/SizeContext';

// const { RangePicker } = DatePicker;

// const DateField: React.FC = () => {
//   const [size, setSize] = useState<SizeType>('middle');

//   const handleSizeChange = (e: RadioChangeEvent) => {
//     setSize(e.target.value);
//   };
//   const data = ((e: any)=>{
//     console.log(e.target.value);
//   })

//   return (
    
//       <DatePicker size={size} style={{ width: '100%' }} showNow={true} onClick={data}  />
    
//   );
// };

// export default DateField;

// import React, { useState } from 'react';
// import { DatePicker } from 'antd';
// import 'antd/dist/antd.css'; // Import Ant Design styles

// const DateField = () => {
//   const [selectedDate, setSelectedDate] = useState(null);

//   const handleDateChange = (date, dateString) => {
//     // Handle the selected date
//     console.log('Selected Date:', dateString);
//     setSelectedDate(date);
//   };

//   return (
//     <div>
//       <h1>Date Picker Example</h1>
//       <DatePicker onChange={handleDateChange} />
//       {/* You can use selectedDate in your application as needed */}
//     </div>
//   );
// };

// export default DateField;

import React, { useState, ChangeEvent } from 'react';
import { DatePicker, Space } from 'antd';
import { Moment } from 'moment'; // Import Moment type

const { RangePicker } = DatePicker;

interface DatePickerComponentProps {
  onChange?: (date: Moment | null, dateString: string) => void;
}

const DateField: React.FC<DatePickerComponentProps> = ({ onChange }) => {
  const [selectedDate, setSelectedDate] = useState<Moment | null>(null);

  const handleDateChange = (date: Moment | null, dateString: string) => {
    // Handle the selected date
    console.log('Selected Date:', dateString);
    setSelectedDate(date);

    // Propagate the change to the parent component if an onChange callback is provided
    if (onChange) {
      onChange(date, dateString);
    }
  };

  return (
      <DatePicker />
  );
};

export default DateField;
