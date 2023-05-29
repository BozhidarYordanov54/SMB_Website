window.addEventListener('DOMContentLoaded', function() {
  var header = this.document.querySelector('.header');
  var logo = document.querySelector('.logo');
  var menu = document.querySelector('.menu');
  var footer = this.document.querySelector('.footer');
  var mainContent = document.getElementById('main-content');

  logo.addEventListener('transitionend', function() {
    menu.classList.add('show');
    mainContent.classList.add('show');
    footer.classList.add('show');
    header.classList.add('show');
  });

  setTimeout(function() {
    logo.classList.add('move');
    logo.style.opacity = '1';
    logo.style.top = '-90px';
    logo.style.left = '-90px';
    logo.style.transform = 'translate(0, 0) scale(0.4)';
  }, 2000);
});
