$(function() {
  var donepages = [];

  var elements = [
    [
      "ip-about__img",
      "ip-about-content__top-line",
      "ip-about-content__item--1",
      "ip-about-content__item--2",
      "ip-about-content__item--3",
      "ip-about-content__item--4",
      "ip-about-content__bottom-line"
    ],
    [
      'ip-overview__left-vtext',
      'ip-overview__features'
    ],
    [
      'ip-features__title',
      'ip-features__text',
      'ip-features-block--artists',
      'ip-features-block--fans',
      'ip-features-block__text--artists',
      'ip-features-block__text--fans',
      'ip-features-block__label--artists',
      'ip-features-block__label--fans'
    ],
    [
      'ip-fslider-slide__container',
      'ip-fslider-slide__navs',
      'ip-fslider-slide__p-title',
      'ip-fslider-slide__p-subtitle',
      'ip-fslider-slide__play-button'
    ],
    [
      'ip-features-2__title',
      'exp-module',
      'exp-module__text',
      'exp-module__picture'
    ],
    [
      'keep-free__title',
      'keep-free__text',
      'keep-free__btn',
      'timeline__title',
      'timeline__table'
    ],
    [
      'ip-rewards__title',
      'reward__person-line',
      'reward__features'
    ],
    [
      'ip-more__title',
      'ip-more__text',
      'contact-blok'
    ]
  ];

  function mainPageSlider() {
    const colors = [
      "#20BDFF",
      "#FF4B2C",
      "#78D8AA",
      "#FB6600",
      "#20E3B2",
      "#F4317B",
      "#3F99CB",
      "#B81442"
    ];
    $("#slider").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 2500
    });

    $("#slider").on("beforeChange", function(
      event,
      slick,
      currentSlide,
      nextSlide
    ) {
      let sliderBlock = $(".slider_block");
      nextSlide == 0
        ? sliderBlock.addClass("bg_slides0")
        : sliderBlock.removeClass("bg_slides0");
      nextSlide == 1
        ? sliderBlock.addClass("bg_slides1")
        : sliderBlock.removeClass("bg_slides1");
      nextSlide == 2
        ? sliderBlock.addClass("bg_slides2")
        : sliderBlock.removeClass("bg_slides2");
      nextSlide == 3
        ? sliderBlock.addClass("bg_slides3")
        : sliderBlock.removeClass("bg_slides3");
      nextSlide == 4
        ? sliderBlock.addClass("bg_slides4")
        : sliderBlock.removeClass("bg_slides4");
      nextSlide == 5
        ? sliderBlock.addClass("bg_slides5")
        : sliderBlock.removeClass("bg_slides5");
      nextSlide == 6
        ? sliderBlock.addClass("bg_slides6")
        : sliderBlock.removeClass("bg_slides6");
      nextSlide == 7
        ? sliderBlock.addClass("bg_slides7")
        : sliderBlock.removeClass("bg_slides7");
      //        console.log('currentSlide', currentSlide);
      //        console.log('nextSlide', nextSlide);
    });
  }

  // function pgInitial() {

  // }

  function infoPageSlider() {
    $(".ip-fslider__js-slider").slick({
      prevArrow: ".ip-fslider-slide__nav-arrow--prev",
      nextArrow: ".ip-fslider-slide__nav-arrow--next"
    });
  }

  function pageableResizeActions() {
    var sizeIs1 = false;
    var sizeIs2 = false;

    insertTimeline();
    insertRewards();

    $(window).resize(function() {
      insertTimeline();
      insertRewards();
    });

    function insertTimeline() {
      if (window.matchMedia("(max-width: 768px)").matches && !sizeIs1) {
        var newEl = $('<section class="ip-timeline-2 scrollify"></section>');
        $(".ip-timeline").after(newEl);
        $(".keep-free").appendTo($(newEl));

        $.scrollify({
          section: ".scrollify",
          scrollbars: false,
          before: scrollifyNav,
          // after: ianimActionIP,
          scrollSpeed: 800
        });

        sizeIs1 = true;
      } else {
        $.scrollify({
          section: ".scrollify",
          scrollbars: false,
          before: scrollifyNav,
          // after: ianimActionIP,
          scrollSpeed: 800
        });
      }
    }

    function insertRewards() {
      if (window.matchMedia("(max-width: 768px)").matches && !sizeIs2) {
        var newEl = $(
          '<section class="rewards-2 ip-rewards scrollify"></section>'
        );
        $(".ip-rewards").after(newEl);

        $(".reward--4").appendTo($(newEl));
        $(".reward--5").appendTo($(newEl));
        $(".ip-rewards__note").appendTo($(newEl));

        $.scrollify({
          section: ".scrollify",
          scrollbars: false,
          before: scrollifyNav,
          // after: ianimActionIP,
          scrollSpeed: 800
        });

        sizeIs2 = true;
      }
    }

    // если вы это видите, простите, мне стыдно, но уже поздно, я устал...
    function scrollifyNav(index) {
      ianimActionIP(index);
      if (window.matchMedia("(max-width: 768px)").matches) {
        switch (index) {
          case 0:
            changeNavBarActive("1");
            break;
          case 1:
            changeNavBarActive("2");
            break;
          case 2:
            changeNavBarActive("3");
            break;
          case 3:
            changeNavBarActive("3");
            break;
          case 4:
            changeNavBarActive("3");
            break;
          case 5:
            changeNavBarActive("3");
            break;
          case 6:
            changeNavBarActive("4");
            break;
          case 7:
            changeNavBarActive("4");
            break;
          case 8:
            changeNavBarActive("5");
            break;
          case 9:
            changeNavBarActive("5");
            break;
          case 10:
            changeNavBarActive("5");
            break;
        }
      } else {
        console.log(index);

        switch (index) {
          case 0:
            changeNavBarActive("1");
            break;
          case 1:
            changeNavBarActive("2");
            break;
          case 2:
            changeNavBarActive("3");
            break;
          case 3:
            changeNavBarActive("3");
            break;
          case 4:
            changeNavBarActive("3");
            break;
          case 5:
            changeNavBarActive("3");
            break;
          case 6:
            changeNavBarActive("4");
            break;
          case 7:
            changeNavBarActive("5");
            break;
          case 8:
            changeNavBarActive("5");
            break;
        }
      }
    }

    function changeNavBarActive(id) {
      $(".nav-bar__item").removeClass("nav-bar__item--active");
      $("#nav-bar-" + id).addClass("nav-bar__item--active");
    }

    $(".nav-bar__item").click(function(evt) {
      $.scrollify.move($(evt.target).data("name"));
    });

    //
  }

  function domManip() {
    function page_1() {
      var sizeIs = false;

      if (window.matchMedia("(max-width: 768px)").matches && !sizeIs) {
        $(".ip-main__img-wrapper").appendTo($(".ip-main__play-btn"));
        $(".ip-about__rside").appendTo($(".ip-about-content__middle-line"));
        var sizeIs = true;
      }

      $(window).resize(function() {
        if (window.matchMedia("(max-width: 768px)").matches && !sizeIs) {
          $(".ip-main__img-wrapper").appendTo($(".ip-main__play-btn"));
          $(".ip-about__rside").appendTo($(".ip-about-content__middle-line"));
          var sizeIs = true;
        } else if (window.matchMedia("(min-width: 770px)").matches) {
          // location.reload();
        }
      });
    }

    page_1();
  }

  function priceBlock() {
    $(".price-block__checkbox").click(function() {
      if ($(this).prop("checked")) {
        $(this)
          .closest(".price-block")
          .addClass("price-block--full-h");
        setTimeout(function() {
          $("input, select").trigger("refresh");
        }, 100);
      } else if (
        $(this)
          .closest(".price-block")
          .hasClass("price-block--full-h")
      ) {
        $(this)
          .closest(".price-block")
          .removeClass("price-block--full-h");
      }
    });
  }



  function stylerAct() {
    
    $("select").styler({
      onSelectOpened: function() {
        $(".form-element__dp-arrow").css("transform", "rotate(90deg)");
      },
      onSelectClosed: function() {
        $(".form-element__dp-arrow").css("transform", "rotate(0deg)");
      },
      selectVisibleOptions: 3
    });
  }

  // ANIMATION FUNCTIONALITY
  function initAnumatedEls(currIn) {
    elements.forEach(function(page, i) {
      if (i !== currIn) {
        page.forEach(function(el) {
          // document.querySelector('.' + el).classList.add('animAction');
          $('.' + el).addClass('animAction');
        })
      }
      
    });
  }

  function ianimActionIP(index) {
    setTimeout(() => {
      if (index > 0) {
        var els = getPageEls(index - 1);
        var delay = 10;
  
        if (els) {
          els.forEach(function(item) {
            setTimeout(() => {
              // document.querySelector('.' + item).classList.remove('animAction');
              $('.' + item).removeClass('animAction');
            }, delay);
            delay += 100;
          });
        }
      }
    }, 200);
  }

  // returns an array of elements to animate
  function getPageEls(pageNum) {
    var id = pageNum;

    if (window.matchMedia("(max-width: 768px)").matches) {
      if (pageNum === 5 || pageNum === 6) {
        id = 5;
      }
      if (pageNum === 7 || pageNum === 8) {
        id = 6;
      }
      if (pageNum === 9) {
        id = 7;
      }
    }

    if (!donepages.includes(id)) {
      donepages.push(id);
      return elements[id];
    } else return NaN;
  }

  function otherPagesAnimations() {
    
    document.querySelectorAll('.todo').forEach(function(item) {
      if (!visible(item)) {
        $(item).attr({
          "data-aos": "fade-up"
        });
      }
    });

    document.querySelectorAll('.price-block').forEach(function(item) {
      if (!visible(item)) {
        $(item).attr({
          "data-aos": "fade-up",
          "data-aos-delay": 0,
          "data-aos-duration": "600"
        });
      }
    });

    $('.select-amount__title').attr({
        "data-aos": "fade-up",
        "data-aos-delay": 0,
        "data-aos-duration": "600"
      });

    document.querySelectorAll('.price-blocks__title').forEach(function(item) {
      if (!visible(item)) {
        $(item).attr({
          "data-aos": "fade-up",
          "data-aos-delay": 0,
          "data-aos-duration": "600"
        });
      }
    });

    document.querySelectorAll('.chats-list__chat').forEach(function(item) {
      if (!visible(item)) {
        $(item).attr({
          "data-aos": "fade-up",
          "data-aos-delay": 0,
          "data-aos-duration": "600"
        });
      }
    });

    
    document.querySelectorAll('.thks-don-top-block__whatwilldo-line').forEach(function(item) {
      if (!visible(item)) {
        $(item).attr({
          "data-aos": "fade-up",
          "data-aos-delay": 0,
          "data-aos-duration": "600"
        });
      }
    });

    AOS.init({
      once: true,
      mirror: false,
    });
    
    
  }


  function visible(target) {
    var targetPosition = {
        top: window.pageYOffset + target.getBoundingClientRect().top,
        left: window.pageXOffset + target.getBoundingClientRect().left,
        right: window.pageXOffset + target.getBoundingClientRect().right,
        bottom: window.pageYOffset + target.getBoundingClientRect().bottom
      },
      windowPosition = {
        top: window.pageYOffset,
        left: window.pageXOffset,
        right: window.pageXOffset + document.documentElement.clientWidth,
        bottom: window.pageYOffset + document.documentElement.clientHeight
      };
  
    if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
      targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
      targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
      targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
      
      return true;
    } else {
      return false;
    };
  };

  function videoActivation() {
    $('.ip-fslider-slide__cover').click(function() { 
      
      $(this).closest('.ip-fslider-slide__inner-block')
        .find('.ip-fslider-slide__youvideo').addClass('yv-show');
      $(this).remove();
    })
  }

  mainPageSlider();

  if ($(".fullscroll")[0]) {
    infoPageSlider();
    pageableResizeActions();
    domManip();

    var currIn = $.scrollify.currentIndex();
    initAnumatedEls(currIn-1);
  } else {
    otherPagesAnimations();
  }

  priceBlock();
  
  if ($('select')[0]) stylerAct();

  videoActivation();
});