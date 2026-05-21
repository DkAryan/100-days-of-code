const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");
const recipesContainer = document.querySelector("#recipes-container");
const searchBtn = document.querySelector("#search-btn");

async function searchRecipes() {
  const input = searchInput.value;
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`,
    );
    const data = await response.json();

    if (data.meals !== null) {
      recipesContainer.innerHTML = `
  <div class="meal-card">
    <h2>${data.meals[0].strMeal}</h2>
    
    
    <p><strong>Category:</strong> ${data.meals[0].strCategory} | <strong>Origin:</strong> ${data.meals[0].strArea}</p>
    
    <!-- 3. Meal Image -->
    <img src="${data.meals[0].strMealThumb}" alt="${data.meals[0].strMeal}" style="max-width: 100%; height: auto; border-radius: 8px;">
    
    <!-- 4. Instructions -->
    <h3>Instructions:</h3>
    <p>${data.meals[0].strInstructions}</p>
    
    <!-- 5. Video Link (Agar available ho) -->
    ${data.meals[0].strYoutube ? `<a href="${data.meals[0].strYoutube}" target="_blank">Watch Recipe Video</a>` : ""}
  </div>
`;
    } else {
      recipesContainer.innerHTML = "Recipe Not Found";
    }
  } catch (error) {
    console.log("Kuch Galat Hua", error);
  }
}

searchBtn.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("Button Clicked");
  if (searchInput.value !== "") {
    searchRecipes();
    console.log("Function called");
  } else {
    alert("Please enter Something");
  }
});
