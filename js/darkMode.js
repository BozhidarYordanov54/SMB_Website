var checkbox = document.getElementById("checkbox");

var siteNav = document.querySelector('.site-header');
var newestArticle = document.getElementById('newest-article');
var olderArticleParagraphs = document.querySelectorAll(".older-article .text");
var siteFooter = document.querySelector(`footer`);


const transitionTime = "0.7s";

// Add an event listener to the checkbox to listen for changes
checkbox.addEventListener("change", function() {
    // Check if the checkbox is checked
    if (this.checked) {
        // The slider is checked
        document.body.style.backgroundColor = "#2c2c2c";
        document.body.style.transition = `background-color ${transitionTime}`;

        siteNav.style.backgroundColor = "#1a3c57";
        siteNav.style.transition = `background-color ${transitionTime}`;

        newestArticle.style.backgroundColor = "#1a3c57";
        newestArticle.style.transition = `background-color ${transitionTime}`;

        olderArticleParagraphs.forEach(function(paragraph) {
            paragraph.style.color = "#fff"; // Use a valid color format
        });

        siteFooter.style.backgroundColor = "#1a3c57";
        siteFooter.style.transition = `background-color ${transitionTime}`;
    } else {
        // The slider is not checked
        document.body.style.backgroundColor = ''; // Reset to default background color
        siteNav.style.backgroundColor = '';
        newestArticle.style.backgroundColor = ''; // Reset to default background color

        olderArticleParagraphs.forEach(function(paragraph) {
            paragraph.style.color = ''; // Use a valid color format
        });
    }
});
