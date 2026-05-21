const ipInput = document.querySelector("#ip-input");
const searchBtn = document.querySelector("#search-btn")

const ipdisplay = document.querySelector("#ip-display");
const locationdisplay = document.querySelector("#location-display");
const timezoneisplay = document.querySelector("#timezone-display");
const ispisplay = document.querySelector("#isp-display");
const loadingMessage = document.querySelector("#loading-message");
const resultCard = document.querySelector(".results-card");


async function ipFinder() {
     
    try {
        
        const response = await fetch(`https://ipinfo.io/${ipInput.value}/geo`);
       
        const data = await response.json();
        console.log(data);
        ipdisplay.innerText = data.ip;
        locationdisplay.innerText = data.city;
        timezoneisplay.innerText = data.timezone;
        ispisplay.innerText = data.org;
         loadingMessage.classList.add("hidden");


    } catch (error) {
        console.log("Kuch error aa gya ", error);
    }
}

searchBtn.addEventListener("click", () => {
    console.log("button clicked")
    if (ipInput.value !== "") {
        ipFinder();
        loadingMessage.classList.remove("hidden")
       
    } else {
        console.log("Please enter ip address");
    }
})