import React from 'react';

const MovieDescription = (props) => {

const {filterProductsRate } = props;

 return (
  <div className="DescriptionDiv">
        {filterProductsRate.filter((el) => el.title=== props.match.params.title)
        .map((Movie, i) => (
          <div key={i} className="MovieDetail"> 
            <h1 className="titleMovieList" > {Movie.title}</h1>
            <p className="pdescription">{Movie.description} </p>
            <iframe title={i}  className="videoTrailer" src={Movie.trailerURL} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        ))  
        }
  </div>
 )  
}

export default MovieDescription;