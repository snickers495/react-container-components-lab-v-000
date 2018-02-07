// Code MovieReviews Here// Code MovieReviews Here
import React, { Component } from 'react';

const MovieReviews = ({props}) => {
    return(
      <div className="review-list">
      {props.reviews.map(review => {
        return(
          <div className="review">
          review
          </div>
        )
      })}
      </div>
    )
}
MovieReviews.defaultProp = {
  reviews: 'reviews'
}
export default MovieReviews;
