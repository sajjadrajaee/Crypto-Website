// hamburger
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-links').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

// More button
const btn = document.querySelector('.btn-more');
const more = document.querySelector('.more');
btn.addEventListener('click', () => {
  more.classList.add('active');
  btn.classList.add('hide');
});
