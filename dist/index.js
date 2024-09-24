"use strict";
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let slide = false;
function nextEffect() {
    var _a;
    const images = document.querySelectorAll(".item");
    (_a = document.querySelector(".slider")) === null || _a === void 0 ? void 0 : _a.appendChild(images[0]);
}
function prevEffect() {
    var _a;
    const images = document.querySelectorAll(".item");
    (_a = document.querySelector(".slider")) === null || _a === void 0 ? void 0 : _a.prepend(images[images.length - 1]);
}
next === null || next === void 0 ? void 0 : next.addEventListener("click", () => {
    nextEffect();
    slide = false;
    let timeOut = setTimeout(() => {
        slide = true;
    }, 10000);
});
prev === null || prev === void 0 ? void 0 : prev.addEventListener("click", () => {
    prevEffect();
    slide = false;
    let timeOut = setTimeout(() => {
        slide = true;
    }, 10000);
});
let clicker = setInterval(() => {
    if (slide)
        nextEffect();
}, 5000);
