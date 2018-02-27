import React, { Component } from 'react';
import './App.css';
import FiltersView from "./components/Filters/index";
import SortView from "./components/Sort/index";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {muiTheme} from "./utils/constants";
import ResultItem from "./components/ResultItem/index";

class App extends Component {
  render() {
    return (

        <MuiThemeProvider muiTheme={muiTheme}>
            <div className="App">
                <div className="sort"><SortView /></div>
                <div className="filter"><FiltersView /></div>
                <div className="content"><ResultItem /></div>
            </div>
        </MuiThemeProvider>


    );
  }
}

export default App;
