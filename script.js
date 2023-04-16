'use strict';
























/* <------------------------ Dom Events ------------------------> */


// About me Type Face
  document.addEventListener("DOMContentLoaded", function () {
    const typed = new Typed("#typed", {
      strings: [
        "A Front-End Developer",
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

