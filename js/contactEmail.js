document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const email = document.getElementById('email-contact').value;
        const phoneNumber = document.getElementById('phone-number').value;
        const message = document.getElementById('message').value;

        const subject = 'New Form Submission';
        const recipientEmail = 'smbvtarnovo@gmail.com';

        const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
            `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone Number: ${phoneNumber}\nMessage: ${message}`
        )}`;
        window.location.href = mailtoLink;
    });
});