const galBtn = document.querySelector('.gallery-btn');
const galDisplay = document.querySelector('.gallery-display');
const closeGal = document.querySelector('.close-gallery');


galBtn.onclick = function () {
  galDisplay.style.display = 'block';
}

galBtn.onmousedown = function () {
  galBtn.style.transform = 'scale(0.9)';
}
galBtn.onmouseup = function () {
  galBtn.style.transform = 'scale(1)';
}

closeGal.onclick = function () {
  galDisplay.style.display = 'none';
}