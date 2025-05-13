import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './MyCalendar.css';

const CalendarComponent = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  // 假設可預約時間
  const availableTimes = ['10:00','10:30','11:00','14:00','15:30','16:30','18:00','20:00','20:30'];

  // 日期切換邏輯
  const handleDateChange = (newDate) => {
    const isSameDate =
      selectedDate &&
      newDate.toDateString() === selectedDate.toDateString();

    if (isSameDate) {
      // 點到同一天就收起
      setSelectedDate(null);
      setSelectedTime(null);
    } else {
      // 切換新日期
      setSelectedDate(newDate);
      setSelectedTime(null);
    }
  };

  const handleTimeClick = (time) => {
    setSelectedTime(time);
    console.log(`已預約：${selectedDate.toLocaleDateString()} ${time}`);
  };

  return (
    <div className='MyCalendar'>
      <Calendar
        onChange={handleDateChange}
        value={selectedDate}
        locale="zh-CN"
        formatShortWeekday={(locale, date) =>
          ['日', '一', '二', '三', '四', '五', '六'][date.getDay()]
        }
        formatDay={(locale, date) => String(date.getDate())}
      />

      {selectedDate && (
        <div className='selectedday-area'>
          <div className='selectedday-time'>
            {availableTimes.map((time) => (
              <button
                key={time}
                onClick={() => handleTimeClick(time)}
                style={{
                  padding: '8px 12px',
                  backgroundColor: selectedTime === time ? '#FFE0B7' : '#F6F7F9',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarComponent;
