import React, { useState, useEffect } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import ModalCreate from './components/modalCreate/ModalCreate';
import { fetchEventsList } from './gateway/events';
import { getWeekStartDate } from '../src/utils/dateUtils.js';
import './common.scss';

const App = () => {
  const [appState, setAppState] = useState({
    currentStartWeekDate: getWeekStartDate(new Date()),
    showCreateModal: false,
    showDeleteModal: false,
    selectedEvent: null,
  });

  const [events, setEvents] = useState([]);

  const { showCreateModal } = appState;

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = () => {
    fetchEventsList().then((events) => {
      setAppState({
        ...appState,
        showCreateModal: false,
        showDeleteModal: false,
      });
      setEvents(events);
    });
  };

  return (
    <>
      <Header setAppState={setAppState} appState={appState} />
      <Calendar
        events={events}
        fetchEvents={fetchEvents}
        appState={appState}
        setAppState={setAppState}
      />
      {showCreateModal && (
        <ModalCreate
          setAppState={setAppState}
          appState={appState}
          fetchEvents={fetchEvents}
        />
      )}
    </>
  );
};

export default App;
