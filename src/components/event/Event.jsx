import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ModalDelete from '../modalDelete/ModalDelete';
import './event.scss';

const Event = ({ height, marginTop, title, time, id, appState, setAppState, fetchEvents }) => {
  const eventStyle = {
    height,
    marginTop,
  };

  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  const handleMouseMove = event => {
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

Event.propTypes = {
  height: PropTypes.number.isRequired,
  marginTop: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  setAppState: PropTypes.func.isRequired,
  appState: PropTypes.object.isRequired,
  fetchEvents: PropTypes.func.isRequired,
};

export default Event;
