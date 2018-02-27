import React from 'react'
import './ResultItemPicture.css'

const heart = require('../../../images/HEART.svg')

const ResultItemPicture = () => {
    return (
        <div className="result-item-picture">
            <div className="discount">-88%</div>
            <div className="heart"><img src={heart}/></div>
            <div className="reviews-box">
                <div className="stars"></div>
                <div className="reviews"></div>
            </div>
        </div>
    )
}

export default ResultItemPicture