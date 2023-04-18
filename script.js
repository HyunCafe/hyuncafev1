'use strict';
























/* <------------------------ Dom Events ------------------------> */


const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('show-menu');
  hamburger.classList.toggle('open');
});
// About me Type Face
  document.addEventListener("DOMContentLoaded", function () {
    const typed = new Typed("#typed", {
      strings: [
        "A Jr Front-End Developer",
        "A Passionate Learner",
        "Your Next Teammate"
    ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
      smartBackspace: true,
      showCursor: false,
      backDelay: 2000,
    });
  });

