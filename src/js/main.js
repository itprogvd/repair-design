document.addEventListener('DOMContentLoaded', () => {
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector('.modal__close');
  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  };

  modalBtn.forEach(elem => {
    elem.addEventListener('click', switchModal);
  });

  closeBtn.addEventListener('click', switchModal);
  document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && modal.classList.contains('modal--visible')) {
      switchModal();
    }
  });
});