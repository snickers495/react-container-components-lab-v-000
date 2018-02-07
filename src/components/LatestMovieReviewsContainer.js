import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component {
  constructor() {
    super();
    this.state = {
<<<<<<< HEAD
      reviews: []
    }
  }
  componentDidMount(){
    fetch(URL)
    .then(resp => resp.json())
    .then(reviews => this.setState({reviews: reviews.results}))
  }

  render(){
    return(
      <div className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews}/>
=======
      reviews: [],
      render: false
    }
  }

  componentDidUpdate(prevProps, prevState){
    if (this.state.reviews !== prevState.reviews) {
      this.setState({render: true})
    }
  }
  render(){
    return(
      <div className="latest-movie-reviews">
      {this.state.render }
>>>>>>> a066c1e5681ca3b7342f0be35544876232036723
      </div>
    )
  }
}
