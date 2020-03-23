// slider
$('.company-video__slider').slick({
    slidesToShow: 3,
    appendArrows: '.video-nav',
    prevArrow: '<button type="button" class="slick-prev"><svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '    <path d="M6 1L1 6L6 11"/>\n' +
        '</svg>\n</button>',
    nextArrow: '<button type="button" class="slick-next"><svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
        '    <path d="M1 1L6 6L1 11"/>\n' +
        '</svg>\n</button>',
    responsive: [
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
            }
        }

    ]
});


// scroll top
$("body").on("click", ".scroll-top", function () {
    $("html, body").animate({
        scrollTop: 0
    }, "slow")
});

// slider range filter
$('.slider-range__price').slider({
    range: true,
    min: 0,
    max: 2500000,
    values: [0, 0],
    classes: {
        "ui-slider-handle": "ui-corner-all"
    },
    slide: function (event, ui) {
        //Поле минимального значения
        $(".dec1__price").val(ui.values[0]);
        //Поле максимального значения
        $(".dec2__price").val(ui.values[1]);
    }
});

$(".dec1__price").val($(".slider-range__price").slider("value"));
$(".dec2__price").val($(".slider-range__price").slider("value"));

$('.slider-range__area').slider({
    range: true,
    min: 0,
    max: 150,
    values: [0, 0],
    classes: {
        "ui-slider-handle": "ui-corner-all"
    },
    slide: function (event, ui) {
        //Поле минимального значения
        $(".dec1__area").val(ui.values[0]);
        //Поле максимального значения
        $(".dec2__area").val(ui.values[1]);
    }
});

$(".dec1__area").val($(".slider-range__area").slider("value"));
$(".dec2__area").val($(".slider-range__area").slider("value"));

$('.slider-range__size').slider({
    range: true,
    min: 0,
    max: 150,
    values: [0, 0],
    classes: {
        "ui-slider-handle": "ui-corner-all"
    },
    slide: function (event, ui) {
        //Поле минимального значения
        $(".dec1__size").val(ui.values[0]);
        //Поле максимального значения
        $(".dec2__size").val(ui.values[1]);
    }
});

$(".dec1__size").val($(".slider-range__size").slider("value"));
$(".dec2__size").val($(".slider-range__size").slider("value"));

$('.slider-range__floors').slider({
    range: true,
    min: 0,
    max: 24,
    values: [0, 0],
    classes: {
        "ui-slider-handle": "ui-corner-all"
    },
    slide: function (event, ui) {
        //Поле минимального значения
        $(".dec1__floors").val(ui.values[0]);
        //Поле максимального значения
        $(".dec2__floors").val(ui.values[1]);
    }
});

$(".dec1__floors").val($(".slider-range__floors").slider("value"));
$(".dec2__floors").val($(".slider-range__floors").slider("value"));


$('.slider-rdec2__bedrooms').slider({
    range: true,
    min: 0,
    max: 24,
    values: [0, 0],
    classes: {
        "ui-slider-handle": "ui-corner-all"
    },
    slide: function (event, ui) {
        //Поле минимального значения
        $(".dec1__bedrooms").val(ui.values[0]);
        //Поле максимального значения
        $(".dec2__bedrooms").val(ui.values[1]);
    }
});

$(".dec1__bedrooms").val($(".slider-rdec2__bedrooms").slider("value"));
$(".dec2__bedrooms").val($(".slider-rdec2__bedrooms").slider("value"));

$('.slider-range__bathrooms').slider({
    range: true,
    min: 0,
    max: 24,
    values: [0, 0],
    classes: {
        "ui-slider-handle": "ui-corner-all"
    },
    slide: function (event, ui) {
        //Поле минимального значения
        $(".dec1__bathrooms").val(ui.values[0]);
        //Поле максимального значения
        $(".dec2__bathrooms").val(ui.values[1]);
    }
});

$(".dec1__bathrooms").val($(".slider-range__bathrooms").slider("value"));
$(".dec2__bathrooms").val($(".slider-range__bathrooms").slider("value"));


$(document).ready(function () {
    // var srcValue = $('.product-image__max img').attr('src');
    var penImg = $('.product-image__max img');
    // var linksImg = $('.product-image__max a');

    $('.product-image__min div.item').on('click', function () {
        $('.product-image__min div.item').removeClass('click-item');
        $(this).addClass('click-item');
        var imgPath;

        imgPath = $(this).attr('data-img-path');

        penImg.attr('src', imgPath);
        // linksImg.attr('href', imgPath);

    });
});

// mobile filter
$('.btn-filter').click(function () {
   $('.sidebar').fadeToggle();
});

// $('[data-fancybox="gallery"]').fancybox({
//     thumbs : {
//         autoStart : true,
//         axis      : 'x'
//     },
//     infobar: false,
//     buttons: [
//         "close"
//     ]
// });

