import React, { Component, useState, useEffect } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';

import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';

import './common.scss';

const App = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const weekDates = generateWeekRange(getWeekStartDate(currentDate));
  return (
    <>
      <Header
        setCurrentDate={setCurrentDate}
        currentDate={currentDate}
        weekDates={weekDates}
      />
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
