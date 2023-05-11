const startEl = document.getElementById("start");
const stopEl = document.getElementById("stop");
const resetEl = document.getElementById("reset");
const timerEl = document.getElementById("timer");

let interval;
let timeLeft = 1500; //1500 seconds=25 minutes

function updateTimer() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    // let formattedString = `${minutes}:${seconds}`;
    let formattedString = `${minutes.toString().padStart(2,"0")}:${seconds.toString().padStart(2,"0")}`; //this helps the numbers to be two digits always like when there is one minute the it shows `01:01` instead of `1:01`
    timerEl.innerHTML = formattedString;
}

function startTimer() {
    interval = setInterval(() => {
        timeLeft--;
        updateTimer();
        if (timeLeft == 0) {
            clearInterval(interval);
            alert("Time's up!!!");
            timeLeft = 1500;
            updateTimer();
        }
    }, 1000)
}

function stopTimer() {
    clearInterval(interval);
}

function resetTimer() {
    clearInterval(interval);
    timeLeft = 1500;
    updateTimer();
}

startEl.addEventListener("click", startTimer);
stopEl.addEventListener("click", stopTimer);
resetEl.addEventListener("click", resetTimer);