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

function mobile_menu() {  //모바일 메뉴, 전체메뉴
    var dep1btn = $(".mobile_menu>ul>li>a");
    var dep1fbtn = $(".mobile_menu>ul>li:first>a");
    var dep2con = $(".mobile_menu>ul>li>div");
    var dep2btn = $(".mobile_menu>ul>li>div>ul>li>a");
    var dep3btn = $(".mobile_menu>ul>li>div>ul>li>ul>li>a");
    var dep3con = $(".mobile_menu>ul>li>div>ul>li>ul");
    var speed = 300;
    var main_page_chek = true;
     var last_focus = $(".mobile_menu>ul>li:last>.sub>ul>li:last>a");
     var all_btn = $(".all_menu");

        if($(window).width() < 1280) {


            $('.mobile_menu ul li').find('a').each(function (index, item) {
                var has_class_chk = $(item).hasClass('on');

                if (has_class_chk === true) {
                    main_page_chek = false;

                    return false;
                }
            });

            if (main_page_chek === true) {
                dep1fbtn.addClass("on");
            }


            dep1btn.each(function () {
                if (!$(this).next().length) {
                    $(this).addClass("empty");
                }
            });
            dep2btn.each(function () {
                if ($(this).hasClass("on")) {
                    $(this).closest("ul").show();
                    $(this).closest("ul").prev("a").addClass("on");
                }
                if (!$(this).next().length) {
                    $(this).addClass("empty");
                }
            });

            
            dep1btn.off().on("click", function () {
                if ($(this).next("div").is(":hidden")) {
                    dep1btn.removeClass("on");
                    dep2con.hide();

                    $(this).addClass("on").next("div").show();
                }
                if ($(this).next("div").length) {  //하위메뉴가 있을 경우에만 버튼효과 무시
                    return false;
                }
            });
            dep2btn.off().on("click", function () {
                if ($(this).next("ul").is(":hidden")) {
                    dep2btn.removeClass("on");
                    dep3btn.removeClass("on");
                    dep3con.slideUp();
            
                    $(this).addClass("on").next("ul").slideDown(speed);


                } else {
                    $(this).removeClass("on").next("ul").slideUp(speed);
                }
                if ($(this).next("ul").length) {
                    return false;
                }
            });

            dep3btn.each(function () {
                if ($(this).hasClass("on")) {
                    $(this).closest("ul").css("display", "block");
                }
            });
            
        }else{
            dep1btn.off('click');
            dep2btn.off('click');
            dep3btn.off('click');

            dep1btn.each(function () {
                if ($(this).next().length) {
                    $(this).addClass("nocur");
                    $(this).prop('href','#');
                }
             });

            dep2btn.each(function () {
                if ($(this).next().length) {
                    $(this).addClass("nocur");
                    $(this).prop('href','#');
                }
            });
            

        }
  

        last_focus.focusout(function(e){
            
            all_btn.focus();
            e.stopPropagation();
        });

// 전체 1000이상일때 하위 내용 있을때 버튼 클릭 방지

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

    siteMapBtn.on('click', function () {

        let windowWidth = $(window).innerWidth();
        let breakPoint = 768;

        if (windowWidth <= breakPoint) {
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


function enterkey() {

    $('input').each(function () {

        if (window.event.keyCode == 13) {

            $(this).next('button').trigger('click');

        }
    })
}

function footerBanner() {

    let $slider = $('.footer-banner__slider');
    let $sliderPlay = $(".footer-banner__navi .start");
    let $sliderPause = $(".footer-banner__navi .pause");

    $slider.slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: true,
        autoplay: true,
        prevArrow: $('.footer-banner__navi .prev'),
        nextArrow: $('.footer-banner__navi .next'),
        autoplaySpeed: 5000,
        pauseOnDotsHover: false,
        pauseOnHover: false,
        cssEase: 'linear',
        easing: 'ease',
        variableWidth:true,
    });

    $sliderPause.on("click", function () {
        $slider.slick("slickPause");
        $sliderPause.hide();
        $sliderPlay.show();
    });

    $sliderPlay.on("click", function () {
        $slider.slick("slickPlay");
        $sliderPlay.show();
        $sliderPause.hide();
    });

}

$(function(){
    $("#wrap").prepend("<div class='blind'></div>");
    	
	
	function gnb() {//네비게이션
		var header = $("#header");
		var nav = $("#gnb_wrap>#gnb>ul>li>a");
		var gnball = $("#gnb_wrap>#gnb"); 
		var nav_bg = $(".nav_bg");
		var nav_sub = $("#gnb_wrap>#gnb>ul>li>.sub");
		var nav_sub_a = $("#gnb_wrap>#gnb>ul>li>.sub>ul>li>a");
		var nav_sub2 = $("#gnb_wrap>#gnb>ul>li>.sub>ul");
		var nav_sub3 = $("#gnb_wrap>#gnb>ul>li>.sub>ul>li>ul>li>a");
		
		var last = $("#gnb>ul>li:last .sub>ul>li:last>a");
	
		nav.on('focusin mouseenter', function(e){
			var t = $(this);
			nav.removeClass("on");
			t.addClass("on");
			var maxHeight = nav_sub2.map(function(){
				return $(this).height();
			}).get(),
			menuHeight = Math.max.apply(null, maxHeight);			
			
			nav_sub.height(menuHeight);
			
			
			nav_bg.height(menuHeight).fadeIn();
			nav_sub2.stop().fadeIn();

			e.preventDefault();
			
			$("#header").addClass("on");
			$("body").addClass("on");
			
		});

        nav_sub_a.on("mouseover focus", function () {
            var t = $(this);
			
            t.parent().parent().parent().prev().addClass("on");
			t.parent().parent().parent().parent().siblings().find("a").removeClass("on");
			t.parent().siblings().find("a").removeClass("on");
        });
		nav_sub3.on("mouseover focus", function () {
            var t = $(this);
            t.parent().parent().prev().addClass("on");
			t.parent().parent().parent().siblings().find("a").removeClass("on");

        });
	

		
      
        gnbClose();
    
        function gnbClose() {
            gnball.on("mouseleave", function () {
          
				nav_bg.css({ height : '0px'});
				nav_sub.css({ height : '0px'});
				nav_sub2.hide();
				nav.removeClass("on");
				$("#header").removeClass("on");
				$("body").removeClass("on");
            });
        }
		
		
		last.on("focusout", function () {
				nav_bg.css({ height : '0px'});
				nav_sub.css({ height : '0px'});
				nav_sub2.hide();
				nav.removeClass("on");	
				$("#header").removeClass("on");
				$("body").removeClass("on");
				
		});
		
	
	}
	
	function snb() { //서브바
		var parent = $('.snb_select');

		if (!parent) {

			return false;
		}

		var btn = parent.find('.select_active');
		var obj = parent.find('.select_list');

		btn.on('click', function (event) {
			$(this).toggleClass('on');
			$(this).next().stop(0, 1).fadeToggle(150, 'easeOutCubic');
		});

		parent.on('mouseleave', function (event) {
			$(this).find(btn).removeClass('on');
			$(this).find('.select_list').stop(0, 1).fadeOut(150, 'easeOutCubic').removeClass("on");
	
		});

	}

	 function lnb() {//좌측 메뉴
		var menu = $(".lnb_menu");
		var dep1Btn = menu.find(">li>a");
		var dep2box = menu.find(">li>ul");
		var dep2Btn = dep2box.find(">li>a");
		var speed = 300;

		dep2Btn.each(function () {
			if($(this).hasClass("on")){
				$(this).closest("ul").siblings("a").addClass("on");
			}
		});

		dep1Btn.each(function () {
			if($(this).hasClass("on")){
				$(this).next("ul").show();
			}
			if($(this).next("ul").length){
				$(this).addClass("sub");
			}
		});

		dep2Btn.each(function () {
			if($(this).hasClass("on")){
				$(this).next("ul").show();
			}
		});

		dep1Btn.on("click",function () {
			if($(this).next().is(":hidden")){
				dep1Btn.removeClass("on");
				dep2box.slideUp(speed, 'easeOutCubic');
				$(this).addClass("on");
				$(this).next().slideDown(speed, 'easeOutCubic');
			}else{
				$(this).removeClass("on");
				$(this).next().slideUp(speed, 'easeOutCubic');
			}
			if($(this).next().length){
				return false;
			}
		});
	}
	
    function mobile_menu() {  //모바일 메뉴, 전체메뉴
        var dep1btn = $(".mobile_menu>ul>li>a");
        var dep1fbtn = $(".mobile_menu>ul>li:first>a");
        var dep2con = $(".mobile_menu>ul>li>div");
        var dep2btn = $(".mobile_menu>ul>li>div>ul>li>a");
        var dep3btn = $(".mobile_menu>ul>li>div>ul>li>ul>li>a");
        var dep3con = $(".mobile_menu>ul>li>div>ul>li>ul");
        var speed = 300;
        var main_page_chek = true;
         var last_focus = $(".mobile_menu>ul>li:last>.sub>ul>li:last>a");
         var all_btn = $(".all_menu");

            if($(window).width() < 1280) {


                $('.mobile_menu ul li').find('a').each(function (index, item) {
                    var has_class_chk = $(item).hasClass('on');

                    if (has_class_chk === true) {
                        main_page_chek = false;

                        return false;
                    }
                });

                if (main_page_chek === true) {
                    dep1fbtn.addClass("on");
                }


                dep1btn.each(function () {
                    if (!$(this).next().length) {
                        $(this).addClass("empty");
                    }
                });
                dep2btn.each(function () {
                    if ($(this).hasClass("on")) {
                        $(this).closest("ul").show();
                        $(this).closest("ul").prev("a").addClass("on");
                    }
                    if (!$(this).next().length) {
                        $(this).addClass("empty");
                    }
                });

                
                dep1btn.off().on("click", function () {
                    if ($(this).next("div").is(":hidden")) {
                        dep1btn.removeClass("on");
                        dep2con.hide();

                        $(this).addClass("on").next("div").show();
                    }
                    if ($(this).next("div").length) {  //하위메뉴가 있을 경우에만 버튼효과 무시
                        return false;
                    }
                });
                dep2btn.off().on("click", function () {
                    if ($(this).next("ul").is(":hidden")) {
                        dep2btn.removeClass("on");
                        dep3btn.removeClass("on");
                        dep3con.slideUp();
                
                        $(this).addClass("on").next("ul").slideDown(speed);


                    } else {
                        $(this).removeClass("on").next("ul").slideUp(speed);
                    }
                    if ($(this).next("ul").length) {
                        return false;
                    }
                });

                dep3btn.each(function () {
                    if ($(this).hasClass("on")) {
                        $(this).closest("ul").css("display", "block");
                    }
                });
                
            }else{
                dep1btn.off('click');
                dep2btn.off('click');
                dep3btn.off('click');

                dep1btn.each(function () {
                    if ($(this).next().length) {
                        $(this).addClass("nocur");
                        $(this).prop('href','#');
                    }
                 });

                dep2btn.each(function () {
                    if ($(this).next().length) {
                        $(this).addClass("nocur");
                        $(this).prop('href','#');
                    }
                });
                

            }
      

            last_focus.focusout(function(e){
                
                all_btn.focus();
                e.stopPropagation();
            });

    // 전체 1000이상일때 하위 내용 있을때 버튼 클릭 방지

 }
	
	
	function allmenu(){//전체메뉴 버튼
	
		var all_btn = $(".all_menu");
		var allBox = $(".mobile_wrap");
		
		var search_btn = $(".search");
		var searchBox = $(".search_box");
		
		var nav_bg = $(".nav_bg");
		
		
		var nav = $("#gnb_wrap>#gnb>ul>li>a");
		
		all_btn.off().on("click", function () {
			allBox.toggleClass("on");  
			$(this).toggleClass("on");

			if($(this).hasClass("on") == true){
				$(this).find(">span").text("전체메뉴 열기");
				$("body").addClass("ov");
				$("#header").addClass("on");
                $("#header").addClass("site");
				$("#gnb").hide();
			}else{
				$(this).find(">span").text("전체메뉴 닫기");
				
				$("#header").removeClass("on");
                $("#header").removeClass("site");
				
				$("body").removeClass("on");
				$("body").removeClass("ov");
				$("body").removeClass("active");
				
				$("#gnb").show();
			}
			search_btn.removeClass("on");
			searchBox.hide();
    

	   });



		
		    
        $(".blind").on("click", function () {

			$(this).fadeOut();
			searchBox.fadeOut();
			allBox.removeClass("on");
			all_btn.removeClass("on");
			search_btn.removeClass("on");
			$("body").removeClass("on");
			$("#header").removeClass("on");
			
			$("body").removeClass("active");
			$("#header").removeClass("active");
		
			$("body").removeClass("ov");

			
			$("#gnb").show();
		});
		
		
	}
	
	function searchmenu(){//검색 버튼
	
		var all_btn = $(".all_menu");
		var allBox = $(".mobile_wrap");
		
		var search_btn = $(".search");
		var searchBox = $(".search_box");
		var speed = 400;
		
		var nav_bg = $(".nav_bg");
		var nav_sub2 = $("#gnb_wrap>#gnb>ul>li>.sub>ul");
		var nav = $("#gnb_wrap>#gnb>ul>li>a");
		
		
		
		search_btn.off().on("click", function () {
			$("#gnb").show();
			
			if($(this).next().is(":hidden")){
				$(this).addClass("on").next().fadeIn();
				$("body").addClass("active");
				
			}else{
				$(this).removeClass("on").next().fadeOut();
				$("body").removeClass("active");
				$("body").removeClass("ov");
				$("body").removeClass("on");
			}

			if($(this).hasClass("on") == true){
				$(this).find(">span").text("전체검색 열기");
			}else{
				$(this).find(">span").text("전체검색 닫기");
			}  
			
			allBox.removeClass("on");
			all_btn.removeClass("on");
			
			
	   });
		
		searchBox.find(".submit").focusout(function(){//전체 메뉴 닫을시 포커스 닫기로 이동
			$(".search").focus();
		});
		

		search_btn.on("mouseover", function(){//검색 메뉴 호버시 gnb none
			nav_sub2.stop().fadeOut();
			nav_bg.stop().fadeOut();
			nav.removeClass("on");
			
		});
		
		
		
	}
	
	

	function scrollbar (){//스크롤바 커스텀

		if($(window).width() > 1000){
			$('.mobile_wrap .layout').mCustomScrollbar({});
		}else{
			$('.mobile_wrap .layout').mCustomScrollbar("destroy");
		}
		
	}
	
	function select() {//셀렉트 박스 커스텀
		$(".select_box .select").click(function () {
			var bt = $(this);
			var adDiv = bt.next("ul");

			if (adDiv.is(":hidden")) {
				adDiv.slideDown();
				bt.addClass("on");
			} else {
				adDiv.slideUp();
				bt.removeClass("on");
			}
		});
	}
	
	function topBtn() {//상단 탑 이동
		var btn = $(".page_topBtn>a");
        var headerH = $("#header").height();
        btn.parent().hide();

		$(document).on("scroll", function () {
       
			var scr = $(document).scrollTop();
			if(scr > headerH){
				btn.parent().fadeIn(300, 'easeOutCubic');
			}else{
				btn.parent().fadeOut(300, 'easeOutCubic');
			}
		});
		
		btn.on("click", function(){
			$( 'html, body' ).animate( { scrollTop : 0 }, 400 );
			
			return false;
		});
	}
	
	function headerfixed (){//헤더고정
        $(window).on("scroll", function () {
            var height = $("#header").height();
            var scroll = $(window).scrollTop();
            if (scroll >= height) {
              $("#header").addClass("scrolled");
            } else {
              $("#header").removeClass("scrolled");
            }
          });

    }

	
	gnb();//네비게이션
	snb();//서브 바
	lnb();//좌측메뉴
	mobile_menu();//모바일 메뉴
	$(window).resize(function(){mobile_menu()});
	allmenu();//전체메뉴
	searchmenu();//검색메뉴
	scrollbar();//스크롤바 디자인 변경
	$(window).resize(function(){scrollbar()});
	select();//셀렉트 박스
	topBtn();//상단 탑 이동
	headerfixed();
    footerBanner(); //푸터배너
	
});