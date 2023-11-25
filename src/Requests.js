const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const requests = {
  fetchPetMovies: `discover/movie?api_key=${API_KEY}&with_genres=16&query=pets`,
  fetchDogMovies: `search/movie?api_key=${API_KEY}&query=dog`,
  fetchCatMovies: `search/movie?api_key=${API_KEY}&query=cat`,
  fetchHorseMovies: `search/movie?api_key=${API_KEY}&query=pony`,
  fetchRabbitMovies: `search/movie?api_key=${API_KEY}&query=rabbit`,
  fetchAnimalMovies: `search/movie?api_key=${API_KEY}&query=animals`,
};

export default requests;

