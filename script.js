const $ = (selector) => document.querySelector(selector);

let hoursOutput = $(".hours-output");
let minutesOutput = $(".minutes-output");
let secondsOutput = $(".seconds-output");

function exactTime(){
    let currentTime = new Date();
    hoursOutput.textContent = currentTime.getHours().toString().padStart(2, "0");
    minutesOutput.textContent = currentTime.getMinutes().toString().padStart(2, "0");
    secondsOutput.textContent = currentTime.getSeconds().toString().padStart(2, "0");
}

const currentTime = setInterval(exactTime, 1);

document.addEventListener("DOMContentLoaded", ()=>{
    exactTime();
});