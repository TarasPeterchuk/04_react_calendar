import React, { useEffect, useState } from 'react';
import ModalDelete from '../modalDelete/ModalDelete';
import './event.scss';

const Event = ({
  height,
  marginTop,
  title,
  time,
  id,
  appState,
  setAppState,
  fetchEvents,
}) => {
  const eventStyle = {
    height,
    marginTop,
  };

  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  const handleMouseMove = (event) => {
    const { pageX, pageY } = event;
    setMousePosition({ pageX, pageY });
  };

  const { showDeleteModal, selectedEvent } = appState;
  return (
    <>
      <div
        style={eventStyle}
        onMouseMove={handleMouseMove}
        className="event"
        onClick={() => {
          setAppState({
            ...appState,
            showDeleteModal: true,
            selectedEvent: id,
          });
        }}
      >
        <div className="event__title">{title}</div>
        <div className="event__time">{time}</div>
      </div>
      {showDeleteModal && selectedEvent === id && (
        <ModalDelete
          id={id}
          setAppState={setAppState}
          appState={appState}
          mousePosition={mousePosition}
          fetchEvents={fetchEvents}
        />
      )}
    </>
  );
};

export default Event;
