window.addEventListener("load", function() {
    // Get references to the loading screen, loading logo, and navbar logo
    const loadingScreen = document.getElementById("loading-screen");
    const loadingLogo = document.getElementById("loading-logo");
    const navbarLogo = document.getElementById("logo-image-navbar");

    // Get the position and size of the navbar logo
    const navbarLogoPosition = navbarLogo.getBoundingClientRect();
    const navbarLogoWidth = navbarLogoPosition.width;
    const navbarLogoHeight = navbarLogoPosition.height;

    // Calculate the initial centered position for the loading logo
    const centerX = window.innerWidth / 2 - navbarLogoWidth / 2;
    const centerY = window.innerHeight / 2 - navbarLogoHeight / 2;

    // Set the initial position and dimensions of the loading logo
    loadingLogo.style.position = 'fixed';
    loadingLogo.style.top = `${centerY - 190}px`;
    loadingLogo.style.left = `${centerX - 40}px`;
    loadingLogo.style.width = '150px'; // Set initial width to zero
    loadingLogo.style.height = '150px'; // Set initial height to zero

    // After two seconds, move the loading logo to the position of the navbar logo
    setTimeout(function() {
        // Use CSS transitions to animate the logo to the navbar position within one second
        loadingLogo.style.transition = "top 1s, left 1s, width 1s, height 1s";
        loadingLogo.style.top = `${navbarLogoPosition.top}px`;
        loadingLogo.style.left = `${navbarLogoPosition.left}px`;
        loadingLogo.style.width = `${navbarLogoWidth}px`;
        loadingLogo.style.height = `${navbarLogoHeight}px`;

        // Set the loading screen opacity to 0 (fade out) after the animation ends (1 second duration)
        setTimeout(function() {
            loadingScreen.style.transition = "opacity 0.7s";
            loadingScreen.style.opacity = "0";

            // Hide the loading screen after the fade-out animation completes
            setTimeout(function() {
                loadingScreen.style.display = "none";
            }, 1000);
        }, 900); // Delay the fade-out by one second
    }, 1000); // Delay the movement by two seconds
});
