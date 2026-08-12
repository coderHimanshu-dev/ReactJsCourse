import React, { useState } from "react";

const ArrayObject = () => {
  const [movie, setMovie] = useState([
    { id: 1, title: "Inception", rating: 8.8 },
    { id: 2, title: "The Dark Knight", rating: 9.0 },
    { id: 3, title: "Interstellar", rating: 8.7 },
  ]);

  const changeName = () => {
    setMovie(
      movie.map((m) => (m.id === 1 ? { ...movie, title: "Himansu", rating: 10 } : m)),
    );
  };

  return (
    <div>
      {movie.map(({ id, title, rating }) => (
        <h1 key={id}>
          {title} - {rating}
        </h1>
      ))}

      <button onClick={changeName}>Change Name</button>
    </div>
  );
};

export default ArrayObject;
