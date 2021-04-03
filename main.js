/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/gallery.js":
/*!***********************!*\
  !*** ./js/gallery.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gallery": () => (/* binding */ Gallery)
/* harmony export */ });
function Gallery() {
  var galThumb = document.querySelector('.pg__content-thumb');

  if (!galThumb) {
    return;
  }

  var thumbConteiner = galThumb.querySelector('.thumb');
  var slidesThumb = galThumb.querySelectorAll('.thumb__item');
  var fullImage = document.querySelector('.pg__fullImg-img');
  var prev = galThumb.querySelector('.thumb__btn-l');
  var next = galThumb.querySelector('.thumb__btn-r');
  var slideIndex = 0;
  var clsShow = 'img__active'; //class for show img

  var coutnImg = 4; //count images in div.thumb

  var widthImgItem = 26; //width div .thumb__item in %

  showSlides(slideIndex);

  function showSlides(n) {
    // slidesThumb.length - 1 count images
    if (n > slidesThumb.length - 1) {
      slideIndex = 0;
    }

    if (n < 0) {
      slideIndex = slidesThumb.length - 1;
    }

    slidesThumb.forEach(function (item) {
      return item.classList.remove(clsShow);
    });

    for (var i = 0; i < coutnImg; i++) {
      if (n > slidesThumb.length - 1) {
        n = 0;
      }

      if (n < 0) {
        n = slidesThumb.length - 1;
      }

      slidesThumb[n].classList.add(clsShow);
      slidesThumb[n].style.left = i * widthImgItem + '%';
      n++;
    }

    var a = slidesThumb[slideIndex].querySelector('img');
    fullImage.setAttribute('src', a.getAttribute('src'));
  }

  function plusSlide(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  slidesThumb.forEach(function (item, i) {
    item.addEventListener('click', function () {
      currentSlide(i);
    });
  });
  prev.addEventListener('click', function () {
    plusSlide(-1);
  });
  next.addEventListener('click', function () {
    plusSlide(1);
  });
}

/***/ }),

/***/ "./js/mobileHeaderMenu.js":
/*!********************************!*\
  !*** ./js/mobileHeaderMenu.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mobileHeaderMenuInit": () => (/* binding */ mobileHeaderMenuInit)
/* harmony export */ });
/* harmony import */ var _utilits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilits */ "./js/utilits.js");

/* -- Header Menu -- */

var mobileHeaderMenuInit = function mobileHeaderMenuInit() {
  var menu = document.querySelector('.menu-header');
  var btnHeaderMenu = document.querySelector('.btn__menu-header');
  var btnCloseHeaderMenu = menu.querySelector('.close__btn');
  var body = document.querySelector('body');
  btnHeaderMenu.addEventListener('click', function () {
    if (!menu.classList.contains('is-header-show')) {
      (0,_utilits__WEBPACK_IMPORTED_MODULE_0__.add)(menu, 'is-header-show');
      (0,_utilits__WEBPACK_IMPORTED_MODULE_0__.add)(body, 'modal-open');
    }
  });
  btnCloseHeaderMenu.addEventListener('click', function () {
    (0,_utilits__WEBPACK_IMPORTED_MODULE_0__.remove)(menu, 'is-header-show');
    (0,_utilits__WEBPACK_IMPORTED_MODULE_0__.remove)(body, 'modal-open');
  });
};

/***/ }),

/***/ "./js/popup.js":
/*!*********************!*\
  !*** ./js/popup.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "popupInit": () => (/* binding */ popupInit)
/* harmony export */ });
/* harmony import */ var _utilits__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilits */ "./js/utilits.js");

/* -- Popup -- */

var showThanks = function showThanks(data, popupSubstrate, activeCls) {
  var thanksForm = document.querySelector('#thanks');
  var name = thanksForm.querySelector('.name');
  var phone = thanksForm.querySelector('.phone');
  name.textContent = data.name;
  phone.textContent = data.phone;
  (0,_utilits__WEBPACK_IMPORTED_MODULE_0__.add)([thanksForm, popupSubstrate], activeCls);
  popupSubstrate.addEventListener('click', function () {
    (0,_utilits__WEBPACK_IMPORTED_MODULE_0__.remove)([thanksForm, popupSubstrate], activeCls);
  });
  setTimeout(function () {
    (0,_utilits__WEBPACK_IMPORTED_MODULE_0__.remove)([thanksForm, popupSubstrate], activeCls);
  }, 4000);
};

