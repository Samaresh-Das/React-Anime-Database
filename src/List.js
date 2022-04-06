import React, { useState, useEffect } from "react";


export default function List({ setter }) {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const url = "https://ghibliapi.herokuapp.com/films";
    fetch(url)
      .then(r => r.json())
      .then(r => setFilms(r));
  }, []);

  return (
    <div className = 'list'>
      <ul>
        {films &&
          films.map($anime=> (
            <li key={$anime.id} onClick={e => setter($anime) }>
              {$anime.title}
            </li>
          ))}
      </ul>
    </div>
  );
}