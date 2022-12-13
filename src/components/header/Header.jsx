import React, { Component, useState, useEffect } from 'react';
import {
  getWeekStartDate,
  generateWeekRange,
  months,
} from '../../utils/dateUtils.js';

import './header.scss';

const Header = ({ setAppState, weekDates, appState }) => {
  const { currentDate } = appState;
  const showMonths = () =>
    weekDates[0].getMonth() === weekDates[weekDates.length - 1].getMonth()
      ? months[weekDates[0].getMonth()].substr(0, 3)
      : months[weekDates[0].getMonth()]
          .substr(0, 3)
          .concat(
            ' - ',
            months[weekDates[weekDates.length - 1].getMonth()].substr(0, 3)
          );
  return (
    <header className="header">
      <button
        onClick={() => {
          setAppState({ ...appState, showModal: true });
        }}
        className="button create-event-btn"
      >
        <i className="fas fa-plus create-event-btn__icon"></i>Create
      </button>
      <div className="navigation">
        <button
          onClick={() => {
            setAppState({ ...appState, currentDate: new Date() });
          }}
          className="navigation__today-btn button"
        >
          Today
        </button>
        <button
          onClick={() => {
            setAppState({
              ...appState,
              currentDate: new Date(
                currentDate.setDate(currentDate.getDate() - 7)
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
              currentDate: new Date(
                currentDate.setDate(currentDate.getDate() + 7)
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

export default Header;
