console.log("hello");

const layer = document.querySelector(".layer");
const dropdown = document.querySelector(".dropdown");
const links = document.getElementsByClassName("link");

const menuOpen = document.getElementById("menu-open");
menuOpen.addEventListener("click", () => {
  layer.classList.add("visible");
  dropdown.classList.add("visible");
  menuClose.classList.add("visible");
  for (let i = 0; i < links.length; i++) {
    links[i].classList.add("visible");
  }
});

const menuClose = document.getElementById("menu-close");
menuClose.addEventListener("click", () => {
  layer.classList.remove("visible");
  dropdown.classList.remove("visible");
  menuOpen.classList.remove("hidden");
  menuClose.classList.remove("visible");
  for (let i = 0; i < links.length; i++) {
    links[i].classList.remove("visible");
  }
});
