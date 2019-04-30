import React from 'react';
import './FiltersView.css';
import DepartureFilter from './DepartureFilter/index';
import DurationFilter from './DurationFilter/index';

const FiltersView = ({
  handleDepartureFilter,
  filteredData,
  selectedDepartureFilter,
  handleDateFilter,
  selectedRangeDuration,
  handleDurationsFilter,
  selectedSpecificDate
}) => {
  return (
    <div className="filters-view">
      <div className="filter-by">Filters By:</div>
      <DepartureFilter
        handleDepartureFilter={handleDepartureFilter}
        filteredData={filteredData}
        selectedDepartureFilter={selectedDepartureFilter}
        handleDateFilter={handleDateFilter}
        selectedSpecificDate={selectedSpecificDate}
      />
      <DurationFilter selectedRangeDuration={selectedRangeDuration} handleDurationsFilter={handleDurationsFilter} />
    </div>
  );
};

export default FiltersView;
