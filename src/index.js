const burger = document.querySelector("nav .hamburger");
const burgerContent = document.querySelector("nav .burger-content");

//window.addEventListener("scroll", showHeader);
//window.addEventListener("scroll", showHeaderFooter);
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

/* function showHeader() {
  const header = document.querySelector(".navbar-top");
  header.classList.toggle("sticky", window.scrollY > 0);
  console.log("hej");
}

function showHeaderFooter() {
  const headerFooter = document.querySelector(".navbar-bottom");
  headerFooter.classList.toggle("sticky", window.scrollY > 0);
  console.log("hej headerFooter");
} */
