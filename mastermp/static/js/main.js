"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

$(document).ready(function () {
  svg4everybody({});
  burgerAction();
  new LazyLoad({
    elements_selector: ".lazy"
  }); // Remove phone app action on desktop

  if (window.matchMedia("(min-width: 769px)").matches) {
    $('.head-phone, .phone-block__phone').click(function (evt) {
      evt.preventDefault();
      $.fancybox.open({
        src: '#popup-left-phone',
        type: 'inline',
        closeExisting: true,
        smallBtn: false,
        buttons: [],
        autoFocus: false
      });
    });
  }

  hangPopups();

  if (document.getElementById("page-all") || document.getElementById("page-commercial")) {
    economyCardsActions();
    initAOS();
    initLazyBG();
    modernSoftSlider();
    reviewsTabsInit();
    reviewsSliderInit(); // yamapsInit();

    fancyboxInitLogic();
    navLine();
    scrollToActions();
  }

  if (document.getElementById("page-security")) {
    // economyCardsActions();
    initAOS();
    initLazyBG();
    modernSoftSlider();
    reviewsTabsInit();
    reviewsSliderInit(); // yamapsInit();

    fancyboxInitLogic();
    navLine();
    scrollToActions();
  }

  if (document.getElementById("page-it")) {
    initAOS();
    initLazyBG();
    modernSoftSlider();
    reviewsTabsInit();
    reviewsSliderInit(); // yamapsInit();

    fancyboxInitLogic();
    navLine();
    scrollToActions();
  }

  initDatepicker();
  initInputmask(); // reviewsShowMore();
}); // Полифилы
// forEach IE 11

if ("NodeList" in window && !NodeList.prototype.forEach) {
  console.info("polyfill for IE11");

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
    "use strict";

    return [].slice.call(object);
  };
} // Modules


var cssLoaderHtml = "<div class=\"lds-default\"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>";

function burgerAction() {
  var burgerElement = document.querySelector(".burger");
  var headNavEl = document.querySelector(".head-nav"); // my mistake, loosely had thought about container element

  var burgerContainer = $(".top-line__mobile-nav");
  var burgerContainerMain = $(".top-line-main__mobile-nav");
  burgerElement.addEventListener("click", burgerElHandler);
  var burgerContainerStyles = {
    border: "1px solid #D4DBEF",
    position: "relative",
    zIndex: "12"
  };

  function burgerElHandler() {
    if (this.classList.contains("burger--active")) {
      this.classList.add("burger--reverse");
      headNavEl.classList.remove("head-nav--mobile");
      burgerContainer.removeAttr("style");
      burgerContainerMain.removeAttr("style");
      setTimeout(function () {
        burgerElement.classList.remove("burger--active");
        burgerElement.classList.remove("burger--reverse");
      }, 300);
    } else {
      this.classList.add("burger--active");
      headNavEl.classList.add("head-nav--mobile");
      burgerContainer.css(burgerContainerStyles);
      burgerContainerMain.css(burgerContainerStyles);
    }
  }

  if (window.matchMedia("(max-width: 1280px)").matches) {
    $(headNavEl).find('a').click(function () {
      burgerElement.click();
    });
  }
}

