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

		(function() {
			// Fake loading.
			setTimeout(init, 1000);

			function init() {
				document.body.classList.remove('loading');

				//************************ reveal on load ********************************
				
				var rev1 = new RevealFx(document.querySelector('#rev-load-1'), {
					revealSettings : {
						bgcolor: '#ffe6a7',
						onCover: function(contentEl, revealerEl) {
							contentEl.style.opacity = 1;
						}
					}
				});
				rev1.reveal();

				var rev2 = new RevealFx(document.querySelector('#rev-load-2'), {
					revealSettings : {
						bgcolor: '#06aed5',
						direction: 'rl',
						delay: 250,
						onCover: function(contentEl, revealerEl) {
							contentEl.style.opacity = 1;
						}
					}
				});
				rev2.reveal();


				//************************ reveal on scroll ********************************
				
				var scrollElemToWatch_1 = document.getElementById('rev-1'),
					watcher_1 = scrollMonitor.create(scrollElemToWatch_1, -300),				
					rev1 = new RevealFx(scrollElemToWatch_1, {
						revealSettings : {
							bgcolor: '#ffe6a7',
							direction: 'rl',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					
					scrollElemToWatch_2 = document.getElementById('rev-2'),
					watcher_2 = scrollMonitor.create(scrollElemToWatch_2, -300),				
					rev2 = new RevealFx(scrollElemToWatch_2, {
						revealSettings : {
							bgcolor: '#ffe6a7',
							direction: 'rl',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					
					scrollElemToWatch_3 = document.getElementById('rev-3'),
					watcher_3 = scrollMonitor.create(scrollElemToWatch_3, -300),				
					rev3 = new RevealFx(scrollElemToWatch_3, {
						revealSettings : {
							bgcolor: '#ffe6a7',
							direction: 'rl',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					
					scrollElemToWatch_4 = document.getElementById('rev-4'),
					watcher_4 = scrollMonitor.create(scrollElemToWatch_4, -300),				
					rev4 = new RevealFx(scrollElemToWatch_4, {
						revealSettings : {
							bgcolor: '#ffe6a7',
							direction: 'rl',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					
					scrollElemToWatch_5 = document.getElementById('rev-5'),
					watcher_5 = scrollMonitor.create(scrollElemToWatch_5, -300),				
					rev5 = new RevealFx(scrollElemToWatch_5, {
						revealSettings : {
							bgcolor: '#ffe6a7',
							direction: 'rl',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					
					scrollElemToWatch_6 = document.getElementById('rev-6'),
					watcher_6 = scrollMonitor.create(scrollElemToWatch_6, -300),				
					rev6 = new RevealFx(scrollElemToWatch_6, {
						revealSettings : {
							bgcolor: '#ffe6a7',
							direction: 'rl',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					
					scrollElemToWatch_7 = document.getElementById('rev-7'),
					watcher_7 = scrollMonitor.create(scrollElemToWatch_7, -300),				
					rev7 = new RevealFx(scrollElemToWatch_7, {
						revealSettings : {
							bgcolor: '#ffe6a7',
							direction: 'rl',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					
					scrollElemToWatch_8 = document.getElementById('rev-8'),
					watcher_8 = scrollMonitor.create(scrollElemToWatch_8, -300),				
					rev8 = new RevealFx(scrollElemToWatch_8, {
						revealSettings : {
							bgcolor: '#ffe6a7',
							direction: 'rl',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					})

				watcher_1.enterViewport(function() {
					rev1.reveal();
					watcher_1.destroy();
				});
				watcher_2.enterViewport(function() {
					rev2.reveal();
					watcher_2.destroy();
				});
				watcher_3.enterViewport(function() {
					rev3.reveal();
					watcher_3.destroy();
				});
				watcher_4.enterViewport(function() {
					rev4.reveal();
					watcher_4.destroy();
				});
				watcher_5.enterViewport(function() {
					rev5.reveal();
					watcher_5.destroy();
				});
				watcher_6.enterViewport(function() {
					rev6.reveal();
					watcher_6.destroy();
				});
				watcher_7.enterViewport(function() {
					rev7.reveal();
					watcher_7.destroy();
				});
				watcher_8.enterViewport(function() {
					rev8.reveal();
					watcher_8.destroy();
				});
				
				
				



			}
		})();
		
  })(jQuery); 		
		