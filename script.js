// Code from: https://stackoverflow.com/questions/51340863/hide-nav-bar-on-scroll-down-and-show-it-on-scroll-up

window.onscroll = function (e) {
  var scrollY = window.pageYOffset || document.documentElement.scrollTop;
  var header = document.querySelector("header");
  var height = -header.clientHeight;
  header.style.transition = "transform 0.1s";

  scrollY <= Math.max(this.lastScroll, 50) ||
  window.innerWidth <= 1200 ||
  this.loaded === undefined
    ? (header.style.transform = "translateY(0px)")
    : (header.style.transform = "translateY(" + height + "px)");

  this.lastScroll = scrollY;
  this.loaded = true;
};
