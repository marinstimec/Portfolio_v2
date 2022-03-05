var myNav = document.getElementById("nav");
var myLogo = document.getElementById("logo");

window.onscroll = function () {
  "use strict";
  if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200) {
    myNav.classList.add("scroll");
    myLogo.classList.add("logo-scroll");
  } else {
    myNav.classList.remove("scroll");
    myLogo.classList.remove("logo-scroll");
  }
};

AOS.init();