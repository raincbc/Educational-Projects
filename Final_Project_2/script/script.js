$('.answer-main__content>div').on('click', function () {
    $(this).toggleClass('answer-content__text-click');
    $(this).children('.answer-content__text').slideToggle(300);
})

$('.answer-span').on('click', function () {
    $(this).children('img').toggleClass('span-rotate');
})


$('#header-ul').on('click', function(){
document.getElementById('checkbox').checked = false;
    $('body').css({ 'overflow': 'visible' });
})
