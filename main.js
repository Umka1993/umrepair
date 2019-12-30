

$(document).ready(function () {
  var modal = $('.modal'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close');
    
  modalBtn.on('click', function () {
    modal.toggleClass('modal--visible');
  });
  closeBtn.on('click',function () {
    modal.toggleClass('modal--visible');
  });



  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })

  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination')

  next.css( 'left', prev.width() + 10 + bullets.width() + 10 )
  bullets.css( 'left', prev.width() + 10 )

  new WOW().init();

  // валидация формы
  $('.modal__form').validate({
    errorClass: "invalid",
    rules: {
      // строчное правило 
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      //правило-объект
      userEmail: {
        required: true,
        email: true
      }
    },   
    // сообщения  
    errorElement: "div",
    messages: {
      userName: {
        required: 'Заполните поле',
        minlength: 'Имя не короче  двух букв',
        maxlength: 'Имя не длинее 15 букв',
        
      },
      userPhone: "Заполните поле",
      userEmail: {
        required: "Заполните поле",
        email: "Введите корректный email"
      }
    }
   
  });

  $('.control__form').validate({
    errorClass: "invalid",
    rules: {
      // строчное правило 
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15,
      },
      userPhone: "required",
      //правило-объект
      userEmail: {
        required: true,
        email: true
      }
    },   
    // сообщения  
    errorElement: "div",
    messages: {
      userName: {
        required: 'Заполните поле',
        minlength: 'Имя не короче  двух букв',
        maxlength: 'Имя не длинее 15 букв',
        
      },
      userPhone: "Заполните поле",
      userEmail: {
        required: "Заполните поле",
        email: "Введите корректный email"
      }
    }
   
  });

  $('.footer__form').validate({
    errorClass: "invalid",
    rules: {
      // строчное правило 
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: "required",
      //правило-объект
      userQuestion: {
        required: true,
        minlength: 2
      },
      userPhone: {
        required: true,
        minlength: 2
      },

    },   
    // сообщения  
    errorElement: "div",
    messages: {
      userName: {
        required: 'Заполните поле',
        minlength: 'Имя не короче  двух букв',
        maxlength: 'Имя не длинее 15 букв',
       
        
      },
      userPhone: "Заполните поле",
      
      userQuestion: {
        required: 'Заполните поле',
        minlength: 'Вопрос не может быть короче  двух букв',
        
      }
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          alert(' Форма отправлена, мы свяжемся с вами через 10 минут');
          $(form)[0].reset();
          modal.removeClass('modal--visible');

        }
      }); 
    }
  });
  
  
  
  // маска  для телефона 
  $('[type=tel]').mask('+7(000) 00-00-000', {placeholder: "+7(__)__-__-___"});     

  
  // создание yandex карты 
ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [47.244734, 39.723227],
            zoom: 9
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Собственный значок метки',
            balloonContent: 'Это красивая метка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'images/myIcon.gif',
            // Размеры метки.
            iconImageSize: [30, 42],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-5, -38]
        }),

        myPlacemarkWithContent = new ymaps.Placemark([47.244734, 39.723227], {
            hintContent: 'Наш офис',
            balloonContent: 'Вход со двора',
            iconContent: ''
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: 'img/location.png',
            // Размеры метки.
            iconImageSize: [32, 32],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-24, -24],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });

    myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemarkWithContent);
      });
});