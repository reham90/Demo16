$(window).on('load', function () {
  $(".preloader").hide();
});
$(document).ready(function() {
    new WOW().init();

    //////// search /////////////
    $(".search-btn").click(function(e) {
        e.preventDefault();
        $('.search-content').toggleClass('height-when-open');
        $('.search-btn').toggleClass('close-search');
    });

    //phone size menu onclick
    

        $(".menu-id").click(function(e) {
            e.preventDefault();

            $(".navgition").toggleClass("reset-left");

            $("body").toggleClass("overlay");
          

        });

    

 //fixed nav
 $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    var $stickyNav = $(".top-header");
    var $stickyHeader = $("header");
    var windowWidth = $(window).width();
    // Handle fixed navigation
    $stickyNav.toggleClass("fixed-nav", scroll >= 200);
    // Handle fixed header
    if (lastScroll - scroll > 0 || (lastScroll - scroll >= 0 && windowWidth <= 991)) {
        $stickyHeader.addClass("fixed-header");
        $('.search-content').removeClass('height-when-close', 1000);
    }
  
    if (scroll === 0) {
        $stickyNav.removeClass("fixed-header");
        $stickyHeader.removeClass("fixed-header");
        $('.search-content').addClass('height-when-close', 500);
        $('.search-content').removeClass('height-when-open', 500);
        $('.search-btn').removeClass('close-search');
    }
    if (lastScroll - scroll < 0){
        $stickyNav.removeClass("fixed-header");
        $stickyHeader.removeClass("fixed-header");
    }
    lastScroll = scroll;
});

var lastScroll = 0;



    //////////** fixed arrow to top**//////////
    $(".arrow-top").click(function() {
        $("html,body").animate({
                scrollTop: 0,
            },
            1000
        );
    });
    $(this).scrollTop() >= 500 ?
        $(".arrow-top").fadeIn(300) :
        $(".arrow-top").fadeOut(300);

    $(window).scroll(function() {
        $(this).scrollTop() >= 500 ?
            $(".arrow-top").fadeIn(300) :
            $(".arrow-top").fadeOut(300);
    });

///////// ** main-slider ** /////////
var mainSlider = new Swiper(".main-slider .swiper-container", {
    loop: true,
    autoplay: true,
    pagination: {
        el: ".main-slider .swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".main-slider .swiper-btn-next",
        prevEl: ".main-slider .swiper-btn-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        767: {
            slidesPerView: 1,
        },
        992: {
            slidesPerView: 1,
        },
        1199: {
            slidesPerView: 1,
        },
    },
});
  
//////////////////////////////// add to cart counter  /////////////////////////////////////////

$('.minus').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 0 ? 0 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $('.plus').click(function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });


  
});