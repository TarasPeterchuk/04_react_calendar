import React, { useState } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import { getWeekStartDate } from '../src/utils/dateUtils.js';
import './common.scss';

const App = () => {
  const [appState, setAppState] = useState({
    currentStartWeekDate: getWeekStartDate(new Date()),
    showCreateModal: false,
    showDeleteModal: false,
    selectedEvent: null,
  });

  return (
    <>
      <Header appState={appState} setAppState={setAppState} />
      <Calendar appState={appState} setAppState={setAppState} />
    </>
  );
};

export default App;
