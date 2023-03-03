import React from 'react';
import Hour from '../hour/Hour';
import RedLineHour from '../redLineHour/RedLineHour';

const Day = ({
  weekDay,
  dataDay,
  dayEvents,
  fetchEvents,
  currentDate,
  appState,
  setAppState,
}) => {
  const hours = Array(24)
    .fill()
    .map((val, index) => index);
  return (
    <div className="calendar__day" data-day={dataDay}>
      {weekDay.setHours(0, 0, 0, 0) === new Date().setHours(0, 0, 0, 0) && (
        <RedLineHour />
      )}
      {hours.map((hour) => {
        const hourEvents = dayEvents.filter(
          (event) => event.dateFrom.getHours() === hour
        );
        return (
          <Hour
            key={dataDay + hour}
            dataHour={hour}
            hourEvents={hourEvents}
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

export default Day;
