import React from 'react';
import ClassNames from 'classnames';
import { days } from '../../utils/dateUtils.js';
import { generateWeekRange } from '../../utils/dateUtils.js';

const Navigation = ({ currentStartWeekDate }) => {
  const weekDates = generateWeekRange(currentStartWeekDate);
  return (
    <header className="calendar__header ">
      {weekDates.map((dayDate) => (
        <div key={Math.random()} className="calendar__day-label day-label ">
          <span className="day-label__day-name">{days[dayDate.getDay()]}</span>
          <span
            className={ClassNames('day-label__day-number', {
              'day-label__day-number_active':
                dayDate.setHours(0, 0, 0, 0) ===
                new Date().setHours(0, 0, 0, 0),
            })}
          >
            {dayDate.getDate()}
          </span>
        </div>
      ))}
    </header>
  );
};

export default Navigation;
