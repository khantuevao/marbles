/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
console.log("hello")

const layer = document.querySelector('.layer');
const dropdown = document.querySelector('.dropdown');
const links = document.getElementsByClassName('link');

const menuOpen = document.getElementById('menu-open');
menuOpen.addEventListener('click', () => {
  layer.classList.add('visible');
  dropdown.classList.add('visible');
  menuClose.classList.add('visible')
  for (let i = 0; i < links.length; i++) {
    links[i].classList.add('visible');
  }
})

const menuClose = document.getElementById('menu-close');
menuClose.addEventListener('click', () => {
  layer.classList.remove('visible');
  dropdown.classList.remove('visible');
  menuOpen.classList.remove('hidden');
  menuClose.classList.remove('visible')
  for (let i = 0; i < links.length; i++) {
    links[i].classList.remove('visible');
  }  
})
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGtCQUFrQjtBQUNwQztBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isa0JBQWtCO0FBQ3BDO0FBQ0E7QUFDQSxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tYXJibGVzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnNvbGUubG9nKFwiaGVsbG9cIilcblxuY29uc3QgbGF5ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGF5ZXInKTtcbmNvbnN0IGRyb3Bkb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duJyk7XG5jb25zdCBsaW5rcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2xpbmsnKTtcblxuY29uc3QgbWVudU9wZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudS1vcGVuJyk7XG5tZW51T3Blbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgbGF5ZXIuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuICBkcm9wZG93bi5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gIG1lbnVDbG9zZS5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJylcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5rcy5sZW5ndGg7IGkrKykge1xuICAgIGxpbmtzW2ldLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbiAgfVxufSlcblxuY29uc3QgbWVudUNsb3NlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUtY2xvc2UnKTtcbm1lbnVDbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgbGF5ZXIuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICBkcm9wZG93bi5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG4gIG1lbnVPcGVuLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICBtZW51Q2xvc2UuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGlua3MubGVuZ3RoOyBpKyspIHtcbiAgICBsaW5rc1tpXS5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG4gIH0gIFxufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=