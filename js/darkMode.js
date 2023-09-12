var checkbox = document.getElementById("checkbox"); 
var siteNav = document.querySelector('.site-header'); 
var navbarImage = document.getElementById('logo-image-navbar');

var newestArticle = document.getElementById('newest-article'); 
var olderArticleParagraphs = document.querySelectorAll(".older-article .text"); 
var siteFooter = document.querySelector(`footer`); 

const transitionTime = "0.7s"; 

// Function to set dark mode styles
function setDarkModeStyles() {
    document.body.style.backgroundColor = "#2c2c2c"; 
    document.body.style.transition = `background-color ${transitionTime}`;

    navbarImage.src = "Images/Logo/Logo-White.png"; 

    siteNav.style.backgroundColor = "#1a3c57"; 
    siteNav.style.transition = `background-color ${transitionTime}`;

    newestArticle.style.backgroundColor = "#1a3c57"; 
    newestArticle.style.transition = `background-color ${transitionTime}`;

    olderArticleParagraphs.forEach(function(paragraph) {
        paragraph.style.color = "#fff"; // Use a valid color format 
    });
    siteFooter.style.backgroundColor = "#1a3c57"; 
}

// Function to remove dark mode styles
function removeDarkModeStyles() {
    document.body.style.backgroundColor = ''; 
    navbarImage.src = "Images/Logo/Logo.png"; 
    siteNav.style.backgroundColor = ''; 
    newestArticle.style.backgroundColor = ''; 
    olderArticleParagraphs.forEach(function(paragraph) {
        paragraph.style.color = ''; 
    });
    siteFooter.style.backgroundColor = ''; 
}

// Add an event listener to the checkbox to listen for changes
checkbox.addEventListener("change", function() {
    // Check if the checkbox is checked
    if (this.checked) {
        setDarkModeStyles();
        // Store the dark mode state in localStorage
        localStorage.setItem("darkMode", "true");
    } else {
        removeDarkModeStyles();
        // Remove the dark mode state from localStorage
        localStorage.setItem("darkMode", "false");
    }
});

// Check if dark mode preference exists in localStorage
var darkModePreference = localStorage.getItem("darkMode");

if (darkModePreference === "true") {
    checkbox.checked = true;
    setDarkModeStyles();
} else {
    checkbox.checked = false;
}
