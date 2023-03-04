import React from 'react';
import Navigation from './../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';
import './calendar.scss';

const Calendar = ({ setAppState, appState }) => {
  const { currentStartWeekDate } = appState;
  return (
    <section className="calendar">
      <Navigation currentStartWeekDate={currentStartWeekDate} />
      <div className="calendar__body">
        <div className="calendar__week-container">
          <Sidebar />
          <Week {...setAppState} {...appState} />
        </div>
      </div>
    </section>
  );
};

export default Calendar;
