import React from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import { days, generateWeekRange } from '../../utils/dateUtils.js';

const Navigation = ({ currentStartWeekDate }) => {
  const weekDates = generateWeekRange(currentStartWeekDate);
  return (
    <header className="calendar__header ">
      {weekDates.map(dayDate => (
        <div key={Math.random()} className="calendar__day-label day-label ">
          <span className="day-label__day-name">{days[dayDate.getDay()]}</span>
          <span
            className={ClassNames('day-label__day-number', {
              'day-label__day-number_active':
                dayDate.setHours(0, 0, 0, 0) === new Date().setHours(0, 0, 0, 0),
            })}
          >
            {dayDate.getDate()}
          </span>
        </div>
      ))}
    </header>
  );
};

Navigation.propTypes = {
  currentStartWeekDate: PropTypes.instanceOf(Date).isRequired,
};

export default Navigation;
