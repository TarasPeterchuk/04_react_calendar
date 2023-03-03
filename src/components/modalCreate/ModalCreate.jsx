import React, { useState } from 'react';
import { createEvent } from '../../gateway/events';
import moment from 'moment';
import './modalCreate.scss';

const ModalCreate = ({ setAppState, appState, fetchEvents }) => {
  const [formData, formChange] = useState({
    title: '',
    date: moment().format('YYYY-MM-DD'),
    startTime: moment().format('HH:mm'),
    endTime: moment().add(1, 'hours').format('H:mm'),
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
              setAppState({ ...appState, showCreateModal: false });
            }}
            className="create-event__close-btn"
          >
            +
          </button>
          <form className="event-form" onSubmit={handleSubmit}>
            <input
              required
              type="text"
              name="title"
              placeholder="Title"
              className="event-form__field"
              value={title}
              onChange={handleChange}
            />
            <div className="event-form__time">
              <input
                type="date"
                name="date"
                className="event-form__field"
                value={date}
                onChange={handleChange}
              />
              <input
                type="time"
                step="3000"
                name="startTime"
                className="event-form__field"
                value={startTime}
                onChange={handleChange}
              />
              <span>-</span>
              <input
                type="time"
                name="endTime"
                className="event-form__field"
                value={endTime}
                onChange={handleChange}
              />
            </div>
            <textarea
              name="description"
              placeholder="Description"
              className="event-form__field"
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

export default ModalCreate;
