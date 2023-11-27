document.addEventListener('DOMContentLoaded', function () {
    let seconds = 0;
    var timerBorder = document.querySelector('.timer-border');
    var timerSeconds = document.querySelector('.timer-seconds');

    function updateTimer() {
        seconds++;
        timerBorder.style.width = `${(seconds / 60) * 100}%`;
        timerSeconds.innerText = `${seconds}s`;
    }

    // kiekvienai sekunde
    const intervalId = setInterval(updateTimer, 1000);

    //  po 5 sekundžių
    setTimeout(function () {
        document.body.style.background = "DarkGray" 
    }, 5000);
});