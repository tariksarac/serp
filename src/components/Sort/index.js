import React from 'react';
import './SortView.css';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

class SortView extends React.Component {
  constructor(props) {
    super(props);

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
    const activeItemStyle = {
      color: '#409CD1'
    };
    return (
      <div className="sort-view">
        <div className="sort-by">
          <p>Sort by</p>
        </div>
        <DropDownMenu
          value={this.props.selectedSort}
          onChange={this.props.handleSort}
          className="my-drop-down"
          labelStyle={labelStyle}
          iconStyle={iconStyle}
          selectedMenuItemStyle={activeItemStyle}
          iconButton={<div className='drop-down-icon'/>}
        >
          <MenuItem value={'id'} primaryText="Date" />
          <MenuItem value={'rating'} primaryText="Popularity" />
          <MenuItem value={'length'} primaryText="Duration" />

        </DropDownMenu>
        <div className="switch-button" />
      </div>
    );
  }
}

export default SortView;
