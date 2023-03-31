const baseUrl = 'https://6374b55948dfab73a4e65042.mockapi.io/todo_list/events_react_project';

const fetchError = new Error("Internal Server Error. Can't access events list");

export const fetchEventsList = () =>
  fetch(baseUrl)
    .then(response => {
      if (!response.ok) {
        throw fetchError;
      }
      return response.json();
    })
    .catch(error => {
      alert(error);
    })
    .then(eventList =>
      eventList.map(({ dateFrom, dateTo, ...events }) => ({
        dateFrom: new Date(dateFrom),
        dateTo: new Date(dateTo),
        ...events,
      })),
    );

export const createEvent = eventData =>
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(eventData),
  })
    .then(response => {
      if (!response.ok) {
        throw fetchError;
      }
    })
    .catch(error => {
      alert(error);
    });

export const deleteEvent = eventId =>
  fetch(`${baseUrl}/${eventId}`, {
    method: 'DELETE',
  })
    .then(response => {
      if (!response.ok) {
        throw fetchError;
      }
    })
    .catch(error => {
      alert(error);
    });
