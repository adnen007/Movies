import axios from "axios";

const searchMovies = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: { api_key: "3ddd295c6c6a0f2b724d75607aa4e8c9", include_adult: false },
});

export { searchMovies };
