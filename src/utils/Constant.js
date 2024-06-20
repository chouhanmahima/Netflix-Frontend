const API_END_POINT = "http://localhost:8080/api/v1/user";

export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZjc5MTkxNDVjNTE4YzlmZjU1ZjU4ODFjMzBmYTI4YiIsInN1YiI6IjY2MTEyMjEyZGY4NmE4MDE2NDUzMWJmNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.d11VRk8hygH0v7lJkjnNKLYHpgaiOe19rgzY61wiwIk'
  }
};

export const Now_Playing_Movies = "https://api.themoviedb.org/3/movie/now_playing";
export const Popular_Movies = "https://api.themoviedb.org/3/movie/popular";
export const Top_Rated_Movies = "https://api.themoviedb.org/3/movie/top_rated";
export const Upcoming_Movies = "https://api.themoviedb.org/3/movie/upcoming";

export const TMDB_IMG_URL = "https://image.tmdb.org/t/p/w500";

export const SEARCH_MOVIE_URL = "https://api.themoviedb.org/3/search/movie?query=";

export default API_END_POINT;