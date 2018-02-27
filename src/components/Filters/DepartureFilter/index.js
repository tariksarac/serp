import React from 'react';
import './DepartureFilter.css';
import MonthFilter from './MonthFilter/index';
import { DatePicker} from 'material-ui';
import CalendarTextIcon from 'mdi-react/CalendarTextIcon';
import {textFieldStyle} from "../../../utils/constants";

class DepartureFilter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedMonth: 0
    };
  }

  handleSelectMonth = key => {
    this.setState({ selectedMonth: key });
  };
  render() {
    return (
      <div className="departure-filter">
        <div className="departure">Departure date</div>
        <div className="month-filters">
          {[1, 2, 3, 4, 5].map((item, index) => (
            <MonthFilter
              key={index}
              monthIndex={index}
              active={index === this.state.selectedMonth}
              onClickAction={this.handleSelectMonth}
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
