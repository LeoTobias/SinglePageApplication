import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';


//id principal do html
const container = document.getElementById('myApp');

//raiz do react é o container
const root = createRoot(container);

//Variável de Filmes
const favoriteMovies = {
  name: ["Invocação do mal ", "Invocação 2", "Invocação 3"],
  description: ["terror mediano", "muito terror", "terrozinho"],
  photos: ["https://br.web.img2.acsta.net/pictures/210/166/21016629_2013062820083878.jpg", "https://play-lh.googleusercontent.com/WIoB_3qrwsJEpSs1k7Yu-BagH0x5TTD5GWvo8bsUrI8Db7PK6PGz8ALFlE96nyJvX5mMKIlX-E8S6SYjpzA=w240-h480-rw", "https://ogimg.infoglobo.com.br/in/25044783-121-506/FT1086A/invocacao.jpeg.jpg"],
};

//Variável JSX
const movieListJSX = (
  <div class="movie-list">
    {favoriteMovies.name.map((movieName, index) => (
      <div key={index} class="movie-card">
        <h2>{movieName}</h2>
        <p>{favoriteMovies.description[index]}</p>
        <img src={favoriteMovies.photos[index]} alt={movieName} />
      </div>
    ))}
  </div>
);

const texto = (<div class="divPrincipal">
  <list>
    <ol>Invocação do mal</ol>
    <ol>Invocação do mal 2</ol>
    <ol>Invocação do mal 3</ol>
  </list>
</div>)

root.render(movieListJSX);