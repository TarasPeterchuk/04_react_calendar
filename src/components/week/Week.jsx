import React from 'react';
import Day from '../day/Day';
import './week.scss';
import { generateWeekRange } from '../../utils/dateUtils.js';

const Week = ({ events, fetchEvents, currentDate, appState, setAppState }) => {
  const weekDates = generateWeekRange(appState.currentStartWeekDate);
  return (
    <div className="calendar__week">
      {weekDates.map((dayStart) => {
        const dayEnd = new Date(dayStart.getTime()).setHours(
          dayStart.getHours() + 24
        );
        const dayEvents = events.filter(
          (event) => event.dateFrom > dayStart && event.dateTo < dayEnd
        );
        return (
          <Day
            key={dayStart.getDate()}
            weekDay={dayStart}
            dataDay={dayStart.getDate()}
            dayEvents={dayEvents}
            fetchEvents={fetchEvents}
            currentDate={currentDate}
            appState={appState}
            setAppState={setAppState}
          />
        );
      })}
    </div>
  );
};

export default Week;
