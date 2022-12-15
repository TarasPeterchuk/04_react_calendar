import React, { Component, useState, useEffect } from 'react';
import moment from 'moment';
import './redLineHour.scss';

const RedLine = () => {
  const [redLineMarginTop, setRedLineMarginTop] = useState(
    moment().minutes() + moment().hours() * 60
  );
  useEffect(() => {
    const interval = setInterval(() => {
      setRedLineMarginTop(moment().minutes() + moment().hours() * 60);
      return interval;
    }, 60000);
  }, []);
  return (
    <div
      style={{ marginTop: redLineMarginTop }}
      className="red-line-hour"
    ></div>
  );
};

export default RedLine;
