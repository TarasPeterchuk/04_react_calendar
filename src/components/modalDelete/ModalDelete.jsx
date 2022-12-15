import React from 'react';

import './modalDelete.scss';

const ModalDelete = ({
  setAppState,
  appState,
  fetchEvents,
  deleteEvent,
  id,
}) => {
  return (
    <div className="modal-delete overlay-delete">
      <div className="modal-delete__content">
        <div className="delete-event">
          <button
            onClick={() => {
              setAppState({ ...appState, showDeleteModal: false });
            }}
            className="delete-event__close-btn"
          >
            +
          </button>
          <button
            type="submit"
            className="delete-event__btn"
            onClick={() => deleteEvent(id).then(() => fetchEvents())}
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
