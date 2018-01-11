'use strict';

(function () {
  var sec_frame = [{ section: "sectionA", tasks: 4, params: 5 }];

  var btn_main = document.querySelector('.btn-main');
  var data_prom = fetch('https://dsuhov.github.io/msceit/data.json').then(function (data) {
    return data.json();
  });
  var curr_sec = 0;

  /********************************************************************/

  function disappr() {
    var _ref = [document.querySelector('header'), document.querySelector('main')],
        hdr = _ref[0],
        main = _ref[1];


    function cleanElements() {
      document.body.removeChild(hdr);
      document.body.removeChild(main);
      hdr.removeEventListener('transitionend', cleanElements);
      document.addEventListener('click', globListener);
      turn();
    };

    hdr.addEventListener('transitionend', cleanElements);

    main.removeChild(btn_main);
    hdr.classList.add('header-hide');
    btn_main.removeEventListener('click', disappr);
  }

  btn_main.addEventListener('click', disappr);
  /********************************************************************/

  // first object here is because I noob (see "turn" func)
  var all_tasks = [{ section: "sectionA" }];

  sec_frame.forEach(function (el) {
    for (var i = 0; i < el.tasks; i++) {
      var new_obj = {};

      new_obj.section = el.section;
      new_obj.task = String(i + 1);
      new_obj.params = new Array(el.params);
      for (var _i = 0; _i < new_obj.params.length; _i++) {
        new_obj.params[_i] = '0';
      }new_obj.check = check;
      all_tasks.push(new_obj);
    }
  });

  // helper function 1
  function check() {
    return this.params.every(function (value) {
      return value !== '0';
    });
  }
  // helper function 2
  function removeOldSection() {
    document.body.removeChild(document.querySelector('.' + all_tasks[curr_sec - 1].section));
  }

  function globListener(evt) {
    // skip if click event is not from some button
    if (!evt.target.id.startsWith('btn')) return;
    var btn_parsed = evt.target.id.split('-').slice(1);

    // if it is a "next" button
    if (btn_parsed[0] === 'next') {
      // and current section is not last, take a step
      if (curr_sec !== all_tasks.length - 1) turn();
      // TODO: final preparetion, render results into tables and append to body
      else {
          document.body.removeChild(document.querySelector('.' + all_tasks[curr_sec].section));
          renderAnswers();
        }
    } else if (btn_parsed[0] === 'ans') {
      // set value to "params" property of current task object
      if (all_tasks[curr_sec].params[parseInt(btn_parsed[1]) - 1] !== '0') {
        var last_value = all_tasks[curr_sec].params[parseInt(btn_parsed[1]) - 1];
        document.querySelector('#btn-ans-' + btn_parsed[1] + '-' + last_value).classList.remove('active');
        all_tasks[curr_sec].params[parseInt(btn_parsed[1]) - 1] = btn_parsed[2];
        evt.target.classList.add('active');
      } else {
        evt.target.classList.add('active');
        all_tasks[curr_sec].params[parseInt(btn_parsed[1]) - 1] = btn_parsed[2];
        if (all_tasks[curr_sec].check()) document.getElementById('btn-next').removeAttribute('disabled');
      }
    }
  }

  function turn() {
    if (curr_sec++ !== 0) removeOldSection();

    data_prom.then(function (data) {
      var new_el = document.createElement('section');
      new_el.classList.add('' + all_tasks[curr_sec].section);
      // here I have ugly construction coz I noob
      new_el.innerHTML = document.querySelector('#' + all_tasks[curr_sec].section).innerHTML.replace(/\{\{.+?\}\}/g, function (match) {
        return data[all_tasks[curr_sec].section][parseInt(all_tasks[curr_sec].task) - 1][match.replace(/[\{\}]/g, '')];
      });
      document.body.insertBefore(new_el, document.body.childNodes[0]);
    });
  }

  // returns HTMLElement div.final with all HTML of last page
  function renderAnswers() {
    all_tasks.splice(0, 1);

    var inHTML = '';

    sec_frame.forEach(function (obj) {

      var arr = all_tasks.filter(function (el) {
        return el.section === obj.section;
      }).reduce(function (accumulator, currentValue) {
        accumulator.push(currentValue.params);
        return accumulator;
      }, []);

      // TODO: test presence of new line characters between sections code
      inHTML += renderSection(obj.section.slice(-1), arr);
    });
    document.body.innerHTML = inHTML;
  }

  // "section": String, name of a section, "A", "B" etc.
  // "answers": Array of "params" field for all tasks 
  // returns String with HTML of table for given section
  function renderSection(section, answers) {
    switch (section) {
      case 'A':
        {
          var html_string = '<table class="final-block centering">\n          <caption>\u0421\u0435\u043A\u0446\u0438\u044F ' + section + '</caption>';

          html_string += '<tr>';
          html_string += '<th></th>';
          for (var i = 0; i < answers.length; i++) {
            html_string += '<th>\u041B\u0438\u0446\u043E ' + String(i + 1) + '</th>';
          }html_string += '</tr>';

          var _loop = function _loop(_i2) {
            html_string += '<tr>';
            html_string += '<td>' + String(_i2 + 1) + '</td>';
            answers.forEach(function (el) {
              html_string += '<td>' + el[_i2] + '</td>';
            });
            html_string += '</tr>';
          };

          for (var _i2 = 0; _i2 < answers[0].length; _i2++) {
            _loop(_i2);
          }

          html_string += '</table>';

          return html_string;
        };break;
    }
  }
})();