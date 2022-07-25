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