"use strict";
let next = document.getElementById("next");
let prev = document.getElementById("prev");
next === null || next === void 0 ? void 0 : next.addEventListener("click", () => {
    var _a;
    const images = document.querySelectorAll(".item");
    console.log("clicked");
    (_a = document.querySelector(".slider")) === null || _a === void 0 ? void 0 : _a.appendChild(images[0]);
});
prev === null || prev === void 0 ? void 0 : prev.addEventListener("click", () => {
    var _a;
    const images = document.querySelectorAll(".item");
    (_a = document.querySelector(".slider")) === null || _a === void 0 ? void 0 : _a.prepend(images[images.length - 1]);
});
