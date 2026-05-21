const searchBox = document.querySelector("#search-input");
const searchBtn = document.querySelector("#search-btn");

const movieCard = document.querySelector("#movie-card");
const errorMessage = document.querySelector("#error-message");

const poster = document.querySelector("#poster-img");
const movieTitle = document.querySelector("#movie-title");
const movieYear = document.querySelector("#movie-year");
const movieRating = document.querySelector("#movie-rating");
const movieGenre = document.querySelector("#movie-genre");
const movieDesc = document.querySelector("#movie-desc");
const movieActors = document.querySelector("#movie-actors");

const apiKey = "4c7d4362";

async function getMovie(movie) {
  const apiUrl = `http://www.omdbapi.com/?t=${movie}&apikey=${apiKey}`;

  try {
    const resonse = await fetch(apiUrl);

    const data = await resonse.json();

    console.log(data);

    movieTitle.innerText = data.Title;
    movieYear.innerText = data.Year;
    movieRating.innerText = `⭐ ${data.imdbRating}`;
    movieGenre.innerText = data.Genre;
    movieDesc.innerText = data.Plot;
    movieActors.innerText = data.Actors;

    if (data.Poster !== "N/A") {
      poster.src = data.Poster;
    } else {
      poster.src = "https://via.placeholder.com/250x350?text=No+Poster"; // Default image
    }

    movieCard.classList.remove("hidden");
    errorMessage.classList.add("hidden");
  } catch (error) {
    console.log("Kuch Error Aaa gya", error);
  }
}

searchBtn.addEventListener("click", () => {
  console.log("Button click ho gaya!"); // Yeh line add karein

  const movie = searchBox.value.trim();

  if (movie !== "") {
    getMovie(movie);
    searchBox.value = "";
  }
});
