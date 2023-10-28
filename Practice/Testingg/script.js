const box = document.querySelector('.box');

window.addEventListener('scroll', () => {
  const boxTop = box.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (boxTop < windowHeight) {
    box.classList.add('visible');
  }
});
