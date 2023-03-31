import React from 'react';
import PropTypes from 'prop-types';
import Event from '../event/Event';
import { formatMins } from '../../utils/dateUtils.js';

const Hour = ({ dataHour, hourEvents, fetchEvents, appState, setAppState }) => (
  <div className="calendar__time-slot" data-time={dataHour + 1}>
    {hourEvents.map(({ id, dateFrom, dateTo, title }) => {
      const eventStart = `${dateFrom.getHours()}:${formatMins(dateFrom.getMinutes())}`;
      const eventEnd = `${dateTo.getHours()}:${formatMins(dateTo.getMinutes())}`;
      return (
        <Event
          key={id}
          height={(dateTo.getTime() - dateFrom.getTime()) / (1000 * 60)}
          marginTop={dateFrom.getMinutes()}
          time={`${eventStart} - ${eventEnd}`}
          title={title}
          id={id}
          fetchEvents={fetchEvents}
          appState={appState}
          setAppState={setAppState}
        />
      );
    })}
  </div>
);

Hour.propTypes = {
  dataHour: PropTypes.number.isRequired,
  hourEvents: PropTypes.array.isRequired,
  setAppState: PropTypes.func.isRequired,
  appState: PropTypes.object.isRequired,
  fetchEvents: PropTypes.func.isRequired,
};

export default Hour;
