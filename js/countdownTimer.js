document.addEventListener("DOMContentLoaded", function(event) {
    // Set the date and time for the next event
    var eventDate = new Date("2023-11-15T10:00:00Z");

    // Update the countdown every second
    var countdownTimer = setInterval(function() {
        // Get the current date and time
        var now = new Date().getTime();

        // Calculate the time remaining
        var timeRemaining = eventDate - now;

        // Check if the event has already passed
        if (timeRemaining <= 0) {
            clearInterval(countdownTimer);
            document.getElementById("countdown").innerHTML = "Event has started!";
                    disableFormSubmission();
                    return;
                }

                // Calculate days, hours, minutes, and seconds
                var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
                var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

                // Display the countdown
                document.getElementById("countdown").innerHTML = "Формата ще бъде отворена след: " + days + "д " + hours + "ч " + minutes + "м " + seconds + "с";

                // Enable/disable form submission based on time remaining
                if (timeRemaining > 21 * 24 * 60 * 60 * 1000) {
                    disableFormSubmission();
                } 
                else if(timeRemaining <= 7 * 24 * 60 * 60 * 1000){
                    disableFormSubmission();
                }
                else {
                    enableFormSubmission();
                }
            }, 1000);

            // Disable form submission
            function disableFormSubmission() {
                var submitButton = document.getElementById("submit-button");
                submitButton.disabled = true;
                submitButton.style.background = "gray";
                submitButton.style.cursor = "not-allowed";
                submitButton.value = "До състезанието има повече от 3 седмици!";
            }

            // Enable form submission
            function enableFormSubmission() {
                var submitButton = document.getElementById("submit-button");
                submitButton.disabled = false;
                submitButton.value = "Записване";
            }
        });