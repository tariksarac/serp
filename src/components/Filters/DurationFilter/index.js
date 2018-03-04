import React from 'react';
import './DurationFilter.css';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';

class DurationFilter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: {
        min: 0,
        max: 77
      }
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.selectedRangeDuration) {
      this.setState({ value: nextProps.selectedRangeDuration.value });
    }
    if (nextProps.selectedRangeDuration === null) {
      this.setState({
        value: {
          min: 0,
          max: 77
        }
      });
    }
  }

  handleOnChange = range => {
    this.props.handleDurationsFilter(range);
  };
  render() {
    return (
      <div className="duration-filter">
        <div className="duration">Duration</div>
        <form className="form">
          <InputRange
            maxValue={77}
            minValue={0}
            formatLabel={value => `${value} days`}
            value={this.state.value}
            onChange={value => this.handleOnChange({ value })}
          />
        </form>
      </div>
    );
  }
}

export default DurationFilter;
