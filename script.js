// hamburger
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const close = document.querySelector('.close-img');
const closeIcon =document.querySelector('.close-icon');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  // closeIcon.remove('hide');
});

close.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  closeIcon.add('hide');
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
