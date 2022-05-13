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