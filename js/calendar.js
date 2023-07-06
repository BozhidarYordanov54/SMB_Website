// Function to generate the calendar
function generateCalendar(year, month) {
    const calendarTitle = document.getElementById('calendar-title');
    const calendarBody = document.getElementById('calendar-body');
  
    // Set the calendar title
    const monthName = new Date(year, month).toLocaleString('default', { month: 'long' });
    calendarTitle.textContent = monthName;
  
    // Clear the calendar body
    calendarBody.innerHTML = '';
  
    // Get the total number of days in the selected month
    const totalDays = new Date(year, month + 1, 0).getDate();
  
    // Get the first day of the month
    const firstDay = new Date(year, month, 1).getDay();
  
    // Adjust the firstDay index to have Monday as the first day
    const adjustedFirstDay = (firstDay + 6) % 7;
  
    // Create calendar cells
    let date = 1;
    for (let row = 0; row < 6; row++) {
      let newRow = calendarBody.insertRow();
  
      for (let col = 0; col < 7; col++) {
        const index = (col + adjustedFirstDay) % 7;
  
        if (row === 0 && col < adjustedFirstDay) {
          // Create empty cells for days before the first day of the month
          newRow.insertCell();
        } else if (date > totalDays) {
          // Break the loop when all days of the month have been added
          break;
        } else {
          // Create calendar cells with the date
          let cell = newRow.insertCell();
          cell.textContent = date;
  
          // Highlight the current day
          const currentDate = new Date();
          if (year === currentDate.getFullYear() && month === currentDate.getMonth() && date === currentDate.getDate()) {
            cell.classList.add('current-day');
          }
  
          date++; // Increment the date after highlighting the current day
        }
      }
    }
  }
  
  // Get the current year and month
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  let currentMonth = currentDate.getMonth();
  
  // Generate the calendar for the current month
  generateCalendar(currentYear, currentMonth);
  
  // Previous month button click event
  const prevMonthBtn = document.getElementById('prev-month-btn');
  prevMonthBtn.addEventListener('click', function() {
    currentMonth--; // Decrement the month
  
    if (currentMonth < 0) {
      currentMonth = 11; // Wrap around to December
      currentYear--;
    }
  
    generateCalendar(currentYear, currentMonth);
  });
  
  // Next month button click event
  const nextMonthBtn = document.getElementById('next-month-btn');
  nextMonthBtn.addEventListener('click', function() {
    currentMonth++; // Increment the month
  
    if (currentMonth > 11) {
      currentMonth = 0; // Wrap around to January
      currentYear++;
    }
  
    generateCalendar(currentYear, currentMonth);
  });
  