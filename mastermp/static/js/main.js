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
    playerControlSettings();
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
  tabsContainer.each(function (_) {
    $(tabsContainer[_]).find('.reviews-slide-tabs__block').each(function (el) {
      $(this).find('.reviews-slide-tabs__btn').each(function () {
        var _this = this;

        this.addEventListener('click', function () {
          $(_this).closest('.reviews-slide-tabs').find('.reviews-slide-tabs__block').removeClass('reviews-slide-tabs__block--active');
          $(_this).parent().addClass('reviews-slide-tabs__block--active');
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
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1
  });
  navBtns.click(function () {
    navBtns.removeClass('rev-block__nav-item--active');
    $(this).addClass('rev-block__nav-item--active');
    var slideNum = this.dataset.revslide;
    slider.slick('slickGoTo', slideNum);
  });
}

function playerControlSettings() {// var player = new OpenPlayer('player_1', false, {
  //   controls: {
  //     left: ['play', 'time', 'volumes'],
  //     middle: ['progress'],
  //     right: ['captions', 'settings', 'fullscreen'],
  //   },
  // });
  // player.init();
}