import React from 'react';
import ModalDelete from '../modalDelete/ModalDelete';
import './event.scss';

const Event = ({
  height,
  marginTop,
  title,
  time,
  deleteEvent,
  id,
  fetchEvents,
  appState,
  setAppState,
}) => {
  const eventStyle = {
    height,
    marginTop,
  };
  const { showDeleteModal } = appState;
  return (
    <>
      <div
        style={eventStyle}
        className="event"
        onClick={(evet) => {
          setAppState({
            ...appState,
            clickCoordinates: { xCoord: evet.pageX, yCoord: evet.pageY },
            showDeleteModal: true,
          });
        }}
      >
        <div className="event__title">{title}</div>
        <div className="event__time">{time}</div>
      </div>
      {showDeleteModal && (
        <ModalDelete
          setAppState={setAppState}
          appState={appState}
          deleteEvent={deleteEvent}
          fetchEvents={fetchEvents}
          id={id}
        />
      )}
    </>
  );
};

export default Event;
