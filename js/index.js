"use strict";

var next = document.getElementById("next");
var prev = document.getElementById("prev");
next === null || next === void 0 || next.addEventListener("click", function () {
  var _document$querySelect;
  var images = document.querySelectorAll(".item");
  console.log("clicked");
  (_document$querySelect = document.querySelector(".slider")) === null || _document$querySelect === void 0 || _document$querySelect.appendChild(images[0]);
});
prev === null || prev === void 0 ? void 0 : prev.addEventListener("click", function () {
  var _document$querySelect2;
  var images = document.querySelectorAll(".item");
  (_document$querySelect2 = document.querySelector(".slider")) === null || _document$querySelect2 === void 0 || _document$querySelect2.prepend(images[images.length - 1]);
});