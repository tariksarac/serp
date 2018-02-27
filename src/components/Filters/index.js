import React from 'react'
import './FiltersView.css'
import DepartureFilter from "./DepartureFilter/index";
import DurationFilter from "./DurationFilter/index";

const FiltersView = () => {
    return (
        <div className="filters-view">
            <div className="filter-by">Filters By:</div>
            <DepartureFilter />
            <DurationFilter />
        </div>
    )
}

export default FiltersView