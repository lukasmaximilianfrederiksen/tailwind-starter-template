const burger = document.querySelector("nav .hamburger");
const burgerContent = document.querySelector("nav .burger-content");
const lydGif = document.querySelector("audio");
const gif = document.querySelector("#rock");

window.addEventListener("scroll", showHeader);
gif.addEventListener("mouseover", spilLyd);
gif.addEventListener("mouseleave", stopLyd);

burger.addEventListener("click", showBurger);
burgerContent.addEventListener("click", fjernBurger);

function fjernBurger() {
  burger.classList.toggle("left-0");
  burgerContent.classList.toggle("left-0");
  burger.classList.toggle("left-full");
  burgerContent.classList.toggle("left-full");
}

function showBurger() {
  console.log("Hej burger");
  burger.classList.toggle("left-0");
  burgerContent.classList.toggle("left-0");
  burger.classList.toggle("left-full");
  burgerContent.classList.toggle("left-full");
}

function showHeader() {
  const header = document.querySelector("nav");
  header.classList.toggle("show-nav", window.scrollY > 0);

  console.log("hej");
}

function spilLyd() {
  lydGif.play();
  lydGif.volume = 0.2;
}

function stopLyd() {
  lydGif.pause();
}
