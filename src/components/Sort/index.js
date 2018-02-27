import React from 'react';
import './SortView.css';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

class SortView extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: 1 };
  }
  render() {
    const labelStyle = {
      height: '43px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

    };
    const iconStyle = {
      height: 'auto',
        width:'auto',
      padding: '0px,',
      top: '13px',
      border: '0px',
    };
    return (
      <div className="sort-view">
        <div className="sort-by">
          <p>Sort by</p>
        </div>
        <DropDownMenu
          value={this.state.value}
          onChange={this.handleChange}
          className="my-drop-down"
          labelStyle={labelStyle}
          iconStyle={iconStyle}
          iconButton={<div className='drop-down-icon'/>}
        >
          <MenuItem value={1} primaryText="Never" />
          <MenuItem value={2} primaryText="Every Night" />
          <MenuItem value={3} primaryText="Weeknights" />
          <MenuItem value={4} primaryText="Weekends" />
          <MenuItem value={5} primaryText="Weekly" />
        </DropDownMenu>
        <div className="switch-button" />
      </div>
    );
  }
}

export default SortView;
