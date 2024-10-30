(function ($) {
	$(document).ready(function () {
		$('.preloader').fadeOut(1000);
		menu();
		// heroScrollInit();
		initSLiders();
		// moveLabel();
		// hideStickyBtn();
		accordionInit('.loadmore');

		tabsSideAcc();
		sideMainCats();
		switchSubTabs();

		tabsSwittcher();
		telisRtl();
		if (document.querySelector('[data-aos]')) {
			AOS.init();

		}

		// tabsSwittcher();

		// moveElemAfter(1200, '.site-header__menu-drop', '.site-header__navs-wrap .mega-menu-link', '.site-header__inner');
	});
	$(window).on('scroll', function () {
		fixedHeaderActions();
		// hideStickyBtn();

	});

	$(window).on('resize', function () {
		// moveElemAfter(1200, '.site-header__menu-drop', '.site-header__navs-wrap .mega-menu-link', '.site-header__inner');

	});


	$(document.body).on("click", "", function (e) {
	})




	//*******************<GLOBAL VARIABLES>*********************/

	let scrollPrev;

	//*******************</GLOBAL VARIABLES>*********************/

	//*******************<Move Elements>*********************/
	function moveElem(width, selector, destination, home) {
		if (!document.querySelector(selector)) return;

		if ($(window).width() < width) {
			$(selector).prependTo(destination);
		} else {
			$(selector).prependTo(home);
		}
	}
	function moveElemAfter(width, selector, destination, home) {
		if (!document.querySelector(selector)) return;

		if ($(window).width() < width) {
			$(selector).appendTo(destination);
		} else {
			$(selector).appendTo(home);
		}
	}
	//*******************<Move Elements>*********************/

	//*******************<Menu>*********************/
	function menu() {
		const iconMenu = document.querySelector(".btn-burger");
		if (!iconMenu) return;
		iconMenu.addEventListener("click", openCloseMenu);

		function openCloseMenu(event) {
			const menuBody = document.querySelector(".site-header__navs");
			const headerBody = document.querySelector('.site-header');

			if (iconMenu && open) {
				open = false;
				document.body.classList.toggle('fixed');
				iconMenu.classList.toggle("menuIsActive");
				menuBody.classList.toggle("menuIsActive");
				headerBody.classList.toggle("menuIsActive");
				delay(500, true);
			}
		}

		//*******************</Menu>*********************/

		//*******************<Delay>*********************/
		function delay(time, status) {
			setTimeout(() => {
				open = status;
			}, time);
		}
	}
	//*******************</Delay>*********************/

	//*******************<Sliders>****************** */
	function initSLiders() {
		if (!document.querySelector('.swiper')) return;

		const contentSLiders = document.querySelectorAll('.content-slider__slider');
		if (contentSLiders.length) {
			contentSLiders.forEach((slider, index) => {
				const swiper = new Swiper(slider, {
					observer: true,
					observeParents: true,
					watchOverflow: true,
					speed: 500,
					slidesPerView: 1,
					spaceBetween: 40,
					// initialSlide: 1,
					pagination: {
						el: '.swiper-pagination',
						type: 'bullets',
						clickable: true,
					},
					// navigation: {
					// 	nextEl: '.swiper-button-next',
					// 	prevEl: '.swiper-button-prev',
					// },
					// breakpoints: {
					// 	260: {
					// 		slidesPerView: 1.01,
					// 		spaceBetween: 10,
					// 		centeredSlides: false,
					// 	},
					// 	320: {
					// 		slidesPerView: 1.09,
					// 		spaceBetween: 20,
					// 		centeredSlides: false,
					// 	},
					// 	550: {
					// 		slidesPerView: 1.3,
					// 		spaceBetween: 20,
					// 		centeredSlides: false,
					// 	},
					// 	768: {
					// 		slidesPerView: 1.6,
					// 		spaceBetween: 20,
					// 		centeredSlides: false,
					// 	},
					// 	992: {
					// 		slidesPerView: 1.8,
					// 		spaceBetween: 20,
					// 		centeredSlides: false,
					// 	},
					// 	1023: {
					// 		slidesPerView: 1.61,
					// 		centeredSlides: true,
					// 		spaceBetween: '2.5%',
					// 	}
					// },
				});
			})
		}
		const slidersWide = document.querySelectorAll('.slider-wide__slider');
		if (slidersWide.length) {
			slidersWide.forEach((slider, index) => {
				const swiper = new Swiper(slider, {
					observer: true,
					observeParents: true,
					watchOverflow: true,
					speed: 500,
					slidesPerView: 1,
					spaceBetween: 40,
					// initialSlide: 1,
					pagination: {
						el: '.swiper-pagination',
						type: 'bullets',
						clickable: true,
					},
					navigation: {
						nextEl: '.swiper-button-next',
						prevEl: '.swiper-button-prev',
					},
					// breakpoints: {
					// 	260: {
					// 		slidesPerView: 1.01,
					// 		spaceBetween: 10,
					// 		centeredSlides: false,
					// 	},
					// 	320: {
					// 		slidesPerView: 1.09,
					// 		spaceBetween: 20,
					// 		centeredSlides: false,
					// 	},
					// 	550: {
					// 		slidesPerView: 1.3,
					// 		spaceBetween: 20,
					// 		centeredSlides: false,
					// 	},
					// 	768: {
					// 		slidesPerView: 1.6,
					// 		spaceBetween: 20,
					// 		centeredSlides: false,
					// 	},
					// 	992: {
					// 		slidesPerView: 1.8,
					// 		spaceBetween: 20,
					// 		centeredSlides: false,
					// 	},
					// 	1023: {
					// 		slidesPerView: 1.61,
					// 		centeredSlides: true,
					// 		spaceBetween: '2.5%',
					// 	}
					// },
				});
			})
		}
	}
	//*******************</Sliders>****************** */

	//*******************<Header Scroll>****************** */

	function fixedHeaderActions() {
		let header = $('.site-header');
		let scrolled = $(window).scrollTop();
		let topPart = $('.site-header__top').outerHeight(true);
		if (scrolled > 0) {
			header.addClass('fixed');
			if (topPart && topPart > 0) {
				header.css({ transform: `translateY(-${topPart}px)` });
			}

		} else {
			header.removeClass('fixed');
			if (topPart && topPart > 0) {
				header.css({ transform: `translateY(0)` });
			}

		}
		if (scrolled > 100 && scrolled > scrollPrev) {
			header.addClass('anim');
		} else {
			header.removeClass('anim');
		}
		scrollPrev = scrolled;
	}
	//*******************</Header Scroll>****************** */

	//*******************<Hero Scroll>****************** */
	function heroScrollInit() {
		$('.hero__btn-scroll').on('click', function (e) {
			e.preventDefault();
			const button = $(this),
				section = button.parents('section'),
				position = section.offset().top + section.innerHeight();
			$('body, html').scrollTop(position);
		});
	}
	//*******************</Hero Scroll>****************** */

	//*******************<Accordion>****************** */	
	function accordionInit(item) {
		let elem = $(item);
		let btn = elem.find('button');
		let activeBtn = elem.find('.isActive');

		if (activeBtn) {
			activeBtn.next().slideDown();
		}
		btn.on('click', function () {
			console.log('its work');
			if ($(this).hasClass('isActive')) {
				$(this).removeClass('isActive');
				$(this).next().slideUp();
			} else {
				let closest_btn = $(this).closest(item)
				closest_btn.find(btn).removeClass('isActive');
				closest_btn.find(btn).next().slideUp();
				$(this).addClass('isActive');
				$(this).next().slideDown();
			}
		});
	}
	//*******************</Accordion>****************** */

	//*******************<CF7 MOVE LABEL>****************** */	
	function moveLabel() {
		const form = document.querySelector('.site-form');
		if (!form) return;

		const formRows = form.querySelectorAll('.site-form__item');
		if (!formRows.length) return
		formRows.forEach(row => {

			if (!row.classList.contains('site-form__item--select')) {
				const rowLabelText = row.querySelector('label');
				const rowformWrap = row.querySelector('.wpcf7-form-control-wrap');
				if (rowLabelText && rowformWrap) {
					rowformWrap.append(rowLabelText);
				}
			}

		})
	}
	//*******************</CF7 MOVE LABEL>****************** */

	//*******************<Hide Sticky Btn>****************** */	
	function hideStickyBtn() {
		const btn = document.querySelector('.contact-sticky');
		const footer = document.querySelector('.footer');
		if (!btn || !footer) return;

		let btnRect = btn.getBoundingClientRect();
		let footerRect = footer.getBoundingClientRect();

		if (btnRect.bottom > footerRect.top) {
			btn.classList.add('hidden');
		} else {
			btn.classList.remove('hidden');
		}

	}
	//*******************</Hide Sticky Btn>****************** */

	//*******************</Tabs Switcher>****************** */	
	function tabsSwittcher() {
		const tabBtn = document.querySelectorAll('.tab-btns button');
		const tabs = document.querySelectorAll('.tabs-item');

		if (!tabBtn.length || !tabs.length) return;

		tabBtn.forEach(btn => {
			btn.addEventListener('click', function (e) {
				e.preventDefault();
				if (this.classList.contains('active')) return;
				checkPreviousBtn(this);
				btn.classList.add('active');
				showTab(this);

			})
			function checkPreviousBtn(btn) {
				const previousACtiveBtn = document.querySelector('.tab-btn.active');
				if (previousACtiveBtn && btn !== previousACtiveBtn) {
					previousACtiveBtn.classList.remove('active');
				}
			}
			function showTab(btn) {
				tabs.forEach(tab => {
					if (tab.dataset.type == btn.dataset.type) {
						tab.classList.add('active')
					} else {
						tab.classList.remove('active');
					}
				})
			}
		})

	}

	function tabsSideAcc() {
		let elem = $('.content-tabs__side-item');
		let btn = elem.find('button');
		let activeBtn = elem.find('.active');

		if (activeBtn && elem.hasClass('active')) {
			activeBtn.next().slideDown();
		}
		btn.on('click', function () {
			if ($(this).hasClass('content-tabs__btn-subtab')) return;

			if ($(this).hasClass('active')) {
				$(this).removeClass('active');
				$(this).next().slideUp();
			} else {
				$(this).addClass('active');
				$(this).next().slideDown();
			}
		});

	}
	function sideMainCats() {
		const btncCats = document.querySelectorAll('.content-tabs__side-cat-main');
		const catsBoxes = document.querySelectorAll('.content-tabs__side-item');
		if (!btncCats.length || !catsBoxes.length) return;

		btncCats.forEach(btn => {
			btn.addEventListener('click', function (e) {
				e.preventDefault();

				// const previousSubBtnACtive = document.querySelector('.content-tabs__btn-subtab.active');

				// if (previousSubBtnACtive) {
				// 	previousSubBtnACtive.classList.remove('active');
				// 	console.log('its work');
				// }

				if (this.classList.contains('active')) return;
				checkCatItem(this.dataset.tab);
				const previousBtnACtive = document.querySelector('.content-tabs__side-cat-main.active');
				if (previousBtnACtive) {
					previousBtnACtive.classList.remove('active');
				}

				this.classList.add('active');

			})

		})

		function checkCatItem(btnCat) {
			catsBoxes.forEach(cat => {
				if (cat.dataset.tab == btnCat) {
					cat.classList.add('active');
				} else {
					cat.classList.remove('active');
				}
			})
		}
	}
	function tabToShow(btnCat) {
		const tabs = document.querySelectorAll('.content-tabs__tab');
		if (!tabs.length) return;
		tabs.forEach(tab => {
			if (tab.dataset.tab === btnCat) {
				tab.classList.add('active');
			} else {
				tab.classList.remove('active');
			}
		})
	}
	function switchSubTabs() {
		const btns = document.querySelectorAll('.content-tabs__btn-subtab');
		if (!btns.length) return;
		btns.forEach(btn => {
			btn.addEventListener('click', function (e) {
				e.preventDefault();
				if (btn.classList.contains('active')) return;


				const prevActiveBtn = document.querySelector('.content-tabs__btn-subtab.active');
				if (prevActiveBtn) {
					prevActiveBtn.classList.remove('active');
				}
				this.classList.add('active');
				tabToShow(this.dataset.tab);

			})
		})


	}
	//*******************</GLOBAL VARIABLES>*********************/
	function telisRtl() {
		const tel = document.querySelector('.site-form__item input[type="tel"]');
		if (!tel) return;

		const htmlDir = document.documentElement.getAttribute('dir');
		const bodyDir = document.body.getAttribute('dir');
		if (htmlDir === 'rtl' || bodyDir === 'rtl') {
			tel.setAttribute('dir', 'rtl');
		} else {
			tel.removeAttribute('dir');

		}
	}

})(jQuery);
