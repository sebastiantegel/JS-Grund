window.onload = function () {
    var _a;
    (_a = document.getElementById("save")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", handleClick);
    var firstname = "Sebastian";
    var x = 17;
    var i = 10;
    var product = x * i;
    console.log(firstname);
    var sum = addition(10, 17);
    console.log(sum);
    getMovies();
};
function addition(x, y) {
    return x + y;
}
function handleClick() {
    var myInput = document.getElementById("name");
    // let myInput = document.getElementById("name");
    var userText = myInput.value;
    var span = document.createElement("span");
    span.innerHTML = userText;
    document.body.appendChild(span);
}
var Movie = /** @class */ (function () {
    function Movie(imageUrl, title, year, imdb) {
        this.image = imageUrl;
        this.title = title;
        this.released = year;
        this.imdbID = imdb;
    }
    return Movie;
}());
function getMovies() {
    fetch("http://www.omdbapi.com/?s=star&apikey=416ed51a")
        .then(function (response) { return response.json(); })
        .then(function (result) {
        console.log(result.Search);
        var movies = result.Search.map(function (movie) {
            return new Movie(movie.Poster, movie.Title, movie.Year, movie.imdbID);
        });
        console.log(movies);
    });
}
