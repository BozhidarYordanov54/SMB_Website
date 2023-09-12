window.addEventListener("load", function() {
    var loadingScreen = document.getElementById("loading-screen");

    const show = '0.7s';
    
    
    // Hide the loading screen after a delay (2 seconds in this example)
    setTimeout(function() {
        loadingScreen.style.display = "none";
    }, 2000); // Change the delay (in milliseconds) as needed
});
