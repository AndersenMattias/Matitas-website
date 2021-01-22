const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

// Btn open / close Modal window
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

// Btn arrow element
const arrowOneDown = document.querySelector('.arrowDown-one');
const arrowDownTwo = document.querySelector('.arrowDown-two');

// Sections element for smooth down behavior
const sectionOne = document.querySelector('.about-me');
const sectionTwo = document.querySelector('.projects-container');

// Toggle "Modal / Contact window"
const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Open Modal
btnsOpenModal.forEach((btn) => btn.addEventListener('click', openModal));

// Close Modal
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// Allow Escape keypress on toggle Modal
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Scrool down smooth onclick
arrowOneDown.addEventListener('click', function (e) {
  const sectionOneCords = sectionOne.getBoundingClientRect();

  sectionOne.scrollIntoView({ behavior: 'smooth' });
});

// Scrool down smooth onclick
arrowDownTwo.addEventListener('click', function (e) {
  const sectionTwoCords = sectionOne.getBoundingClientRect();

  sectionTwo.scrollIntoView({ behavior: 'smooth' });
});
