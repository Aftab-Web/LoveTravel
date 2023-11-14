$('.slider').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true
});
$('.destination-slider').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    prevArrow: $('.previous'),
    nextArrow: $('.next'),
    responsive: [
        {
            breakpoint: 996,
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
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
        ]
});

$('.slider1').slick({
    arrows: false,
    fade: true
});

$(function(){


    $('.left .a1').click(function(){
        $('.left .a1').css( 'background-color' , '#14b9d5')
        $('.left .a1').css( 'color' , '#fff')
        $('.left .a2').css( 'background-color' , 'transparent')
        $('.left .a2').css( 'color' , '#a9a9a9')
        $('.left .a3').css( 'background-color' , 'transparent')
        $('.left .a3').css( 'color' , '#a9a9a9')
    })
    $('.left .a2').click(function(){
        $('.left .a2').css( 'background-color' , '#14b9d5')
        $('.left .a2').css( 'color' , '#fff')
        $('.left .a1').css( 'background-color' , 'transparent')
        $('.left .a1').css( 'color' , '#a9a9a9')
        $('.left .a3').css( 'background-color' , 'transparent')
        $('.left .a3').css( 'color' , '#a9a9a9')
    })
    $('.left .a3').click(function(){
        $('.left .a3').css( 'background-color' , '#14b9d5')
        $('.left .a3').css( 'color' , '#fff')
        $('.left .a2').css( 'background-color' , 'transparent')
        $('.left .a2').css( 'color' , '#a9a9a9')
        $('.left .a1').css( 'background-color' , 'transparent')
        $('.left .a1').css( 'color' , '#a9a9a9')
    })



    $('.right .a1').click(function(){
        $('.right .a1').css( 'background-color' , '#1bbc9b')
        $('.right .a1').css( 'color' , '#fff')
        $('.right .a2').css( 'background-color' , 'transparent')
        $('.right .a2').css( 'color' , '#a9a9a9')
        $('.right .a3').css( 'background-color' , 'transparent')
        $('.right .a3').css( 'color' , '#a9a9a9')
    })
    $('.right .a2').click(function(){
        $('.right .a2').css( 'background-color' , '#1bbc9b')
        $('.right .a2').css( 'color' , '#fff')
        $('.right .a1').css( 'background-color' , 'transparent')
        $('.right .a1').css( 'color' , '#a9a9a9')
        $('.right .a3').css( 'background-color' , 'transparent')
        $('.right .a3').css( 'color' , '#a9a9a9')
    })
    $('.right .a3').click(function(){
        $('.right .a3').css( 'background-color' , '#1bbc9b')
        $('.right .a3').css( 'color' , '#fff')
        $('.right .a2').css( 'background-color' , 'transparent')
        $('.right .a2').css( 'color' , '#a9a9a9')
        $('.right .a1').css( 'background-color' , 'transparent')
        $('.right .a1').css( 'color' , '#a9a9a9')
    })


    $('header button').click(function(){
        $('header nav ul').slideToggle('300')
        $('.drop-menu1 ').css('display' , 'none')
        $('.drop-menu2 ').css('display' , 'none')
        $('.drop-menu3 ').css('display' , 'none')
        $('.drop-menu4 ').css('display' , 'none')
        $('.drop-menu5 ').css('display' , 'none')
    })

    $('.menu-item1').click(function(){
        $('.drop-menu1').slideToggle('100')
    })

    $('.menu-item2').click(function(){
        $('.drop-menu2').slideToggle('100')
    })

    $('.menu-item3').click(function(){
        $('.drop-menu3').slideToggle('100')
    })

    $('.menu-item4').click(function(){
        $('.drop-menu4').slideToggle('100')
    })

    $('.menu-item5').click(function(){
        $('.drop-menu5').slideToggle('100')
    })

    $('.drop').click(function(){
        $('.dropping').css('left' , '0')
        $('.dropping').css('position' , 'fixed')
        $('.dropping-r').css('transform' , 'translateX(-5000px)')
    })

    $('.drop1').click(function(){
        $('.dropping').css('left' , '-1000px')
    })

    $('.toggle1').click(function(){
        $('.dropping-r').css('transform' , 'translateX(0px)')
        $('.dropping-r').css('right' , '0')
        $('.dropping-r').css('position' , 'fixed')
        $('.dropping').css('left' , '-1000px')
    })

    $('.toggle2').click(function(){
        $('.dropping-r').css('transform' , 'translateX(-5000px)')
    })
})



// Show the first tab and hide the rest
$('.tab-nav li:first-child').addClass('active');
$('.content').hide();
$('.content:first').show();

// Click function
$('.tab-nav li').click(function(){
  $('.tab-nav li').removeClass('active');
  $(this).addClass('active');
  $('.content').hide();
  
  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;
});



// Show the first tab and hide the rest
$('.tab-nav1 li:first-child').addClass('active');
$('.content1').hide();
$('.content1:first').show();

// Click function
$('.tab-nav1 li').click(function(){
  $('.tab-nav1 li').removeClass('active');
  $(this).addClass('active');
  $('.content1').hide();
  
  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;
});