import React from 'react';
import './modalDelete.scss';

const ModalDelete = ({
  setAppState,
  appState,
  fetchEvents,
  deleteEvent,
  id,
}) => {
  const { clickCoordinates } = appState;
  console.log(clickCoordinates);
  return (
    <div
      className="modal-delete overlay-delete"
      onClick={() => {
        setAppState({ ...appState, showDeleteModal: false });
      }}
    >
      <div
        style={{ top: clickCoordinates.yCoord, left: clickCoordinates.xCoord }}
        className="modal-delete__content"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="delete-event">
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
