import React from 'react';
import './FiltersView.css';
import DepartureFilter from './DepartureFilter/index';
import DurationFilter from './DurationFilter/index';

const FiltersView = ({ handleDepartureFilter, filteredData, selectedDepartureFilter, handleDateFilter, selectedRangeDuration, handleDurationsFilter }) => {
  return (
    <div className="filters-view">
      <div className="filter-by">Filters By:</div>
      <DepartureFilter
        handleDepartureFilter={handleDepartureFilter}
        filteredData={filteredData}
        selectedDepartureFilter={selectedDepartureFilter}
        handleDateFilter={handleDateFilter}
      />
      <DurationFilter selectedRangeDuration={selectedRangeDuration} handleDurationsFilter={handleDurationsFilter}/>
    </div>
  );
};

export default FiltersView;
