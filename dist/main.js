/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
console.log("hello");

const layerOne = document.querySelector("#layer.one");
const layerTwo = document.querySelector("#layer.two");
const dropdown = document.getElementById("dropdown");
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

document.onclick = function(e){
  if (e.target.id !== 'layer' && e.target.id !== 'menu-close' && e.target.id !== 'menu-open' && e.target.id !== 'dropdown') {
    layerOne.classList.remove("visible");
  layerTwo.classList.remove("visible");

  dropdown.classList.remove("visible");
  menuOpen.classList.remove("hidden");
  menuClose.classList.remove("visible");
  for (let i = 0; i < links.length; i++) {
    links[i].classList.remove("visible");
  }
  }
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isa0JBQWtCO0FBQ3BDO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixrQkFBa0I7QUFDcEM7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGtCQUFrQjtBQUNwQztBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL21hcmJsZXMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc29sZS5sb2coXCJoZWxsb1wiKTtcblxuY29uc3QgbGF5ZXJPbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2xheWVyLm9uZVwiKTtcbmNvbnN0IGxheWVyVHdvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsYXllci50d29cIik7XG5jb25zdCBkcm9wZG93biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHJvcGRvd25cIik7XG5jb25zdCBsaW5rcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJsaW5rXCIpO1xuXG5cbmNvbnN0IG1lbnVPcGVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51LW9wZW5cIik7XG5tZW51T3Blbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBsYXllck9uZS5jbGFzc0xpc3QuYWRkKFwidmlzaWJsZVwiKTtcbiAgbGF5ZXJUd28uY2xhc3NMaXN0LmFkZChcInZpc2libGVcIik7XG4gIGRyb3Bkb3duLmNsYXNzTGlzdC5hZGQoXCJ2aXNpYmxlXCIpO1xuICBtZW51Q2xvc2UuY2xhc3NMaXN0LmFkZChcInZpc2libGVcIik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGlua3MubGVuZ3RoOyBpKyspIHtcbiAgICBsaW5rc1tpXS5jbGFzc0xpc3QuYWRkKFwidmlzaWJsZVwiKTtcbiAgfVxufSk7XG5cbmNvbnN0IG1lbnVDbG9zZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudS1jbG9zZVwiKTtcbm1lbnVDbG9zZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBsYXllck9uZS5jbGFzc0xpc3QucmVtb3ZlKFwidmlzaWJsZVwiKTtcbiAgbGF5ZXJUd28uY2xhc3NMaXN0LnJlbW92ZShcInZpc2libGVcIik7XG5cbiAgZHJvcGRvd24uY2xhc3NMaXN0LnJlbW92ZShcInZpc2libGVcIik7XG4gIG1lbnVPcGVuLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gIG1lbnVDbG9zZS5jbGFzc0xpc3QucmVtb3ZlKFwidmlzaWJsZVwiKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5rcy5sZW5ndGg7IGkrKykge1xuICAgIGxpbmtzW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJ2aXNpYmxlXCIpO1xuICB9XG59KTtcblxuZG9jdW1lbnQub25jbGljayA9IGZ1bmN0aW9uKGUpe1xuICBpZiAoZS50YXJnZXQuaWQgIT09ICdsYXllcicgJiYgZS50YXJnZXQuaWQgIT09ICdtZW51LWNsb3NlJyAmJiBlLnRhcmdldC5pZCAhPT0gJ21lbnUtb3BlbicgJiYgZS50YXJnZXQuaWQgIT09ICdkcm9wZG93bicpIHtcbiAgICBsYXllck9uZS5jbGFzc0xpc3QucmVtb3ZlKFwidmlzaWJsZVwiKTtcbiAgbGF5ZXJUd28uY2xhc3NMaXN0LnJlbW92ZShcInZpc2libGVcIik7XG5cbiAgZHJvcGRvd24uY2xhc3NMaXN0LnJlbW92ZShcInZpc2libGVcIik7XG4gIG1lbnVPcGVuLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gIG1lbnVDbG9zZS5jbGFzc0xpc3QucmVtb3ZlKFwidmlzaWJsZVwiKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5rcy5sZW5ndGg7IGkrKykge1xuICAgIGxpbmtzW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJ2aXNpYmxlXCIpO1xuICB9XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==