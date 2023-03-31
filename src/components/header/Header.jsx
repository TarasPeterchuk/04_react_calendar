import React from 'react';
import PropTypes from 'prop-types';
import { months, getWeekStartDate, generateWeekRange } from '../../utils/dateUtils.js';
import './header.scss';

const Header = ({ setAppState, appState }) => {
  const { currentStartWeekDate } = appState;
  const weekDates = generateWeekRange(currentStartWeekDate);
  const showMonths = () =>
    weekDates[0].getMonth() === weekDates[weekDates.length - 1].getMonth()
      ? months[weekDates[0].getMonth()].substr(0, 3)
      : months[weekDates[0].getMonth()]
          .substr(0, 3)
          .concat(' - ', months[weekDates[weekDates.length - 1].getMonth()].substr(0, 3));
  return (
    <header className="header">
      <button
        onClick={() => {
          setAppState({
            ...appState,
            showCreateModal: true,
          });
        }}
        className="button create-event-btn"
      >
        <i className="fas fa-plus create-event-btn__icon"></i>Create
      </button>
      <div className="navigation">
        <button
          onClick={() => {
            setAppState({
              ...appState,
              currentStartWeekDate: getWeekStartDate(new Date()),
            });
          }}
          className="navigation__today-btn button"
        >
          Today
        </button>
        <button
          onClick={() => {
            setAppState({
              ...appState,
              currentStartWeekDate: new Date(
                currentStartWeekDate.setDate(currentStartWeekDate.getDate() - 7),
              ),
            });
          }}
          className="icon-button navigation__nav-icon"
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <button
          onClick={() => {
            setAppState({
              ...appState,
              currentStartWeekDate: new Date(
                currentStartWeekDate.setDate(currentStartWeekDate.getDate() + 7),
              ),
            });
          }}
          className="icon-button navigation__nav-icon"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
        <span className="navigation__displayed-month">{showMonths()}</span>
      </div>
    </header>
  );
};

Header.propTypes = {
  setAppState: PropTypes.func.isRequired,
  appState: PropTypes.object.isRequired,
};

export default Header;
