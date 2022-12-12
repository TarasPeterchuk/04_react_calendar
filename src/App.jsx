import React, { Component, useState, useEffect } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';

import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';

import './common.scss';

const App = () => {
  const [stateWeekStartDate, func] = useState({ weekStartDate: new Date() });
  const { weekStartDate } = stateWeekStartDate;
  // console.log({ weekStartDate });
  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));
  return (
    <>
      <Header />
      <Calendar weekDates={weekDates} />
    </>
  );
};

// class App1 extends Component {
//   state = {
//     weekStartDate: new Date(),
//   };

//   render() {
//     const { weekStartDate } = this.state;
//     const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));
//     return (
//       <>
//         <Header />
//         <Calendar weekDates={weekDates} />
//       </>
//     );
//   }
// }

export default App;
