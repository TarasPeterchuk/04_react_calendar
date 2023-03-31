import React from 'react';
import PropTypes from 'prop-types';
import { deleteEvent } from '../../gateway/events';
import './modalDelete.scss';

const ModalDelete = ({ id, setAppState, appState, mousePosition, fetchEvents }) => {
  const { pageX, pageY } = mousePosition;
  const onDelete = eventId => {
    setAppState({
      ...appState,
      showDeleteModal: false,
    });
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
        onClick={event => event.stopPropagation()}
      >
        <div className="delete-event">
          <button type="submit" className="delete-event__btn" onClick={() => onDelete(id)}>
            <i className="delete-event__btn-icon fa fa-trash" aria-hidden="true"></i>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

ModalDelete.propTypes = {
  mousePosition: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  setAppState: PropTypes.func.isRequired,
  appState: PropTypes.object.isRequired,
  fetchEvents: PropTypes.func.isRequired,
};

export default ModalDelete;
