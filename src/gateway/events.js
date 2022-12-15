const baseUrl =
  'https://6374b55948dfab73a4e65042.mockapi.io/todo_list/events_react_project';

export const createEvent = (eventData) => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(eventData),
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Internal Server Error. Can't display events");
    }
  });
};

export const fetchEventsList = () => {
  return fetch(baseUrl)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((eventList) =>
      eventList.map(({ dateFrom, dateTo, ...events }) => ({
        dateFrom: new Date(dateFrom),
        dateTo: new Date(dateTo),
        ...events,
      }))
    );
};

export const deleteEvent = (eventId) => {
  return fetch(`${baseUrl}/${eventId}`, {
    method: 'DELETE',
  }).then((response) => {
    if (!response.ok) {
      throw new Error("Internal Server Error. Can't display events");
    }
  });
};
