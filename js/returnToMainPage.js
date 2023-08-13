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

        // Check if the response indicates success (adjust this condition as needed)
        if (response.status === 200) {
            // Redirect to the main page after successful submission
            window.location.href = 'index.html'; // Replace with your main page URL
        } else {
            // Handle error response
            console.error('Form submission failed:', response.statusText);
        }
    } catch (error) {
        console.error('An error occurred:', error);
    } finally {
        // Re-enable the submit button and hide the loading spinner
        submitButton.disabled = false;
        loadingSpinner.style.display = 'none';
    }
});