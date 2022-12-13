import React, { Component, useState } from 'react';
import moment from 'moment';

import './modal.scss';

const Modal = ({ setAppState, appState, createEvent, fetchEvents }) => {
  const [formData, formChange] = useState({
    title: '',
    date: moment().format('YYYY-MM-DD'),
    startTime: moment().format('HH:MM'),
    endTime: moment().add(2, 'hours').format('HH:MM'),
    description: '',
  });
  const { title, date, startTime, endTime, description } = formData;

  const handleChange = (event) => {
    const { name, value } = event.target;
    formChange({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newEvent = {
      // id: Math.random(),
      title,
      description,
      dateFrom: new Date(date.concat(' ', startTime)),
      dateTo: new Date(date.concat(' ', endTime)),
    };
    createEvent(newEvent).then(() => fetchEvents());
  };

  return (
    <div className="modal overlay">
      <div className="modal__content">
        <div className="create-event">
          <button
            onClick={() => {
              setAppState({ ...appState, showModal: false });
            }}
            className="create-event__close-btn"
          >
            +
          </button>
          <form className="event-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="event-form__field"
              // onChange={handleChangeTilte}
              value={title}
              onChange={handleChange}
            />
            <div className="event-form__time">
              <input
                type="date"
                name="date"
                className="event-form__field"
                // onChange={handleChangeDate}
                value={date}
                onChange={handleChange}
              />
              <input
                type="time"
                name="startTime"
                className="event-form__field"
                // onChange={handleChangeStartTimeTime}
                value={startTime}
                onChange={handleChange}
              />
              <span>-</span>
              <input
                type="time"
                name="endTime"
                className="event-form__field"
                // onChange={handleChangeEndTimeTime}
                value={endTime}
                onChange={handleChange}
              />
            </div>
            <textarea
              name="description"
              placeholder="Description"
              className="event-form__field"
              // onChange={handleChangeDescription}
              value={description}
              onChange={handleChange}
            ></textarea>
            <button type="submit" className="event-form__submit-btn">
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
