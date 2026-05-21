const pokedex = document.querySelector("#pokedex");

async function fetchPokemon(pokemon) {
  const apiUrl = "https://pokeapi.co/api/v2/pokemon?limit=20";

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    data.results.forEach(async function (singlePokemon) {
      const singalpokemon = await fetch(singlePokemon.url);
      const detailData = await singalpokemon.json();

      let img = document.createElement("img");
      let li = document.createElement("li");
      li.classList.add("card");

      img.src = detailData.sprites.front_default;
      li.innerText = `${detailData.id} . ${singlePokemon.name}`;

      li.appendChild(img);
      pokedex.appendChild(li);
    });
  } catch (error) {
    console.log("Bhai Kuch Error aa gya", error);
  }
}

fetchPokemon();
