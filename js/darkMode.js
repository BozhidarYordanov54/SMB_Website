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

//contestSignUp.html dark mode styles
var countdownTimerStyle = document.querySelector('.countdown-timer');
var signupMainStyles = document.querySelector('.signup-main');
var dropContainerStyle = document.querySelector('.drop-container');
var dropContainerTitleStyle = document.querySelector('.drop-title');

var continueButtonStyle = document.querySelector('.continue-button');
var backButtonStyle = document.querySelector('.back-button');
//end of contestSignUp.html styles

//exams.html style
var examsTextStyle = document.querySelector('.exams-text');
var examMainStyle = document.querySelector('.exam-info');
//end of exams.html styles

var tableCaptionStyle = document.querySelector('caption');
var tableContainerBoolean = document.querySelector('.table-container');
var tableRowStyle = document.querySelectorAll('.table-container tr');
var tableDataStyle = document.querySelectorAll('.table-container td');
var tableHeadStyle = document.querySelectorAll('.table-container th');

var siteFooter = document.querySelector(`footer`); 

const transitionTime = "0.7s"; 

// Function to set dark mode styles
function setDarkModeStyles() {
    document.body.style.backgroundColor = "#1E1E1E"; 
    document.body.style.transition = `background-color ${transitionTime}`;

    navbarImage.src = "Images/Logo/Logo-White.png"; 

    siteNav.style.backgroundColor = "#234465"; 
    siteNav.style.transition = `background-color ${transitionTime}`;
    siteNav.style.borderBottom = '#4B4B4B';

    //Checks for index.html
    if(newestArticle){
        newestArticle.style.backgroundColor = "#234465"; 
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
        compHeader.style.backgroundColor = "#234465";
        compHeader.style.transition = `background-color ${transitionTime}`;
    }
    if(christmasMathCompArticle && christmasMathComp && easterMathCompArticle && easterMathComp){
        christmasMathComp.style.backgroundColor = "#234465";
        christmasMathComp.style.transition = `background-color ${transitionTime}`;

        compRegulationsWrapper.forEach(function(regulation){
            regulation.style.background = '#2c2c2c';
            regulation.style.transition = `background-colo ${transitionTime}`;
            regulation.style.boxShadow = "0 0 10px rgba(255,255,255, 0.4)";
            
        })

        christmasMathCompArticle.style.color = "#fff";
        christmasMathCompArticle.style.transition = `background-color ${transitionTime}`;

        easterMathComp.style.backgroundColor = "#234465";
        easterMathComp.style.transition = `background-color ${transitionTime}`;
        
        easterMathCompArticle.style.color = "#fff";
        easterMathCompArticle.style.transition = `color ${transitionTime}`;

        tasksLinks.forEach(function(links){
            links.style.color = "#007bff";
            
        })
        
    }
    //End of competitions.html checks

    //Check for elements in contacts.html
    if(contactsNames){
        contactsNames.style.background = '#234465';
        contactsNames.style.transition = `background-color ${transitionTime}`;

        contactFormWrapper.style.background = '#474747';
        contactFormWrapper.style.transition = `background-color ${transitionTime}`;
        contactFormWrapper.style.boxShadow = '0 0 10px rgba(255,255,255, 0.4)';
    }
    //End of check for elements in contacts.html

    //Start of contestSignUp.html element check
    if(signupMainStyles)
    {
        signupMainStyles.style.background = '#2c2c2c';
        //signupMainStyles.style.transition = `background-color ${transitionTime}`;
        signupMainStyles.style.color = '#fff';
        signupMainStyles.style.boxShadow = '0 0 10px rgba(255,255,255, 0.4)';

        countdownTimerStyle.style.background = '#013d7d';
        countdownTimerStyle.style.transition = `background-color ${transitionTime}`; 
        
        dropContainerStyle.style.color = '#fff';
        dropContainerTitleStyle.style.color = '#fff';

        continueButtonStyle.style.background = '#0068d6';
        backButtonStyle.style.background = '#0068d6';
    }
    //End contesignUp.html element check

    if(examMainStyle){
        examsTextStyle.style.background = '#234465';
        examMainStyle.style.transition = `background-color ${transitionTime}`;
        examMainStyle.style.color = '#fff';
    }

    if(tableContainerBoolean){
        tableCaptionStyle.style.background = '#7a7a7a';

        tableHeadStyle.forEach(function(head){
            head.style.background = '#b3b1b1';
            head.style.transition = `background-color ${transitionTime}`;
        })
        
        tableRowStyle.forEach(function(row){
            row.style.background = '#b3b1b1';
            row.style.transition = `background-color ${transitionTime}`;
            row.style.color = '#fff';
            
        });

        tableDataStyle.forEach(function(data){
            data.style.borderBottom = '#7d7d7d';
            
        });
        
        for (let i = 1; i < tableRowStyle.length; i += 2) {
            // Apply your custom styles here
            tableRowStyle[i].style.backgroundColor = '#7d7d7d'; // Example: Dark background color for even rows
            tableRowStyle[i].style.color = '#fff'; // Example: White text color for even rows
        }
    }

    siteFooter.style.backgroundColor = "#234465"; 
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
            regulation.style.background = '';
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

    if(signupMainStyles){
        signupMainStyles.style.background = '';
        signupMainStyles.style.transition = ``;
        signupMainStyles.style.color = '';
        signupMainStyles.style.boxShadow = '';

        countdownTimerStyle.style.background = '';
         
        dropContainerStyle.style.color = '';
        dropContainerTitleStyle.style.color = '';

        continueButtonStyle.style.background = '';
        backButtonStyle.style.background = '';
    }

    if(examMainStyle){
        examsTextStyle.style.background = '';

        examMainStyle.style.background = '';
        examMainStyle.style.color = '';
    }

    if(tableRowStyle){
        tableCaptionStyle.style.background = '';

        tableHeadStyle.forEach(function(head){
            head.style.background = '';
        })
        
        tableRowStyle.forEach(function(row){
            row.style.background = '';
            row.style.color = '';
            
        });

        tableDataStyle.forEach(function(data){
            data.style.borderBottom = '';
            
        });
        
        for (let i = 1; i < tableRowStyle.length; i += 2) {
            // Apply your custom styles here
            tableRowStyle[i].style.backgroundColor = ''; // Example: Dark background color for even rows
            tableRowStyle[i].style.color = ''; // Example: White text color for even rows
        }
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
