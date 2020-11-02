$(document).ready(function(){

	setTimeout(showSlides, 5000);

	function closeAllShowClasses() {
		$('*').removeClass('show');
	}

	function showSlides() {
		var nextSlide = parseInt($('.slider-nav li.active').attr('data-slide')) + 1;

		if (nextSlide > $('.slider-item').length) {
			nextSlide = 1;
		}

		$('.slider-nav li.active').removeClass('active');
		$('.slider-nav li[data-slide="' + nextSlide + '"]').addClass('active');

		$('.slider-item.active').removeClass('active');
		$('.slider-item').eq(nextSlide - 1).addClass('active');

		setTimeout(showSlides, 5000);
	}

	function getNewActiveNavItem(navElement) {
		let currentActiveItem = parseInt($(navElement + '.active').attr('data-item'));
		let newActiveItem;

		if ($(this).hasClass('left')) {
			if (currentActiveItem - 1 == 0) {
				currentActiveItem = $(navElement).length + 1;
			}
			newActiveItem = currentActiveItem - 1;
		} else {
			if (currentActiveItem + 1 > $(navElement).length) {
				currentActiveItem = 0;
			}
			newActiveItem = currentActiveItem + 1;
		}

		return newActiveItem;
	}

	// главное меню (моб. вер.)
	$(document).on('click', '.mobile-menu', function() {
		if ($('.nav-menu').hasClass('show')) {
			$('.nav-menu').removeClass('show');
			$(this).removeClass('active');
		} else {
			closeAllShowClasses();
			$('.nav-menu').addClass('show');
			$(this).addClass('active');
		}
	});

	// показ поля поиска (моб. вер.)
	$(document).on('click', '.search-submit', function() {
		event.preventDefault();
		if ($( window ).width() < 830) {
			if ($('.search').hasClass('show') == false) {
				closeAllShowClasses();
				$('.search').addClass('show');
			}
		}
	});

	// скрытие поля поиска (моб. вер.)
	$(document).on('click', '.search-cancel', function() {
		$('.search').removeClass('show');
	});

	// смена языка
	$(document).on('click', '.lang li', function(){
	 	if ($( window ).width() < 700) {
			if ($('.lang').hasClass('show') == false) {
				closeAllShowClasses();
				$('.lang').addClass('show');
				$('header').css('padding-top', '16px');
			} else {
				/* just for example - not actually needed */
		  		$('.lang li').removeClass('active');
		  		$(this).addClass('active');
		 		$('.lang').removeClass('show');
		 		$('header').css('padding-top', '10px');
			}
		} else {
			/* just for example - not actually needed */
			$('.lang li').removeClass('active');
		  	$(this).addClass('active');
		}
	});

	// смена слайдеров
	$(document).on('click', '.slider-nav li', function() {
		let number = $(this).attr('data-slide');
		
		$('.slider-nav li.active').removeClass('active');
		$(this).addClass('active');

		$('.slider-item.active').removeClass('active');
		$('.slider-item').eq(number - 1).addClass('active');
	});

	// смена закладок книги
	$(document).on('click', '.bookmarks li', function() {
		$('.bookmarks li').removeClass('active');
		$(this).addClass('active');
	});

	// навигация по страницам книги
	$(document).on('click', '.new-product-navigation li', function() {
		var newActiveItem = getNewActiveNavItem('.new-product-item');
		
		$('.new-product-item.active').removeClass('active');
		$('.new-product-item[data-item="' + newActiveItem + '"]').addClass('active'); 
	});

	// навигация по новинкам
	$(document).on('click', '.book-navigation li', function() {
		var newActiveItem = getNewActiveNavItem('.product-item');
		
		$('.product-item.active, .product-image.active').removeClass('active');
		$('.product-item[data-item="' + newActiveItem + '"]').addClass('active'); 
		$('.product-image[data-item="' + newActiveItem + '"]').addClass('active');
	});

});