/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	$('document').ready(function () {
		var menu = __webpack_require__(1);
		menu.toggleMenu();

		var animations = __webpack_require__(2);

		var gallery = __webpack_require__(3);
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	function toggleMenu() {
		$('#toggle-menu').click(function () {
			$('#main-menu').toggle();
			$('.fa-bars').toggle();
			$('.fa-times').toggle();
		});
	}

	module.exports = {
		toggleMenu: toggleMenu
	};

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	var $animation_elements = $('section');
	var $window = $(window);

	function check_if_in_view() {
	  var window_height = $window.height();
	  var window_top_position = $window.scrollTop();
	  var window_bottom_position = window_top_position + window_height;

	  $.each($animation_elements, function () {
	    var $element = $(this);
	    var element_height = $element.outerHeight();
	    var element_top_position = $element.offset().top;
	    var element_bottom_position = element_top_position + element_height;

	    //check to see if this current container is within viewport
	    if (element_bottom_position >= window_top_position && element_top_position <= window_bottom_position) {
	      $element.addClass('fade-in');
	    } else {
	      $element.removeClass('fade-in');
	    }
	  });
	}

	$window.on('scroll resize', check_if_in_view);
	$window.trigger('scroll');

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	// SLIDER

	var slideIndex = 1;
	showSlides(slideIndex);

	function plusSlides(n) {
	  showSlides(slideIndex += n);
	}

	function currentSlide(n) {
	  showSlides(slideIndex = n);
	}

	function showSlides(n) {
	  var i;
	  var slides = document.getElementsByClassName("slide");
	  var dots = document.getElementsByClassName("dot");
	  if (n > slides.length) {
	    slideIndex = 1;
	  }
	  if (n < 1) {
	    slideIndex = slides.length;
	  }
	  for (i = 0; i < slides.length; i++) {
	    slides[i].style.display = "none";
	  }
	  for (i = 0; i < dots.length; i++) {
	    dots[i].className = dots[i].className.replace(" active", "");
	  }
	  slides[slideIndex - 1].style.display = "block";
	  dots[slideIndex - 1].className += " active";
	}

	function getArrowControls() {
	  var ctrlPrev = document.getElementById('prev');
	  var ctrlNext = document.getElementById('next');

	  ctrlPrev.addEventListener('click', function () {
	    plusSlides(-1);
	  });

	  ctrlNext.addEventListener('click', function () {
	    plusSlides(1);
	  });
	}

	function getDotControls() {
	  var dots = document.querySelectorAll('.dot');

	  var _loop = function _loop(dot) {
	    var id = dots[dot].id.split('-')[1];
	    dots[dot].addEventListener('click', function () {
	      currentSlide(id);
	    });
	  };

	  for (var dot = 0; dot < dots.length; dot++) {
	    _loop(dot);
	  }
	}

	function autoForward(interval) {
	  window.setInterval(function () {
	    plusSlides(1);
	  }, interval);
	}

	// MODAL

	function setModalTriggers() {
	  var imgs = document.querySelectorAll('.gallery-img');
	  var modalImg = document.getElementById('modal-img');

	  var _loop2 = function _loop2(i) {
	    var src = imgs[i].src;
	    var id = imgs[i].id.split('-')[1];
	    var caption = document.getElementById('text-' + id);

	    imgs[i].addEventListener('click', function () {
	      modal.style.display = 'block';
	      modalImg.src = src;
	    });
	  };

	  for (var i = 0; i < imgs.length; i++) {
	    _loop2(i);
	  }
	}

	function setModalClose() {
	  var closeBtn = document.getElementById('close');

	  closeBtn.addEventListener('click', function () {
	    modal.style.display = 'none';
	  });
	}

	// LOAD FUNCTIONS


	var modal = document.getElementById('modal');

	getArrowControls();
	getDotControls();
	autoForward(5000);

	setModalTriggers();
	// setModalClose();

/***/ }
/******/ ]);