//fullpage
function fullpgLayerPop() {
    new fullpage('#fullpage', {
        anchors: ['firstPage', 'secondPage', '3rdPage'],
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        autoScrolling: true,
        navigation: true,
        navigationPosition: 'left',
        navigationTooltips: ['메인', '알림', '정보'],
        showActiveTooltip: true,
        menu: '#menu',
        responsiveWidth: 1281,
        normalScrollElements: '#layer-popup',
        scrollHorizontally: true,
        afterLoad: function () {

            // $('.fp-table').removeClass('focus');
            $('.fp-table.active').addClass('focus');

        },
    });
}

//popupzone
function popupzone() {

    let $slider = $('.popupzone__slider');
    let $sliderPlay = $(".popupzone .state .start");
    let $sliderPause = $(".popupzone .state .pause");

    $slider.slick({
        infinite: true,
        vertical:true,
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        arrows: true,
        autoplay: true,
        appendDots: '.popupzone .slider-navigation .slider-dots',
        autoplaySpeed: 20000,
        pauseOnDotsHover: false,
        pauseOnHover: false,
        cssEase: 'linear',
        prevArrow: $('.popupzone__navi .prev'),
        nextArrow: $('.popupzone__navi .next'),
        easing: 'ease',
    });

    $sliderPause.on("click", function () {
        $slider.slick("slickPause");
        $sliderPause.removeClass('state--active');
        $sliderPlay.addClass('state--active');
    });

    $sliderPlay.on("click", function () {
        $slider.slick("slickPlay");
        $sliderPlay.removeClass('state--active');
        $sliderPause.addClass('state--active');
    });

}

//cardnews
function cardNews() {

    let $slider = $('.cardnews__slider');
    let $sliderPlay = $(".cardnews .state .start");
    let $sliderPause = $(".cardnews .state .pause");

    $slider.slick({
        infinite: true,
        dots: true,
        arrows: false,
        autoplay: true,
        appendDots: '.cardnews .slider-navigation .slider-dots',
        autoplaySpeed: 20000,
        pauseOnDotsHover: false,
        pauseOnHover: false,
        cssEase: 'linear',
        easing: 'ease',
    });

    $sliderPause.on("click", function () {
        $slider.slick("slickPause");
        $sliderPause.removeClass('state--active');
        $sliderPlay.addClass('state--active');
    });

    $sliderPlay.on("click", function () {
        $slider.slick("slickPlay");
        $sliderPlay.removeClass('state--active');
        $sliderPause.addClass('state--active');
    });

}

function statusNumbering() {
 


    const statusListEls = document.querySelectorAll('.status__list > li');
    statusListEls.forEach(function(statusListEl, index){
        statusListEl.classList.add(`status${index + 1}`);
    });

    const statusContEls = document.querySelectorAll('.status__popup > div');
    statusContEls.forEach(function(statusContEl, index){
        statusContEl.classList.add(`status${index + 1}`);
    });

    $('.status__list > li').on('click',function(){
        $(this).addClass('active').siblings().removeClass('active');

        const index = $(this).index();
        
        const statusContents = $('.status__popup > div');
        statusContents.eq(index).addClass('active').siblings().removeClass('active');
    });

}

function mainBoard() {
    $('.information .con-title strong').on('click',function(){
        $(this).addClass('active').siblings().removeClass('active');

        const index = $(this).index();
        
        const boardContents = $('.information__board > div');
        // boardContents.eq(index).addClass('active').siblings().removeClass('active');
        boardContents.eq(index).addClass('active').siblings().removeClass('active');
    });
}

//text-animation
function text_animation() {

    $('.visual-info .title .vt1').textillate({
        initialDelay: 500,
        in: {
            effect: 'fadeInDown',
            delayScale: 1,
            delay: 100
        }
    });

    $('.visual-info .title .vt2').textillate({
        initialDelay: 700,
        in: {
            effect: 'fadeInDown',
            delayScale: 1,
            delay: 100
        }
    });

    $('.visual-info .title .vt3').textillate({
        initialDelay: 1000,
        in: {
            effect: 'fadeInDown',
            delayScale: 1,
            delay: 100
        }
    });
    
    $('.visual-info .title .vt4').textillate({
        initialDelay: 1300,
        in: {
            effect: 'fadeInRight',
            delayScale: 3,
            delay: 20
        }
    });
}


