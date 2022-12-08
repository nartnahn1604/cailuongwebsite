(function($) { "use strict";

	function Selector_Cache() {
		var collection = {};

		function get_from_cache( selector ) {
			if ( undefined === collection[ selector ] ) {
				collection[ selector ] = $( selector );
			}

			return collection[ selector ];
		}

		return { get: get_from_cache };
	}

	var selectors = new Selector_Cache();

 
	
	//Home text fade on scroll	
	
	$(window).scroll(function () { 
        var $Fade = $('.fade-elements');
        //Get scroll position of window 
        var windowScroll = $(this).scrollTop();
        //Slow scroll and fade it out 
        $Fade.css({
            'margin-top': -(windowScroll / 0) + "px",
            'opacity': 1 - (windowScroll / 600)
        });
    });	

	
	/* Scroll Animation */
	
	window.scrollReveal = new scrollReveal();

	
	/* Scroll Too */
	
			$(window).load(function(){"use strict";
				
				/* Page Scroll to id fn call */
				$("ul.slimmenu li a,a[href='#top'],a[data-gal='m_PageScroll2id']").mPageScroll2id({
					highlightSelector:"ul.slimmenu li a",
					offset: 78,
					scrollSpeed:800,
					scrollEasing: "easeInOutCubic"
				});
				
				/* demo functions */
				$("a[rel='next']").click(function(e){
					e.preventDefault();
					var to=$(this).parent().parent("section").next().attr("id");
					$.mPageScroll2id("scrollTo",to);
				});
				
			});		  
	  
	  
	$(document).ready(function() {
	
		
		//Scroll back to top
	
		var offset = 450;
		var duration = 500;
		jQuery(window).scroll(function() {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.scroll-to-top').fadeIn(duration);
			} else {
				jQuery('.scroll-to-top').fadeOut(duration);
			}
		});
				
		jQuery('.scroll-to-top').on('click', function(event) {
			event.preventDefault();
			jQuery('html, body').animate({scrollTop: 0}, duration);
			return false;
		})
		
				
		//Tooltip

		$(".tipped").tipper();	
		
		
		//Parallax
		
		$('.parallax-project').parallax("50%", 0.3);	

			
		//TaurusMenu	

		"use strict";

		$('.menu > ul > li:has( > ul)').addClass('menu-dropdown-icon');
		//Checks if li has sub (ul) and adds class for toggle icon - just an UI
		
		$(".menu > ul").before("<a href=\"#\" class=\"menu-mobile\"></a>");

		//Adds menu-mobile class (for mobile toggle menu) before the normal menu
		//Mobile menu is hidden if width is more then 1199px, but normal menu is displayed
		//Normal menu is hidden if width is below 1199px, and jquery adds mobile menu
		//Done this way so it can be used with wordpress without any trouble

		$('.menu > ul > li').hover(function() {
			if ($(window).width() > 1183) {
				$(this).children("ul").stop(true, false).toggleClass('active');
				e.preventDefault();
			}	
		});
		
		$(".menu > ul > li").on('click', function(e){
			if ($(window).width() < 1183) {
				var $me = $(this),
					width = $me.outerWidth(),
					height = $me.outerHeight(),
					top = $me.position().top,
					left = $me.position().left;
								
				var len = Math.sqrt(Math.pow(width - e.offsetX, 2) + Math.pow(e.offsetY, 2));

				if (len < 50)
					$(this).children("ul").stop(true, false).toggleClass('active');
			}
		});	

		//2nd dropdown
		$(".menu > ul > li > ul.normal-sub > li").on('hover', function (e) {
			if ($(window).width() > 1183) {
				$(this).children("ul").stop(true, false).fadeToggle(300);
				e.preventDefault();
			}
		});
		//If width is more than 1183px 2nd dropdowns are displayed on hover
		
		$(".menu-mobile").on('click', function (e) {
			$(".menu > ul").toggleClass('show-on-mobile');
			e.preventDefault();
		});
		//when clicked on mobile-menu, normal menu is shown as a list, classic rwd menu story

	});	
 	
 
  })(jQuery); 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 





	