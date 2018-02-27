'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import './MonthFilter.css';

const MonthFilter = ({ monthIndex, active, onClickAction }) => {
  return (
    <div className="month-filter-box" onClick={() => onClickAction(monthIndex)} style={{ color: active && '#409CD1' }}>
      <div className="month-result">Octobar </div>
      <div className="month-result">2016 </div>
      <div className="month-result">(1000)</div>
    </div>
  );
};

MonthFilter.propTypes = {
  active: PropTypes.bool,
  onClickAction: PropTypes.func
};

MonthFilter.defaultProps = {
  active: false,
  onClickAction: () => {}
};

export default MonthFilter;
