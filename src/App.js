import React, { Component } from 'react';
import './App.css';
import FiltersView from './components/Filters/index';
import SortView from './components/Sort/index';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { muiTheme } from './utils/constants';
import ResultItem from './components/ResultItem/index';
import LazyLoad from 'react-lazyload';
import * as moment from 'moment';
import { mapToFilters } from './utils/helper';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      resultData: [],
      selectedSort: null,
      selectedDepartureFilter: null,
      selectedSpecificDate: null,
      selectedRangeDuration: null,
      filteredData: [],
      filterNodesData: []
    };
  }

  componentDidMount() {
    fetch('https://api.myjson.com/bins/oivjj').then(response => {
      response.text().then(data => {
        this.setState({
          resultData: JSON.parse(data),
          filteredData: JSON.parse(data),
          filterNodesData: mapToFilters(JSON.parse(data))
        });
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
        item.dates.some(date => moment(date.start).format('MM-DD-YYYY') === moment(selectedDate).format('MM-DD-YYYY'))
      )
    });

  handleDepartureFilter = filter => {
    this.setState({
      filteredData: this.state.resultData.filter(item =>
        item.dates.find(date => moment(date.start).format('MMM YYYY') === filter)
      ),
      selectedDepartureFilter: filter,
      selectedSpecificDate: null,
      selectedRangeDuration: null
    });
  };

  handleDurationsFilter = range => {
    let data = [];
    if (range) {
      data = this.state.resultData.filter(item => item.length >= range.value.min && item.length <= range.value.max);
    }
    if (this.state.selectedDepartureFilter) {
      data = data.filter(item =>
        item.dates.find(date => moment(date.start).format('MMM YYYY') === this.state.selectedDepartureFilter)
      );
    }
    this.setState({ filteredData: data, selectedRangeDuration: range });
  };

  render() {
    let results = [...this.state.filteredData.sort((a, b) => b[this.state.selectedSort] - a[this.state.selectedSort])];

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="App">
          <div className="sort">
            <SortView handleSort={this.handleSort} selectedSort={this.state.selectedSort} />
          </div>
          <div className="filter">
            <FiltersView
              handleDateFilter={this.handleDateFilter}
              filteredData={this.state.filterNodesData}
              handleDepartureFilter={this.handleDepartureFilter}
              selectedDepartureFilter={this.state.selectedDepartureFilter}
              selectedRangeDuration={this.state.selectedRangeDuration}
              handleDurationsFilter={this.handleDurationsFilter}
              selectedSpecificDate={this.state.selectedSpecificDate}
            />
          </div>

          <div className="content">
            <LazyLoad height={300} once>
              {results.map((item, index) => (
                <ResultItem
                  key={item.id}
                  result={item}
                  selectedDepartureFilter={this.state.selectedDepartureFilter}
                  selectedSpecificDate={this.state.selectedSpecificDate}
                />
              ))}
            </LazyLoad>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
