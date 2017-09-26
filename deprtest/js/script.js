var mainCont = document.querySelector('.items');
var counter = document.getElementById('current-item');
var buttonPrev = document.querySelector('.btn.prev');
var buttonNext = document.querySelector('.btn.next');

/**
* @type {Array.<number>}
*/
var data = new Array(44);

mainCont.addEventListener('click', function(evt) {
  var currentData = evt.target.localName === 'li' ? evt.target.id.split('-').map((n) => Number(n)) : null;

  if (currentData) {
    if(data[currentData[0]] != undefined) {
      let prevActive = document.getElementById(currentData[0] + '-' + data[currentData[0]]);
      prevActive.classList.remove('active');
    }
    evt.target.classList.add('active');
    data[currentData[0]] = currentData[1];
  }
});

buttonPrev.onclick = function() {
  if (counter.innerHTML == "0") return;
  var currentElement = document.querySelector('.item-' + Number(counter.innerHTML));
  currentElement.classList.add('hidden');
  var n = Number(counter.innerHTML);
  counter.innerHTML = --n;
  document.querySelector('.item-' + Number(counter.innerHTML)).classList.remove('hidden');
}

buttonNext.onclick = function() {
  if (counter.innerHTML == "44") return;
  if (data[Number(counter.innerHTML)] === undefined) {
    alert('Выберите ответ!');
    return;
  };
  var currentElement = document.querySelector('.item-' + Number(counter.innerHTML));
  currentElement.classList.add('hidden');
  var n = Number(counter.innerHTML);
  counter.innerHTML = ++n;
  if (n === 44) {
    let lastItem = document.querySelector('.item-44');
    let result = data.reduce((a, b) => a + b);

    if (result >= 0 && result <= 9) {
      lastItem.innerHTML = 'Депрессия отсутствует, либо незначительна.';
    } else if (result >= 10 && result <= 24) {
      lastItem.innerHTML = 'Депрессия минимальна.';
    } else if (result >= 25 && result <= 44) {
      lastItem.innerHTML = 'Легкая депрессия.';
    } else if (result >= 45 && result <= 67) {
      lastItem.innerHTML = 'Умеренная депрессия.';
    } else if (result >= 68 && result <= 87) {
      lastItem.innerHTML = 'Выраженная депрессия';
    } else if (result >= 88) {
      lastItem.innerHTML = 'Глубокая депрессия';
    }

    lastItem.classList.remove('hidden');
  } else {
    document.querySelector('.item-' + Number(counter.innerHTML)).classList.remove('hidden');
  }
}
