// Set the dates for form open and close
var formOpenDate = new Date("2023-08-31T06:00:00+03:00"); // EEST (UTC+3)
var formCloseDate = new Date("2023-12-06T06:00:00+03:00"); // EEST (UTC+3)

document.addEventListener("DOMContentLoaded", function(event) {

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
      submitButton.style.background = "gray";
      submitButton.style.cursor = "not-allowed";
      submitButton.value = "Формата не е активна!";
  }

  // Enable form submission
  function enableFormSubmission() {
      var submitButton = document.getElementById("submit-button");
      submitButton.value = "Записване";
  }
});



const phoneInput = document.querySelector('input[name="Тел. номер"]');
const phoneId = document.getElementById('phone-number');

const fullNameInput = document.querySelector('input[name="Родител"]');
const fullNameId = document.getElementById('parent-name');

const contestantNameInput = document.querySelector('input[name="Участник"]');
const contestantNameId = document.getElementById('competitors-name');

const emailInput = document.querySelector('input[name="Email"]');
const emailId = document.getElementById('email-signup');

const cityInput = document.querySelector('select[name="Населено място"]');
const cityId = document.getElementById('city');

const schoolInput = document.querySelector('select[name="Училище"]');
const schoolId = document.getElementById('school-name');

const fileInput = document.getElementById('images');

const imgUploaded = document.getElementById('imageUploaded');

const submitButton = document.getElementById('submit-button');

const phoneRegex = /^(0|\+359)([87][0-9]{8})$/;
const fullNameRegex = /^[а-яА-Яa-zA-Z]+\s[а-яА-Яa-zA-Z]+$/;;
const contestantNameRegex = /^[а-яА-Яa-zA-Z]+\s[а-яА-Яa-zA-Z]+$/;;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

function checkImgUploadedContent() {
  const intervalId = setInterval(() => {
      if (imgUploaded.innerHTML === "Image uploaded") {
          clearInterval(intervalId); // Stop checking once content is "Image uploaded"
          updateSubmitButton(); // Call the function to enable the submit button
      }
  }, 1000); // Check every 1 second
}

checkImgUploadedContent();

function updateSubmitButton() {
    const allFieldsFilled = (
      phoneInput.value !== '' &&
      fullNameInput.value !== '' &&
      contestantNameInput.value !== '' &&
      emailInput.value !== '' &&
      cityInput.value !== '' &&
      schoolInput.value !== ''
    );

    //Regex Tests
    const isValidPhone = phoneRegex.test(phoneInput.value);
    const isValidFullName = fullNameRegex.test(fullNameInput.value);
    const isValidContestantName = contestantNameRegex.test(contestantNameInput.value);
    const isValidEmail = emailRegex.test(emailInput.value);
    
    const isFileUploaded = fileInput.files.length > 0 && imgUploaded.innerHTML === "Image uploaded";

    const transitionDuration = '0.7s'; 
    const transitionDurationButton = '0.4s'; 

    phoneId.style.transition = `background-color ${transitionDuration}`;
    fullNameId.style.transition = `background-color ${transitionDuration}`;
    contestantNameId.style.transition = `background-color ${transitionDuration}`;
    emailId.style.transition = `background-color ${transitionDuration}`;
    cityId.style.transition = `background-color ${transitionDuration}`
    schoolId.style.transition = `background-color ${transitionDuration}`
    submitButton.style.transition = `background-color ${transitionDurationButton}`;
  
    phoneId.style.backgroundColor = phoneInput.value === '' ? 'f9f9f9' : (isValidPhone ? 'rgba(0, 196, 0, 0.41)' : 'rgba(255, 0, 0, 0.8)');
    fullNameId.style.backgroundColor = fullNameInput.value === '' ? 'f9f9f9' : (isValidFullName ? 'rgba(0, 196, 0, 0.41)' : 'rgba(255, 0, 0, 0.8)');
    contestantNameId.style.backgroundColor = contestantNameInput.value === '' ? 'f9f9f9' : (isValidContestantName ? 'rgba(0, 196, 0, 0.41)' : 'rgba(255, 0, 0, 0.8)');
    emailId.style.backgroundColor = emailInput.value === '' ? 'f9f9f9' : (isValidEmail ? 'rgba(0, 196, 0, 0.41)' : 'rgba(255, 0, 0, 0.8)');

    const isValidData = isValidPhone && isValidFullName && isValidContestantName && isValidEmail && allFieldsFilled;

    var now = new Date();
    var nowEET = new Date(now.getTime() + (now.getTimezoneOffset() + 180) * 60000); // Adjust for EET (UTC+3)

    var timeUntilOpen = formOpenDate - nowEET;
    var timeUntilClose = formCloseDate - nowEET;

    //Check to see if its valid
    
    const isFormOpen = timeUntilOpen <= 0 && timeUntilClose > 0;

    submitButton.style.backgroundColor = (isValidData && isFormOpen && isFileUploaded) ? '' : 'gray';
    submitButton.disabled = (isValidData && isFormOpen && isFileUploaded) ? false : true;
    submitButton.style.cursor = (isValidData && isFormOpen && isFileUploaded) ? 'pointer' : 'not-allowed';
    
    fullNameInput.parentElement.classList.toggle('invalid', !isValidFullName);
    contestantNameInput.parentElement.classList.toggle('invalid', !isValidContestantName);
    emailInput.parentElement.classList.toggle('invalid', !isValidEmail);
    cityInput.parentElement.classList.toggle('invalid', cityInput.value === '');
    schoolInput.parentElement.classList.toggle('invalid', schoolInput.value === '');
   
  }

phoneInput.addEventListener('input', () => {
  updateSubmitButton();
});

fullNameInput.addEventListener('input', () => {
  updateSubmitButton();
});

contestantNameInput.addEventListener('input', () => {
  updateSubmitButton();
});

emailInput.addEventListener('input', () => {
  updateSubmitButton();
});

cityInput.addEventListener('change', () => {
  updateSubmitButton();
});

schoolInput.addEventListener('change', () => {
  updateSubmitButton();
});

fileInput.addEventListener('change', () => {
  if(fileInput.files.length > 0)
  {
    updateSubmitButton();
  }
});

updateSubmitButton();
