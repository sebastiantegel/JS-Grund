import { IMovie } from "./models/IMovie";
import { IOmdbResponse } from "./models/IOmdbResponse";
import { Movie } from "./models/Movie";

window.onload = function () {
  fetch("http://www.omdbapi.com/?s=star&apikey=416ed51a")
    .then((response: Response) => response.json())
    .then((result: IOmdbResponse) => {
      console.log(result.Search);

      let movies: Movie[] = result.Search.map((movie: IMovie) => {
        return new Movie(movie.Poster, movie.Title, movie.Year, movie.imdbID);
      });

      console.log(movies);
    });
};
