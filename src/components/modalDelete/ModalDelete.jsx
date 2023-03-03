import React from 'react';
import { deleteEvent } from '../../gateway/events';
import './modalDelete.scss';

const ModalDelete = ({
  id,
  setAppState,
  appState,
  mousePosition,
  fetchEvents,
}) => {
  const { pageX, pageY } = mousePosition;

  const onDelete = (eventId) => {
    deleteEvent(eventId).then(() => fetchEvents());
  };

  return (
    <div
      className="modal-delete overlay-delete"
      onClick={() => {
        setAppState({ ...appState, showDeleteModal: false });
      }}
    >
      <div
        style={{ top: pageY, left: pageX }}
        className="modal-delete__content"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="delete-event">
          <button
            type="submit"
            className="delete-event__btn"
            onClick={() => onDelete(id)}
          >
            <i
              className="delete-event__btn-icon fa fa-trash"
              aria-hidden="true"
            ></i>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalDelete;