//section03
function product_slider() {

    let $sliderText = $("#section03 .txt-slider");
    let $slider = $("#section03 .img-slider");
    let $sliderNavi = $("#section03 .dot");

    $slider.slick({
        infinite: true,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        autoplay: false,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
        prevArrow: $('#section03 .img-navigation .arrow .prev'),
        nextArrow: $('#section03 .img-navigation .arrow .next'),
        asNavFor: '#section03 .dot, #section03 .txt-slider',
    });

    $sliderText.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        autoplay: false,
        cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
        prevArrow: $('#section03 .img-navigation .arrow .prev'),
        nextArrow: $('#section03 .img-navigation .arrow .next'),
        asNavFor: '#section03 .dot, #section03 .img-slider',
    });

    $sliderNavi.slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        autoplay: false,
        focusOnSelect: true,
        prevArrow: $('#section03 .img-navigation .arrow .prev'),
        nextArrow: $('#section03 .img-navigation .arrow .next'),
        asNavFor: '#section03 .img-slider, #section03 .txt-slider',
    });

}

//section04
function history_() {

    let $slider = $("#section04 .img-slider");
    let $sliderNavi = $("#section04 .dot");

    $slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        autoplay: false,
        autoplaySpeed: 5000,
        pauseOnDotsHover: false,
        pauseOnHover: false,
        focusOnSelect: true,
        variableWidth: true,
        prevArrow: $('#section04 .img-navigation .arrow .prev'),
        nextArrow: $('#section04 .img-navigation .arrow .next'),
        cssEase: 'ease-out',
        asNavFor: '#section04 .dot',
    });

    $sliderNavi.slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        autoplay: false,
        focusOnSelect: true,
        prevArrow: $('#section04 .img-navigation .arrow .prev'),
        nextArrow: $('#section04 .img-navigation .arrow .next'),
        asNavFor: '#section04 .img-slider',
        responsive: [{
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    variableWidth: true,
                }
            }
        ]
    });

}


//section05
function global() {

    var parent = $('#section05');
    var btn = parent.find('.global-list li a');
    var obj = parent.find('.global-info > div');
    btn.on('click', function (event) { //맵 표시 좌표
        event.preventDefault();
        var t = $(this);
        var tagId = t.data('target-id');
        btn.removeClass('active');
        obj.removeClass('active');
        t.addClass('active');
        $('.global-info div[data-target-id="' + tagId + '"]').addClass("active");
    });

    obj.on('click', function (event) { //맵 밑에 버튼
        event.preventDefault();
        var t = $(this);
        var tagId = t.data('target-id');
        btn.removeClass('active');
        obj.removeClass('active');
        t.addClass('active');
        $('.global-list li a[data-target-id="' + tagId + '"]').addClass("active");
    });

    $('#section05 .global-contents .close').on('click', function () {
        setTimeout(function () {
            btn.removeClass('active');
            obj.removeClass('active');
        }, 10)

    });


    if ($(window).width() < 769) {
        $('#section05 .global').children('img').attr("src", "/html/images/main/global-mobile.png");
    } else {
        $('#section05 .global').children('img').attr("src", "/html/images/main/global.png");
    }

}

//section06
function insight() {

    var $slider = $('#section06 .insight');
    var $progressBar = $('.progress');
    var $progressBarLabel = $('.slider_label');

    $slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        var calc = ((nextSlide) / (slick.slideCount - 3)) * 100;

        $progressBar
            .css('background-size', calc + '% 100%')
            .attr('aria-valuenow', calc);

        $progressBarLabel.text(calc + '% completed');
    });

    $slider.slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        autoplay: false,
        autoplaySpeed: 7500,
        pauseOnDotsHover: false,
        pauseOnHover: false,
        focusOnSelect: true,
        cssEase: 'ease',
        prevArrow: $('#section06 .arrow .prev'),
        nextArrow: $('#section06 .arrow .next'),
        easing: 'ease',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
            }
        }]
    });
}




$(function () {

    fullpgLayerPop();
    popupzone();
    cardNews();
    statusNumbering();
    mainBoard();
    // text_animation();
    // product_slider();
    // history_();
    // global();
    // insight();
    
    // $(window).resize(function () {
    //     global();
    // })

    // scrollbar();
    // text_animation();
    // history_slider();
    // topBtn();
    // country();
    // $(window).resize(function () {
    //     country();
    // });


});
