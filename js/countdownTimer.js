document.addEventListener("DOMContentLoaded", function(event) {
    // Set the dates for form open and close
    var formOpenDate = new Date("2023-11-23T15:10:00+03:00"); // EEST (UTC+3)
    var formCloseDate = new Date("2023-12-7T23:59:00+03:00"); // EEST (UTC+3)

    // Update the countdown every second
    var countdownTimer = setInterval(function() {
        // Get the current date and time in EET
        var now = new Date();
        var nowEET = new Date(now.getTime() + (now.getTimezoneOffset() + 180) * 60000); // Adjust for EET (UTC+3)

        // Calculate the time remaining for form open and close
        var timeUntilOpen = formOpenDate - nowEET;
        var timeUntilClose = formCloseDate - nowEET;

        if (timeUntilOpen > 0) {
            // Countdown until form opens
            displayCountdown("Формата ще бъде отворена след: ", timeUntilOpen);
            disableFormSubmission();
        } else if (timeUntilClose > 0) {
            // Countdown while form is open
            displayCountdown("Формата ще бъде затворена след: ", timeUntilClose);
            enableFormSubmission();
        } else {
            // Form is closed
            clearInterval(countdownTimer);
            document.getElementById("countdown").innerHTML = "Формата е затворена.";
            disableFormSubmission();
        }
    }, 1000);

    // Display the countdown with appropriate message
    function displayCountdown(message, timeRemaining) {
        var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = message + days + "д " + hours + "ч " + minutes + "м " + seconds + "с";
    }

    // Disable form submission
    function disableFormSubmission() {
        var submitButton = document.getElementById("submit-button");
        submitButton.disabled = true;
        submitButton.style.background = "gray";
        submitButton.style.cursor = "not-allowed";
    }

    // Enable form submission
    function enableFormSubmission() {
        var submitButton = document.getElementById("submit-button");
        submitButton.disabled = false;
        submitButton.value = "Записване";
    }
});
