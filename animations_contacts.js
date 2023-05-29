document.addEventListener('DOMContentLoaded', function() {
    var elements = document.querySelectorAll('main h1, main p');
  
    function addFadeInClass() {
      elements.forEach(function(element, index) {
        setTimeout(function() {
          element.classList.add('fade-in');
        }, index * 300); // Adjust the delay here (in milliseconds)
      });
    }
  
    setTimeout(function() {
      document.querySelector('main').style.opacity = '1';
      addFadeInClass();
    }, 1000); // Adjust the delay here (in milliseconds)
  });
  