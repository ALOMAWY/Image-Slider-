let next = document.getElementById("next");
let prev = document.getElementById("prev");

let slide = false;

function nextEffect() {
  const images = document.querySelectorAll(".item");

  document.querySelector(".slider")?.appendChild(images[0]);
}

function prevEffect() {
  const images = document.querySelectorAll(".item");

  document.querySelector(".slider")?.prepend(images[images.length - 1]);
}

next?.addEventListener("click", () => {
  nextEffect();

  slide = false;

  let timeOut = setTimeout(() => {
    slide = true;
  }, 10000);
});

prev?.addEventListener("click", () => {
  prevEffect();

  slide = false;

  let timeOut = setTimeout(() => {
    slide = true;
  }, 10000);
});

let clicker = setInterval(() => {
  if (slide) nextEffect();
}, 5000);
