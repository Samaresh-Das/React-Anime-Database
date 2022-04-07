import React from "react";

export default function Detail({ film }) {
  const style = {
    padding: 10
  };

  if (!film) {
    return <div  className = 'details'>Select a film</div>;
  }
  return (
    <div style={style} className = 'details'>
      
      <div className = 'left'>
        <h2>{film.title}</h2>
        <img src={film.image} alt = 'banners'/>
        <img src={film.movie_banner} alt = 'banners' className='banner'/>
      </div>
      <div className='right'>
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
      
    </div>
  );
}
