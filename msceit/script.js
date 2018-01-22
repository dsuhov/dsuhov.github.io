"use strict";

(function () {
  var sec_frame = [{ section: "sectionA", tasks: 4, params: 5 }, { section: "sectionB", tasks: 5, params: 3 }, { section: "sectionC", tasks: 20, params: 1 }, { section: "sectionD", tasks: 5, params: 4 }, { section: "sectionE", tasks: 6, params: 5 }, { section: "sectionF", tasks: 5, params: 3 }, { section: "sectionG", tasks: 12, params: 1 }, { section: "sectionH", tasks: 3, params: 3 }];

  var btn_main = document.querySelector('.btn-main');
  var data_prom = fetch('/data.json').then(function (data) {
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
    document.body.removeChild(document.querySelector("." + all_tasks[curr_sec - 1].section));
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
          document.body.removeChild(document.querySelector("." + all_tasks[curr_sec].section));
          renderAnswers();
        }
    } else if (btn_parsed[0] === 'ans') {
      // set value to "params" property of current task object
      if (all_tasks[curr_sec].params[parseInt(btn_parsed[1]) - 1] !== '0') {
        var last_value = all_tasks[curr_sec].params[parseInt(btn_parsed[1]) - 1];
        document.querySelector("#btn-ans-" + btn_parsed[1] + "-" + last_value).classList.remove('active');
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
      new_el.classList.add("" + all_tasks[curr_sec].section);
      // here I have ugly construction coz I noob
      new_el.innerHTML = document.querySelector("#" + all_tasks[curr_sec].section).innerHTML.replace(/\{\{.+?\}\}/g, function (match) {
        return data[all_tasks[curr_sec].section][parseInt(all_tasks[curr_sec].task) - 1][match.replace(/[\{\}]/g, '')];
      });
      document.body.insertBefore(new_el, document.body.childNodes[0]);
    });
  }

  // returns all HTML of last page
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
      inHTML += '<h3 class="centering">Спасибо за то, что вы ответили на вопросы!</h3>';
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
          var html_string = "<table class=\"final-block centering\">\n          <caption>\u0421\u0435\u043A\u0446\u0438\u044F " + section + "</caption>";

          html_string += '<tr>';
          html_string += '<th></th>';
          for (var i = 0; i < answers.length; i++) {
            html_string += "<th>\u041B\u0438\u0446\u043E " + String(i + 1) + "</th>";
          }html_string += '</tr>';

          var _loop = function _loop(_i2) {
            html_string += '<tr>';
            html_string += "<td>" + String(_i2 + 1) + "</td>";
            answers.forEach(function (el) {
              html_string += "<td>" + el[_i2] + "</td>";
            });
            html_string += '</tr>';
          };

          for (var _i2 = 0; _i2 < answers[0].length; _i2++) {
            _loop(_i2);
          }

          html_string += '</table>';

          return html_string;
        };break;

      case 'B':
        {
          var items = ['a.', 'b.', 'c.'];
          var _html_string = "<table class=\"final-block centering\">\n          <caption>\u0421\u0435\u043A\u0446\u0438\u044F " + section + "</caption>";

          _html_string += '<tr>';
          _html_string += '<th></th>';
          for (var _i3 = 0; _i3 < answers.length; _i3++) {
            _html_string += "<th>\u0412\u043E\u043F\u0440\u043E\u0441 " + String(_i3 + 1) + "</th>";
          }_html_string += '</tr>';

          var _loop2 = function _loop2(_i4) {
            _html_string += '<tr>';
            _html_string += "<td>" + items[_i4] + "</td>";
            answers.forEach(function (el) {
              _html_string += "<td>" + el[_i4] + "</td>";
            });
            _html_string += '</tr>';
          };

          for (var _i4 = 0; _i4 < answers[0].length; _i4++) {
            _loop2(_i4);
          }
          _html_string += '</table>';
          return _html_string;
        };break;

      case 'C':
        {
          var _html_string2 = "<table class=\"final-block centering\"><caption>\u0421\u0435\u043A\u0446\u0438\u044F " + section + "</caption>";
          _html_string2 += '<tr><th>№</th><th>Ответ</th><th>№</th><th>Ответ</th>';
          for (var _i5 = 0; _i5 < 10; _i5++) {
            _html_string2 += "<tr><td>" + String(_i5 + 1) + "</td><td>" + answers[_i5][0] + "</td><td>" + String(_i5 + 11) + "</td><td>" + answers[_i5 + 10][0] + "</td></tr>";
          }
          _html_string2 += '</table>';
          return _html_string2;
        };
        break;

      case 'D':
        {
          var _html_string3 = "<table class=\"final-block centering\">\n          <caption>\u0421\u0435\u043A\u0446\u0438\u044F " + section + "</caption>";

          _html_string3 += '<tr>';
          _html_string3 += '<th></th>';
          for (var _i6 = 0; _i6 < answers.length; _i6++) {
            _html_string3 += "<th>\u0421\u0438\u0442\u0443\u0430\u0446\u044F " + String(_i6 + 1) + "</th>";
          }_html_string3 += '</tr>';

          var _loop3 = function _loop3(_i7) {
            _html_string3 += '<tr>';
            _html_string3 += '<td></td>';
            answers.forEach(function (el) {
              _html_string3 += "<td>" + el[_i7] + "</td>";
            });
            _html_string3 += '</tr>';
          };

          for (var _i7 = 0; _i7 < answers[0].length; _i7++) {
            _loop3(_i7);
          }
          _html_string3 += '</table>';
          return _html_string3;
        };break;

      case 'E':
        {
          var _html_string4 = "<table class=\"final-block centering\">\n          <caption>\u041A\u0430\u0440\u0442\u0438\u043D\u0430 " + section + "</caption>";

          _html_string4 += '<tr>';
          _html_string4 += '<th></th>';
          for (var _i8 = 0; _i8 < answers.length; _i8++) {
            _html_string4 += "<th>\u041B\u0438\u0446\u043E " + String(_i8 + 1) + "</th>";
          }_html_string4 += '</tr>';

          var _loop4 = function _loop4(_i9) {
            _html_string4 += '<tr>';
            _html_string4 += "<td>" + String(_i9 + 1) + "</td>";
            answers.forEach(function (el) {
              _html_string4 += "<td>" + el[_i9] + "</td>";
            });
            _html_string4 += '</tr>';
          };

          for (var _i9 = 0; _i9 < answers[0].length; _i9++) {
            _loop4(_i9);
          }

          _html_string4 += '</table>';

          return _html_string4;
        };break;

      case 'F':
        {
          var _items = ['a.', 'b.', 'c.'];
          var _html_string5 = "<table class=\"final-block centering\">\n          <caption>\u0421\u0435\u043A\u0446\u0438\u044F " + section + "</caption>";

          _html_string5 += '<tr>';
          _html_string5 += '<th></th>';
          for (var _i10 = 0; _i10 < answers.length; _i10++) {
            _html_string5 += "<th>\u0412\u043E\u043F\u0440\u043E\u0441 " + String(_i10 + 1) + "</th>";
          }_html_string5 += '</tr>';

          var _loop5 = function _loop5(_i11) {
            _html_string5 += '<tr>';
            _html_string5 += "<td>" + _items[_i11] + "</td>";
            answers.forEach(function (el) {
              _html_string5 += "<td>" + el[_i11] + "</td>";
            });
            _html_string5 += '</tr>';
          };

          for (var _i11 = 0; _i11 < answers[0].length; _i11++) {
            _loop5(_i11);
          }
          _html_string5 += '</table>';
          return _html_string5;
        };break;

      case 'G':
        {
          var _html_string6 = "<table class=\"final-block centering\"><caption>\u0421\u0435\u043A\u0446\u0438\u044F " + section + "</caption>";
          _html_string6 += '<tr><th>№</th><th>Ответ</th><th>№</th><th>Ответ</th>';
          for (var _i12 = 0; _i12 < 6; _i12++) {
            _html_string6 += "<tr><td>" + String(_i12 + 1) + "</td><td>" + answers[_i12][0] + "</td><td>" + String(_i12 + 7) + "</td><td>" + answers[_i12 + 6][0] + "</td></tr>";
          }
          _html_string6 += '</table>';
          return _html_string6;
        };
        break;

      case 'H':
        {
          var _html_string7 = "<table class=\"final-block centering\">\n          <caption>\u0421\u0435\u043A\u0446\u0438\u044F " + section + "</caption>";

          _html_string7 += '<tr>';
          _html_string7 += '<th>Ответ</th>';
          for (var _i13 = 0; _i13 < answers.length; _i13++) {
            _html_string7 += "<th>\u0421\u0438\u0442\u0443\u0430\u0446\u044F " + String(_i13 + 1) + "</th>";
          }_html_string7 += '</tr>';

          var _loop6 = function _loop6(_i14) {
            _html_string7 += '<tr>';
            _html_string7 += "<td>" + String(_i14 + 1) + "</td>";
            answers.forEach(function (el) {
              _html_string7 += "<td>" + el[_i14] + "</td>";
            });
            _html_string7 += '</tr>';
          };

          for (var _i14 = 0; _i14 < answers[0].length; _i14++) {
            _loop6(_i14);
          }
          _html_string7 += '</table>';
          return _html_string7;
        };break;
    }
  }
})();