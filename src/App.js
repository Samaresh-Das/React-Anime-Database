import React, { useState } from "react";
import './styles/index.css';
import List from "./List";
import Detail from "./Detail";

export default function App() {
  const [film, setFilm] = useState(null);

  return (
    <div className="App">
      <h1>ANIME DATABASE (アニメデータベースのおかげで)</h1>
      <List setter={setFilm} />
      <Detail film={film} />
    </div>
  );
}

