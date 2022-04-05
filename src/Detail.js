import React from "react";

export default function Detail({ film }) {
  const style = {
    padding: 10
  };

  if (!film) {
    return <div style={style} className = 'details'>Select a film</div>;
  }
  return (
    <div style={style} className = 'details'>
      <h2>{film.title}</h2>
      <p>{film.description}</p>
      <div>
        <b>Director</b>: {film.director}
      </div>
      <div>
        <b>Producer</b>: {film.producer}
      </div>
      <div>
        <b>Released</b>: {film.release_date}
      </div>
    </div>
  );
}
