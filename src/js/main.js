document.addEventListener('DOMContentLoaded', () => {
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector('.modal__close');
  const modalForm = document.querySelector('.modal__form');
  const modalTitle = document.querySelector('.modal__title');
  const switchModal = () => {
    modal.classList.toggle('modal--visible');
  };

  document.addEventListener('click', (e) => {

    if (!event.target.closest('.modal__dialog') && !event.target.closest('[data-toggle=modal]')) {
      modal.classList.remove('modal--visible');
    }
  });

  // modalBtn.forEach(elem => {
  //   elem.addEventListener('click', switchModal);
  //   modalForm.style.display = 'flex';
  //   modalTitle.textContent = 'Оставьте заявку и наш менеджер свяжется с вами';
  // });

  // closeBtn.addEventListener('click', switchModal);
  document.addEventListener('keydown', (e) => {
    if (e.code === "Escape" && modal.classList.contains('modal--visible')) {
      modal.classList.remove('modal--visible');
    }
  });

  let map;

  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {
        lat: -34.397,
        lng: 150.644
      },
      zoom: 8
    });
  }

});

$(document).ready(function () {
  let modal = $('.modal'),
    modalBtn = $('[data-toggle=modal]'),
    closeBtn = $('.modal__close');

  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
    $('.modal__form').css('display', 'flex');
    $('.modal__title').text('Оставьте заявку и наш менеджер свяжется с вами');
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
    $(function () {
      document.querySelectorAll('.nav__item').forEach((item) => {
        $(item).click(function () {
          let elementClick = $(item).attr("href");
          let destination = $(elementClick).offset().top;
          $('html, body').animate({
            scrollTop: destination
          }, 500);
          return false;
        });
      });
      $('.send-link').click(function () {
        let elementClick = $(this).attr("href");
        let destination = $(elementClick).offset().top;
        $('html, body').animate({
          scrollTop: destination
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
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      modalPolicyСheckbox: "required",
      userEmail: {
        required: true,
        email: true
      }
    },
    messages: {
      userName: {
        required: "Заполните поле",
        minlength: "Имя не короче 2 символов",
        maxlength: "Имя не больше 15 символов"
      },
      userPhone: "Заполните поле",
      modalPolicyСheckbox: "Согласитесь с обработкой данных",
      userEmail: {
        required: "Заполните поле",
        email: "Введите корректный email"
      }
    },
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: 'send.php',
        data: $(form).serialize(),
        success: function (response) {
          // alert('Спасибо за заявку, мы свяжемся с вами в течении 15 минут!');
          $('.modal__form').css('display', 'none');
          $('.modal__title').html('Форма отправлена. Подпишитесь на <a href="#" style="color: #fff">группу вк</a>');
          $(form)[0].reset();
          ym(64370731, 'reachGoal', 'callback');
          return true;
        }
      });
    }
  });

  $('.footer__form').validate({
    errorElement: 'div',
    errorClass: 'invalid',
    rules: {
      footerUserName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      footerUserPhone: "required",
      footerPolicyCheckbox: "required"
    },
    messages: {
      footerUserName: {
        required: "Заполните поле",
        minlength: "Имя не короче 2 символов",
        maxlength: "Имя не больше 15 символов"
      },
      footerUserPhone: "Заполните поле",
      footerPolicyCheckbox: "Согласитесь с обработкой данных"
    },
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: 'send.php',
        data: $(form).serialize(),
        success: function (response) {
          // alert('Спасибо за заявку, мы свяжемся с вами в течении 15 минут!');
          $('.modal').addClass('modal--visible');
          $('.modal__form').css('display', 'none');
          $('.modal__title').html('Вопрос отправлен. Подпишитесь на <a href="#" style="color: #fff">группу вк</a>');
          $(form)[0].reset();
        }
      });
    }
  });

  $('.control__form').validate({
    errorElement: 'div',
    errorClass: 'invalid',
    rules: {
      controlUserName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      controlUserPhone: "required",
      controlPolicyCheckbox: "required"
    },
    messages: {
      controlUserName: {
        required: "Заполните поле",
        minlength: "Имя не короче 2 символов",
        maxlength: "Имя не больше 15 символов"
      },
      controlUserPhone: "Заполните поле",
      controlPolicyCheckbox: "Согласитесь с обработкой данных"
    },
    submitHandler: function (form) {
      $.ajax({
        type: "POST",
        url: 'send.php',
        data: $(form).serialize(),
        success: function (response) {
          // alert('Спасибо за заявку, мы свяжемся с вами в течении 15 минут!');
          $('.modal').addClass('modal--visible');
          $('.modal__form').css('display', 'none');
          $('.modal__title').html('Заявка отправлена. Подпишитесь на <a href="#" style="color: #fff">группу вк</a>');
          $(form)[0].reset();
          ym(64370731, 'reachGoal', 'requisition');
          return true;
        }
      });
    }
  });

  // mask for phone
  $('[type=tel]').mask('+7(000) 000-00-00', {
    placeholder: "+7 (___) __-__-___"
  });



  // create map
  // Функция ymaps.ready() будет вызвана, когда
  // загрузятся все компоненты API, а также когда будет готово DOM-дерево.
  // ymaps.ready(function () {
  //   var myMap = new ymaps.Map('map', {
  //       center: [47.244729, 39.723187],
  //       zoom: 17
  //     }, {
  //       searchControlProvider: 'yandex#search'
  //     }),

  //     // Создаём макет содержимого.
  //     MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
  //       '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
  //     ),

  //     myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
  //       hintContent: 'Торговый центр Декорум',
  //       balloonContent: 'Вход со двора'
  //     }, {
  //       // Опции.
  //       // Необходимо указать данный тип макета.
  //       iconLayout: 'default#image',
  //       // Своё изображение иконки метки.
  //       iconImageHref: 'img/map.png',
  //       // Размеры метки.
  //       iconImageSize: [32, 32]
  //       // Смещение левого верхнего угла иконки относительно
  //       // её "ножки" (точки привязки).
  //       // iconImageOffset: [-5, -38]
  //     });

  //   myMap.geoObjects.add(myPlacemark);
  // });
  //Переменная для включения/отключения индикатора загрузки
  var spinner = $('.footer__map').children('.loader');
  //Переменная для определения была ли хоть раз загружена Яндекс.Карта (чтобы избежать повторной загрузки при наведении)
  var check_if_load = false;
  //Необходимые переменные для того, чтобы задать координаты на Яндекс.Карте
  var myMapTemp, myPlacemarkTemp;

  //Функция создания карты сайта и затем вставки ее в блок с идентификатором &#34;map-yandex&#34;
  function init() {
    var myMapTemp = new ymaps.Map("map-yandex", {
      center: [47.244129, 39.723187], // координаты центра на карте
      zoom: 17, // коэффициент приближения карты
      controls: ['zoomControl', 'fullscreenControl'] // выбираем только те функции, которые необходимы при использовании
    });
    MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
      '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    );
    var myPlacemarkTemp = new ymaps.Placemark([47.244729, 39.723187], {
      hintContent: 'Торговый центр Декорум',
      balloonContent: 'Вход со двора'
    }, {
      // Опции.
      // Необходимо указать данный тип макета.
      iconLayout: 'default#imageWithContent',
      // Своё изображение иконки метки.
      iconImageHref: 'img/map.png',
      // Размеры метки.
      iconImageSize: [50, 50],
      // Смещение левого верхнего угла иконки относительно
      // её "ножки" (точки привязки).
      iconImageOffset: [-25, -50],
    });
    myMapTemp.geoObjects.add(myPlacemarkTemp); // помещаем флажок на карту
    myMapTemp.behaviors.disable('scrollZoom');

    // Получаем первый экземпляр коллекции слоев, потом первый слой коллекции
    var layer = myMapTemp.layers.get(0).get(0);

    // Решение по callback-у для определения полной загрузки карты
    waitForTilesLoad(layer).then(function () {
      // Скрываем индикатор загрузки после полной загрузки карты
      spinner.removeClass('is-active');
    });
  }

  // Функция для определения полной загрузки карты (на самом деле проверяется загрузка тайлов) 
  function waitForTilesLoad(layer) {
    return new ymaps.vow.Promise(function (resolve, reject) {
      var tc = getTileContainer(layer),
        readyAll = true;
      tc.tiles.each(function (tile, number) {
        if (!tile.isReady()) {
          readyAll = false;
        }
      });
      if (readyAll) {
        resolve();
      } else {
        tc.events.once("ready", function () {
          resolve();
        });
      }
    });
  }

  function getTileContainer(layer) {
    for (var k in layer) {
      if (layer.hasOwnProperty(k)) {
        if (
          layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer ||
          layer[k] instanceof ymaps.layer.tileContainer.DomContainer
        ) {
          return layer[k];
        }
      }
    }
    return null;
  }

  // Функция загрузки API Яндекс.Карт по требованию (в нашем случае при наведении)
  function loadScript(url, callback) {
    var script = document.createElement("script");

    if (script.readyState) { // IE
      script.onreadystatechange = function () {
        if (script.readyState == "loaded" ||
          script.readyState == "complete") {
          script.onreadystatechange = null;
          callback();
        }
      };
    } else { // Другие браузеры
      script.onload = function () {
        callback();
      };
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
  }

  // Основная функция, которая проверяет когда мы навели на блок с классом &#34;ymap-container&#34;
  var ymap = function () {
    $('.footer__map').mouseenter(function () {
      if (!check_if_load) { // проверяем первый ли раз загружается Яндекс.Карта, если да, то загружаем

        // Чтобы не было повторной загрузки карты, мы изменяем значение переменной
        check_if_load = true;

        // Показываем индикатор загрузки до тех пор, пока карта не загрузится
        spinner.addClass('is-active');

        // Загружаем API Яндекс.Карт
        loadScript("https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;loadByRequire=1", function () {
          // Как только API Яндекс.Карт загрузились, сразу формируем карту и помещаем в блок с идентификатором &#34;map-yandex&#34;
          ymaps.load(init);
        });
      }
    });
  }

  $(function () {

    //Запускаем основную функцию
    ymap();

  });

  let player;
  $('.video__play').on('click', function () {
    player = new YT.Player('player', {
      width: '100%',
      videoId: 'RHzzLqJWqHs',
      events: {
        'onReady': videoPlay
      }
    });
  });

  function videoPlay(event) {
    event.target.playVideo();
  }
});