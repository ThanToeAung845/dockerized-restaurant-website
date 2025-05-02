"use strict";

/**
 * PRELOAD
 *
 * loading will be end after document is loaded
 */

const preloader = document.querySelector("[data-preaload]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});

/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
};

/**
 * NAVBAR
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
};

addEventOnElements(navTogglers, "click", toggleNavbar);

/**
 * HEADER & BACK TOP BTN
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

let lastScrollPos = 0;

const hideHeader = function () {
  const isScrollBottom = lastScrollPos < window.scrollY;
  if (isScrollBottom) {
    header.classList.add("hide");
  } else {
    header.classList.remove("hide");
  }

  lastScrollPos = window.scrollY;
};

window.addEventListener("scroll", function () {
  if (window.scrollY >= 50) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
    hideHeader();
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

/**
 * HERO SLIDER
 */

const heroSlider = document.querySelector("[data-hero-slider]");
const heroSliderItems = document.querySelectorAll("[data-hero-slider-item]");
const heroSliderPrevBtn = document.querySelector("[data-prev-btn]");
const heroSliderNextBtn = document.querySelector("[data-next-btn]");

let currentSlidePos = 0;
let lastActiveSliderItem = heroSliderItems[0];

const updateSliderPos = function () {
  lastActiveSliderItem.classList.remove("active");
  heroSliderItems[currentSlidePos].classList.add("active");
  lastActiveSliderItem = heroSliderItems[currentSlidePos];
};

const slideNext = function () {
  if (currentSlidePos >= heroSliderItems.length - 1) {
    currentSlidePos = 0;
  } else {
    currentSlidePos++;
  }

  updateSliderPos();
};

heroSliderNextBtn.addEventListener("click", slideNext);

const slidePrev = function () {
  if (currentSlidePos <= 0) {
    currentSlidePos = heroSliderItems.length - 1;
  } else {
    currentSlidePos--;
  }

  updateSliderPos();
};

heroSliderPrevBtn.addEventListener("click", slidePrev);

/**
 * auto slide
 */

let autoSlideInterval;

const autoSlide = function () {
  autoSlideInterval = setInterval(function () {
    slideNext();
  }, 7000);
};

addEventOnElements(
  [heroSliderNextBtn, heroSliderPrevBtn],
  "mouseover",
  function () {
    clearInterval(autoSlideInterval);
  }
);

addEventOnElements(
  [heroSliderNextBtn, heroSliderPrevBtn],
  "mouseout",
  autoSlide
);

window.addEventListener("load", autoSlide);

/**
 * PARALLAX EFFECT
 */

const parallaxItems = document.querySelectorAll("[data-parallax-item]");

let x, y;

window.addEventListener("mousemove", function (event) {
  x = (event.clientX / window.innerWidth) * 10 - 5;
  y = (event.clientY / window.innerHeight) * 10 - 5;

  // reverse the number eg. 20 -> -20, -5 -> 5
  x = x - x * 2;
  y = y - y * 2;

  for (let i = 0, len = parallaxItems.length; i < len; i++) {
    x = x * Number(parallaxItems[i].dataset.parallaxSpeed);
    y = y * Number(parallaxItems[i].dataset.parallaxSpeed);
    parallaxItems[i].style.transform = `translate3d(${x}px, ${y}px, 0px)`;
  }
});

//Booking Validation
function bookingValidation() {
  var name = document.getElementById("name");
  var phone = document.getElementById("phone");
  var date = document.getElementById("date");
  var time = document.getElementById("time");
  var people = document.getElementById("people");

  if (name.value.trim() === "") {
    alert("Please enter your name.");
    return false;
  }

  if (phone.value.trim() === "") {
    alert("Please enter your phone number.");
    return false;
  }

  var phoneNumber = /^09\d{9}$/;

  if (!phoneNumber.test(phone.value.trim())) {
    alert("Please enter a valid phone number.");
    return false;
  }

  if (date.value.trim() === "") {
    alert("Please enter the date.");
    return false;
  }

  var today = new Date();
  var selectedDate = new Date(date.value);

  if (selectedDate < today) {
    alert("Please select a valid date.");
    return false;
  }

  if (time.value.trim() === "") {
    alert("Please enter the time.");
    return false;
  }

  if (time.value < today.getHours() || time.value > 21) {
    alert("Please select a valid time.");
    return false;
  }

  if (people.value.trim() === "") {
    alert("Please enter the number of people");
    return false;
  } else {
    alert("Your reservation has been submitted successfully.");
    return true;
  }
}
//email validation
function validateEmail() {
  const email = document.getElementById("emailInput").value;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; ///^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let isValid = true;
  if (email === "") {
    alert("Please fill in all required fields.");
    isValid = false;
  }
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    isValid = false;
  }
  if (isValid) {
    alert("Subscribe Successfully");
  }
}
