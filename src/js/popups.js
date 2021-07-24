"use strict";

//collapsible
const popBio = document.querySelector(".js-bio-pop");
const popWork = document.querySelector(".js-work-pop");
const popHobbies = document.querySelector(".js-hobbies-pop");
const popContact = document.querySelector(".js-contact-pop");

const contentDesign = document.querySelector(".js-design");
const contentFill = document.querySelector(".js-fill");
const contentShare = document.querySelector(".js-share");
const arrowShare = document.querySelector(".js-arrowS");

contentFill.classList.add("hidden");
contentShare.classList.add("hidden");
arrowShare.classList.remove("collapsible__icon2");
arrowShare.classList.add("arrowhidden");
console.log(arrowShare);

function hiddenDesign() {
  contentDesign.classList.add("hidden");
  //arrowDesign.classList.add('arrowhidden');
}
function hiddenFill() {
  contentFill.classList.remove("hidden");
}
function hiddenShare() {
  contentShare.classList.remove("hidden");
}

function showDesign() {
  hiddenDesign();
  if (contentDesign.classList.contains("js-design")) {
    contentFill.classList.add("hidden");
    contentShare.classList.add("hidden");
    contentDesign.classList.remove("hidden");
  }
}

function showFill() {
  hiddenFill();
  if (contentFill.classList.contains("js-fill")) {
    contentDesign.classList.add("hidden");
    contentShare.classList.add("hidden");
  }
}

function showShare() {
  hiddenShare();
  if (contentShare.classList.contains("js-share")) {
    contentDesign.classList.add("hidden");
    contentFill.classList.add("hidden");
  }
}

cdesign.addEventListener("click", showDesign);
cfill.addEventListener("click", showFill);
cshare.addEventListener("click", showShare);
