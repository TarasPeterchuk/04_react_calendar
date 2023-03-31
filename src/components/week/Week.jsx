import React from 'react';
import PropTypes from 'prop-types';
import Day from '../day/Day';
import './week.scss';
import { generateWeekRange } from '../../utils/dateUtils.js';

const Week = ({ appState, setAppState, fetchEvents, events }) => {
  const weekDates = generateWeekRange(appState.currentStartWeekDate);
  return (
    <div className="calendar__week">
      {weekDates.map(dayStart => {
        const dayEnd = new Date(dayStart.getTime()).setHours(dayStart.getHours() + 24);
        const dayEvents = events.filter(
          event => event.dateFrom > dayStart && event.dateTo < dayEnd,
        );
        return (
          <Day
            key={dayStart.getDate()}
            weekDay={dayStart}
            dataDay={dayStart.getDate()}
            dayEvents={dayEvents}
            fetchEvents={fetchEvents}
            appState={appState}
            setAppState={setAppState}
          />
        );
      })}
    </div>
  );
};

Week.propTypes = {
  setAppState: PropTypes.func.isRequired,
  appState: PropTypes.object.isRequired,
  fetchEvents: PropTypes.func.isRequired,
  events: PropTypes.array.isRequired,
};

export default Week;
