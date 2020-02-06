"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

$(document).ready(function () {
  svg4everybody({});
  burgerAction();
  new LazyLoad({
    elements_selector: ".lazy"
  });

  if (document.getElementById('page-sectioning')) {
    console.log('page-sectioning');
  }

  if (document.getElementById('page-all')) {
    if (window.matchMedia('(min-width: 951px)').matches) {
      economyCardsActions();
    }

    initAOS();
    initLazyBG();
    modernSoftSlider();
    reviewsTabsInit();
    reviewsSliderInit();
    yamapsInit();
    fancyboxInitLogic();
    navLine();
  }
}); // Полифилы
// forEach IE 11

if ('NodeList' in window && !NodeList.prototype.forEach) {
  console.info('polyfill for IE11');

  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;

    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
} // closest IE 11


(function () {
  if (!Element.prototype.closest) {
    Element.prototype.closest = function (css) {
      var node = this;

      while (node) {
        if (node.matches(css)) return node;else node = node.parentElement;
      }

      return null;
    };
  }
})(); // matches IE 11


(function () {
  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector;
  }
})(); //Array.form IE 11


if (!Array.from) {
  Array.from = function (object) {
    'use strict';

    return [].slice.call(object);
  };
} // Modules


var cssLoaderHtml = "<div class=\"lds-default\"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>";

function burgerAction() {
  var burgerElement = document.querySelector('.burger');
  var headNavEl = document.querySelector('.head-nav'); // my mistake, loosely had thought about container element

  var burgerContainer = $('.top-line__mobile-nav');
  var burgerContainerMain = $('.top-line-main__mobile-nav');
  burgerElement.addEventListener('click', function () {
    if (this.classList.contains('burger--active')) {
      this.classList.add('burger--reverse');
      headNavEl.classList.remove('head-nav--mobile');
      burgerContainer.removeAttr('style');
      burgerContainerMain.removeAttr('style');
      setTimeout(function () {
        burgerElement.classList.remove('burger--active');
        burgerElement.classList.remove('burger--reverse');
      }, 300);
    } else {
      this.classList.add('burger--active');
      headNavEl.classList.add('head-nav--mobile');
      burgerContainer.css(burgerContainerStyles);
      burgerContainerMain.css(burgerContainerStyles);
    }
  });
  var burgerContainerStyles = {
    border: '1px solid #D4DBEF',
    position: 'relative',
    zIndex: '12'
  };
}

function economyCardsActions() {
  var cards = document.querySelectorAll('.economy-card');

  var columns = _toConsumableArray(document.querySelectorAll('#blue-columns__column-1 .blue-columns__inner-column-outer, #blue-columns__column-2 .blue-columns__inner-column-outer'));

  var colBalloon = document.querySelector('#column-ballon');

  _toConsumableArray(cards).forEach(function (el) {
    el.addEventListener('click', cardClickHandler);
  });

  cards[0].classList.add('economy-card--active');

  function cardClickHandler(event) {
    var targetEl = event.currentTarget;
    var values = targetEl.dataset.value.split(',');
    var ballonText = targetEl.dataset.ballon;

    _toConsumableArray(cards).forEach(function (el) {
      el.classList.remove('economy-card--active');
    });

    targetEl.classList.add('economy-card--active');
    changeColumnHeight(values);
    setColumnBalloon(ballonText.trim());
  }

  function changeColumnHeight(vals) {
    var val_1 = parseInt(vals[0], 10);
    var val_2 = parseInt(vals[1], 10);
    columns[0].style.height = "".concat(val_1, "%");
    columns[1].style.height = "".concat(val_2, "%");
  }

  function setColumnBalloon(rawtext) {
    colBalloon.innerHTML = rawtext;
  }
}

function initAOS() {
  AOS.init({
    duration: 600,
    disable: function disable() {
      return window.matchMedia('(min-width: 768px)').matches ? false : true;
    }
  });
}

function initLazyBG() {
  var callback_enter = function callback_enter(element) {
    console.log(element);
  };

  new LazyLoad({
    elements_selector: ".lazyBg"
  });
} // modern Soft Slider


function modernSoftSlider() {
  var sliderContainer = document.querySelector('.modern-soft__slider');
  var sliderElement = $('#modern-soft__slider-js');
  var dataSliderElement = $('#modern-soft__info-slider');
  var logoControlElements = document.querySelectorAll('.modern-soft__logo-control');
  var loader = document.createElement('div');
  loader.classList.add('loader');
  loader.innerHTML = cssLoaderHtml;

  var lazyStartedLoading = function lazyStartedLoading() {
    sliderContainer.append(loader);
  };

  var lazyLoaded = function lazyLoaded() {
    loader.remove();
  };

  new LazyLoad({
    elements_selector: ".ms-slider-img",
    callback_reveal: lazyStartedLoading,
    callback_loaded: lazyLoaded
  });
  var slickParams = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    asNavFor: '#modern-soft__info-slider',
    prevArrow: '#slider-arrow__modern-soft--prev',
    nextArrow: '#slider-arrow__modern-soft--next'
  };
  var ds_slickParams = {
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    accessibility: false,
    swipeToSlide: false,
    touchMove: false
  };
  sliderElement.slick(slickParams);
  dataSliderElement.slick(ds_slickParams);
  Array.from(logoControlElements).forEach(function (el) {
    el.addEventListener('click', function () {
      sliderElement.slick('slickGoTo', parseInt(el.dataset.slide));

      _toConsumableArray(logoControlElements).forEach(function (lcEl) {
        lcEl.classList.remove('active');
        el.classList.add('active');
      });
    });
  });
}

