import React from 'react';
import './ResultItemDetail.css';
import * as moment from 'moment';


const ResultItemDetail = ({ dates, selectedDepartureFilter, selectedSpecificDate }) => {
  return (
    <div className="result-item-detail">
      <div className="price">
        <div className="total">Total price</div>
        <div className="amount">
          <div>{`$${dates[0].usd}`}</div>
          <img src={require('../../../images/FULL Copy.svg')} />
        </div>
      </div>
      <div className="remain-seats-box">
        <MonthSeats dates={dates} selectedDepartureFilter={selectedDepartureFilter} selectedSpecificDate={selectedSpecificDate} />
      </div>
      <div className="view-more">View More</div>
    </div>
  );
};

export default ResultItemDetail;

const MonthSeats = ({ dates, selectedDepartureFilter, selectedSpecificDate }) => {
  let maxNumberOfItem = 2;
  return dates.map((item, index) => {
    if (selectedDepartureFilter && moment(item.start).format('MMM YYYY') === selectedDepartureFilter && maxNumberOfItem) {
      maxNumberOfItem -= 1;
      return (
          <MonthSeatsItem key={index} item={item}/>
      );
    }
    if(selectedSpecificDate && moment(item.start).format('MM-DD-YYYY') === moment(selectedSpecificDate).format('MM-DD-YYYY')){
        return (
            <MonthSeatsItem key={index} item={item}/>
        );
    }
    if (!selectedDepartureFilter && !selectedSpecificDate && maxNumberOfItem) {
      maxNumberOfItem -= 1;
      return (
          <MonthSeatsItem key={index} item={item}/>
      );
    }
  });
};

const MonthSeatsItem = ({item}) => {
    return (
        <div className="remain-seats-item">
            <div className="date">{`${moment(item.start).format('D MMM')}`}</div>
            <div className="seats">{`${item.availability} seats left`}</div>
        </div>
    )
}
