import React from 'react';
import Navigation from './../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';
import './calendar.scss';

const Calendar = ({ setAppState, events, fetchEvents, appState }) => {
  return (
    <section className="calendar">
      <Navigation currentStartWeekDate={appState.currentStartWeekDate} />
      <div className="calendar__body">
        <div className="calendar__week-container">
          <Sidebar />
          <Week
            events={events}
            fetchEvents={fetchEvents}
            appState={appState}
            setAppState={setAppState}
          />
        </div>
      </div>
    </section>
  );
};

export default Calendar;
