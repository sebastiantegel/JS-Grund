window.onload = function () {
  document.getElementById("save")?.addEventListener("click", handleClick);

  let firstname: string = "Sebastian";

  let x: number = 17;
  let i: number = 10;

  let product: number = x * i;

  console.log(firstname);

  let sum = addition(10, 17);
  console.log(sum);

  getMovies();
};

function addition(x: number, y: number): number {
  return x + y;
}

function handleClick() {
  let myInput: HTMLInputElement = document.getElementById(
    "name"
  ) as HTMLInputElement;
  // let myInput = document.getElementById("name");

  let userText: string = myInput.value;

  let span: HTMLSpanElement = document.createElement("span");
  span.innerHTML = userText;
  document.body.appendChild(span);
}

interface IMovie {
  Poster: string;
  Title: string;
  Year: number;
  imdbID: string;
}

interface IOmdbResponse {
  Search: IMovie[];
}

class Movie {
  image: string;
  title: string;
  released: number;
  imdbID: string;

  constructor(imageUrl: string, title: string, year: number, imdb: string) {
    this.image = imageUrl;
    this.title = title;
    this.released = year;
    this.imdbID = imdb;
  }
}

function getMovies() {
  fetch("http://www.omdbapi.com/?s=star&apikey=416ed51a")
    .then((response: Response) => response.json())
    .then((result: IOmdbResponse) => {
      console.log(result.Search);

      let movies: Movie[] = result.Search.map((movie: IMovie) => {
        return new Movie(movie.Poster, movie.Title, movie.Year, movie.imdbID);
      });

      console.log(movies);
    });
}
