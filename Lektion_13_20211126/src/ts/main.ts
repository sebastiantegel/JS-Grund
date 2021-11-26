import { IMovie } from "./models/IMovie";
import { IOmdbResponse } from "./models/IOmdbResponse";

window.onload = function () {
  document
    .getElementById("searchbutton")
    .addEventListener("click", handleClick);
};

async function handleClick() {
  let input: HTMLInputElement = document.getElementById(
    "movietitle"
  ) as HTMLInputElement;
  let movieTitle = input.value;

  let movies: IMovie[] = await search(movieTitle);

  createHtml(movies);
}

async function search(searchText: string): Promise<IMovie[]> {
  return fetch(`http://www.omdbapi.com/?s=${searchText}&apikey=416ed51a`)
    .then((response: Response) => response.json())
    .then((result: IOmdbResponse) => {
      return result.Search;
    });
}

function createHtml(movies: IMovie[]) {
  let container: HTMLDivElement = document.getElementById(
    "container"
  ) as HTMLDivElement;

  container.innerHTML = "";

  movies.forEach((movie: IMovie) => {
    let movieContainer: HTMLDivElement = document.createElement("div");
    let title = document.createElement("h3");
    let year = document.createElement("p");

    movieContainer.className = "movie";
    title.innerHTML = movie.Title;
    year.innerHTML = movie.Year;

    movieContainer.appendChild(title);
    movieContainer.appendChild(year);

    container.appendChild(movieContainer);
  });
}
