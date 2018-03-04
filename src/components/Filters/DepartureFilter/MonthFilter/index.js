'use strict';
import React from 'react';
import PropTypes from 'prop-types';
import './MonthFilter.css';

const MonthFilter = ({ monthIndex, active, onClickAction, monthItem }) => {
  return (
    <div className="month-filter-box" onClick={() => onClickAction(monthIndex, monthItem.filter)} >
      <div className="month-result" style={{ color: active && '#409CD1', fontWeight: active && 900 }}>{`${monthItem.filter} (${monthItem.count})`} </div>
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
