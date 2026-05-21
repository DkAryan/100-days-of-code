const jokeBtn = document.querySelector("#joke-btn");
const jokeText = document.querySelector("#joke-text");

async function jokegenerator() {
  const apiUrl = "https://icanhazdadjoke.com/";
  try {
    jokeText.innerText = "Loading Joke"
    const response = await fetch('https://icanhazdadjoke.com/', {
    headers: {
        'Accept': 'application/json'
    }
})
    const data = await response.json();

    jokeText.innerText = data.joke;
  } catch (error) {
    jokeText.innerText = "Something went Wrong"
  }
}

jokeBtn.addEventListener("click", ()=>{
    jokegenerator();
})

jokegenerator();