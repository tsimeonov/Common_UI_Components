let pyramid = document.getElementById("pyramid");
let text = document.getElementById("text");
let stone = document.getElementById("stone");
let man = document.getElementById("man");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  pyramid.style.right = value * 0.25 + "px";
  text.style.right = value * 2 + "px";
});
