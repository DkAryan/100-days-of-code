let wordInput = document.querySelector("#word-input");
let searchBtn = document.querySelector("#search-btn");
let resultcontainer = document.querySelector("#result-container");

async function wordsSearch(params) {
  let words = wordInput.value;
  const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${words}`;
  try {
    resultcontainer.innerText = "Loading...";
    const resonse = await fetch(apiUrl);

    if (resonse.ok) {
      const data = await resonse.json();
      console.log(data);
      resultcontainer.innerHTML = `<h1>${data[0].word}</h1>
        <p>Meaning:- ${data[0].meanings[0].definitions[0].definition}</p>`;
      //   resultcontainer.innerHTML = `Meaning:- ${data[0].meanings[0].definitions[0].definition}`;
    } else {
      resultcontainer.innerText = "Word not found";
    }
  } catch (error) {
    console.log("Hey Kuch Glat Huei", error);
  }
}

searchBtn.addEventListener("click", function () {
  console.log("button clicked");
  if (wordInput.value !== "") {
    console.log("function called");
    wordsSearch();
    wordInput.value = "";
  } else {
    alert("Enter Any Thing");
  }
});

wordInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    if (wordInput.value !== "") {
      console.log("button Clicked");

      wordsSearch();
      wordInput.value = "";
    } else {
      alert("Enter Any Thing");
    }
  }
});
