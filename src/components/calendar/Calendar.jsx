import React from 'react';
import Navigation from './../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';
import './calendar.scss';

const Calendar = ({
  weekDates,
  setAppState,
  events,
  deleteEvent,
  fetchEvents,
  currentDate,
  appState,
}) => {
  return (
    <section className="calendar">
      <Navigation
        weekDates={weekDates}
        toggleModal={setAppState}
        currentDate={currentDate}
      />
      <div className="calendar__body">
        <div className="calendar__week-container">
          <Sidebar />
          <Week
            weekDates={weekDates}
            events={events}
            deleteEvent={deleteEvent}
            fetchEvents={fetchEvents}
            currentDate={currentDate}
            appState={appState}
            setAppState={setAppState}
          />
        </div>
      </div>
    </section>
  );
};

export default Calendar;
