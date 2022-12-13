import React, { Component, useState, useEffect } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import Modal from './components/modal/Modal';
import { deleteEvent, createEvent, fetchEventsList } from './gateway/events';
import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';
import './common.scss';

const App = () => {
  const [appState, setAppState] = useState({
    currentDate: new Date(),
    showModal: false,
    events: [],
  });

  const { events, currentDate, showModal } = appState;
  const weekDates = generateWeekRange(getWeekStartDate(currentDate));

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = () => {
    fetchEventsList().then((events) =>
      setAppState({ ...appState, events, showModal: false })
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
      />
      {showModal && (
        <Modal
          setAppState={setAppState}
          appState={appState}
          createEvent={createEvent}
          fetchEvents={fetchEvents}
        />
      )}
    </>
  );
};

// class App1 extends Component {
//   state = {
//     weekStartDate: new Date(),
//   };

//   render() {
//     const { weekStartDate } = this.state;
//     const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));
//     return (
//       <>
//         <Header />
//         <Calendar weekDates={weekDates} />
//       </>
//     );
//   }
// }

export default App;
