// Animation loading page

$(document).ready(function() {
  setTimeout(function(){
    $('.items__layer img').show();
  },5000);
});

$(document).ready(function() {
  setTimeout(function(){
    $('.menu__logo img').show();
    $(".items__layer img").addClass("animation");
  },4000);
});

$(document).ready(function() {
  setTimeout(function(){
    $(".social").css("display","flex")
  },3000);
});

$(document).ready(function() {
  setTimeout(function(){
    $('.menu__navbar').show();
  },2000);
});


//Parallax

var scene = document.getElementById('js-scene');
var parallax = new Parallax(scene);

//Cursor

$(document).ready(function(){
  var cursorSlider = $('.cursor-slider');
  var cursorPoint = $('.cursor-point');
  document.addEventListener('mousemove', function(e){
    cursorPoint[0].setAttribute("style", "top: " + e.clientY + "px; left: " + e.clientX + "px");
  });

  $( ".item-text" ).mouseover(function(e) { 
    cursorSlider.addClass('shown');
    document.addEventListener('mousemove', function(e){
      cursorSlider[0].setAttribute("style", "top: " + e.clientY + "px; left: " + e.clientX + "px");
    });
  });

  $( ".item-text" ).mouseleave(function(e){
    cursorSlider.removeClass('shown');
  })
})

// Slider

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 2, 
    spaceBetween: 309, // Space between the slides
    loop: true,
    loopedSlides: 5,
    centeredSlides: true,
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 40
      },
      375: {
        slidesPerView: 2,
        spaceBetween: 50
      },
      414: {
        slidesPerView: 2,
        spaceBetween: 59
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 60,
      },

      1024: {
        slidesPerView: 2,
        spaceBetween: 225
      },
      1440: {
        slidesPerView: 2,
        spaceBetween: 330
      }
    }
});

swiper.on('slideChange', function () {
  $(".items__layer img").removeClass("animation");
  setTimeout(function(){
    $(".items__layer img").addClass("animation");
  },100);
 });

// Mobile menu

if( 'ontouchstart' in window ){ var click = 'touchstart'; }
	else { var click = 'click'; }


	$('div.menu-mob__burger').on(click, function(){
      if( !$(this).hasClass('open') ){ openMenu();
          $('.menu-mob__block').show(); 
      } 
      else { 
        closeMenu(); 
        $('.menu-mob__block').hide();
      }
	});	
	

	$('div.menu-mob__block ul li a').on(click, function(e){
		e.preventDefault();
		closeMenu();
	});


	function openMenu(){
		
		$('div.menu-mob__bg').addClass('animate');					

		$('div.menu-mob__burger').addClass('open');	
		$('div.x, div.y').addClass('collapse');
		$('.menu-mob__block li').addClass('animate');
		
		setTimeout(function(){
			$('div.x').addClass('rotate45'); 
			$('div.y').addClass('rotate135');  
		}, 120);		
	}
	
	function closeMenu(){

		$('.menu-mob__block li').removeClass('animate');
		setTimeout(function(){ 			
			$('div.menu-mob__burger').removeClass('open');	
			$('div.x').removeClass('rotate45'); 
			$('div.y').removeClass('rotate135');				
			$('div.menu-mob__bg').removeClass('animate');			
			
			setTimeout(function(){
				$('div.x, div.y').removeClass('collapse');
			}, 70);
		}, 100);													
		
	}