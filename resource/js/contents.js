//서브페이지 헤더
function sub_header() {
    if ($('body').hasClass('sub-page') === true) {
        $('#header').addClass('scrolled');
    }
}

// location
function sub_location() {

    $(".location-list .state").on("click", function () {
        $(this).closest("li").toggleClass("active");
        $(this).closest("li").siblings().removeClass("active");

        //빈화면클릭시 제거
        $('html').click(function (e) {
            if (!$(e.target).hasClass('location')) {
                $('.location ul li').removeClass('active');
            }
        });

        return false;
    });

    $('.location-list').each(function () {
        if ($('.location-list').hasClass('etc') === true) {
            $(this).find('.state').removeAttr('href').off('click');
        }
    });


    //스크롤 시, 로케이션 픽스
    $(window).on("scroll", function () {

        let scroll = $(window).scrollTop();

        let visualHeight = $('#sub-visual').innerHeight();
        let headerHeight = $('#header').innerHeight();
        let locationHeight = $('.location').innerHeight();

        let fixedPoint = visualHeight + headerHeight - locationHeight;

        if (scroll >= fixedPoint) {
            $(".location").addClass("fixed");
        } else {
            $(".location").removeClass("fixed");
        }
    });

}

function visualSkip() {
        
    //선택자
    function selector(element) {
        let selectElement = document.querySelector(element);
        return selectElement;
    }

    function selectorAll(element) {
        let selectElement = document.querySelectorAll(element);
        return selectElement;
    }

    const viewportTop = window.pageYOffset;
    // const viewportPosition = viewportTop.scrollTop;
    const visualClient = selector('#sub-visual').clientHeight;
    const headerClient = selector('#header').clientHeight;
    const skipScroll = visualClient + headerClient;

    console.log(viewportTop + 'hi');
    console.log(skipScroll);

    // window.addEventListener('scroll', function () {
    //     if (viewportTop > 0) {
    //         $('body').animate({
    //             scrollTop: skipScroll
    //         }, 300);
    //     }
    // })

    console.log(visualClient);

}

// 카테고리 버튼
function depth_btn_mobile() {

    $('.depth-btn ul').on('click', function () {

        let windowWidth = $(window).innerWidth();
        let breakPoint = 640;
        if (windowWidth <= breakPoint) {
            $(this).toggleClass('active');
        } else {
            $(this).off('click');
        }
    });

    $('.depth-btn ul li.active a').on('click', function (e) {
        e.preventDefault();
    })

}

// 연혁
function history_contents() {

    $('.history-btn a').on('click', function () {

        $(this).closest('li').addClass('active').siblings().removeClass('active');

        return false;
    });

    $(window).scroll(function () {
        // ** 파랑 라인 위치보정
        let windowSt = $(window).scrollTop();
        let scrollH = $("#footer").outerHeight();
        let win_w = $("body").outerWidth();
        //console.log(windowSt, scrollBottom, chargeH, scrollH);

        $(".history-line").css({
            "height": windowSt - scrollH
        });
        if (windowSt > $("body").height() * 1) {
            if (win_w > 768) {
                $(".history-line").css({
                    "height": windowSt - scrollH
                });
            } else if (win_w < 399) {
                $(".history-line").css({
                    "height": windowSt - scrollH
                });
            }
        }
    });

    //연혁 스크롤

    $(window).on("mousewheel scroll", function () {
        let viewTop = $(this).scrollTop(),
            viewHeight = $(this).outerHeight(true),
            viewBottom = viewTop + viewHeight;

        $('.history-list li').each(function () {

            let elementTop = $(this).offset().top + 900,
                elementHeight = $(this).outerHeight(),
                elementBottom = elementTop + elementHeight;

            if (((elementTop <= viewBottom) && (elementBottom >= viewTop))) {
                $(this).addClass('active');
            }


        });
    });



    //퀵버튼
    $(window).on("scroll", function () {

        let scroll = $(window).scrollTop();

        let visualHeight = $('#sub-visual').innerHeight();
        let headerHeight = $('#header').innerHeight();
        let contentsHeight = $('#sub').innerHeight();

        let fixedPoint = headerHeight + visualHeight + 150;
        let removePoint = visualHeight + headerHeight + contentsHeight;

        let $element = $('.history-btn');
        let windowWidth = $(window).innerWidth();
        let breakPoint = 768;

        if (windowWidth <= breakPoint) {
            $element.removeClass('fixed');
        } else {
            if (scroll >= fixedPoint) {
                $element.addClass("fixed");
            } else {
                $element.removeClass("fixed");
            }
        }
    });


}

function product() {

    let $slider = $(".product .tab-contents-slider");
    let $sliderNavi = $(".product .tab-btn-slider");
    let $productContents = $(".product .product-contents-slider");

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
        prevArrow: $('.product-function .prev'),
        nextArrow: $('.product-function .next'),
        cssEase: 'ease-out',
        asNavFor: '.product .tab-btn-slider',
    });

    $sliderNavi.slick({
        slidesToShow: 5,
        infinite: true,
        dots: false,
        autoplay: false,
        focusOnSelect: true,
        asNavFor: '.product .tab-contents-slider',
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                variableWidth: true,
            }
        }, ]
    });

    $productContents.slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        autoplay: false,
        autoplaySpeed: 5000,
        pauseOnDotsHover: false,
        pauseOnHover: false,
        focusOnSelect: true,
        // preletrow: $('#section04 .img-navigation .arrow .prev'),
        // nextArrow: $('#section04 .img-navigation .arrow .next'),
        cssEase: 'ease-out',
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 587,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                }
            }
        ]
    });

    // const productNavi = document.querySelectorAll('.product-navi li a');
    // productNavi.forEach(function(el){
    //     this.addEventListener('click',function(){

    //         if(el.classList.contains('active')) {
    //             el.classList.remove('active');
    //         } else {
    //             el.classList.add('active');
    //         }
    //     })
    // });

    // let productNavi = $('#product-navi ul li a');
    // productNavi.on('click',function(){
    //     $(this).closest('li').addClass('active').siblings().removeClass('active');
    //     let productEl = $(this).attr('href');
    //     console.log(productEl);
    // });

    
    const boxAll = document.querySelectorAll('#product-navi a, .product > div');
    const productNavi = document.querySelectorAll('#product-navi a');
    const ACTIVE_CLASS = 'active';

    //순서대로 클래스 부여
    boxAll.forEach(function (boxEl, index) {
        boxEl.setAttribute('data-target-id', `target-${index}`);
    });

    function handleClick() {
        productNavi.forEach(function(product){
            product.addEventListener('click', function(){
                this.classList.toggle(ACTIVE_CLASS);
            });
        })
    }

    handleClick();


}


$(function () {

    sub_header();
    sub_location();
    visualSkip();
    history_contents();
    product();
    depth_btn_mobile();
    // faq();

    $(window).resize(function () {
        depth_btn_mobile();
    })


    // **컨텐츠 스크롤 효과

});
