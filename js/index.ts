let next = document.getElementById("next");
let prev = document.getElementById("prev");

next?.addEventListener("click", () => {
  const images = document.querySelectorAll(".item");

  console.log("clicked");
  document.querySelector(".slider")?.appendChild(images[0]);
});
prev?.addEventListener("click", () => {
  const images = document.querySelectorAll(".item");

  document.querySelector(".slider")?.prepend(images[images.length - 1]);
});