var getFormData = function getFormData(form) {
  var data = Object.fromEntries(new FormData(form).entries());
  console.log(data);
  form.reset();
  return data;
};

var popupInit = function popupInit() {
  var popup = document.querySelector('#popup');
  var popupSubstrate = document.querySelector('.popup__substrate');
  var btnPopupClose = popup.querySelector('.popup__btn-close');
  var btnPopupToggle = document.querySelectorAll('.popupToggle');
  var form = popup.querySelector('form');
  var activeCls = 'popup-show';
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var data = getFormData(form);
    (0,_utilits__WEBPACK_IMPORTED_MODULE_0__.remove)([popup], activeCls);
    showThanks(data, popupSubstrate, activeCls);
  });
  btnPopupToggle.forEach(function (btn) {
    btn.addEventListener('click', function () {
      if (!popup.classList.contains('popup-show')) {
        (0,_utilits__WEBPACK_IMPORTED_MODULE_0__.add)([popup, popupSubstrate], activeCls);
      }
    });
  });
  window.addEventListener('keyup', function (e) {
    if (e.keyCode === 27) {
      (0,_utilits__WEBPACK_IMPORTED_MODULE_0__.remove)([popup, popupSubstrate], activeCls);
    }
  });

  var removeClickEvent = function removeClickEvent(target) {
    target.addEventListener('click', function () {
      (0,_utilits__WEBPACK_IMPORTED_MODULE_0__.remove)([popup, popupSubstrate], activeCls);
    });
  };

  removeClickEvent(btnPopupClose);
  removeClickEvent(popupSubstrate);
};

/***/ }),

/***/ "./js/slider.js":
/*!**********************!*\
  !*** ./js/slider.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ItemsSlider": () => (/* binding */ ItemsSlider)
