$('.about-items>div').on('click', function () {
    $(this).children('.about-items__span').toggleClass('turn');
    $(this).next('p').slideToggle(300);
    $(this).parent('.about-items').toggleClass('turnClass');
    
})

$('.space-menu__hide').on('click', function (){
    $(this).children('p').slideToggle(300);
    $(this).children('.space-menu__hide-content').children('span').toggleClass('change-color');
    $(this).children('.space-menu__line').toggleClass('line-color');
})

$('#menuToggle #toggleCheckbox').change(function() {
    if(this.checked) {
        $('body').css({'overflow': "hidden" })
    }
    else {
        $('body').css({'overflow': "visible" })
    }
})

$(window).scroll(function () {
    if ($(this).scrollTop() > 500){
        $('#up').fadeIn();
    } else {
        $('#up').fadeOut();
    }
})

$('#up').on('click', function () {
    $('html, body').animate({scrollTop: 0},600)
})

$('#home').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({scrollTop: $('#about').offset().top},600)
})