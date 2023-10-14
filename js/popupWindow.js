document.addEventListener('DOMContentLoaded', function() {
    var popup = document.getElementById('popup');
    var closeBtn = document.getElementById('closeBtn');
    closeBtn.addEventListener('click', function() {
      popup.style.display = 'none';
    });
  });
  