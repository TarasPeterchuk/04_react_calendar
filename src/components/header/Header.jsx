import React, { Component, useState, useEffect } from 'react';

import './header.scss';

const Header = ({ setCurrentDate, currentDate }) => {
  return (
    <header className="header">
      <button className="button create-event-btn">
        <i className="fas fa-plus create-event-btn__icon"></i>Create
      </button>
      <div className="navigation">
        <button
          onClick={() => {
            setCurrentDate(new Date());
          }}
          className="navigation__today-btn button"
        >
          Today
        </button>
        <button
          onClick={() => {
            setCurrentDate(
              new Date(currentDate.setDate(currentDate.getDate() - 7))
            );
          }}
          className="icon-button navigation__nav-icon"
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <button
          onClick={() => {
            setCurrentDate(
              new Date(currentDate.setDate(currentDate.getDate() + 7))
            );
          }}
          className="icon-button navigation__nav-icon"
        >
          <i className="fas fa-chevron-right"></i>
        </button>
        <span className="navigation__displayed-month"></span>
      </div>
    </header>
  );
};

export default Header;
