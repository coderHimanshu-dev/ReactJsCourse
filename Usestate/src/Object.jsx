/* import React, { useState } from "react";

const Object = () => {
  const [movie, setMovie] = useState({
    title: "john wick",
    rating: 5.5,
  });

  const updaRating = () => {
    const copyMovie = {
      ...movie,
      rating: 7,
    };
    setMovie(copyMovie);
  };

  return (
    <div>
      <h1>Movie : {movie.title}</h1>
      <h1>Rating : {movie.rating}</h1>
      <button onClick={updaRating}>Update Rating</button>
    </div>
  );
};

export default Object;
 */



import React, { useState } from 'react'

const Object = () => {

    const [movie, setMovie] = useState({
        title : "John wick",
        rating : 7
    })

 const updateRating = () =>{
    setMovie({...movie, rating : 40})
 }


  return (
    <div>
      <h1>{movie.title}</h1>
      <h1>{movie.rating}</h1>
      <button onClick={updateRating}>Update Rating</button>
    </div>
  )
}

export default Object


