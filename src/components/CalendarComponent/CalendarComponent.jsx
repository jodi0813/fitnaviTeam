import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './MyCalendar.css';

const CalendarComponent = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  // 假設固定的時段
  const availableTimes = ['10:00', '11:00', '14:00', '15:30', '20:00'];

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
    setSelectedTime(null); // 切換日期時清除時間選擇
    console.log("選擇的日期:", newDate);
  };

  const handleTimeClick = (time) => {
    setSelectedTime(time);
    console.log(`已預約：${selectedDate.toLocaleDateString()} ${time}`);
  };

  return (
    <div>
      <h2>預約日曆</h2>
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
        <div className='selectedday-area' style={{ marginTop: '20px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }} className='selectedday-time'>
            {availableTimes.map((time) => (
              <button
                key={time}
                onClick={() => handleTimeClick(time)}
                style={{
                  padding: '8px 12px',
                  backgroundColor: selectedTime === time ? '#4caf50' : '#f0f0f0',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
              >
                {time}
              </button>
            ))}
          </div>

          {selectedTime && (
            <p style={{ marginTop: '10px', color: 'green' }}>
              ✅ 已選擇：{selectedDate.toLocaleDateString()} {selectedTime}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default CalendarComponent;
