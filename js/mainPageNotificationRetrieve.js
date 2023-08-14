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
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path fill="none" d="M0 0h24v24H0z"/>
            <path d="M6 11l3 3 7-7"></path>
        </svg>
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

