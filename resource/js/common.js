
//a링크 스크롤애니메이션 
function smooth_scroll() {

    $('a[href*="#"]:not([href="#"])').click(function () {

        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {

            var target = $(this.hash);

            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

            if (target.length) {

                $('html, body').animate({
                    scrollTop: target.offset().top - 50

                }, 700);

                return false;
            }

        }
    });
}

// 사이트맵 
function siteMap() {

    $('.menu').on('click', function () {
        $(this).toggleClass('active');
        $('#header').toggleClass('site');
        $('#siteMap').toggleClass('active');
        $('html').toggleClass('active');
        $('#search').removeClass('active');
        $('.search-btn').removeClass('active');
        $('body').removeClass('active2');

        return false;
    });

    let siteMapBtn = $('#siteMap .sitemap-list .title');

    siteMapBtn.on('click',function(){

        let windowWidth = $(window).innerWidth();
        let breakPoint = 768;

        if(windowWidth <= breakPoint) {
            $(this).parent().toggleClass('active').siblings().removeClass('active');
            return false;
        } else {
            $(this).off('click');
        }
    });

    //esc
    $(document).on("keyup", function (e) {
        if (e.keyCode == "27") {
            if ($("#siteMap").hasClass("active")) {
                $(".menu").trigger("click");
            }
        }
    });
}

//검색폼
function search() {
    $('.search-btn a').on('click',function(){
        $(this).parent().addClass('active');
        $('#search').addClass('active');
        $('body').addClass('active2');
    });

    $('#search .close').on('click',function(){
        $('.search-btn').removeClass('active');
        $('#search').removeClass('active');
        $('body').removeClass('active2');
    });
}


function popup_layout() {
    $('.popupOpen').on('click',function(){

        
        console.log('hello');

        $('.popup').addClass('active');

        return false;
    });

    $('.privacy-open').on('click',function(){
        $('.popup .privacy-popup').addClass('active');

        return false;
    });

    $('.email-open').on('click',function(){
        $('.popup .email-popup').addClass('active');

        return false;
    });

    $('.popup-close').on('click',function(){
        $('.popup').removeClass('active');
        $('.popup .popup-contents > div').removeClass('active');

        return false;
    });

    $(document).on("keyup", function (e) {
        if (e.keyCode == "27") {
          if ($(".popup").hasClass("active")) {
            $(".popup-close").trigger("click");
          }
          $(".popup-close").trigger("click");
        }
      });
}


function enterkey() {

    $('input').each(function(){

        if (window.event.keyCode == 13) {

            $(this).next('button').trigger('click');
            
        }
    })
}

$(function () {

    smooth_scroll();
    siteMap();
    search();
    popup_layout();
    $(window).resize(function(){
        smooth_scroll(); 
    })

});