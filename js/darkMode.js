var checkbox = document.getElementById("checkbox"); 
var siteNav = document.querySelector('.site-header'); 
var navbarImage = document.getElementById('logo-image-navbar');

//index.html elements
var newestArticle = document.getElementById('newest-article'); 
var olderArticleParagraphs = document.querySelectorAll(".older-article .text"); 
//end of index.html elements

//competitions.html elements
var compHeader = document.querySelector('.competitions-header');
var compRegulationsWrapper = document.querySelectorAll('.comp-regulations-wrapper');

var christmasMathComp = document.querySelector('.cmc-header');
var  christmasMathCompArticle = document.querySelector('.christmas-math-competition');

var easterMathComp = document.querySelector('.emc-header');
var easterMathCompArticle = document.querySelector('.easter-math-competition');

var tasksLinks = document.querySelectorAll('.tasks li a');
//end of competitions.html elements

//contacts.html elements
var contactsNames = document.getElementById("contacts");
var contactFormWrapper = document.querySelector('.contacts');
//end of contacts.html elements

var siteFooter = document.querySelector(`footer`); 

const transitionTime = "0.7s"; 

// Function to set dark mode styles
function setDarkModeStyles() {
    document.body.style.backgroundColor = "#2c2c2c"; 
    document.body.style.transition = `background-color ${transitionTime}`;

    navbarImage.src = "Images/Logo/Logo-White.png"; 

    siteNav.style.backgroundColor = "#1a3c57"; 
    siteNav.style.transition = `background-color ${transitionTime}`;
    siteNav.style.borderBottom = '#4B4B4B';

    //Checks for index.html
    if(newestArticle){
        newestArticle.style.backgroundColor = "#1a3c57"; 
        newestArticle.style.transition = `background-color ${transitionTime}`;
    }

    if(olderArticleParagraphs){
        olderArticleParagraphs.forEach(function(paragraph) {
            paragraph.style.color = "#fff"; 
        });
    }
    //End of index.html checks for elements

    //Check for elements in competitions.html
    if(compHeader){
        compHeader.style.backgroundColor = "#1a3c57";
        compHeader.style.transition = `background-color ${transitionTime}`;
    }
    if(christmasMathCompArticle && christmasMathComp && easterMathCompArticle && easterMathComp){
        christmasMathComp.style.backgroundColor = "#1a3c57";
        christmasMathComp.style.transition = `background-color ${transitionTime}`;

        compRegulationsWrapper.forEach(function(regulation){
            regulation.style.boxShadow = "0 0 10px #949494";
            console.log("I am here");
        })

        christmasMathCompArticle.style.color = "#fff";
        christmasMathCompArticle.style.transition = `background-color ${transitionTime}`;

        easterMathComp.style.backgroundColor = "#1a3c57";
        easterMathComp.style.transition = `background-color ${transitionTime}`;

        easterMathCompArticle.style.color = "#fff";
        easterMathCompArticle.style.transition = `color ${transitionTime}`;

        tasksLinks.forEach(function(links){
            links.style.color = "#C900C9";
            
        })
        
    }

    if(contactsNames){
        contactsNames.style.background = '#1a3c57';
        contactsNames.style.transition = `background-color ${transitionTime}`;

        contactFormWrapper.style.background = '#474747';
        contactFormWrapper.style.transition = `background-color ${transitionTime}`;
        contactFormWrapper.style.boxShadow = '0 0 10px #949494';
    }
   
    //End of competitions.html checks


    siteFooter.style.backgroundColor = "#1a3c57"; 
}

// Function to remove dark mode styles
function removeDarkModeStyles() {
    document.body.style.backgroundColor = ''; 
    navbarImage.src = "Images/Logo/Logo.png"; 
    siteNav.style.backgroundColor = ''; 
    if(newestArticle){
        newestArticle.style.backgroundColor = ''; 
    }
    if(olderArticleParagraphs){
        olderArticleParagraphs.forEach(function(paragraph) {
            paragraph.style.color = ''; 
        });
    }

    if(christmasMathCompArticle && christmasMathComp && easterMathCompArticle && easterMathComp){
        compHeader.style.backgroundColor = "";
        christmasMathComp.style.backgroundColor = "";

        compRegulationsWrapper.forEach(function(regulation){
            regulation.style.boxShadow = "";
        })

        christmasMathCompArticle.style.color = "";
        easterMathComp.style.backgroundColor = "";
        easterMathCompArticle.style.color = "";

        tasksLinks.forEach(function(links){
            links.style.color = "";
        })
        
    }

    if(contactsNames){
        contactsNames.style.background = '';
        contactFormWrapper.style.background = '';
        contactFormWrapper.style.boxShadow = '';
    }

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
