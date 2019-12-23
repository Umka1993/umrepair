

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
  $('.form').validate({
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
  
  
  // маска  для телефона 
  $('[type=tel]').mask('+7(000) 00-00-000', {placeholder: "+7(__)__-__-___"});     


});