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
					}),
					rev3 = new RevealFx(document.querySelector('#rev-3'), {
						revealSettings : {
							bgcolor: '#06aed5',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),

					scrollElemToWatch_2 = document.getElementById('rev-4'),
					watcher_2 = scrollMonitor.create(scrollElemToWatch_2, -300),
					rev4 = new RevealFx(scrollElemToWatch_2, {
						revealSettings : {
							bgcolor: '#ffe6a7',
							direction: 'rl',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev5 = new RevealFx(document.querySelector('#rev-5'), {
						revealSettings : {
							bgcolor: '#06aed5',
							delay: 250,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev6 = new RevealFx(document.querySelector('#rev-6'), {
						revealSettings : {
							bgcolor: '#06aed5',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),

					scrollElemToWatch_3 = document.getElementById('rev-7'),
					watcher_3 = scrollMonitor.create(scrollElemToWatch_3, -300),
					rev7 = new RevealFx(scrollElemToWatch_3, {
						revealSettings : {
							bgcolor: '#ffe6a7',
							direction: 'rl',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev8 = new RevealFx(document.querySelector('#rev-8'), {
						revealSettings : {
							bgcolor: '#06aed5',
							delay: 250,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev9 = new RevealFx(document.querySelector('#rev-9'), {
						revealSettings : {
							bgcolor: '#06aed5',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),

					scrollElemToWatch_4 = document.getElementById('rev-10'),
					watcher_4 = scrollMonitor.create(scrollElemToWatch_4, -300),
					rev10 = new RevealFx(scrollElemToWatch_4, {
						revealSettings : {
							bgcolor: '#ffe6a7',
							direction: 'rl',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev11 = new RevealFx(document.querySelector('#rev-11'), {
						revealSettings : {
							bgcolor: '#06aed5',
							delay: 250,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev12 = new RevealFx(document.querySelector('#rev-12'), {
						revealSettings : {
							bgcolor: '#06aed5',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),

					scrollElemToWatch_5 = document.getElementById('rev-13'),
					watcher_5 = scrollMonitor.create(scrollElemToWatch_5, -300),
					rev13 = new RevealFx(scrollElemToWatch_5, {
						revealSettings : {
							bgcolor: '#ffe6a7',
							direction: 'rl',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev14 = new RevealFx(document.querySelector('#rev-14'), {
						revealSettings : {
							bgcolor: '#06aed5',
							delay: 250,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev15 = new RevealFx(document.querySelector('#rev-15'), {
						revealSettings : {
							bgcolor: '#06aed5',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),

					scrollElemToWatch_6 = document.getElementById('rev-16'),
					watcher_6 = scrollMonitor.create(scrollElemToWatch_6, -300),
					rev16 = new RevealFx(scrollElemToWatch_6, {
						revealSettings : {
							bgcolor: '#ffe6a7',
							direction: 'rl',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev17 = new RevealFx(document.querySelector('#rev-17'), {
						revealSettings : {
							bgcolor: '#06aed5',
							delay: 250,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev18 = new RevealFx(document.querySelector('#rev-18'), {
						revealSettings : {
							bgcolor: '#06aed5',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),

					scrollElemToWatch_7 = document.getElementById('rev-19'),
					watcher_7 = scrollMonitor.create(scrollElemToWatch_7, -300),
					rev19 = new RevealFx(scrollElemToWatch_7, {
						revealSettings : {
							bgcolor: '#ffe6a7',
							direction: 'rl',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev20 = new RevealFx(document.querySelector('#rev-20'), {
						revealSettings : {
							bgcolor: '#06aed5',
							delay: 250,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev21 = new RevealFx(document.querySelector('#rev-21'), {
						revealSettings : {
							bgcolor: '#06aed5',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),

					scrollElemToWatch_8 = document.getElementById('rev-22'),
					watcher_8 = scrollMonitor.create(scrollElemToWatch_8, -300),
					rev22 = new RevealFx(scrollElemToWatch_8, {
						revealSettings : {
							bgcolor: '#ffe6a7',
							direction: 'rl',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev23 = new RevealFx(document.querySelector('#rev-23'), {
						revealSettings : {
							bgcolor: '#06aed5',
							delay: 250,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev24 = new RevealFx(document.querySelector('#rev-24'), {
						revealSettings : {
							bgcolor: '#06aed5',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),

					scrollElemToWatch_9 = document.getElementById('rev-25'),
					watcher_9 = scrollMonitor.create(scrollElemToWatch_9, -300),
					rev25 = new RevealFx(scrollElemToWatch_9, {
						revealSettings : {
							bgcolor: '#ffe6a7',
							direction: 'rl',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev26 = new RevealFx(document.querySelector('#rev-26'), {
						revealSettings : {
							bgcolor: '#06aed5',
							delay: 250,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev27 = new RevealFx(document.querySelector('#rev-27'), {
						revealSettings : {
							bgcolor: '#06aed5',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),

					scrollElemToWatch_10 = document.getElementById('rev-28'),
					watcher_10 = scrollMonitor.create(scrollElemToWatch_10, -300),
					rev28 = new RevealFx(scrollElemToWatch_10, {
						revealSettings : {
							bgcolor: '#ffe6a7',
							direction: 'rl',
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev29 = new RevealFx(document.querySelector('#rev-29'), {
						revealSettings : {
							bgcolor: '#06aed5',
							delay: 250,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					}),
					rev30 = new RevealFx(document.querySelector('#rev-30'), {
						revealSettings : {
							bgcolor: '#06aed5',
							delay: 500,
							onCover: function(contentEl, revealerEl) {
								contentEl.style.opacity = 1;
							}
						}
					})

				watcher_1.enterViewport(function() {
					rev1.reveal();
					rev2.reveal();
					rev3.reveal();
					watcher_1.destroy();
				});
				watcher_2.enterViewport(function() {
					rev4.reveal();
					rev5.reveal();
					rev6.reveal();
					watcher_2.destroy();
				});
				watcher_3.enterViewport(function() {
					rev7.reveal();
					rev8.reveal();
					rev9.reveal();
					watcher_3.destroy();
				});
				watcher_4.enterViewport(function() {
					rev10.reveal();
					rev11.reveal();
					rev12.reveal();
					watcher_4.destroy();
				});
				watcher_5.enterViewport(function() {
					rev13.reveal();
					rev14.reveal();
					rev15.reveal();
					watcher_5.destroy();
				});
				watcher_6.enterViewport(function() {
					rev16.reveal();
					rev17.reveal();
					rev18.reveal();
					watcher_6.destroy();
				});
				watcher_7.enterViewport(function() {
					rev19.reveal();
					rev20.reveal();
					rev21.reveal();
					watcher_7.destroy();
				});
				watcher_8.enterViewport(function() {
					rev22.reveal();
					rev23.reveal();
					rev24.reveal();
					watcher_8.destroy();
				});
				watcher_9.enterViewport(function() {
					rev25.reveal();
					rev26.reveal();
					rev27.reveal();
					watcher_9.destroy();
				});
				watcher_10.enterViewport(function() {
					rev28.reveal();
					rev29.reveal();
					rev30.reveal();
					watcher_10.destroy();
				});

			}
		})();
		
  })(jQuery); 		
		