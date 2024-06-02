"use strict";

const lidOne = document.querySelector(".wrapper .lid-one");
const lidTwo = document.querySelector(".wrapper .lid-two");
const text = document.querySelector(".wrapper .text");
const icon = document.querySelector(".wrapper .icon");

function animateEnvelope() {
    const elements = [lidOne, lidTwo, text, icon];
    elements.forEach((element) => element.classList.toggle("active"));
}

icon.addEventListener("click", animateEnvelope);