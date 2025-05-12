import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './MyCalendar.css';

const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
    console.log("選擇的日期:", newDate);
  };

  return (
    <div>
      <h1></h1>
      <Calendar
       onChange={handleDateChange}
       value={date}
       locale="zh-CN"
       formatShortWeekday={(locale, date) =>
         ['日', '一', '二', '三', '四', '五', '六'][date.getDay()]
       }
       formatDay={(locale, date) => String(date.getDate())} 
        
      />
      {/* <p> {date.toLocaleDateString()}</p> */}
    </div>
  );
};

export default CalendarComponent;
