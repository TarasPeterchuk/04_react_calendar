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

// const events = [
//   {
//     id: 1,
//     title: 'Go to the gym',
//     description: 'some text here',
//     dateFrom: new Date(2022, 11, 15, 1, 25),
//     dateTo: new Date(2022, 11, 15, 15, 0),
//   },
//   {
//     id: 2,
//     title: 'Go to the school',
//     description: 'hello, 2 am',
//     dateFrom: new Date(2022, 11, 16, 2, 15),
//     dateTo: new Date(2022, 11, 16, 11, 0),
//   },
//   {
//     id: 3,
//     title: 'Lunch',
//     description: '',
//     dateFrom: new Date(2022, 11, 17, 10, 30),
//     dateTo: new Date(2022, 11, 17, 11, 30),
//   },
//   {
//     id: 4,
//     title: 'Meet friend',
//     description: 'at the cafe',
//     dateFrom: new Date(2022, 11, 25, 10, 30),
//     dateTo: new Date(2022, 11, 25, 11, 0),
//   },
//  ];

// export default events;
