import React from 'react';
import './ResultItemDescription.css';

const ResultItemDescription = ({name, description, length, cities, operatorName}) => {
  return (
    <div className="result-item-description">
      <div className="description-header">{name}</div>
      <div className="description-description"><p>{description}</p></div>
      <div className="description-item">
        <div className="description-item-title">DAYS</div>
        <div className="description-item-value">{`${length} days`}</div>
      </div>
      <div className="description-item">
        <div className="description-item-title">DESTINATIONS</div>
        <div className="description-item-value">{`${cities.length} cities`}</div>
      </div>
      <div className="description-item">
        <div className="description-item-title">STARTS/ ENDS IN</div>
        <div className="description-item-value">{`${cities[0].name} / ${cities[cities.length - 1].name}`}</div>
      </div>
      <div className="description-item">
        <div className="description-item-title">OPERATOR</div>
        <div className="description-item-value">{operatorName}</div>
      </div>
    </div>
  );
};

export default ResultItemDescription;
