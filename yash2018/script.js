window.onload = function() {
  // navigation toggle functionality
  const nav = document.querySelector('.main-nav');
  const toggle_btn = document.querySelector('.main-nav__toggle_btn');
  const header = document.querySelector('.main-header');
  
  nav.classList.remove('main-nav--no-js');
  nav.classList.add('main-nav--nav-hidden');
  
  toggle_btn.addEventListener('click', () => {
    if (nav.classList.contains('main-nav--nav-hidden')) {
      nav.classList.remove('main-nav--nav-hidden');
      
      header.classList.remove('main-header--close');
      header.classList.add('main-header--open');
    } else {
      nav.classList.add('main-nav--nav-hidden');
      
      header.classList.remove('main-header--open');
      header.classList.add('main-header--close');
    }
  })
  
  // primary block scroll functionality
  const scroll_block = document.querySelector('.content-section__favorite-devices');
  
  let domRect = scroll_block.getBoundingClientRect();
  
  Array.from(scroll_block.children).forEach((el) => {
    if (el.getBoundingClientRect().top - domRect.top >= 265) {
      el.classList.add('content-section__device-item--arrowUp');
    } else {
      if (el.classList.contains('content-section__device-item--arrowUp')) {
        el.classList.remove('content-section__device-item--arrowUp');
      }
    }
  });
  
  scroll_block.onscroll = () => {
    Array.from(scroll_block.children).forEach((el) => {
      if (el.getBoundingClientRect().top - domRect.top >= 265) {
        el.classList.add('content-section__device-item--arrowUp');
      } else {
        if (el.classList.contains('content-section__device-item--arrowUp')) {
          el.classList.remove('content-section__device-item--arrowUp');
        }
      }
    });
  };
  
  // favorite scenarios paging functionality
  
  const columns_container = document.querySelector('.favorite-scenarios__columns');
  const controls = document.querySelector('.favorite-scenarios__controls');
  
  if (columns_container.classList.contains('favorite-scenarios__columns--no-js')) {
    columns_container.classList.remove('favorite-scenarios__columns--no-js');
  }
  
  const scenarios_cards = [...document.querySelectorAll('.favorite-scenarios__item')];
  
  if (scenarios_cards.length > 0) {
    fillColumnsContainer(columns_container);
  }
  
  function splitItems(items) {
    const splittedItems = [];
    
    while (items.length > 9) {
      splittedItems.push([...items.splice(0, 9)]);
    }
    
    if (items.length > 0) {
      splittedItems.push([...items])
    }
    
    return splittedItems;
  }
  
  function fillColumnsContainer(parent) {
    
    splitItems(scenarios_cards).forEach((el) => {
      let pageContainer = document.createElement('div');
      el.forEach((inner_el) => {
        pageContainer.appendChild(inner_el);
      })
      
      parent.appendChild(pageContainer);
    });
  }
  
  const pages = columns_container.children.length;
  let page_shift = 1;
  
  if (pages > 1) {
    controls.classList.add('favorite-scenarios__controls--visible');
  }
  
  const left_arrow = document.querySelector('.favorite-scenarios__left-ctrl');
  const right_arrow = document.querySelector('.favorite-scenarios__right-ctrl');
  
  right_arrow.onclick = () => {
    if (page_shift < pages) {
      let currentValue = parseInt(document.documentElement.style.getPropertyValue('--columns-shift') || 0);
      currentValue -= 645;
      document.documentElement.style.setProperty('--columns-shift', `${currentValue}px`);
      page_shift++;
      
      if (page_shift !== pages && page_shift > 0) {
        if (!left_arrow.classList.contains('favorite-scenarios__left-ctrl--active')) {
          left_arrow.classList.add('favorite-scenarios__left-ctrl--active');
        }
      } else if (page_shift === pages) {
        if (!left_arrow.classList.contains('favorite-scenarios__left-ctrl--active')) {
          left_arrow.classList.add('favorite-scenarios__left-ctrl--active');
        }
        right_arrow.classList.remove('favorite-scenarios__right-ctrl--active');
      }
    }
  }
  
  left_arrow.onclick = () => {
    if (page_shift > 1) {
      let currentValue = parseInt(document.documentElement.style.getPropertyValue('--columns-shift') || 0);
      currentValue += 645;
      document.documentElement.style.setProperty('--columns-shift', `${currentValue}px`);
      page_shift--;
      
      if (page_shift !== 1 && page_shift < pages) {
        if (!right_arrow.classList.contains('favorite-scenarios__right-ctrl--active')) {
          right_arrow.classList.add('favorite-scenarios__right-ctrl--active');
        }
      } else if (page_shift === 1) {
        left_arrow.classList.remove('favorite-scenarios__left-ctrl--active');
        right_arrow.classList.add('favorite-scenarios__right-ctrl--active');
      }
    }
  }
  
  if (pages > 1) {;
    right_arrow.classList.add('favorite-scenarios__right-ctrl--active');
  };
  
  //favorite devices functionality
  
  const scrollable_element_container = document.querySelector('.favorite-devices__scrollbar-container');
  const scrollable_element = document.querySelector('.favorite-devices__scrollbar');
  
  const fav_devices_controls = document.querySelector('.favorite-devices__controls');
  const scroll_left_arrow = document.querySelector('.favorite-devices__left-ctrl');
  const scroll_right_arrow = document.querySelector('.favorite-devices__right-ctrl');
  
  const scroll_diff = scrollable_element.scrollWidth - scrollable_element_container.offsetWidth;

  if (scroll_diff > 0) {
    fav_devices_controls.classList.add('favorite-devices__controls--visible');
  }
  
  function checkBound() {
    if (scrollable_element.scrollLeft < scroll_diff) {
      if (!scroll_right_arrow.classList.contains('favorite-devices__right-ctrl--active')) {
        scroll_right_arrow.classList.add('favorite-devices__right-ctrl--active');
      }
    } else {
      scroll_right_arrow.classList.remove('favorite-devices__right-ctrl--active');
    };
    
    if (scrollable_element.scrollLeft > 0) {
      if (!scroll_left_arrow.classList.contains('favorite-devices__left-ctrl--active')) {
        scroll_left_arrow.classList.add('favorite-devices__left-ctrl--active');
      }
    } else {
      scroll_left_arrow.classList.remove('favorite-devices__left-ctrl--active');
    };
  }
  
  function scrollAnimation(scrollable, dir) {
    const value = 215;
    
    function animateScroll() {
      let val = value;
      
      function animateRight() {
        scrollable.scrollLeft += 5;
        val -= 5;
        if (val > 0) {
          requestAnimationFrame(animateRight);
        }
        checkBound();
      }
      
      function animateLeft() {
        scrollable.scrollLeft -= 5;
        val -= 5;
        if (val > 0) {
          requestAnimationFrame(animateLeft);
        }
        checkBound();
      }
      
      if (dir === 'left') {    
        animateRight();
      } else if (dir === 'right') {
        animateLeft();
      }
    }
    
    animateScroll();
    
  }
  
  if (scroll_diff > 0) {
    
    scroll_right_arrow.addEventListener('click', () => {
      scrollAnimation(scrollable_element, 'left'); 
    })
    
    scroll_left_arrow.addEventListener('click', () => {
      scrollAnimation(scrollable_element, 'right');
    })

    scroll_right_arrow.classList.add('favorite-devices__right-ctrl--active');
  }
  
  // popup functionality
  
  function removeModalBackground() {
    const modal = document.querySelector('.modal-background');
    modal.classList.remove('modal-background--out');
    modal.classList.add('modal-background--in');
    
    setTimeout(() => {
      document.body.removeChild(modal);
      document.querySelector('.blur-wrapper').style.filter = 'blur(0)';
      document.body.style.overflowY = 'auto';
    }, 200)
  }
  
  
  function setModalBackground() {
    const modalBackground = document.createElement('div');
    modalBackground.classList.add('modal-background');
    document.body.appendChild(modalBackground);
    modalBackground.classList.add('modal-background--out');
    document.querySelector('.blur-wrapper').style.filter = 'blur(3px)';
    document.body.style.overflowY = 'hidden';
  }
  
  function device_click(evt) {
    const device = evt.currentTarget;
    const device_name = device.dataset.device_name;
    setModalBackground();
    
    switch (device_name) {
      case ('Xiaomi Yeelight LED Smart Bulb'): {
        // получить ссылку на нужный попап
        const popupElement = document.querySelector('.popup-light');
        // поставить начальные координаты
        [popupElement.style.top, popupElement.style.left] = getInitialPopupCoords(device);
        // добавить классы, запускающие функциональность
        openPopup(popupElement, 'popup-light');
      }; break;

      case ('Elgato Eve Degree Connected'): {
        // получить ссылку на нужный попап
        const popupElement = document.querySelector('.popup-temp');
        // поставить начальные координаты
        [popupElement.style.top, popupElement.style.left] = getInitialPopupCoords(device);
        // добавить классы, запускающие функциональность
        openPopup(popupElement, 'popup-temp');
      }; break;

      case ('Xiaomi Warm Floor'): {
        // получить ссылку на нужный попап
        const popupElement = document.querySelector('.popup-floor');
        // поставить начальные координаты
        [popupElement.style.top, popupElement.style.left] = getInitialPopupCoords(device);
        // добавить классы, запускающие функциональность
        openPopup(popupElement, 'popup-floor');
      }; break;
    }
  }
  
  function getInitialPopupCoords(deviceEl) {
    const rect = deviceEl.getBoundingClientRect();
    return [`${rect.top}px`, `${rect.left}px`]
  }
  
  function openPopup(popup, popupClass) {
    popup.classList.add(`${popupClass}--visible`);
    popup.classList.add(`${popupClass}--out`);
    
    function close_event(evt) {
      popup.classList.remove(`${popupClass}--out`);
      popup.classList.add(`${popupClass}--in`);
      
      setTimeout(() => {
        popup.classList.remove(`${popupClass}--in`);
        popup.classList.remove(`${popupClass}--visible`);
        popup.removeAttribute('style');
        
        evt.target.removeEventListener('click', close_event);
        removeModalBackground(); 
      }, 250)
    }
    
    // установить событие закрытия
    document.querySelector(`.${popupClass}__close`).addEventListener('click', close_event);
  }
  
  [...document.querySelectorAll('.device')].forEach((el) => {
    if (el.dataset.device_name){
      el.addEventListener('click', device_click)
    }
  });
}

