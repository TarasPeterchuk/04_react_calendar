import React from 'react';

import './event.scss';

const Event = ({
  height,
  marginTop,
  title,
  time,
  deleteEvent,
  id,
  fetchEvents,
}) => {
  const eventStyle = {
    height,
    marginTop,
  };

  return (
    <div style={eventStyle} className="event">
      <button
        onClick={() => deleteEvent(id).then(() => fetchEvents())}
        className="event__delete-btn"
      >
        +
      </button>
      <div className="event__title">{title}</div>
      <div className="event__time">{time}</div>
    </div>
  );
};

export default Event;
