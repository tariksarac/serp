import React from 'react';
import './ResultItem.css'
import ResultItemPicture from "./ResultItemPicture/index";
import ResultItemDescription from "./ResultItemDescription/index";
import ResultItemDetail from "./ResultItemDetail/index";

const ResultItem = ({result, selectedDepartureFilter, selectedSpecificDate}) => {
  return (
    <div className="result-item">
      <ResultItemPicture images={result.images} rating={result.rating} reviews={result.reviews} discount={result.dates && result.dates[0]}/>
      <ResultItemDescription name={result.name} description={result.description} length={result['length']} cities={result.cities} operatorName={result.operator_name}/>
      <ResultItemDetail dates={result.dates} selectedDepartureFilter={selectedDepartureFilter} selectedSpecificDate={selectedSpecificDate}/>
    </div>
  );
};

export default ResultItem;
