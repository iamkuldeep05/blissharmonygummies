document.addEventListener("DOMContentLoaded", function() {
    const countdown = document.getElementById('timer');
    let timeLeft = 3600; // 1 hour in seconds

    const timerId = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerId);
            countdown.textContent = "Time's up!";
            return;
        }
        
        const hours = Math.floor(timeLeft / 3600);
        const minutes = Math.floor((timeLeft % 3600) / 60);
        const seconds = timeLeft % 60;

        countdown.textContent = `${String(hours).padStart(2, '0')}h ${String(minutes).padStart(2, '0')}m ${String(seconds).padStart(2, '0')}s`;
        
        timeLeft--;
    }, 1000);

    document.getElementById('apply-discount').onclick = function() {
        alert('Discount Applied!');
    }
});
