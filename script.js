'use strict';

document.addEventListener('DOMContentLoaded', function() {

  // Hamburger menu
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu');
    hamburger.classList.toggle('open');
  });

  // Toggle show-menu when clicking outside of navMenu
  document.addEventListener('click', (event) => {
    if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
      navMenu.classList.remove('show-menu');
      hamburger.classList.remove('open');
    }
  });
  
  // Typed.js for about me section
  const typed = new Typed('#typed', {
    strings: [
      'A Jr Front-End Developer',
      'A Passionate Learner',
      'Your Next Teammate'
    ],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true,
    smartBackspace: true,
    showCursor: true,
    backDelay: 2000,
  });
  
  // VanillaTilt.js for project thumbnails
  const tiltElements = document.querySelectorAll('.projects__item-thumbnail');
  VanillaTilt.init(tiltElements, {
    max: 10, 
    glare: true, 
    'max-glare': 0.1, 
  });
});
