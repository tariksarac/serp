import React from 'react';
import './ResultItemPicture.css';

const heart = require('../../../images/HEART.svg');

const ResultItemPicture = ({ images, rating, reviews, discount }) => {
    let image = images.find(item => item.is_primary)
  return (
    <div className="result-item-picture" style={{background:image && `url(${image.url})`}}>
        <div className="discount" style={{visibility: !discount.discount && 'hidden'}}>{`-${discount.discount}`}</div>
      <div className="heart">
        <img src={heart} />
      </div>
      <div className="reviews-box">
        <Stars rating={rating} />
        <div className="reviews">{`${reviews} reviews`}</div>
      </div>
    </div>
  );
};

export default ResultItemPicture;

const Stars = ({ rating }) => {
  return (
    <div className="stars">
      {Array(Math.ceil(rating))
        .fill()
        .map(
          (item, index) =>
            Math.ceil(rating) !== rating && rating < index + 1 ? (
              <img key={index} src={require('../../../images/HALF Copy.png')} />
            ) : (
              <img key={index} src={require('../../../images/FULL Copy.svg')} />
            )
        )}
    </div>
  );
};
