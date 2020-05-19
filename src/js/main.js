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
          scrollTop: 700
        }, 500);
        return false;
      });
    });
  })(jQuery);

  //initialize swiper when document ready
  var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    slidesPerView: 1
  });

  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  next.css('left', prev.width() + 20 + bullets.width() + 20);
  bullets.css('left', prev.width() + 20);

  new WOW().init();

  // validate form
  $('.modal__form').validate({
    errorElement: 'div',
    errorClass: 'invalid',
    rules: {
      userName: {
        required: true,
        minlength: 2
      },
      userPhone: "required",
      userEmail: {
        required: true,
        email: true
      }
    },
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не короче 2 букв"
      },
      userPhone: "Заполните поле",
      userEmail: {
        required: "Заполните поле",
        email: "Введите корректный email"
      }
    }
  });

  $('.footer__form').validate({
    errorElement: 'div',
    errorClass: 'invalid',
    rules: {
      footerUserName: {
        required: true,
        minlength: 2
      },
      footerUserPhone: "required"
    },
    messages: {
      footerUserName: {
        required: "Заполните поле",
        minlength: "Имя не короче 2 букв"
      },
      footerUserPhone: "Заполните поле",
    }
  });

  $('.control__form').validate({
    errorElement: 'div',
    errorClass: 'invalid',
    rules: {
      controlUserName: {
        required: true,
        minlength: 2
      },
      controlUserPhone: "required"
    },
    messages: {
      controlUserName: {
        required: "Заполните поле",
        minlength: "Имя не короче 2 букв"
      },
      controlUserPhone: "Заполните поле",
    }
  });

  // mask for phone
  $('[type=tel]').mask('+7(000) 000-00-00', {
    placeholder: "+7 (___) __-__-___"
  });

});