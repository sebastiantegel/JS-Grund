window.onload = function () {
  //   let myPromise = new Promise(function (resolve, reject) {
  //     setTimeout(() => {
  //       let i = 10;
  //       if (i === 10) {
  //         resolve(i);
  //       } else {
  //         reject("Hoppsan, nu blev det fel");
  //       }
  //     }, 3000);
  //   });

  //   myPromise.then(
  //     (x) => {
  //       console.log(x);
  //     },
  //     (e) => {
  //       console.log("Ett fel!", e);
  //     }
  //   );

  document.getElementById("search").addEventListener("click", doSearch);
};

function success(x) {
  console.log("Fick data:", x);
}

function error(e) {
  console.log("Fel:", e);
}

function doSearch() {
  let toSearchFor = document.getElementById("searchtext").value;
  fetch("http://www.omdbapi.com/?s=" + toSearchFor + "&apikey=416ed51a")
    .then((qwert) => qwert.json())
    .then((result) => {
      console.log(result.Search);

      for (let i = 0; i < result.Search.length; i++) {
        let heading = document.createElement("h3");
        let img = document.createElement("img");
        let year = document.createElement("span");

        heading.innerHTML = result.Search[i].Title;
        img.src = result.Search[i].Poster;
        year.innerHTML = result.Search[i].Year;

        let container = document.createElement("div");
        container.addEventListener("click", () => {
          handleMovieClick(result.Search[i].imdbID);
        });
        container.className = "movie-container";
        container.appendChild(heading);
        container.appendChild(img);
        container.appendChild(year);

        document.getElementById("result").appendChild(container);
      }
    });
}

function handleMovieClick(imdbid) {
  fetch("http://www.omdbapi.com/?i=" + imdbid + "&apikey=416ed51a")
    .then((response) => response.json())
    .then((result) => console.log(result));
}
