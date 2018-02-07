// Code MovieReviews Here// Code MovieReviews Here
import React, { Component } from 'react';

const MovieReviews = ({props}) => {
    return(
      <div className="review-list">
      {props.reviews.map(review => {

export default class MovieReviews extends Component {
  render(){
    const reviews= this.props.reviews
    return(
      <div className="review-list">
      {reviews.map(review => {
        return(
          <div className="review">
          review
          </div>
        )
      })}
      </div>
    )
  }
}
MovieReviews.defaultProp = {
  reviews: 'reviews'
}
<<<<<<< HEAD
export default MovieReviews;
=======
>>>>>>> a066c1e5681ca3b7342f0be35544876232036723
