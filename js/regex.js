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

const submitButton = document.getElementById('submit-button');

const phoneRegex = /^(0|\+359)([87][0-9]{8})$/;
const fullNameRegex = /^[а-яА-Яa-zA-Z]+\s[а-яА-Яa-zA-Z]+$/;;
const contestantNameRegex = /^[а-яА-Яa-zA-Z]+\s[а-яА-Яa-zA-Z]+$/;;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

function updateSubmitButton() {
    const allFieldsFilled = (
      phoneInput.value !== '' &&
      fullNameInput.value !== '' &&
      contestantNameInput.value !== '' &&
      emailInput.value !== '' &&
      cityInput.value !== '' &&
      schoolInput.value !== ''
    );

    const isValidPhone = phoneRegex.test(phoneInput.value);
    const isValidFullName = fullNameRegex.test(fullNameInput.value);
    const isValidContestantName = contestantNameRegex.test(contestantNameInput.value);
    const isValidEmail = emailRegex.test(emailInput.value);

    const transitionDuration = '0.7s'; // Adjust the duration as needed
    const transitionDurationButton = '0.4s'; // Adjust the duration as needed

    phoneId.style.transition = `background-color ${transitionDuration}`;
    fullNameId.style.transition = `background-color ${transitionDuration}`;
    contestantNameId.style.transition = `background-color ${transitionDuration}`;
    emailId.style.transition = `background-color ${transitionDuration}`;
    cityId.style.transition = `background-color ${transitionDuration}`
    schoolId.style.transition = `background-color ${transitionDuration}`
    submitButton.style.transition = `background-color ${transitionDurationButton}`;
  
    phoneId.style.backgroundColor = phoneInput.value === '' ? 'f9f9f9' : (isValidPhone ? 'rgba(0, 196, 0, 0.41)' : 'red');
    fullNameId.style.backgroundColor = fullNameInput.value === '' ? 'f9f9f9' : (isValidFullName ? 'rgba(0, 196, 0, 0.41)' : 'red');
    contestantNameId.style.backgroundColor = contestantNameInput.value === '' ? 'f9f9f9' : (isValidContestantName ? 'rgba(0, 196, 0, 0.41)' : 'red');
    emailId.style.backgroundColor = emailInput.value === '' ? 'f9f9f9' : (isValidEmail ? 'rgba(0, 196, 0, 0.41)' : 'red');


    const isValidData = isValidPhone && isValidFullName && isValidContestantName && isValidEmail && allFieldsFilled;
    submitButton.style.backgroundColor = isValidData ? '' : 'gray';
    submitButton.disabled = isValidData ? false : true;
    submitButton.style.cursor = isValidData ? 'pointer' : 'not-allowed';
    
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

updateSubmitButton();
