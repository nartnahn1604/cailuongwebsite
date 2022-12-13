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

	
	/* Scroll Animation */
	
	window.scrollReveal = new scrollReveal();
	  
	  
	  
	$(document).ready(function() {
	
		// Read data
		// $.getJson("./asset/api/content.json")
		// async function fillData(){
		// 	var data = ""
		// 	let myPromise = new Promise(function(resolve) {
		// 		// console.log("start fill")
		// 		$.getJSON("./asset/api/content.json", function(d){
		// 			$.each(d, function(key, value){
		// 				var post = []
		// 				$.each(value, (k,v) => {
		// 					post.push(v)
		// 				})
		// 				let img=""
		// 				$.each(post[4], (k, v) => {
		// 					if(v.indexOf("asset") != -1)
		// 						img = v + k + ".jpg"
		// 					else
		// 						img = v
		// 					console.log(img)
		// 					return false;
		// 				})
		// 				var str = '<a class="myItem '+post[2]+ '" href="project.html?post='+ key + '">\n' +
		// 							'<div class="portfolio-box-1 motion">\n' + 
		// 								'<div id="rev-' + (key*3 + 1).toString()  + '">' +
		// 								'	<div class="content__image-wrap">\n' +
		// 								'		<img src="'+ img + '" alt="">\n' +
		// 								'	</div>\n' +
		// 								'</div>\n' +
		// 								'<div id="rev-' + (key*3 + 2).toString() + '" class="work-subtitle">\n' +
		// 								post[0]+
		// 								'</div>\n' +
		// 								'<br/>\n' +
		// 								'<div id="rev-' + (key*3 + 3).toString() + '" class="work-title">\n' +
		// 								post[0] +
		// 								'</div>\n' +
		// 							'</div>\n'+
		// 						'</a>\n';
		// 				console.log(str);
		// 				if(post[0].indexOf("Khái niệm") == -1)
		// 					data+=str;
		// 			})
		// 			resolve(data);
		// 		});
		// 	});
		// 	$("#projects-grid").append(await myPromise);
			
		// 	setTimeout(function () { 
		// 		reArrangeProjects($('#projects-grid'));
		// 	}, 300);

		// }
		
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
		
		$('.parallax-home').parallax("50%", 0.3); 

			
		//TaurusMenu	

		"use strict";

		$('.menu > ul > li:has( > ul)').addClass('menu-dropdown-icon');
		//Checks if li has sub (ul) and adds class for toggle icon - just an UI
		
		$(".menu > ul").before("<a href=\"#\" class=\"menu-mobile\"></a>");

		//Adds menu-mobile class (for mobile toggle menu) before the normal menu
		//Mobile menu is hidden if width is more then 1199px, but normal menu is displayed
		//Normal menu is hidden if width is below 1199px, and jquery adds mobile menu
		//Done this way so it can be used with wordpress without any trouble

		$('.menu > ul > li').hover(function(e) {
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
		
		// })
		/* Portfolio Sorting */
		
		(function ($) { 
			
			
			var $container = $('#projects-grid')
			
			// $container.isotope( { 
			// });
			console.log($container)
			var $item = $(".myItem")

			function getNumbColumns() { 
				var winWidth = $(window).width(), 
					columnNumb = 1;
				
				
				if (winWidth > 1500) {
					columnNumb = 4;
				} else if (winWidth > 1200) {
					columnNumb = 3;
				} else if (winWidth > 900) {
					columnNumb = 2;
				} else if (winWidth > 600) {
					columnNumb = 2;
				} else if (winWidth > 300) {
					columnNumb = 1;
				}
				
				return columnNumb;
			}
			
			
			function setColumnWidth() { 
				console.log($(window).width(), getNumbColumns())
				var winWidth = $(window).width(), 
					columnNumb = getNumbColumns(), 
					postWidth = Math.floor(winWidth / columnNumb);

			}
			var items = $(".myItem")
			var $section = $("#item .section .section")
			console.log($section)
			$('#portfolio-filter #filter a').on('click', function () { 
				var selector = $(this).attr('data-filter');
				console.log(selector)
				$(this).parent().parent().find('a').removeClass('current');
				$(this).addClass('current');
				
				$container.isotope( {
					filter : selector 
				});
				// console.log($container)
				setTimeout(function () { 
					reArrangeProjects();
				}, 300);
				
				return false;
			});
		
			// reArrangeProjects();
			function reArrangeProjects() { 
				// alert("rearrange")
				// $(body).wait(200)
				setColumnWidth();
				// $container.isotope('reLayout');
				
			}
			
			
			
			$container.imagesLoaded(function () { 
				setColumnWidth();
				
				$container.isotope( { 
					itemSelector : '.portfolio-box-1', 
					layoutMode : 'masonry', 
					resizable : false 
				} );
			} );
		
			$(window).on('debouncedresize', function () { 
				reArrangeProjects();
				
			} );
			
		
		} )(jQuery);	
		// fillData();			
	});	
 
	/* DebouncedResize Function */
		(function ($) { 
			var $event = $.event, 
				$special, 
				resizeTimeout;
			
			
			$special = $event.special.debouncedresize = { 
				setup : function () { 
					$(this).on('resize', $special.handler);
				}, 
				teardown : function () { 
					$(this).off('resize', $special.handler);
				}, 
				handler : function (event, execAsap) { 
					var context = this, 
						args = arguments, 
						dispatch = function () { 
							event.type = 'debouncedresize';
							
							$event.dispatch.apply(context, args);
						};
					
					
					if (resizeTimeout) {
						clearTimeout(resizeTimeout);
					}
					
					
					execAsap ? dispatch() : resizeTimeout = setTimeout(dispatch, $special.threshold);
				}, 
				threshold : 150 
			};
		} )(jQuery);	
 
  })(jQuery); 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 





	
