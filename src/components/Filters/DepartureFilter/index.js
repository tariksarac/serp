import React from 'react';
import './DepartureFilter.css';
import MonthFilter from './MonthFilter/index';
import { DatePicker } from 'material-ui';
import CalendarTextIcon from 'mdi-react/CalendarTextIcon';
import { textFieldStyle } from '../../../utils/constants';

class DepartureFilter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedMonth: 0,
      selectedSpecificDate: null
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedSpecificDate) {
      this.setState({ selectedSpecificDate: nextProps.selectedSpecificDate });
    }
    if (nextProps.selectedSpecificDate === null) {
      this.setState({ selectedSpecificDate: null });
    }
  }

  handleSelectMonth = (key, monthItem) => {
    this.setState({ selectedMonth: key });
    this.props.handleDepartureFilter(monthItem);
  };

  handleChange = (e, date) => {
    this.props.handleDateFilter(date);
  };
  render() {
    return (
      <div className="departure-filter">
        <div className="departure">Departure date</div>
        <div className="month-filters">
          {this.props.filteredData.map((item, index) => (
            <MonthFilter
              key={index}
              monthIndex={index}
              active={item.filter === this.props.selectedDepartureFilter}
              onClickAction={this.handleSelectMonth}
              monthItem={item}
              selectedDepartureFilter={this.props.selectedDepartureFilter}
            />
          ))}
        </div>

        <DatePicker
          onChange={this.handleChange}
          hintText={<CalendarHitnComponent />}
          container="inline"
          textFieldStyle={textFieldStyle}
          dialogContainerStyle={{ maxWidth: '260px' }}
          className={'my-date-picker'}
          value={this.state.selectedSpecificDate}
        />
      </div>
    );
  }
}

export default DepartureFilter;

const CalendarHitnComponent = () => {
  return (
    <div className={'calendar-icon-main'}>
      <CalendarTextIcon className="calendar-icon" />
      <div className="placeholder">Select a specific date</div>
    </div>
  );
};
