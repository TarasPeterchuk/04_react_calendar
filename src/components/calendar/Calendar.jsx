import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Navigation from '../navigation/Navigation';
import { fetchEventsList } from '../../gateway/events';

import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';
import ModalCreate from '../modalCreate/ModalCreate';

import './calendar.scss';

const Calendar = ({ setAppState, appState }) => {
  const [events, setEvents] = useState([]);
  const { showCreateModal, currentStartWeekDate } = appState;

  const fetchEvents = () => {
    fetchEventsList().then(receivedEvents => {
      setEvents(receivedEvents);
    });
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <section className="calendar">
      <Navigation currentStartWeekDate={currentStartWeekDate} />
      <div className="calendar__body">
        <div className="calendar__week-container">
          <Sidebar />
          <Week
            appState={appState}
            setAppState={setAppState}
            fetchEvents={fetchEvents}
            events={events}
          />
        </div>
      </div>
      {showCreateModal && (
        <ModalCreate setAppState={setAppState} appState={appState} fetchEvents={fetchEvents} />
      )}
    </section>
  );
};

Calendar.propTypes = {
  setAppState: PropTypes.func.isRequired,
  appState: PropTypes.object.isRequired,
};

export default Calendar;
