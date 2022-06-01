$('.modal-section').on('click', function (e) {
    if ($(e.target).closest('.modal-container').length == 0) {
        $(this).fadeOut()
    }
})

$('.modal-close').on('click', function () {
    $(this).parents('.modal-section').fadeOut();
})

$('.logo').on('click', function () {
    $('.modal-section').fadeIn();
})


