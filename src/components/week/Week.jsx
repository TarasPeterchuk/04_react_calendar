import React from 'react';
import Day from '../day/Day';
import './week.scss';

const Week = ({
  weekDates,
  events,
  deleteEvent,
  fetchEvents,
  currentDate,
  appState,
  setAppState,
}) => {
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
            deleteEvent={deleteEvent}
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
