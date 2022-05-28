// hamburger
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const close = document.querySelector('.close-img');
const closeIcon = document.querySelector('.close-icon');

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
// const btn = document.querySelector('.btn-more');
// const more = document.querySelector('.more');
// btn.addEventListener('click', () => {
//   more.classList.add('active');
//   btn.classList.add('hide');
// });

// Teacher section
const teachers = [
  {
    personalimage: 'assets/img/members/a.aghaz.jpg',
    name: 'Asal Aghaz',
    position: 'Merkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    detail: 'Benkler studies common-based peer production, and published his seminal book The Wealth of Networks in 2006.',
  },
  {
    personalimage: 'assets/img/members/aghaeini.jpg',
    name: 'Ahmad Aghaeini',
    position: 'Business Management Studies at Harvard Law School',
    detail: 'Master study common-based peer production, and published his seminal book The Wealth of Networks in 2006.',
  },
  {
    personalimage: 'assets/img/members/hafarideh.jpg',
    name: 'karim Afarideh',
    position: 'Machanical Engeering Studies at Harvard Machanice',
    detail: 'Benkler studies common-based peer production, and published his seminal book The Wealth of Networks in 2006.',
  },
];

const speakersContainer = document.getElementById('teacher');
teachers.forEach((teacher) => {
  const prop = document.createElement('div');

  prop.innerHTML = `
  <div class="row">
  <div class="col-12 col-sm-12 col-md-6 member-row">
<div class="row">
  <div class="col-4">
    <img class="back-logo" src="assets/img/members/Bitcoin-BTC-icon.png" alt="back logo">
    <img class="member-photo" src=${teacher.personalimage} alt="teacher photo">
  </div>
  <div class="col-8">
    <p class="teacher-name">${teacher.name}</p>
    <p class="teacher-position">${teacher.position}</p>
    <hr class="small-hr">
    <p class="teacher-detail">${teacher.detail}</p>
  </div>
</div>
</div>
<div class="col-12 col-sm-12 col-md-6 member-row">
<div class="row">
  <div class="col-4">
    <img class="back-logo" src="assets/img/members/Bitcoin-BTC-icon.png" alt="back logo">
    <img class="member-photo" src=${teacher.personalimage} alt="teacher photo">
  </div>
  <div class="col-8">
    <p class="teacher-name">${teacher.name}</p>
    <p class="teacher-position">${teacher.position}</p>
    <hr class="small-hr">
    <p class="teacher-detail">${teacher.detail}</p>
  </div>
</div>
</div>
</div
`;
  speakersContainer.appendChild(prop);
});
