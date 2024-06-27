/* hour, minute, second, millisecond */
let hr = "00", min = "00", sec = "00", ms = "00";
let startTimer;

const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");

/* add event lisntner to all the button*/
startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);

function put() {
    document.querySelector(".milliseconds").innerText = ms;
    document.querySelector(".seconds").innerText = sec;
    document.querySelector(".minutes").innerText = min;
    document.querySelector(".hours").innerText = hr;
}


function start() {
    startBtn.classList.add("active");
    stopBtn.classList.remove("stopActive");

    startTimer = setInterval(() => {
        ms++;
        if (ms == 100) {
            sec++;
            sec = sec < 10 ? "0" + sec : sec;
            ms = "00";
        }
        if (sec == 60) {
            min++;
            min = min < 10 ? "0" + min : min;
            sec = "00";
        }
        if (min == 60) {
            hr++;
            hr = hr < 10 ? "0" + hr : hr;
            min = "00";
        }
        put();
    }, 10);
}

function stop() {
    startBtn.classList.remove("active");
    stopBtn.classList.add("stopActive");
    clearInterval(startTimer);
}

function reset() {
    startBtn.classList.remove("active");
    stopBtn.classList.remove("stopActive");
    clearInterval(startTimer);
    hr = min = sec = ms = "00";
    put();
}