document.getElementById('signup-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const formElement = document.getElementById('signup-form');
    const formData = new FormData(formElement);
    const submitButton = document.getElementById('submit-button');
    const loadingSpinner = document.getElementById('loading-spinner');
    const url = 'https://script.google.com/macros/s/AKfycbxrHUaDmQ56YMVgdw4fgzL3Yv7UeIeQRv-k3XvMbGwYmcmNhKjNuwjp7IgkFpaPy4iSCQ/exec';

    try {
        // Disable the submit button and show the loading spinner
        submitButton.disabled = true;
        loadingSpinner.style.display = 'block';

        const response = await fetch(url, {
            method: 'POST',
            body: formData
        });

        if (response.status === 200) {
            // Set success message in localStorage
            localStorage.setItem('notificationMessage', 'Записването успешно!');
        } else {
            // Set error message in localStorage
            localStorage.setItem('notificationMessage', 'Записването не бе успешно. Моля опитайте отново.');
        }
    } catch (error) {
        // Set error message in localStorage
        localStorage.setItem('notificationMessage', 'Възникна грешка при обработката на формата. Моля опитайте отново.');
    } finally {
        // Re-enable the submit button and hide the loading spinner
        submitButton.disabled = false;
        loadingSpinner.style.display = 'none';
        // Redirect to the main page
        window.location.href = 'index.html';
    }
});
