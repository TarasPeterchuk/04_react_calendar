import React from 'react';
import PropTypes from 'prop-types';
import Hour from '../hour/Hour';
import RedLineHour from '../redLineHour/RedLineHour';

const Day = ({ weekDay, dataDay, dayEvents, fetchEvents, appState, setAppState }) => {
  const hours = Array(24)
    .fill()
    .map((_, index) => index);
  return (
    <div className="calendar__day" data-day={dataDay}>
      {weekDay.setHours(0, 0, 0, 0) === new Date().setHours(0, 0, 0, 0) && <RedLineHour />}
      {hours.map(hour => {
        const hourEvents = dayEvents.filter(event => event.dateFrom.getHours() === hour);
        return (
          <Hour
            key={dataDay + hour}
            dataHour={hour}
            hourEvents={hourEvents}
            fetchEvents={fetchEvents}
            appState={appState}
            setAppState={setAppState}
          />
        );
      })}
    </div>
  );
};

Day.propTypes = {
  weekDay: PropTypes.object.isRequired,
  dataDay: PropTypes.number.isRequired,
  dayEvents: PropTypes.array.isRequired,
  setAppState: PropTypes.func.isRequired,
  appState: PropTypes.object.isRequired,
  fetchEvents: PropTypes.func.isRequired,
};

export default Day;
