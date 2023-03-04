import React, { useState, useEffect } from 'react';
import Day from '../day/Day';
import ModalCreate from '../modalCreate/ModalCreate';
import { fetchEventsList } from '../../gateway/events';
import './week.scss';
import { generateWeekRange } from '../../utils/dateUtils.js';

const Week = ({ currentDate, appState, setAppState }) => {
  const [events, setEvents] = useState([]);

  const weekDates = generateWeekRange(appState.currentStartWeekDate);
  const { showCreateModal } = appState;

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = () => {
    fetchEventsList().then((events) => {
      setEvents(events);
    });
  };

  return (
    <div className="calendar__week">
      {weekDates.map((dayStart) => {
        const dayEnd = new Date(dayStart.getTime()).setHours(
          dayStart.getHours() + 24
        );
        const dayEvents = events.filter(
          (event) => event.dateFrom > dayStart && event.dateTo < dayEnd
        );
        return (
          <Day
            key={dayStart.getDate()}
            weekDay={dayStart}
            dataDay={dayStart.getDate()}
            dayEvents={dayEvents}
            fetchEvents={fetchEvents}
            currentDate={currentDate}
            appState={appState}
            setAppState={setAppState}
          />
        );
      })}
      {showCreateModal && (
        <ModalCreate
          setAppState={setAppState}
          appState={appState}
          fetchEvents={fetchEvents}
        />
      )}
    </div>
  );
};

export default Week;
