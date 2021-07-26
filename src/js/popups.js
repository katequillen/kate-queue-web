"use strict";

//Pop-up consts
const bio = document.querySelector(".js-bio");
const work = document.querySelector(".js-work");
const hobbies = document.querySelector(".js.hobbies");
const contact = document.querySelector(".js-contact");

const popBio = document.querySelector(".js-bio-pop");
const popWork = document.querySelector(".js-work-pop");
const popHobbies = document.querySelector(".js-hobbies-pop");
const popContact = document.querySelector(".js-contact-pop");

// const contentDesign = document.querySelector(".js-design");
// const contentFill = document.querySelector(".js-fill");
// const contentShare = document.querySelector(".js-share");
// const arrowShare = document.querySelector(".js-arrowS");

popBio.classList.add("hidden");
popWork.classList.add("hidden");
popHobbies.classList.add("hidden");
popContact.classList.add("hidden");

function hiddenBio() {
  popBio.classList.add("hidden");
  //arrowDesign.classList.add('arrowhidden');
}
function hiddenWork() {
  popWork.classList.remove("hidden");
}
function hiddenHobbies() {
  popHobbies.classList.remove("hidden");
}
function hiddenContact() {
  popContact.classList.remove("hidden");
}

function showBio() {
  // hiddenBio();
  if (popBio.classList.contains("js-bio-pop")) {
    popWork.classList.add("hidden");
    popHobbies.classList.add("hidden");
    popContact.classList.add("hidden"), popBio.classList.remove("hidden");
  }
}

function showWork() {
  hiddenWork();
  if (popWork.classList.contains("js-work-pop")) {
    popHobbies.classList.add("hidden");
    popContact.classList.add("hidden");
    popBio.classList.add("hidden");
  }
}

function showHobbies() {
  hiddenHobbies();
  if (popHobbies.classList.contains("js-hobbies-pop")) {
    popContact.classList.add("hidden");
    popBio.classList.add("hidden");
    popWork.classList.add("hidden");
  }
}
function showContact() {
  hiddenContact();
  if (popContact.classList.contains("js-contact-pop")) {
    popBio.classList.add("hidden");
    popWork.classList.add("hidden");
    popHobbies.classList.add("hidden");
  }
}

bio.addEventListener("click", showBio);
contact.addEventListener("click", showFill);
work.addEventListener("click", showShare);
hobbies.addEventListener("click", showShare);
