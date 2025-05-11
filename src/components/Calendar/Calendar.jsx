// import React, { useState, useEffect } from 'react';
import '../Calendar/Calendar.css';

function Calendar(){
    return(
        <>
        <div class="calendar">
    <div class="calendar-header">
        <button id="prevMonth"><i class="fas fa-chevron-left"></i></button>
        <div>
            <select id="monthSelect"></select>
            <select id="yearSelect"></select>
        </div>
        <button id="nextMonth"><i class="fas fa-chevron-right"></i></button>
    </div>
    <div class="calendar-days" id="dayNames"></div>
    <div class="calendar-days" id="days"></div>
</div>
        </>
    )

}


export default Calendar;
