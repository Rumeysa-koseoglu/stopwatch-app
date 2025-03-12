let [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0]; //variables to track time
let timerRef = document.querySelector(".timerDisplay");
let int; //a variable to store the timer

//start the timer when the start button (startTimer) is clicked
document.getElementById("startTimer").addEventListener("click", () => {
    //the displayTimer function runs every 10 milliseconds
    if (int) {
        clearInterval(int);
    }
    int = setInterval(displayTimer, 10);
});

//pause the timer when the pause button (pauseTimer) is clicked
document.getElementById("pauseTimer").addEventListener("click", () => {
    clearInterval(int);
});

//reset the timer when the reset button (resetTimer) is clicked
document.getElementById("resetTimer").addEventListener("click", () => {
    clearInterval(int);
    [milliseconds, seconds, minutes, hours] = [0, 0, 0, 0]; //reset all values
    timerRef.innerHTML = "00 : 00 : 00 : 000"; //reset the time on the screen
});

function displayTimer() {
    milliseconds += 10;
    if (milliseconds == 1000) {
        milliseconds = 0;
        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
            if (minutes == 60) {
                minutes = 0;
                hours++;
            }
        }
    }
    //if a value is single digit, add "0"
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;

    timerRef.innerHTML = `${h} : ${m} : ${s} : ${ms}`;//print values correctly to the screen
};