function reviewsTabsInit() {
  var tabsContainer = $('.reviews-slide-tabs');

  if (window.matchMedia('(max-width: 950px)').matches) {
    $('.reviews-slide-tabs__block--1.reviews-slide-tabs__block--open .reviews-slide-tabs__content').slideDown();
  }

  tabsContainer.each(function (_) {
    $(tabsContainer[_]).find('.reviews-slide-tabs__block').each(function (el) {
      $(this).find('.reviews-slide-tabs__btn').each(function () {
        var _this = this;

        this.addEventListener('click', function () {
          if (window.matchMedia('(max-width: 950px)').matches) {
            $(_this).next().slideToggle();

            if ($(_this).parent().hasClass('reviews-slide-tabs__block--open')) {
              $(_this).parent().removeClass('reviews-slide-tabs__block--open');
            } else {
              $(_this).parent().addClass('reviews-slide-tabs__block--open');
            }
          } else {
            $(_this).closest('.reviews-slide-tabs').find('.reviews-slide-tabs__block').removeClass('reviews-slide-tabs__block--active');
            $(_this).parent().addClass('reviews-slide-tabs__block--active');
          }
        });
      });
    });
  });
}

function reviewsSliderInit() {
  var slider = $('#rev-block-slider');
  var navBtns = $('.rev-block__nav-item');
  slider.slick({
    infinite: false,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '#slider-arrow__rev-block--prev',
    nextArrow: '#slider-arrow__rev-block--next'
  });
  navBtns.click(function () {
    navBtns.removeClass('rev-block__nav-item--active');
    $(this).addClass('rev-block__nav-item--active');
    var slideNum = this.dataset.revslide;
    slider.slick('slickGoTo', slideNum);
  });
}

function yamapsInit() {
  ymaps.ready(init);

  function init() {
    var myMap = new ymaps.Map("yaMap", {
      center: [55.736731, 37.712946],
      zoom: 15,
      controls: ['smallMapDefaultSet']
    }, {
      searchControlProvider: 'yandex#search'
    });
    var myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: 'Мастер-РМ',
      balloonContent: 'г. Москва, ул.Смирновская, д.25, стр.10'
    }, {
      iconLayout: 'default#image',
      iconImageHref: 'static/images/general/map-pin.png',
      iconImageSize: [148, 160],
      iconImageOffset: [-74, -80]
    });
    myMap.geoObjects.add(myPlacemark);
  }
}

; // Fancybox

function fancyboxInitLogic() {
  // Set fancybox close btn
  $.fancybox.defaults.btnTpl.smallBtn = '<button type="button" data-fancybox-close class="close-btn" title="{{CLOSE}}"><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0.292969 13.293L13.293 0.292969L14.7072 1.70718L1.70718 14.7072L0.292969 13.293Z" fill="#2F7EEF"/><path fill-rule="evenodd" clip-rule="evenodd" d="M14.707 13.293L1.70703 0.292969L0.292818 1.70718L13.2928 14.7072L14.707 13.293Z" fill="#2F7EEF"/></svg></button>'; // Open quiz on Calc Price Button

  var calcPriceBtn = document.getElementById('ms-calc-price');
  var quizCopy = document.getElementById('quiz-form').cloneNode(true);
  quizCopy.id = quizCopy.id + '-copy';
  var quizWrapper = document.createElement('div');
  quizWrapper.classList.add('quizPopup');
  quizWrapper.appendChild(quizCopy);
  calcPriceBtn.addEventListener('click', function () {
    $.fancybox.open('<div>' + quizWrapper.innerHTML + '</div>');
  });
} // navigation line


function navLine() {
  var scrollActive = false;
  var navLine = document.querySelector('.header__navigation');
  var headerEl = document.querySelector('.header');
  window.addEventListener('scroll', function (evt) {
    if (window.pageYOffset > 0 && !scrollActive) {
      scrollActive = true;
      navLine.classList.add('floating');
      headerEl.classList.add('floating');
    } else if (window.pageYOffset === 0 && scrollActive) {
      scrollActive = false;
      navLine.classList.remove('floating');
      headerEl.classList.remove('floating');
    }
  });
}