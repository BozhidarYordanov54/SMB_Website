var checkbox = document.getElementById("checkbox"); 

var loadingScreen = document.getElementById('loading-screen');
var loadingScreenImage = document.getElementById('loading-logo');

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

var mathCompetitionInfo = document.querySelector('.yearly-competitions');

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

//members.html
var tableCaptionStyle = document.querySelector('caption');
var tableContainerBoolean = document.querySelector('.table-container');
var tableRowStyle = document.querySelectorAll('.table-container tr');
var tableDataStyle = document.querySelectorAll('.table-container td');
var tableHeadStyle = document.querySelectorAll('.table-container th');
//end of members.html styles

//newestArticle.html style
var newestArticleHeader = document.querySelector('.article-header');
var newestArticleGreeting = document.querySelector('.article-competition-greeting');
var newestArticleText = document.querySelector('.article-info');
var newestArticleCompHeader = document.querySelector('.competition_header');
//end of newestArticle.html style

var articleHeader = document.querySelector('.header-wrapper');
var articleResult = document.querySelector('.article-text');
var olderArticle002Page = document.querySelector('.newest-article-page');
var olderArticle002Header = document.querySelector('.competition_header');

var decemberArticleCheck = document.querySelector('.december-competition-article');
var decemberAcordion = document.querySelectorAll('.december-element');

var text = document.querySelectorAll('.text');

var lastArticleHeaderWrapper = document.querySelector('.article-header-wrapper');

var siteFooter = document.querySelector(`footer`); 

var olderArticle1TableWrapper = document.querySelector('.table-wrapper');
var olderArticle1TableRow = document.querySelectorAll('.table-wrapper tr');
var olderArticle1TableData = document.querySelectorAll('.table-wrapper td');
var olderArticle1TableHeader = document.querySelectorAll('.table-wrapper th');

const transitionTime = "0.7s"; 

// Function to set dark mode styles
function setDarkModeStyles() {
    document.body.style.backgroundColor = "#1e1e1e"; 
    document.body.style.transition = `background-color ${transitionTime}`;

    loadingScreen.style.background = '#2c2c2c';
    loadingScreenImage.src = 'Images/Logo/Logo-White.png';

    navbarImage.src = "Images/Logo/Logo-White.png"; 

    siteNav.style.backgroundColor = "#234465"; 
    siteNav.style.transition = `background-color ${transitionTime}`;
    siteNav.style.borderBottom = '#4B4B4B';

    //Checks for index.html
    if(newestArticle)
    {
        newestArticle.style.backgroundColor = "#234465"; 
        newestArticle.style.transition = `background-color ${transitionTime}`;
    }

    if(newestArticleText)
    {
        newestArticleText.style.color = "#ffffff";
        newestArticleText.style.transition = `color ${transitionTime}`;
    }

    if(text)
    {
        text.forEach(function(t)
        {
            t.style.color = '#ffffff';
        })
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

        contactFormWrapper.style.background = '#2c2c2c';
        contactFormWrapper.style.transition = `background-color ${transitionTime}`;
        contactFormWrapper.style.boxShadow = ' box-shadow: 6px 6px 10px -1px rgba(0, 0, 0, 0.15), -6px -6px 10px -1px rgba(255, 255, 255, 0.15)';
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

    if(olderArticle1TableWrapper)
    {
        for(let i = 0; i < olderArticle1TableRow.length; i++)
        {
            if(i % 2 === 0)
            {
                olderArticle1TableRow[i].style.background = '#ccc';
            }
            else
            {
                olderArticle1TableRow[i].style.background = '#E6E6E6';
            }
        }
    }

    if(newestArticleGreeting){

        newestArticleGreeting.style.color = '#fff';
        newestArticleHeader.style.background = '#234465';
    }

    if(articleResult){
        articleResult.style.color = '#fff';
        articleHeader.style.backgroundColor = '#01468f';
        articleHeader.style.transition = `background-color ${transitionTime}`; 
        
    }

    if(mathCompetitionInfo){
        var articleHeader = document.querySelector('.article-header');
        var tableHeader = document.querySelector('.responsive-table-header');

        tableHeader.style.color = '#fff';

        articleHeader.style.backgroundColor = '#234465';

        mathCompetitionInfo.style.color = '#fff';

    }

    if(olderArticle002Page)
    {
        olderArticle002Page.style.color = '#ffffff';
        olderArticle002Header.style.background = '#234465';
    }


    if(lastArticleHeaderWrapper)
    {
        lastArticleHeaderWrapper.style.background = '#01468f';
    }

    if(decemberArticleCheck)
    {
        decemberArticleCheck.style.color = '#ffffff';
        decemberAcordion.forEach(function(element)
        {
            element.style.color = '#000';
        })
    }

    siteFooter.style.backgroundColor = "#234465"; 
}

// Function to remove dark mode styles
function removeDarkModeStyles() {
    document.body.style.backgroundColor = ''; 
    loadingScreen.style.background = '';
    loadingScreenImage.src = 'Images/Logo/Logo.png';
    navbarImage.src = "Images/Logo/Logo.png"; 
    siteNav.style.backgroundColor = ''; 
    if(newestArticle){
        newestArticle.style.backgroundColor = ''; 
    }

    if(newestArticleText)
    {
        newestArticleText.style.color = "";
        newestArticleText.style.transition = `color ${transitionTime}`;
    }

    if(text)
    {
        text.forEach(function(t)
        {
            t.style.color = '';
        })
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

    if(tableContainerBoolean){
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

    if(newestArticleGreeting){
        newestArticleGreeting.style.color = '';
        newestArticleHeader.style.background = '';
    }

    if(olderArticle1TableWrapper)
    {
        for(let i = 0; i < olderArticle1TableRow.length; i++)
        {
            if(i % 2 === 0)
            {
                olderArticle1TableRow[i].style.background = '';
            }
            else
            {
                olderArticle1TableRow[i].style.background = '';
            }
        }
    }

    if(articleResult){
        articleResult.style.color = '';
        articleHeader.style.backgroundColor = '';
        easterMathCompArticleDescription.style.backgroundColor = '';
        easterMathCompArticlePDFResults.style.backgroundColor = '';
    }

    if(olderArticle002Page)
    {
        olderArticle002Page.style.color = '';
        olderArticle002Header.style.background = '';
    }

    if(lastArticleHeaderWrapper)
    {
        lastArticleHeaderWrapper.style.background = '';
    }

    if(decemberArticleCheck)
    {
        decemberArticleCheck.style.color = '';
    }

    if(mathCompetitionInfo){
        var articleHeader = document.querySelector('.article-header');
        var tableHeader = document.querySelector('.responsive-table-header');

        tableHeader.style.color = '';

        articleHeader.style.backgroundColor = '';

        mathCompetitionInfo.style.backgroundColor = '';
        mathCompetitionInfo.style.transition = `background-color ${transitionTime}`;
        mathCompetitionInfo.style.color = '';

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
