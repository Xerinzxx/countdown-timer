let interval;  // Declare the interval variable globally to keep track of the timer

function startCountdown() {
    const input = document.getElementById("datetime-picker").value;
    if (!input) {
        alert("Please select a date and time.");
        return;
    }

    const countDate = new Date(input).getTime();
    document.getElementById("countdown").classList.remove("hidden");

    // Clear any existing intervals before starting a new one
    if (interval) {
        clearInterval(interval);
    }

    const countdown = () => {
        const now = new Date().getTime();
        const gap = countDate - now;

        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        const days = Math.floor(gap / day);
        const hours = Math.floor((gap % day) / hour);
        const minutes = Math.floor((gap % hour) / minute);
        const seconds = Math.floor((gap % minute) / second);

        document.getElementById("days").innerText = days;
        document.getElementById("hours").innerText = hours;
        document.getElementById("minutes").innerText = minutes;
        document.getElementById("seconds").innerText = seconds;

        if (gap < 0) {
            clearInterval(interval);
            document.getElementById("countdown").innerHTML = "<h2>Time's up!</h2>";
        }
    };

    // Start the countdown and save the interval ID to the global variable
    interval = setInterval(countdown, 1000);
    countdown();  // Call countdown immediately to avoid 1-second delay
}
