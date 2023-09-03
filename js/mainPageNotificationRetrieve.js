document.addEventListener('DOMContentLoaded', function() {
    const notification = document.getElementById('notification');
    const storedMessage = localStorage.getItem('notificationMessage');

    if (storedMessage) {
        // Show the notification using stored information
        showNotification(storedMessage);
        // Clear stored message from localStorage
        localStorage.removeItem('notificationMessage');
    }
});

function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 448 512">
    <!--! Font Awesome Pro 6.4.2 
    by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc.
     -->
    <path fill="white" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 
    0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
        <div class="notification-message">${message}</div>
    `;
    notification.style.backgroundColor = 'green'; // Change this to the desired background color
    notification.style.color = 'white';
    notification.style.display = 'block';
    notification.style.opacity = 1;

    setTimeout(() => {
        notification.style.opacity = 0;
        setTimeout(() => {
            notification.style.display = 'none';
        }, 500);
    }, 10000);
}