function economyCardsActions() {
  if (window.matchMedia("(min-width: 951px)").matches) {
    var cards = document.querySelectorAll(".economy-card");

    var columns = _toConsumableArray(document.querySelectorAll("#blue-columns__column-1 .blue-columns__inner-column-outer, #blue-columns__column-2 .blue-columns__inner-column-outer"));

    var colBalloon = document.querySelector("#column-ballon");

    _toConsumableArray(cards).forEach(function (el) {
      el.addEventListener("click", cardClickHandler);
    });

    cards[0].classList.add("economy-card--active");

    function cardClickHandler(event) {
      var targetEl = event.currentTarget;
      var values = targetEl.dataset.value.split(",");
      var ballonText = targetEl.dataset.ballon;

      _toConsumableArray(cards).forEach(function (el) {
        el.classList.remove("economy-card--active");
      });

      targetEl.classList.add("economy-card--active");
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
}

function initAOS() {
  AOS.init({
    duration: 600,
    disable: function disable() {
      return window.matchMedia("(min-width: 768px)").matches ? false : true;
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
  var sliderContainer = document.querySelector(".modern-soft__slider");
  var sliderElement = $("#modern-soft__slider-js");
  var dataSliderElement = $("#modern-soft__info-slider");
  var logoControlElements = document.querySelectorAll(".modern-soft__logo-control");
  var loader = document.createElement("div");
  loader.classList.add("loader");
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
    asNavFor: "#modern-soft__info-slider",
    prevArrow: "#slider-arrow__modern-soft--prev",
    nextArrow: "#slider-arrow__modern-soft--next"
  };
  var ds_slickParams = {
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    accessibility: false,
    swipeToSlide: false,
    touchMove: false,
    adaptiveHeight: true
  };
  sliderElement.slick(slickParams);
  dataSliderElement.slick(ds_slickParams);
  Array.from(logoControlElements).forEach(function (el) {
    el.addEventListener("click", function () {
      sliderElement.slick("slickGoTo", parseInt(el.dataset.slide));

      _toConsumableArray(logoControlElements).forEach(function (lcEl) {
        lcEl.classList.remove("active");
        el.classList.add("active");
      });
    });
  }); // dataSliderElement.on('afterChange', (evt, _, currentSlide) => {
  //   $(logoControlElements).removeClass('active');
  //   $(logoControlElements[currentSlide]).addClass('active');
  // });

  dataSliderElement.on('afterChange', function (evt, _, currentSlide) {
    $(logoControlElements).removeClass('active');
    $(logoControlElements[currentSlide]).addClass('active');
  });
}

function reviewsTabsInit() {
  var tabsContainer = $(".reviews-slide-tabs");

  if (window.matchMedia("(max-width: 950px)").matches) {
    $(".reviews-slide-tabs__block--1.reviews-slide-tabs__block--open .reviews-slide-tabs__content").slideDown();
  }

  tabsContainer.each(function (_) {
    $(tabsContainer[_]).find(".reviews-slide-tabs__block").each(function (el) {
      $(this).find(".reviews-slide-tabs__btn").each(function () {
        var _this = this;

        this.addEventListener("click", function () {
          if (window.matchMedia("(max-width: 950px)").matches) {
            $(_this).next().slideToggle();

            if ($(_this).parent().hasClass("reviews-slide-tabs__block--open")) {
              $(_this).parent().removeClass("reviews-slide-tabs__block--open");
            } else {
              $(_this).parent().addClass("reviews-slide-tabs__block--open");
            }
          } else {
            $(_this).closest(".reviews-slide-tabs").find(".reviews-slide-tabs__block").removeClass("reviews-slide-tabs__block--active");
            $(_this).parent().addClass("reviews-slide-tabs__block--active");
          }
        });
      });
    });
  });
}

function reviewsSliderInit() {
  var slider = $("#rev-block-slider");
  var navBtns = $(".rev-block__nav-item");
  slider.slick({
    infinite: false,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: "#slider-arrow__rev-block--prev",
    nextArrow: "#slider-arrow__rev-block--next"
  });
  navBtns.click(function () {
    navBtns.removeClass("rev-block__nav-item--active");
    $(this).addClass("rev-block__nav-item--active");
    var slideNum = this.dataset.revslide;
    slider.slick("slickGoTo", slideNum);
  });
}

function yamapsInit() {
  ymaps.ready(init);

  function init() {
    var myMap = new ymaps.Map("yaMap", {
      center: [55.736731, 37.712946],
      zoom: 15,
      controls: ["smallMapDefaultSet"]
    }, {
      searchControlProvider: "yandex#search"
    });
    var myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      hintContent: "Мастер-РМ",
      balloonContent: "г. Москва, ул.Смирновская, д.25, стр.10"
    }, {
      iconLayout: "default#image",
      iconImageHref: "static/images/general/map-pin.png",
      iconImageSize: [148, 160],
      iconImageOffset: [-74, -80]
    });
    myMap.geoObjects.add(myPlacemark);
  }
} // Fancybox


function fancyboxInitLogic() {
  var headerBtn = document.getElementById('header-btn'); // Open quiz on Calc Price Button

  var calcPriceBtn = document.getElementById("ms-calc-price");
  var quizCopy = document.getElementById("quiz-form").cloneNode(true);
  quizCopy.id = quizCopy.id + "-copy";
  var quizWrapper = document.createElement("div");
  quizWrapper.classList.add("quizPopup");
  quizWrapper.appendChild(quizCopy);

  var quizPopuphandler = function quizPopuphandler(e) {
    e.preventDefault();
    $.fancybox.open("<div>" + quizWrapper.innerHTML + "</div>", {
      afterShow: function afterShow(instance, current) {
        var phoneInput = current.$slide[0].querySelector('input[name="telephone"]');
        IMask(phoneInput, {
          mask: '{+7} (000) 000-00-00',
          lazy: false
        });
        validPhone([phoneInput]);
        current.$slide[0].querySelector('.quiz-form__quiz-list-link').addEventListener('click', function (e) {
          e.preventDefault();
          $.fancybox.open({
            src: '#popup-popup-questionnaire',
            type: 'inline',
            closeExisting: true,
            hideScrollbar: false,
            smallBtn: false,
            buttons: [],
            autoFocus: false,
            touch: {
              vertical: true
            }
          });
        });
      },
      smallBtn: false,
      autoFocus: false,
      hideScrollbar: false
    });
  };

  calcPriceBtn.addEventListener("click", quizPopuphandler);
  headerBtn.addEventListener("click", quizPopuphandler);
} // navigation line


function navLine() {
  var scrollActive = false;
  var navLine = document.querySelector(".header__navigation");
  var headerEl = document.querySelector(".header");
  window.addEventListener("scroll", function (evt) {
    if (window.pageYOffset > 1000 && !scrollActive) {
      scrollActive = true;
      navLine.classList.add("floating");
      headerEl.classList.add("floating");
    } else if (window.pageYOffset <= 1000 && scrollActive) {
      scrollActive = false;
      navLine.classList.add("hiding");
      setTimeout(function () {
        navLine.classList.remove("floating");
        navLine.classList.remove("hiding");
        headerEl.classList.remove("floating");
      }, 220);
    }
  });
}

function initDatepicker() {
  var monthNames = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
  var fields = document.querySelectorAll('input[name="input_date"]');

  _toConsumableArray(fields).forEach(function (el) {
    new Datepicker(el, {
      time: true,
      toValue: function toValue(val) {
        if (!val) {
          var today = new Date();
          return today; // return `${today.getDate()} ${monthNames[parseInt(today.getMonth())-1]} в ${today.getHours()}:${today.getMinutes()}`;
        }

        var _val$split = val.split('@'),
            _val$split2 = _slicedToArray(_val$split, 2),
            date = _val$split2[0],
            time = _val$split2[1];

        var _date$split = date.split('.'),
            _date$split2 = _slicedToArray(_date$split, 3),
            day = _date$split2[0],
            month = _date$split2[1],
            year = _date$split2[2];

        if (day) {
          day = day.startsWith('0') ? day.slice(1) : day;
        } else {
          day = '';
        }

        if (month) {
          month = month.startsWith('0') ? monthNames[parseInt(month.slice(1)) - 1] : monthNames[parseInt(month) - 1];
        } else {
          month = '';
        }

        if (!time) {
          time = '';
        } // el.setAttribute('value', `${day} ${month} в ${time}`);


        return "".concat(day, " ").concat(month, " \u0432 ").concat(time);
      },
      fromValue: function fromValue(val) {
        return new Date();
      }
    });
  });
}

function initInputmask() {
  var phoneInputs = document.querySelectorAll('input[name="telephone"]');

  _toConsumableArray(phoneInputs).forEach(function (el) {
    IMask(el, {
      mask: '{+7} (000) 000-00-00',
      lazy: false
    });
  });

  validPhone(phoneInputs);
}

function validPhone(inputs) {
  var regex = /\d+/g; // safary fix

  for (var i = 0; i < inputs.length; i++) {
    inputs[i].closest('form').querySelector('button[type="submit"]').addEventListener('click', inputErrHandler(inputs[i]));
  }

  function inputErrHandler(inpEl) {
    return function (evt) {
      if (inpEl.value.length !== 18 || isSameNumbers(inpEl.value)) {
        inpEl.setCustomValidity('Неверный формат номера!');
      } else {
        inpEl.setCustomValidity('');
      }
    };
  }

  function isSameNumbers(num) {
    var digits = num.match(regex).slice(1).join('');

    if (digits.length !== 10) {
      return true;
    }

    if (digits === '1234567890') {
      return true;
    }

    return digits.split('').every(function (el, i, arr) {
      if (i > 0) {
        return arr[i - 1] === el;
      } else {
        return true;
      }
    });
  }
}

function hangPopups() {
  var btnToPopup = [['#popup-free-test', ['#free-test', '#rev-block-turquoise-btn', '#next-step-card-30-days-free']], ['#popup-get-presentation', ['.modern-soft__get-presentation']], ['#popup-popup-questionnaire', ['.quiz-form__quiz-list-link']], ['#popup-places', ['#weak-spots-btn', '#next-step-card-order-audit', '#get-audit-btn']], ['#popup-left-phone', ['#next-step-card-get-consult']]];
  btnToPopup.forEach(function (pair) {
    pair[1].forEach(function (button) {
      $(button).click(function (evt) {
        evt.preventDefault();
        $.fancybox.open({
          src: pair[0],
          type: 'inline',
          closeExisting: false,
          smallBtn: false,
          buttons: [],
          autoFocus: false,
          touch: {
            vertical: true,
            momentum: false
          }
        });
      });
    });
  });
  $('.close-btn').click(function () {
    return $.fancybox.close();
  });
}

function scrollToActions() {
  var links = ['.header-logo', '.head-nav__link'];
  links.forEach(function (el) {
    $(el).click(scrollToaction);
  });

  function scrollToaction(evt) {
    evt.preventDefault();
    var scroll_el = $($(this).attr('href'));

    if ($(scroll_el).length != 0) {
      $('html, body').animate({
        scrollTop: $(scroll_el).offset().top
      }, 800);
    }
  }
} // Show More Actions
// function reviewsShowMore() {
//   const showMoreBtn = document.getElementById('show-more-remivews');
//   const cardsConts = document.querySelectorAll('.audio-cards__column');
//   const audioCards = [
//     filterShown(cardsConts[0].querySelectorAll('.audio-cards__card')),
//     filterShown(cardsConts[1].querySelectorAll('.audio-cards__card'))
//   ];
//
//   console.log(audioCards);
//
//
//   function filterShown(nList) {
//     return Array.from(nList).filter(el => {
//       console.log(el)
//       return !el.classList.contains('show');
//     })
//   }
// }