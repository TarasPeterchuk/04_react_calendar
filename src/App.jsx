import React, { useState, useEffect } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import ModalCreate from './components/modalCreate/ModalCreate';
import { deleteEvent, createEvent, fetchEventsList } from './gateway/events';
import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';
import './common.scss';

const App = () => {
  const [appState, setAppState] = useState({
    currentDate: new Date(),
    showModal: false,
    showDeleteModal: false,
    clickCoordinates: {},
    events: [],
  });

  const { events, currentDate, showModal } = appState;
  const weekDates = generateWeekRange(getWeekStartDate(currentDate));
  useEffect(() => {
    fetchEvents();
  }, []);
  const fetchEvents = () => {
    fetchEventsList().then((events) =>
      setAppState({
        ...appState,
        events,
        showModal: false,
        showDeleteModal: false,
      })
    );
  };
  return (
    <>
      <Header
        setAppState={setAppState}
        appState={appState}
        weekDates={weekDates}
      />
      <Calendar
        weekDates={weekDates}
        events={events}
        deleteEvent={deleteEvent}
        fetchEvents={fetchEvents}
        currentDate={currentDate}
        appState={appState}
        setAppState={setAppState}
      />
      {showModal && (
        <ModalCreate
          setAppState={setAppState}
          appState={appState}
          createEvent={createEvent}
          fetchEvents={fetchEvents}
        />
      )}
    </>
  );
};

export default App;
