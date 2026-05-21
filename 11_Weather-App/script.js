const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const weatherResult = document.getElementById("weatherResult");

const apiKey = "b71ecdbf16868abddb210a81874d7654";

async function getWeather (city){
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
      const reposnse = await fetch(apiUrl);

    const data = await reposnse.json();

    let cityName = data.name;
let temperature = data.main.temp;
let weatherCondition = data.weather[0].main; 


weatherResult.innerHTML = `
    <h2>${cityName}</h2>
    <p>🌡️ Temperature: ${temperature}°C</p>
    <p>☁️ Condition: ${weatherCondition}</p>
`;

  } catch (error) {
    console.log("Kuch Error Aaa gya", error)
  }
}


searchBtn.addEventListener("click", function() {
    let cityName = cityInput.value;
    if (cityName !== "") {
        getWeather(cityName);
    } else{
        alert("Please Enter City Name");
    }
});

cityInput.addEventListener("keydown", function(event) {
    
    // Check kar rahe hain ki dabayi gayi key "Enter" hai ya nahi
    if (event.key === "Enter") {
        
        // Agar Enter dabaya gaya hai, toh hum 'Search' button ko automatically click karwa denge!
        searchBtn.click(); 
        
    }
});