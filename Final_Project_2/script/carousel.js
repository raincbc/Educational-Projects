$('.carousel').slick({
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: $('.slick-arrow__prev'),
    nextArrow: $('.slick-arrow__next'),
    responsive:[
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    })            

    


$('.gallery-content').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: $('.gallery-slick__arrow-prev'),
    nextArrow: $('.gallery-slick__arrow-next'),
    responsive:[
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }    
        ]
})

$('.customers-content__slider').slick({
    slidesToShow: 2,
    slidesToScroll: 2,
    prevArrow: $('.customer-slick__arrow-prev'),
    nextArrow: $('.customer-slick__arrow-next'),
    responsive:[
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }    
        ]
})


