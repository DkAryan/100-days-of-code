const main = document.querySelector("#main");
const form = document.querySelector("#form");
const search = document.querySelector("#search");

const apiUrl = "https://api.github.com/users/";

async function getUser(user) {
  try {
    const response = await fetch(apiUrl + user);
    if (!response.ok) {
      throw new Error("Profile Not Found");
    }
    console.log(response);
    const data = await response.json();

    console.log(data);
    createUserCard(data);
  } catch (err) {
    createErrorCard("No profile with this username");
  }
}

function createUserCard(user) {
    const cardHTML = `
        <div class="card">
            <div>
                <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
            </div>
            <div class="user-info">
                <h2>${user.name ? user.name : user.login}</h2>
                <p>${user.bio ? user.bio : 'No bio available'}</p>
                
                <ul>
                    <li>${user.followers} <strong>Followers</strong></li>
                    <li>${user.following} <strong>Following</strong></li>
                    <li>${user.public_repos} <strong>Repos</strong></li>
                </ul>
            </div>
        </div>
    `;
    main.innerHTML = cardHTML;
}

// Function 3: Error message dikhana agar galat username dale
function createErrorCard(msg) {
    const cardHTML = `
        <div class="card error-msg">
            <h2>${msg}</h2>
        </div>
    `;
    main.innerHTML = cardHTML;
}


form.addEventListener('submit', (e) => {
    e.preventDefault(); // Page refresh hone se rokne ke liye

    const user = search.value;

    if (user) {
        getUser(user);
        search.value = ''; // Search bar ko wapas khali karne ke liye
    }
});