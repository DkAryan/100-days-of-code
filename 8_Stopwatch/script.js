let display = document.querySelector("#display");
let start = document.querySelector("#start");
let reset = document.querySelector("#reset")
let stop = document.querySelector("#stop");



let second = 0;
let minute = 0;
let hour = 0;
let timer = null;




function updateClock(){
    second++;
    if (second == 60){
        second = 0;
        minute++;

        if(minute == 60){
            minute = 0;
            hour++;
        }
    }

 let s = String(second).padStart(2, "0"); // seconds ko 2 digit banayega
  let m = String(minute).padStart(2, "0"); // minutes ko 2 digit banayega
  let h = String(hour).padStart(2, "0");   // hours ko 2 digit banayega
    display.innerText = `${h}:${m}:${s}`;
}




start.addEventListener("click", function() {
    console.log("hello")
    if(timer !== null){
        clearInterval(timer);
    }
    timer = setInterval(updateClock, 1000);
});


stop.addEventListener("click", function(){
    clearInterval(timer);
})


reset.addEventListener("click", function (){
    clearInterval(timer);
    second = 0;
    minute = 0;
    hour = 0;
    display.innerText = "00:00:00";
})