import React from 'react';
import Banner from "../Banner";
import "./HomeScreen.css";
import Nav from "../Nav";
import requests from '../Requests';
import Row from "../Row";


function HomeScreen() {
  return (
    <div className="homeScreen">
        <Nav />

        <Banner />

        <Row 
        title='Petflix Movies'
        fetchUrl={requests.fetchPetMovies}
        isLargeRow
        />
        <Row title="Dog Movies" fetchUrl={requests.fetchDogMovies} />
        <Row title="Cat Movies" fetchUrl={requests.fetchCatMovies} />
        <Row title="Horse Movies" fetchUrl={requests.fetchHorseMovies} />
        <Row title="Rabbit Movies" fetchUrl={requests.fetchRabbitMovies} />
        <Row title="Animal Movies" fetchUrl={requests.fetchAnimalMovies} />
    </div>
  );
}

export default HomeScreen;