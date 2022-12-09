$(function() {
  var $this = $(this);
  $('.menu-burger__header').click(function() {
      $('.header__container').addClass('opened');
  });

  $('.menu-close__header').click(function() {
      $('.header__container').removeClass('opened');
  });

  $("#myForm").submit(function (e) { // Устанавливаем событие отправки для формы с id=form
     e.preventDefault();
      var form_data = $(this).serialize(); // Собираем все данные из формы
      $.ajax({
          type: "POST", // Метод отправки
          url: "public/images/mail.php", // Путь до php файла отправителя
          data: form_data,
          success: function () {
              // Код в этом блоке выполняется при успешной отправке сообщения
              alert("Ваше сообщение отправлено!");
          }
      });
  });

  $('.site_content_wrap .form_wrap form.form .right_column_form .item_form button').click(function() {
      $('.site_content_wrap .form_wrap form.form .right_column_form .item_form button').toggleClass('send');
  });
});

jQuery(document).ready(function($) {

 $(".inp").focus(function(){
   $(this).parent().removeClass("hide");
   $(this).parent().addClass("show");

  }).blur(function(){
       $(this).parent().removeClass("show");
   $(this).parent().addClass("hide");
  })

});