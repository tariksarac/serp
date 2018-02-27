import React from 'react';
import './ResultItem.css'
import ResultItemPicture from "./ResultItemPicture/index";
import ResultItemDescription from "./ResultItemDescription/index";
import ResultItemDetail from "./ResultItemDetail/index";

const ResultItem = () => {
  return (
    <div className="result-item">
      <ResultItemPicture />
      <ResultItemDescription />
      <ResultItemDetail />
    </div>
  );
};

export default ResultItem;
