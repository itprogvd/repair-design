// document.addEventListener('DOMContentLoaded', () => {
//   const modal = document.querySelector('.modal');
//   const modalBtn = document.querySelectorAll('[data-toggle=modal]');
//   const closeBtn = document.querySelector('.modal__close');
//   const switchModal = () => {
//     modal.classList.toggle('modal--visible');
//   };

//   modalBtn.forEach(elem => {
//     elem.addEventListener('click', switchModal);
//   });

//   closeBtn.addEventListener('click', switchModal);
//   document.addEventListener('keydown', (e) => {
//     if (e.code === "Escape" && modal.classList.contains('modal--visible')) {
//       switchModal();
//     }
//   });
// });

$(document).ready(function () {
  var modal = $('.modal'),
    modalBtn = $('[data-toggle=modal]'),
    closeBtn = $('.modal__close');

  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  closeBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  (function ($) {
    $(function () {
      $('.hero__scroll-up').click(function () {
        $('html, body').animate({
          scrollTop: 0
        }, 500);
        return false;
      });
    });
    $(function () {
      $('.hero__scroll-down').click(function () {
        $('html, body').animate({
          scrollTop: 1000
        }, 500);
        return false;
      });
    });
  })(jQuery);
});