import React, { Component } from 'react';
import './App.css';
import FiltersView from './components/Filters/index';
import SortView from './components/Sort/index';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { muiTheme } from './utils/constants';
import ResultItem from './components/ResultItem/index';
import LazyLoad from 'react-lazyload';
import * as moment from 'moment';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      resultData: [],
      selectedSort: 'id',
      selectedDepartureFilter: null,
      selectedSpecificDate: null,
      selectedRangeDuration: null,
      filteredData: []
    };
  }

  componentDidMount() {
    fetch('https://api.myjson.com/bins/oivjj').then(response => {
      response.text().then(text => {
        this.setState({ resultData: JSON.parse(text), filteredData: JSON.parse(text) });
      });
    });
  }

  handleSort = (event, key, value) => {
    this.setState({ selectedSort: value });
  };

  handleDateFilter = selectedDate =>
    this.setState({
      selectedDepartureFilter: null,
      selectedSpecificDate: selectedDate,
      filteredData: this.state.resultData.filter(item =>
        item.dates.some(date => moment(date.start).format('MM-DD-YYYY') == moment(selectedDate).format('MM-DD-YYYY'))
      )
    });

  handleDepartureFilter = filter => {
    this.setState({
      filteredData: this.state.resultData.filter(item =>
        item.dates.find(date => moment(date.start).format('MMM YYYY') === filter)
      ),
      selectedDepartureFilter: filter,
      selectedSpecificDate: null
    });
  };

  handleDurationsFilter = range => {
    this.setState({
      selectedRangeDuration: range,
      filteredData: this.state.resultData.filter(
        item => item.length >= range.value.min && item.length <= range.value.max
      )
    });
  };

  mapToFilters = () => {
    let filtered = [];
    this.state.resultData.forEach(result => {
      let futureDates = result.dates.filter(date => moment() < moment(date.start));
      futureDates.forEach(date => {
        let monthItem = moment(date.start).format('MMM YYYY');
        let target = filtered.findIndex(item => item.filter === monthItem);

        if (target !== -1) {
          filtered[target].count += 1;
        } else {
          filtered.push({ filter: monthItem, count: 1 });
        }
      });
    });
    return filtered;
  };

  render() {
    let results = [...this.state.filteredData.sort((a,b) => b[this.state.selectedSort] - a[this.state.selectedSort])];
    let departureFilters = this.mapToFilters();

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="App">
          <div className="sort">
            <SortView handleSort={this.handleSort} selectedSort={this.state.selectedSort} />
          </div>
          <div className="filter">
            <FiltersView
              handleDateFilter={this.handleDateFilter}
              filteredData={departureFilters.filter((item, index) => !(index > 5))}
              handleDepartureFilter={this.handleDepartureFilter}
              selectedDepartureFilter={this.state.selectedDepartureFilter}
              selectedRangeDuration={this.state.selectedRangeDuration}
              handleDurationsFilter={this.handleDurationsFilter}
            />
          </div>
          <LazyLoad height={300} once>
            <div className="content">
              {results.map((item, index) => (
                <ResultItem
                  key={item.id}
                  result={item}
                  selectedDepartureFilter={this.state.selectedDepartureFilter}
                  selectedSpecificDate={this.state.selectedSpecificDate}
                />
              ))}
            </div>
          </LazyLoad>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
