document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');

  function updateHeaderActiveClass() {
    if (window.scrollY > 0) {
      header.classList.add('active');
    } else {
      header.classList.remove('active');
    }
  }

  document.addEventListener('scroll', updateHeaderActiveClass);
  updateHeaderActiveClass();
});