// wheel functionality

const notch_container = document.querySelector('.popup-floor__setter');
const wheel = document.querySelector('.popup-floor__disk');
const temp_container = document.querySelector('.popup-floor__disk-temp');
const pointer = document.querySelector('.popup-floor__pointer')
let isMouseReady = false;

function createNothces() {
  const interval = 2.5;
  const amount = 120;
  const notches = [];

  let degree = 30;

  for (let i = 0; i < amount; i++) {
    let notch = document.createElement('div');
    notch.classList.add('popup-floor__notch');
    notch.style.transform = `rotate(${degree}deg)`;
    notches.push(notch);
    degree += interval;
  }

  return notches;
}



function appendNotches(parent) {
  notches.forEach((el) => {
    parent.appendChild(el);
  });
}

function detectMovement() {
  let prev_coordsX = 0;

  return (evt) => {
    console.log(evt);
    if (evt.offsetX != prev_coordsX && isMouseReady) {
      let newTemp = 0;

      if (evt.offsetX - prev_coordsX > 0) {
        newTemp = parseInt(temp_container.innerHTML) + 1;
        if (newTemp >= 0 && newTemp <= 30) {
          temp_container.innerHTML = String('+' + newTemp);
          updateNotches(newTemp);
        }
      } else {
        newTemp = parseInt(temp_container.innerHTML) - 1;
        if (newTemp >= 0 && newTemp <= 30) {
          temp_container.innerHTML = String('+' + newTemp);
          updateNotches(newTemp);
        }
      }

      prev_coordsX = evt.offsetX;
    }
  }
}

