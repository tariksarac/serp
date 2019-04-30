import React from 'react';
import './SortView.css';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import { activeItemStyle, iconStyle, labelStyle } from '../../utils/constants';

const SortView = ({selectedSort, handleSort}) => {
  return (
    <div className="sort-view">
      <div className="sort-by">
        <p>Sort by</p>
      </div>
      <DropDownMenu
        value={selectedSort}
        onChange={handleSort}
        className="my-drop-down"
        labelStyle={labelStyle}
        iconStyle={iconStyle}
        selectedMenuItemStyle={activeItemStyle}
        iconButton={<div className="drop-down-icon" />}
      >
        <MenuItem value={'rating'} primaryText="Popularity" />
        <MenuItem value={'length'} primaryText="Duration" />
      </DropDownMenu>
      <div className="switch-button" />
    </div>
  );
};

export default SortView;
