const burger = document.querySelector(".header__burger");
const navWrapper = document.querySelector(".nav-wrapper");
const nav = document.querySelector(".nav");

const faqsItem = document.querySelector(".faq__item");
const faqsTitle = document.querySelector(".faq__title");

burger.addEventListener("click", function () {
  burger.classList.toggle("header__burger--opened");

  if (!navWrapper.classList.contains("nav-wrapper--fade-in")) {
    navWrapper.classList.add("nav-wrapper--fade-in");
    nav.classList.add("nav--opened");
  } else if (!navWrapper.classList.contains("nav-wrapper--fade-out")) {
    navWrapper.classList.add("nav-wrapper--fade-out");
    nav.classList.add("nav--closed");
  }
});

navWrapper.addEventListener("animationend", function (evt) {
  if (evt.animationName === "nav-wrapper-fade-out") {
    navWrapper.classList.remove("nav-wrapper--fade-in");
    navWrapper.classList.remove("nav-wrapper--fade-out");
    nav.classList.remove("nav--opened");
    nav.classList.remove("nav--closed");
  }
});

faqsTitle.addEventListener("click", function () {
  faqsItem.classList.toggle("faq__item--opened");
});
