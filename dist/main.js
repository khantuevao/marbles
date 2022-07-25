/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
console.log("hello")

const layer = document.querySelector('.layer');
const dropdown = document.querySelector('.dropdown');

const menuOpen = document.getElementById('menu-open');
menuOpen.addEventListener('click', () => {
  menuOpen.classList.add('hidden');
  layer.classList.add('visible');
  dropdown.classList.add('visible');
})

const menuClose = document.getElementById('menu-close');
menuClose.addEventListener('click', () => {
  layer.classList.remove('visible');
  dropdown.classList.remove('visible');
  menuOpen.classList.remove('hidden');
})
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL21hcmJsZXMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc29sZS5sb2coXCJoZWxsb1wiKVxuXG5jb25zdCBsYXllciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sYXllcicpO1xuY29uc3QgZHJvcGRvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHJvcGRvd24nKTtcblxuY29uc3QgbWVudU9wZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudS1vcGVuJyk7XG5tZW51T3Blbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgbWVudU9wZW4uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gIGxheWVyLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbiAgZHJvcGRvd24uY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xufSlcblxuY29uc3QgbWVudUNsb3NlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUtY2xvc2UnKTtcbm1lbnVDbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgbGF5ZXIuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICBkcm9wZG93bi5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG4gIG1lbnVPcGVuLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=