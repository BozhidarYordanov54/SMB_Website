var nameRegex = /^[a-zA-Zа-яА-Я\s']+$/;
var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
var phoneNumberRegex = /^\d{10}$/;

var signupForm = document.getElementById('signup-form');

signupForm.addEventListener('submit', function(event) 
{
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var phoneNumberInput = document.getElementById('phone-number');

    // Validate name field
    if (!nameRegex.test(nameInput.value)) {
        alert('Please enter a valid name.');
        event.preventDefault(); // Prevent form submission
        return;
    }

    // Validate email field
    if (!emailRegex.test(emailInput.value)) 
    {
        alert('Please enter a valid email address.');
        event.preventDefault(); // Prevent form submission
        return;
    }
    if (!phoneNumberRegex.test(phoneNumberInput.value)) 
    {
        alert('Please enter a valid phone number (10 digits without spaces or dashes).');
        event.preventDefault(); // Prevent form submission
        return;
    }

    // Form is valid, allow submission
    alert('Form submitted successfully!');
});