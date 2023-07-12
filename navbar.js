const burger = document.querySelector('.burger');
const navbar = document.querySelector('.navbar');
const closeBtn = document.querySelector('.close-nav');


burger.onclick = function () {
  navbar.style.display = 'flex';
}

closeBtn.onclick = function () {
  navbar.style.display = 'none';
}