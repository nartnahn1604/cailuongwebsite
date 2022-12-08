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
					rev2 = new RevealFx(document.querySelector('#rev-2'), {
						revealSettings : {
							bgcolor: '#06aed5',
							delay: 250,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					})

				watcher_1.enterViewport(function() {
					rev1.reveal();
					rev2.reveal();
					watcher_1.destroy();
				});
				
				



			}
		})();
		
  })(jQuery); 		
		