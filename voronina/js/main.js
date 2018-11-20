document.addEventListener("DOMContentLoaded", ready);

function ready() {
  composePositioner();
  toggleNavButton();
}

function composePositioner() {
  const compose_1 = document.querySelector('#compose-1');
  const border_container = document.querySelector('#border-container-1');
  const backImg = document.querySelector('#background-1');
  const border1 = document.querySelector('#border-1');
  let flag = false;

  borderShift(window.innerWidth);
  backgroundShift(window.innerWidth);
  borderElemShift1(window.innerWidth);

  window.addEventListener('resize', (evt) => {
    borderShift(evt.target.innerWidth);
    backgroundShift(evt.target.innerWidth);
    borderElemShift1(evt.target.innerWidth);

    if (evt.target.innerWidth < 1440) flag = true;

    if (flag === true && evt.target.innerWidth >= 1440) {
      backImg.style.backgroundPosition = `0rem center`;
      border_container.style.left = `52.5%`;
      border1.style.backgroundPosition = `0px top`;
    }
  });
  
  // вычисляет смещение фоновой картинки
  function percnet(width) {
    let raw_percent = 71 - ((width - 764)/676)*18;
    return raw_percent.toString().slice(0, 5);
  }

  // вычисляет смещение контейнера границ
  function percnetBorder(width) {
    let raw_percent = 20 - ((width - 764)/676)*20;
    return raw_percent.toString().slice(0, 5);
  }

  // вычисляет смещение верхней границы
  function borderElShiftVal() {
    const oldShift = 79;
    
    return oldShift - (backImg.offsetLeft - border_container.offsetLeft);
  }

  // **************
  // СМЕЩЕНИЯ 
  // **************
  function borderShift(winWidth) {
    if (winWidth < 1440) {
      border_container.style.left = `${percnet(winWidth)}%`;
    }
  }

  function borderElemShift1(winWidth) {
    if (winWidth < 1440) {
      border1.style.backgroundPosition = `-${borderElShiftVal() + parseFloat(percnetBorder(winWidth))*10}px top`;
    }
  }

  function backgroundShift(winWidth) {
    if (winWidth < 1440) {
      backImg.style.backgroundPosition = `-${percnetBorder(winWidth)}rem center`;
    }
  }
}

function toggleNavButton() {
  const btn = document.querySelector('.main-nav__toggle-btn');
  const mainNav = document.querySelector('.main-nav');
  btn.addEventListener('click', toggle);

  function toggle() {
    if (mainNav.classList.contains('main-nav--open')) {
      mainNav.classList.remove('main-nav--open');
    } else {
      mainNav.classList.add('main-nav--open');
    }
  }
}