function detectMovementTouch() {
  let prev_coordsX = 0;

  return (evt) => {
    if (evt.touches[0].clientX != prev_coordsX && isMouseReady) {
      let newTemp = 0;

      if (evt.touches[0].clientX - prev_coordsX > 0) {
        newTemp = parseInt(temp_container.innerHTML) + 1;
        if (newTemp >= 0 && newTemp <= 30) {
          temp_container.innerHTML = String('+' + newTemp);
          updateNotches(newTemp);
        }
      } else {
        newTemp = parseInt(temp_container.innerHTML) - 1;
        if (newTemp >= 0 && newTemp <= 30) {
          temp_container.innerHTML = String('+' + newTemp);
          updateNotches(newTemp);
        }
      }

      prev_coordsX = evt.touches[0].clientX;
    }
  }
}

function updateNotches(value) {
  const orangeCount = value * notches_per_degree;
  notches.forEach((el, i) => {
    if (i < orangeCount) {
      el.style.backgroundColor = 'rgba(245, 166, 35, .7)';
    } else {
      el.style.backgroundColor = 'rgba(51, 51, 51, .7)';
    }
  });
  pointer.style.transform = `rotate(${orangeCount * 2.5 + 31}deg)`;
}

wheel.addEventListener('mousemove', detectMovement());
wheel.addEventListener('touchmove', detectMovementTouch());

wheel.addEventListener('mousedown', () => {
  isMouseReady = true;
});

wheel.addEventListener('touchstart', () => {
  isMouseReady = true;
});

wheel.addEventListener('mouseup', () => {
  isMouseReady = false;
});

wheel.addEventListener('mouseleave', () => {
  isMouseReady = false;
});

const notches = createNothces();
const notches_per_degree = 4;

appendNotches(notch_container);
updateNotches(parseInt(temp_container.innerHTML));