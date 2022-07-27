/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
console.log("hello");

const layerOne = document.querySelector(".layer.one");
const layerTwo = document.querySelector(".layer.two");
const dropdown = document.querySelector(".dropdown");
const links = document.getElementsByClassName("link");


const menuOpen = document.getElementById("menu-open");
menuOpen.addEventListener("click", () => {
  layerOne.classList.add("visible");
  layerTwo.classList.add("visible");
  dropdown.classList.add("visible");
  menuClose.classList.add("visible");
  for (let i = 0; i < links.length; i++) {
    links[i].classList.add("visible");
  }
});

const menuClose = document.getElementById("menu-close");
menuClose.addEventListener("click", () => {
  layerOne.classList.remove("visible");
  layerTwo.classList.remove("visible");

  dropdown.classList.remove("visible");
  menuOpen.classList.remove("hidden");
  menuClose.classList.remove("visible");
  for (let i = 0; i < links.length; i++) {
    links[i].classList.remove("visible");
  }
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isa0JBQWtCO0FBQ3BDO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixrQkFBa0I7QUFDcEM7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXJibGVzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUubG9nKFwiaGVsbG9cIik7XG5cbmNvbnN0IGxheWVyT25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sYXllci5vbmVcIik7XG5jb25zdCBsYXllclR3byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGF5ZXIudHdvXCIpO1xuY29uc3QgZHJvcGRvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRyb3Bkb3duXCIpO1xuY29uc3QgbGlua3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibGlua1wiKTtcblxuXG5jb25zdCBtZW51T3BlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudS1vcGVuXCIpO1xubWVudU9wZW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgbGF5ZXJPbmUuY2xhc3NMaXN0LmFkZChcInZpc2libGVcIik7XG4gIGxheWVyVHdvLmNsYXNzTGlzdC5hZGQoXCJ2aXNpYmxlXCIpO1xuICBkcm9wZG93bi5jbGFzc0xpc3QuYWRkKFwidmlzaWJsZVwiKTtcbiAgbWVudUNsb3NlLmNsYXNzTGlzdC5hZGQoXCJ2aXNpYmxlXCIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmtzLmxlbmd0aDsgaSsrKSB7XG4gICAgbGlua3NbaV0uY2xhc3NMaXN0LmFkZChcInZpc2libGVcIik7XG4gIH1cbn0pO1xuXG5jb25zdCBtZW51Q2xvc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnUtY2xvc2VcIik7XG5tZW51Q2xvc2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgbGF5ZXJPbmUuY2xhc3NMaXN0LnJlbW92ZShcInZpc2libGVcIik7XG4gIGxheWVyVHdvLmNsYXNzTGlzdC5yZW1vdmUoXCJ2aXNpYmxlXCIpO1xuXG4gIGRyb3Bkb3duLmNsYXNzTGlzdC5yZW1vdmUoXCJ2aXNpYmxlXCIpO1xuICBtZW51T3Blbi5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICBtZW51Q2xvc2UuY2xhc3NMaXN0LnJlbW92ZShcInZpc2libGVcIik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGlua3MubGVuZ3RoOyBpKyspIHtcbiAgICBsaW5rc1tpXS5jbGFzc0xpc3QucmVtb3ZlKFwidmlzaWJsZVwiKTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=