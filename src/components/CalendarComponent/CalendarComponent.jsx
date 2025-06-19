import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./MyCalendar.css";

const availableTimesByDate = {
  "2025-05-25": ["10:00", "14:00", "20:00"],
  "2025-05-26": ["09:00", "11:30", "15:30", "18:00"],
  "2025-05-27": ["10:00", "10:30", "11:00"],
  "2025-05-28": ["10:30", "11:00"],
  "2025-06-15": ["10:00", "10:30", "11:00", "17:00", "18:30"],
  "2025-06-20": ["09:00", "11:30", "15:30", "18:00", "18:30", "20:00"],
  "2025-06-22": ["10:00",  "15:30", "18:00",  "20:00"],
  "2025-06-29": ["09:00",  "15:30", "18:00",  "20:00"],
};

const CalendarComponent = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleDateChange = (newDate) => {
    const isSameDate =
      selectedDate && newDate.toDateString() === selectedDate.toDateString();

    if (isSameDate) {
      setSelectedDate(null);
      setSelectedTime(null);
    } else {
      setSelectedDate(newDate);
      setSelectedTime(null);
    }
  };

  const handleTimeClick = (time) => {
    setSelectedTime(time);
    console.log(`已預約：${selectedDate.toLocaleDateString()} ${time}`);
  };

  // 取得選中日期（本地 "YYYY-MM-DD"）
  const dateKey = selectedDate ? selectedDate.toLocaleDateString("sv-SE") : "";
  const availableTimes = dateKey ? availableTimesByDate[dateKey] || [] : [];

  return (
    <div className="MyCalendar">
      <Calendar
        onChange={handleDateChange}
        value={selectedDate}
        locale="zh-CN"
        formatShortWeekday={(locale, date) =>
          ["日", "一", "二", "三", "四", "五", "六"][date.getDay()]
        }
        formatDay={(locale, date) => String(date.getDate())}
      />

      {selectedDate && (
        <div className="selectedday-area">
          {availableTimes.length > 0 ? (
            <div className="selectedday-time">
              {availableTimes.map((time) => (
                <button
                  key={time}
                  onClick={() => handleTimeClick(time)}
                  style={{
                    padding: "8px 8px",
                    backgroundColor:
                      selectedTime === time ? "#FFE0B7" : "#F6F7F9",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    cursor: "pointer",
                    marginRight: "8px",
                    marginBottom: "8px",
                  }}
                >
                  {time}
                </button>
              ))}
            </div>
          ) : (
            <p>該日期無可預約時間</p>
          )}
        </div>
      )}
    </div>
  );
};

export default CalendarComponent;
