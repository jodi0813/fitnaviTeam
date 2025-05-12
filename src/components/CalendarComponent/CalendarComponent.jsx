import React, { useState } from 'react';
import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';

const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
    console.log("選擇的日期:", newDate);
  };

  return (
    <div>
      <h1>React 月曆</h1>
      <Calendar
        onChange={handleDateChange}
        value={date}
        locale="zh-CN"
      />
      <p>選擇的日期: {date.toLocaleDateString()}</p>
    </div>
  );
};

export default CalendarComponent;
