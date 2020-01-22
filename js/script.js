$(document).ready(function(){
    $('.header_burger').click(function(event){
        $('.header_burger,.header_menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.header_menu .header_link').click(function(event){
      $('.header_burger, .header_menu').removeClass('active');
      $('body').removeClass('lock');
  });
});






jQuery(document).ready(function() {
  
    let btn = $('#button');
  
    $(window).scroll(function() {
      if ($(window).scrollTop() > 300) {
        btn.addClass('show');
      } else {
        btn.removeClass('show');
      }
    });
  
    btn.on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop:0}, '300');
    });
  
  });