/* harmony export */ });
function ItemsSlider() {
  var wrapCatalog = document.querySelector('.wrap-catalog');
  if (!wrapCatalog) return;
  var wrapContent = wrapCatalog.querySelector('.wrap-content');
  var sliderItems = wrapContent.querySelectorAll('.slider-item');
  var activeSliders = wrapContent.querySelectorAll('.is-slider-show');
  var paginationCont = wrapCatalog.querySelector('.slider-bottom-pagination');
  var SlideIndex = 0;
  var tabletSize = 961;
  var mobileSize = 540;
  var clsShowPag = 'is-active-sub-line';
  var clsShowSlide = 'is-slider-show';
  var countSlides = 0;
  var paginationSubLines = [];
  var mobileCount = 1,
      tabletCount = 2,
      fullCount = 4;
  var mediaQueryList = [window.matchMedia("(min-width: ".concat(mobileSize, "px) and (max-width: ").concat(tabletSize, "px)")), window.matchMedia("(max-width: ".concat(mobileSize, "px)")), window.matchMedia("(min-width: ".concat(tabletSize + 1, "px)"))];

  var checkWidth = function checkWidth(e) {
    if (mediaQueryList[0].matches) {
      countSlides = tabletCount;
      showSlide(SlideIndex);
      updatePagination();
    } else if (mediaQueryList[2].matches) {
      countSlides = fullCount;
      showSlide(SlideIndex);
      updatePagination();
    } else if (mediaQueryList[1].matches) {
      countSlides = mobileCount;
      showSlide(SlideIndex);
      updatePagination();
    }
  };

  var touchEvents = function touchEvents() {
    var pagination = document.querySelectorAll('.sub-line');
    sliderItems.forEach(function (item) {
      var touchStart, touchEnd;
      item.addEventListener('touchstart', function (e) {
        console.log(e.changedTouches[0]);
        touchStart = e.changedTouches[0].screenX;
      });
      item.addEventListener('touchend', function (e) {
        var index = SlideIndex;
        console.log(SlideIndex, 'SLIDEINDEX');
        clearPaginationStyle(pagination);
        touchEnd = e.changedTouches[0].screenX;
        var dif = touchStart - touchEnd;
        console.log(dif);

        if (dif > 0) {
          index = index + 1 >= sliderItems.length ? sliderItems.length - 1 : index + 1;
        } else {
          index = index - 1 < 0 ? 0 : index - 1;
        }

        SlideIndex = index;
        isActivePagination(index, pagination[index + 1]);
      });
    });
  };

  var initSlider = function initSlider() {
    createPagination();
    mediaQueryList.forEach(function (query) {
      checkWidth(query);
      query.addListener(checkWidth);
    });
    showSlide(SlideIndex);
    touchEvents();
  };

  initSlider();

  function updatePagination() {
    paginationSubLines.forEach(function (item) {
      item.remove();
    });

    if (sliderItems.length > fullCount || sliderItems.length > tabletCount || sliderItems.length > mobileCount) {
      var count = sliderItems.length / countSlides;

      for (var i = 0; i < count; i++) {
        createPaginationItem(i);
      }
    }
  }

  function createPagination() {
    for (var i = 0; i < countSlides; i++) {
      createPaginationItem(i);
    }
  }

  function createPaginationItem(i) {
    var span = document.createElement('span');
    span.classList.add('sub-line');
    isActivePagination(i, span);
    paginationSubLines.push(span);
    paginationCont.append(span);
    addSubLineEvent(span, i);
  }

  function addSubLineEvent(item, i) {
    item.addEventListener('click', function () {
      clearPaginationStyle(paginationSubLines);
      showSlide(i);
      item.classList.add(clsShowPag);
    });
  }

  function showSlide(i) {
    console.log(i);
    sliderItems.forEach(function (item) {
      item.classList.remove(clsShowSlide);
    });
    SlideIndex = i;

    if (countSlides === mobileCount) {
      sliderItems[i].classList.add(clsShowSlide);
    }

    if (countSlides === tabletCount) {
      if (i == 0) {
        sliderItems[i].classList.add(clsShowSlide);
        sliderItems[i + 1].classList.add(clsShowSlide);
      }

      if (i == 1) {
        sliderItems[i + 1].classList.add(clsShowSlide);
        sliderItems[i + 2].classList.add(clsShowSlide);
      }
    }

    if (countSlides === fullCount) {
      sliderItems.forEach(function (item) {
        item.classList.add(clsShowSlide);
      });
    }
  }

  function clearPaginationStyle(items) {
    items.forEach(function (item) {
      item.classList.remove(clsShowPag);
    });
  }

  function isActivePagination(i, span) {
    if (i == SlideIndex) {
      span.classList.add(clsShowPag);
      showSlide(i);
    }
  }
}

/***/ }),

/***/ "./js/utilits.js":
/*!***********************!*\
  !*** ./js/utilits.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "remove": () => (/* binding */ remove),
/* harmony export */   "add": () => (/* binding */ add)
/* harmony export */ });
/* -- Functions -- */
function remove(objs, cls) {
  if (!Array.isArray(objs)) {
    objs.classList.remove(cls);
  } else {
    objs.forEach(function (obj) {
      obj.classList.remove(cls);
    });
  }
}
function add(objs, cls) {
  if (!Array.isArray(objs)) {
    objs.classList.add(cls);
  } else {
    objs.forEach(function (obj) {
      obj.classList.add(cls);
    });
  }
}

/***/ }),

/***/ "./style.scss":
/*!********************!*\
  !*** ./style.scss ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./index.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/popup */ "./js/popup.js");
/* harmony import */ var _js_mobileHeaderMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/mobileHeaderMenu */ "./js/mobileHeaderMenu.js");
/* harmony import */ var _js_gallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/gallery */ "./js/gallery.js");
/* harmony import */ var _js_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/slider */ "./js/slider.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./style.scss");





window.addEventListener('DOMContentLoaded', function () {
  (0,_js_mobileHeaderMenu__WEBPACK_IMPORTED_MODULE_1__.mobileHeaderMenuInit)();
  (0,_js_popup__WEBPACK_IMPORTED_MODULE_0__.popupInit)();
  (0,_js_gallery__WEBPACK_IMPORTED_MODULE_2__.Gallery)();
  (0,_js_slider__WEBPACK_IMPORTED_MODULE_3__.ItemsSlider)();
});
})();

/******/ })()
;
//# sourceMappingURL=main.js.map