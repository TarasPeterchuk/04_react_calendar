import React, { Component, useState, useEffect } from 'react';

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
}) => {
  return (
    <section className="calendar">
      <Navigation weekDates={weekDates} toggleModal={setAppState} />
      <div className="calendar__body">
        <div className="calendar__week-container">
          <Sidebar />
          <Week
            weekDates={weekDates}
            events={events}
            deleteEvent={deleteEvent}
            fetchEvents={fetchEvents}
          />
        </div>
      </div>
    </section>
  );
};

export default Calendar;
