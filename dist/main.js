/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGtCQUFrQjtBQUNwQztBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isa0JBQWtCO0FBQ3BDO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFyYmxlcy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zb2xlLmxvZyhcImhlbGxvXCIpO1xuXG5jb25zdCBsYXllciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGF5ZXJcIik7XG5jb25zdCBkcm9wZG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcGRvd25cIik7XG5jb25zdCBsaW5rcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJsaW5rXCIpO1xuXG5jb25zdCBtZW51T3BlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudS1vcGVuXCIpO1xubWVudU9wZW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgbGF5ZXIuY2xhc3NMaXN0LmFkZChcInZpc2libGVcIik7XG4gIGRyb3Bkb3duLmNsYXNzTGlzdC5hZGQoXCJ2aXNpYmxlXCIpO1xuICBtZW51Q2xvc2UuY2xhc3NMaXN0LmFkZChcInZpc2libGVcIik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGlua3MubGVuZ3RoOyBpKyspIHtcbiAgICBsaW5rc1tpXS5jbGFzc0xpc3QuYWRkKFwidmlzaWJsZVwiKTtcbiAgfVxufSk7XG5cbmNvbnN0IG1lbnVDbG9zZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudS1jbG9zZVwiKTtcbm1lbnVDbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBsYXllci5jbGFzc0xpc3QucmVtb3ZlKFwidmlzaWJsZVwiKTtcbiAgZHJvcGRvd24uY2xhc3NMaXN0LnJlbW92ZShcInZpc2libGVcIik7XG4gIG1lbnVPcGVuLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gIG1lbnVDbG9zZS5jbGFzc0xpc3QucmVtb3ZlKFwidmlzaWJsZVwiKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5rcy5sZW5ndGg7IGkrKykge1xuICAgIGxpbmtzW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJ2aXNpYmxlXCIpO1xuICB9XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==