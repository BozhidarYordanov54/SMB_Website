window.addEventListener('scroll', function() {
    var container = document.querySelector('.container');
    var mainContent = document.getElementById('main-content');
    var logo = document.querySelector('.logo');
    var menu = document.querySelector('.menu');
  
    var scrollPos = window.scrollY || window.scrollTop || document.getElementsByTagName("html")[0].scrollTop;
  
    if (scrollPos > 0) {
      container.classList.add('scroll-up');
      logo.classList.add('scroll-up');
      menu.classList.add('scroll-up');
      logo.style.top = '-80px';
      logo.style.left = '-100px';
      logo.style.transform = 'translate(0, 0) scale(0.5)';
      menu.style.opacity = '1';
      container.style.marginTop = '80px';
      mainContent.style.display = 'block';
    } else {
      container.classList.remove('scroll-up');
      logo.classList.remove('scroll-up');
      menu.classList.remove('scroll-up');
      logo.style.top = '50%';
      logo.style.left = '50%';
      logo.style.transform = 'translate(-50%, -50%) scale(1)';
      menu.style.opacity = '0';
      mainContent.style.display = 'none';
      container.style.marginTop = '';
    }
  });