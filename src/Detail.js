import React from "react";

export default function Detail({ film }) {


  if (!film) {
    return <div  className = 'details'>Select a film</div>;
  }
  return (
    <div className = 'details'>
      
      <div className = 'left'>
        <h2>{film.title}</h2>
        <img src={film.image} alt = 'banners'/>
        <div className = 'stat'>
          <b>Director</b>: {film.director}
        </div>
        <div className = 'stat'>
          <b>Producer</b>: {film.producer}
        </div>
        <div className = 'stat'>
          <b>Released</b>: {film.release_date}
        </div>        
      </div>
      <div className='right'>
      <img src={film.movie_banner} alt = 'banners' className='banner'/>
        <p>{film.description}</p>
        
      </div>
      
    </div>
  );
}
