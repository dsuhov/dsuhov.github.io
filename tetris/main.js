var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  'use strict';

  var id = 0;

  var random = function random(max) {
    return Math.floor(Math.random() * max);
  };

  var colors = ['#5aa0ce', '#38c650', '#73b8d6', '#e3eb48', '#9a49eb', '#b2eb49', '#f5b934', '#e066a8'];

  var BrickPosition = function () {
    function BrickPosition(_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          x = _ref2[0],
          y = _ref2[1];

      _classCallCheck(this, BrickPosition);

      this.x = x;
      this.y = y;
    }

    _createClass(BrickPosition, [{
      key: 'getBrickPosition',
      value: function getBrickPosition() {
        return [this.x, this.y];
      }
    }, {
      key: 'setBrickPosition',
      value: function setBrickPosition(_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            x = _ref4[0],
            y = _ref4[1];

        this.x = x;
        this.y = y;
      }
    }, {
      key: 'isEqual',
      value: function isEqual(obj) {
        return this.getBrickPosition().every(function (el, i) {
          return el === obj.getBrickPosition()[i];
        });
      }
    }]);

    return BrickPosition;
  }();

  var blocks = [{ // ####
    color: function color() {
      return colors[random(colors.length)];
    },
    position: [new BrickPosition([3, 0]), new BrickPosition([4, 0]), new BrickPosition([5, 0]), new BrickPosition([6, 0])],
    trasformations: [
    //rotate function start
    function (position) {
      return position.map(function (el, i) {
        switch (i) {
          case 0:
            {
              var _el$getBrickPosition = el.getBrickPosition(),
                  _el$getBrickPosition2 = _slicedToArray(_el$getBrickPosition, 2),
                  x = _el$getBrickPosition2[0],
                  y = _el$getBrickPosition2[1];

              return new BrickPosition([x + 1, y - 1]);
            }
          case 1:
            return el;
          case 2:
            {
              var _el$getBrickPosition3 = el.getBrickPosition(),
                  _el$getBrickPosition4 = _slicedToArray(_el$getBrickPosition3, 2),
                  _x = _el$getBrickPosition4[0],
                  _y = _el$getBrickPosition4[1];

              return new BrickPosition([_x - 1, _y + 1]);
            }
          case 3:
            {
              var _el$getBrickPosition5 = el.getBrickPosition(),
                  _el$getBrickPosition6 = _slicedToArray(_el$getBrickPosition5, 2),
                  _x2 = _el$getBrickPosition6[0],
                  _y2 = _el$getBrickPosition6[1];

              return new BrickPosition([_x2 - 2, _y2 + 2]);
            }
        }
      });
    },
    //rotate function end
    //rotate function start
    function (position) {
      return position.map(function (el, i) {
        switch (i) {
          case 0:
            {
              var _el$getBrickPosition7 = el.getBrickPosition(),
                  _el$getBrickPosition8 = _slicedToArray(_el$getBrickPosition7, 2),
                  x = _el$getBrickPosition8[0],
                  y = _el$getBrickPosition8[1];

              return new BrickPosition([x - 1, y + 1]);
            }
          case 1:
            return el;
          case 2:
            {
              var _el$getBrickPosition9 = el.getBrickPosition(),
                  _el$getBrickPosition10 = _slicedToArray(_el$getBrickPosition9, 2),
                  _x3 = _el$getBrickPosition10[0],
                  _y3 = _el$getBrickPosition10[1];

              return new BrickPosition([_x3 + 1, _y3 - 1]);
            }
          case 3:
            {
              var _el$getBrickPosition11 = el.getBrickPosition(),
                  _el$getBrickPosition12 = _slicedToArray(_el$getBrickPosition11, 2),
                  _x4 = _el$getBrickPosition12[0],
                  _y4 = _el$getBrickPosition12[1];

              return new BrickPosition([_x4 + 2, _y4 - 2]);
            }
        }
      });
    }
    //rotate function end
    ]
  }, {
    // ##
    // ##
    color: function color() {
      return colors[random(colors.length)];
    },
    position: [new BrickPosition([3, 0]), new BrickPosition([4, 0]), new BrickPosition([3, 1]), new BrickPosition([4, 1])],
    trasformations: [function (position) {
      return position;
    }]
  }, { //  ##
    // ##
    color: function color() {
      return colors[random(colors.length)];
    },
    position: [new BrickPosition([3, 1]), new BrickPosition([4, 0]), new BrickPosition([4, 1]), new BrickPosition([5, 0])],
    trasformations: [function (position) {
      return position.map(function (el, i) {
        switch (i) {
          case 0:
            {
              var _el$getBrickPosition13 = el.getBrickPosition(),
                  _el$getBrickPosition14 = _slicedToArray(_el$getBrickPosition13, 2),
                  x = _el$getBrickPosition14[0],
                  y = _el$getBrickPosition14[1];

              return new BrickPosition([x, y - 1]);
            }
          case 1:
            {
              var _el$getBrickPosition15 = el.getBrickPosition(),
                  _el$getBrickPosition16 = _slicedToArray(_el$getBrickPosition15, 2),
                  _x5 = _el$getBrickPosition16[0],
                  _y5 = _el$getBrickPosition16[1];

              return new BrickPosition([_x5, _y5 + 1]);
            }
          case 2:
            {
              var _el$getBrickPosition17 = el.getBrickPosition(),
                  _el$getBrickPosition18 = _slicedToArray(_el$getBrickPosition17, 2),
                  _x6 = _el$getBrickPosition18[0],
                  _y6 = _el$getBrickPosition18[1];

              return new BrickPosition([_x6 - 1, _y6]);
            }
          case 3:
            {
              var _el$getBrickPosition19 = el.getBrickPosition(),
                  _el$getBrickPosition20 = _slicedToArray(_el$getBrickPosition19, 2),
                  _x7 = _el$getBrickPosition20[0],
                  _y7 = _el$getBrickPosition20[1];

              return new BrickPosition([_x7 - 1, _y7 + 2]);
            }
        }
      });
    }, function (position) {
      return position.map(function (el, i) {
        switch (i) {
          case 0:
            {
              var _el$getBrickPosition21 = el.getBrickPosition(),
                  _el$getBrickPosition22 = _slicedToArray(_el$getBrickPosition21, 2),
                  x = _el$getBrickPosition22[0],
                  y = _el$getBrickPosition22[1];

              return new BrickPosition([x, y + 1]);
            }
          case 1:
            {
              var _el$getBrickPosition23 = el.getBrickPosition(),
                  _el$getBrickPosition24 = _slicedToArray(_el$getBrickPosition23, 2),
                  _x8 = _el$getBrickPosition24[0],
                  _y8 = _el$getBrickPosition24[1];

              return new BrickPosition([_x8, _y8 - 1]);
            }
          case 2:
            {
              var _el$getBrickPosition25 = el.getBrickPosition(),
                  _el$getBrickPosition26 = _slicedToArray(_el$getBrickPosition25, 2),
                  _x9 = _el$getBrickPosition26[0],
                  _y9 = _el$getBrickPosition26[1];

              return new BrickPosition([_x9 + 1, _y9]);
            }
          case 3:
            {
              var _el$getBrickPosition27 = el.getBrickPosition(),
                  _el$getBrickPosition28 = _slicedToArray(_el$getBrickPosition27, 2),
                  _x10 = _el$getBrickPosition28[0],
                  _y10 = _el$getBrickPosition28[1];

              return new BrickPosition([_x10 + 1, _y10 - 2]);
            }
        }
      });
    }]
  }, { // ##
    //  ##
    color: function color() {
      return colors[random(colors.length)];
    },
    position: [new BrickPosition([3, 0]), new BrickPosition([4, 0]), new BrickPosition([4, 1]), new BrickPosition([5, 1])],
    trasformations: [function (position) {
      return position.map(function (el, i) {
        switch (i) {
          case 0:
            {
              var _el$getBrickPosition29 = el.getBrickPosition(),
                  _el$getBrickPosition30 = _slicedToArray(_el$getBrickPosition29, 2),
                  x = _el$getBrickPosition30[0],
                  y = _el$getBrickPosition30[1];

              return new BrickPosition([x + 1, y]);
            }
          case 1:
            {
              var _el$getBrickPosition31 = el.getBrickPosition(),
                  _el$getBrickPosition32 = _slicedToArray(_el$getBrickPosition31, 2),
                  _x11 = _el$getBrickPosition32[0],
                  _y11 = _el$getBrickPosition32[1];

              return new BrickPosition([_x11, _y11 + 1]);
            }
          case 2:
            {
              var _el$getBrickPosition33 = el.getBrickPosition(),
                  _el$getBrickPosition34 = _slicedToArray(_el$getBrickPosition33, 2),
                  _x12 = _el$getBrickPosition34[0],
                  _y12 = _el$getBrickPosition34[1];

              return new BrickPosition([_x12 - 1, _y12]);
            }
          case 3:
            {
              var _el$getBrickPosition35 = el.getBrickPosition(),
                  _el$getBrickPosition36 = _slicedToArray(_el$getBrickPosition35, 2),
                  _x13 = _el$getBrickPosition36[0],
                  _y13 = _el$getBrickPosition36[1];

              return new BrickPosition([_x13 - 2, _y13 + 1]);
            }
        }
      });
    },
    //rotate function start
    function (position) {
      return position.map(function (el, i) {
        switch (i) {
          case 0:
            {
              var _el$getBrickPosition37 = el.getBrickPosition(),
                  _el$getBrickPosition38 = _slicedToArray(_el$getBrickPosition37, 2),
                  x = _el$getBrickPosition38[0],
                  y = _el$getBrickPosition38[1];

              return new BrickPosition([x - 1, y]);
            }
          case 1:
            {
              var _el$getBrickPosition39 = el.getBrickPosition(),
                  _el$getBrickPosition40 = _slicedToArray(_el$getBrickPosition39, 2),
                  _x14 = _el$getBrickPosition40[0],
                  _y14 = _el$getBrickPosition40[1];

              return new BrickPosition([_x14, _y14 - 1]);
            }
          case 2:
            {
              var _el$getBrickPosition41 = el.getBrickPosition(),
                  _el$getBrickPosition42 = _slicedToArray(_el$getBrickPosition41, 2),
                  _x15 = _el$getBrickPosition42[0],
                  _y15 = _el$getBrickPosition42[1];

              return new BrickPosition([_x15 + 1, _y15]);
            }
          case 3:
            {
              var _el$getBrickPosition43 = el.getBrickPosition(),
                  _el$getBrickPosition44 = _slicedToArray(_el$getBrickPosition43, 2),
                  _x16 = _el$getBrickPosition44[0],
                  _y16 = _el$getBrickPosition44[1];

              return new BrickPosition([_x16 + 2, _y16 - 1]);
            }
        }
      });
    }
    //rotate function end
    ]
  }, {
    // ####
    //    #
    color: function color() {
      return colors[random(colors.length)];
    },
    position: [new BrickPosition([3, 0]), new BrickPosition([4, 0]), new BrickPosition([5, 0]), new BrickPosition([5, 1])],
    trasformations: [
    //rotate function start
    function (position) {
      // => [5,0], [5, 1], [5, 2], [4, 2]
      return position.map(function (el, i) {
        switch (i) {
          case 0:
            {
              var _el$getBrickPosition45 = el.getBrickPosition(),
                  _el$getBrickPosition46 = _slicedToArray(_el$getBrickPosition45, 2),
                  x = _el$getBrickPosition46[0],
                  y = _el$getBrickPosition46[1];

              return new BrickPosition([x + 2, y]);
            }
          case 1:
            {
              var _el$getBrickPosition47 = el.getBrickPosition(),
                  _el$getBrickPosition48 = _slicedToArray(_el$getBrickPosition47, 2),
                  _x17 = _el$getBrickPosition48[0],
                  _y17 = _el$getBrickPosition48[1];

              return new BrickPosition([_x17 + 1, _y17 + 1]);
            }
          case 2:
            {
              var _el$getBrickPosition49 = el.getBrickPosition(),
                  _el$getBrickPosition50 = _slicedToArray(_el$getBrickPosition49, 2),
                  _x18 = _el$getBrickPosition50[0],
                  _y18 = _el$getBrickPosition50[1];

              return new BrickPosition([_x18, _y18 + 2]);
            }
          case 3:
            {
              var _el$getBrickPosition51 = el.getBrickPosition(),
                  _el$getBrickPosition52 = _slicedToArray(_el$getBrickPosition51, 2),
                  _x19 = _el$getBrickPosition52[0],
                  _y19 = _el$getBrickPosition52[1];

              return new BrickPosition([_x19 - 1, _y19 + 1]);
            }
        }
      });
    },
    //rotate function end
    //rotate function start
    function (position) {
      // => [5, 1], [4, 1], [3, 1], [3, 0]
      return position.map(function (el, i) {
        switch (i) {
          case 0:
            {
              var _el$getBrickPosition53 = el.getBrickPosition(),
                  _el$getBrickPosition54 = _slicedToArray(_el$getBrickPosition53, 2),
                  x = _el$getBrickPosition54[0],
                  y = _el$getBrickPosition54[1];

              return new BrickPosition([x, y + 1]);
            }
          case 1:
            {
              var _el$getBrickPosition55 = el.getBrickPosition(),
                  _el$getBrickPosition56 = _slicedToArray(_el$getBrickPosition55, 2),
                  _x20 = _el$getBrickPosition56[0],
                  _y20 = _el$getBrickPosition56[1];

              return new BrickPosition([_x20 - 1, _y20]);
            }
          case 2:
            {
              var _el$getBrickPosition57 = el.getBrickPosition(),
                  _el$getBrickPosition58 = _slicedToArray(_el$getBrickPosition57, 2),
                  _x21 = _el$getBrickPosition58[0],
                  _y21 = _el$getBrickPosition58[1];

              return new BrickPosition([_x21 - 2, _y21 - 1]);
            }
          case 3:
            {
              var _el$getBrickPosition59 = el.getBrickPosition(),
                  _el$getBrickPosition60 = _slicedToArray(_el$getBrickPosition59, 2),
                  _x22 = _el$getBrickPosition60[0],
                  _y22 = _el$getBrickPosition60[1];

              return new BrickPosition([_x22 - 1, _y22 - 2]);
            }
        }
      });
    },
    //rotate function end
    //rotate function start
    function (position) {
      return position.map(function (el, i) {
        switch (i) {
          case 0:
            {
              var _el$getBrickPosition61 = el.getBrickPosition(),
                  _el$getBrickPosition62 = _slicedToArray(_el$getBrickPosition61, 2),
                  x = _el$getBrickPosition62[0],
                  y = _el$getBrickPosition62[1];

              return new BrickPosition([x - 1, y + 1]);
            }
          case 1:
            {
              var _el$getBrickPosition63 = el.getBrickPosition(),
                  _el$getBrickPosition64 = _slicedToArray(_el$getBrickPosition63, 2),
                  _x23 = _el$getBrickPosition64[0],
                  _y23 = _el$getBrickPosition64[1];

              return new BrickPosition([_x23, _y23]);
            }
          case 2:
            {
              var _el$getBrickPosition65 = el.getBrickPosition(),
                  _el$getBrickPosition66 = _slicedToArray(_el$getBrickPosition65, 2),
                  _x24 = _el$getBrickPosition66[0],
                  _y24 = _el$getBrickPosition66[1];

              return new BrickPosition([_x24 + 1, _y24 - 1]);
            }
          case 3:
            {
              var _el$getBrickPosition67 = el.getBrickPosition(),
                  _el$getBrickPosition68 = _slicedToArray(_el$getBrickPosition67, 2),
                  _x25 = _el$getBrickPosition68[0],
                  _y25 = _el$getBrickPosition68[1];

              return new BrickPosition([_x25 + 2, _y25]);
            }
        }
      });
    }, function (position) {
      return position.map(function (el, i) {
        switch (i) {
          case 0:
            {
              var _el$getBrickPosition69 = el.getBrickPosition(),
                  _el$getBrickPosition70 = _slicedToArray(_el$getBrickPosition69, 2),
                  x = _el$getBrickPosition70[0],
                  y = _el$getBrickPosition70[1];

              return new BrickPosition([x - 1, y - 2]);
            }
          case 1:
            {
              var _el$getBrickPosition71 = el.getBrickPosition(),
                  _el$getBrickPosition72 = _slicedToArray(_el$getBrickPosition71, 2),
                  _x26 = _el$getBrickPosition72[0],
                  _y26 = _el$getBrickPosition72[1];

              return new BrickPosition([_x26, _y26 - 1]);
            }
          case 2:
            {
              var _el$getBrickPosition73 = el.getBrickPosition(),
                  _el$getBrickPosition74 = _slicedToArray(_el$getBrickPosition73, 2),
                  _x27 = _el$getBrickPosition74[0],
                  _y27 = _el$getBrickPosition74[1];

              return new BrickPosition([_x27 + 1, _y27]);
            }
          case 3:
            {
              var _el$getBrickPosition75 = el.getBrickPosition(),
                  _el$getBrickPosition76 = _slicedToArray(_el$getBrickPosition75, 2),
                  _x28 = _el$getBrickPosition76[0],
                  _y28 = _el$getBrickPosition76[1];

              return new BrickPosition([_x28, _y28 + 1]);
            }
        }
      });
    }]
  }, { // ####
    // #
    color: function color() {
      return colors[random(colors.length)];
    },
    position: [new BrickPosition([3, 1]), new BrickPosition([4, 1]), new BrickPosition([5, 1]), new BrickPosition([5, 0])],
    trasformations: [function (position) {
      return position.map(function (el, i) {
        switch (i) {
          case 0:
            {
              var _el$getBrickPosition77 = el.getBrickPosition(),
                  _el$getBrickPosition78 = _slicedToArray(_el$getBrickPosition77, 2),
                  x = _el$getBrickPosition78[0],
                  y = _el$getBrickPosition78[1];

              return new BrickPosition([x + 1, y - 1]);
            }
          case 1:
            {
              var _el$getBrickPosition79 = el.getBrickPosition(),
                  _el$getBrickPosition80 = _slicedToArray(_el$getBrickPosition79, 2),
                  _x29 = _el$getBrickPosition80[0],
                  _y29 = _el$getBrickPosition80[1];

              return new BrickPosition([_x29, _y29]);
            }
          case 2:
            {
              var _el$getBrickPosition81 = el.getBrickPosition(),
                  _el$getBrickPosition82 = _slicedToArray(_el$getBrickPosition81, 2),
                  _x30 = _el$getBrickPosition82[0],
                  _y30 = _el$getBrickPosition82[1];

              return new BrickPosition([_x30 - 1, _y30 + 1]);
            }
          case 3:
            {
              var _el$getBrickPosition83 = el.getBrickPosition(),
                  _el$getBrickPosition84 = _slicedToArray(_el$getBrickPosition83, 2),
                  _x31 = _el$getBrickPosition84[0],
                  _y31 = _el$getBrickPosition84[1];

              return new BrickPosition([_x31, _y31 + 2]);
            }
        }
      });
    }, function (position) {
      return position.map(function (el, i) {
        switch (i) {
          case 0:
            {
              var _el$getBrickPosition85 = el.getBrickPosition(),
                  _el$getBrickPosition86 = _slicedToArray(_el$getBrickPosition85, 2),
                  x = _el$getBrickPosition86[0],
                  y = _el$getBrickPosition86[1];

              return new BrickPosition([x + 1, y]);
            }
          case 1:
            {
              var _el$getBrickPosition87 = el.getBrickPosition(),
                  _el$getBrickPosition88 = _slicedToArray(_el$getBrickPosition87, 2),
                  _x32 = _el$getBrickPosition88[0],
                  _y32 = _el$getBrickPosition88[1];

              return new BrickPosition([_x32, _y32 - 1]);
            }
          case 2:
            {
              var _el$getBrickPosition89 = el.getBrickPosition(),
                  _el$getBrickPosition90 = _slicedToArray(_el$getBrickPosition89, 2),
                  _x33 = _el$getBrickPosition90[0],
                  _y33 = _el$getBrickPosition90[1];

              return new BrickPosition([_x33 - 1, _y33 - 2]);
            }
          case 3:
            {
              var _el$getBrickPosition91 = el.getBrickPosition(),
                  _el$getBrickPosition92 = _slicedToArray(_el$getBrickPosition91, 2),
                  _x34 = _el$getBrickPosition92[0],
                  _y34 = _el$getBrickPosition92[1];

              return new BrickPosition([_x34 - 2, _y34 - 1]);
            }
        }
      });
    }, function (position) {
      return position.map(function (el, i) {
        switch (i) {
          case 0:
            {
              var _el$getBrickPosition93 = el.getBrickPosition(),
                  _el$getBrickPosition94 = _slicedToArray(_el$getBrickPosition93, 2),
                  x = _el$getBrickPosition94[0],
                  y = _el$getBrickPosition94[1];

              return new BrickPosition([x - 1, y + 2]);
            }
          case 1:
            {
              var _el$getBrickPosition95 = el.getBrickPosition(),
                  _el$getBrickPosition96 = _slicedToArray(_el$getBrickPosition95, 2),
                  _x35 = _el$getBrickPosition96[0],
                  _y35 = _el$getBrickPosition96[1];

              return new BrickPosition([_x35, _y35 + 1]);
            }
          case 2:
            {
              var _el$getBrickPosition97 = el.getBrickPosition(),
                  _el$getBrickPosition98 = _slicedToArray(_el$getBrickPosition97, 2),
                  _x36 = _el$getBrickPosition98[0],
                  _y36 = _el$getBrickPosition98[1];

              return new BrickPosition([_x36 + 1, _y36]);
            }
          case 3:
            {
              var _el$getBrickPosition99 = el.getBrickPosition(),
                  _el$getBrickPosition100 = _slicedToArray(_el$getBrickPosition99, 2),
                  _x37 = _el$getBrickPosition100[0],
                  _y37 = _el$getBrickPosition100[1];

              return new BrickPosition([_x37, _y37 - 1]);
            }
        }
      });
    }, function (position) {
      return position.map(function (el, i) {
        switch (i) {
          case 0:
            {
              var _el$getBrickPosition101 = el.getBrickPosition(),
                  _el$getBrickPosition102 = _slicedToArray(_el$getBrickPosition101, 2),
                  x = _el$getBrickPosition102[0],
                  y = _el$getBrickPosition102[1];

              return new BrickPosition([x - 1, y - 1]);
            }
          case 1:
            {
              var _el$getBrickPosition103 = el.getBrickPosition(),
                  _el$getBrickPosition104 = _slicedToArray(_el$getBrickPosition103, 2),
                  _x38 = _el$getBrickPosition104[0],
                  _y38 = _el$getBrickPosition104[1];

              return new BrickPosition([_x38, _y38]);
            }
          case 2:
            {
              var _el$getBrickPosition105 = el.getBrickPosition(),
                  _el$getBrickPosition106 = _slicedToArray(_el$getBrickPosition105, 2),
                  _x39 = _el$getBrickPosition106[0],
                  _y39 = _el$getBrickPosition106[1];

              return new BrickPosition([_x39 + 1, _y39 + 1]);
            }
          case 3:
            {
              var _el$getBrickPosition107 = el.getBrickPosition(),
                  _el$getBrickPosition108 = _slicedToArray(_el$getBrickPosition107, 2),
                  _x40 = _el$getBrickPosition108[0],
                  _y40 = _el$getBrickPosition108[1];

              return new BrickPosition([_x40 + 2, _y40]);
            }
        }
      });
    }]
  }, {
    //  #
    // ###
    color: function color() {
      return colors[random(colors.length)];
    },
    position: [new BrickPosition([3, 1]), new BrickPosition([4, 1]), new BrickPosition([5, 1]), new BrickPosition([4, 0])],
    trasformations: [function (position) {
      return position.map(function (el, i) {
        switch (i) {
          case 0:
            {
              var _el$getBrickPosition109 = el.getBrickPosition(),
                  _el$getBrickPosition110 = _slicedToArray(_el$getBrickPosition109, 2),
                  x = _el$getBrickPosition110[0],
                  y = _el$getBrickPosition110[1];

              return new BrickPosition([x + 1, y - 1]);
            }
          case 1:
            {
              var _el$getBrickPosition111 = el.getBrickPosition(),
                  _el$getBrickPosition112 = _slicedToArray(_el$getBrickPosition111, 2),
                  _x41 = _el$getBrickPosition112[0],
                  _y41 = _el$getBrickPosition112[1];

              return new BrickPosition([_x41, _y41]);
            }
          case 2:
            {
              var _el$getBrickPosition113 = el.getBrickPosition(),
                  _el$getBrickPosition114 = _slicedToArray(_el$getBrickPosition113, 2),
                  _x42 = _el$getBrickPosition114[0],
                  _y42 = _el$getBrickPosition114[1];

              return new BrickPosition([_x42 - 1, _y42 + 1]);
            }
          case 3:
            {
              var _el$getBrickPosition115 = el.getBrickPosition(),
                  _el$getBrickPosition116 = _slicedToArray(_el$getBrickPosition115, 2),
                  _x43 = _el$getBrickPosition116[0],
                  _y43 = _el$getBrickPosition116[1];

              return new BrickPosition([_x43 + 1, _y43 + 1]);
            }
        }
      });
    }, function (position) {
      return position.map(function (el, i) {
        switch (i) {
          case 0:
            {
              var _el$getBrickPosition117 = el.getBrickPosition(),
                  _el$getBrickPosition118 = _slicedToArray(_el$getBrickPosition117, 2),
                  x = _el$getBrickPosition118[0],
                  y = _el$getBrickPosition118[1];

              return new BrickPosition([x + 1, y]);
            }
          case 1:
            {
              var _el$getBrickPosition119 = el.getBrickPosition(),
                  _el$getBrickPosition120 = _slicedToArray(_el$getBrickPosition119, 2),
                  _x44 = _el$getBrickPosition120[0],
                  _y44 = _el$getBrickPosition120[1];

              return new BrickPosition([_x44, _y44 - 1]);
            }
          case 2:
            {
              var _el$getBrickPosition121 = el.getBrickPosition(),
                  _el$getBrickPosition122 = _slicedToArray(_el$getBrickPosition121, 2),
                  _x45 = _el$getBrickPosition122[0],
                  _y45 = _el$getBrickPosition122[1];

              return new BrickPosition([_x45 - 1, _y45 - 2]);
            }
          case 3:
            {
              var _el$getBrickPosition123 = el.getBrickPosition(),
                  _el$getBrickPosition124 = _slicedToArray(_el$getBrickPosition123, 2),
                  _x46 = _el$getBrickPosition124[0],
                  _y46 = _el$getBrickPosition124[1];

              return new BrickPosition([_x46 - 1, _y46]);
            }
        }
      });
    }, function (position) {
      return position.map(function (el, i) {
        switch (i) {
          case 0:
            {
              var _el$getBrickPosition125 = el.getBrickPosition(),
                  _el$getBrickPosition126 = _slicedToArray(_el$getBrickPosition125, 2),
                  x = _el$getBrickPosition126[0],
                  y = _el$getBrickPosition126[1];

              return new BrickPosition([x - 1, y + 2]);
            }
          case 1:
            {
              var _el$getBrickPosition127 = el.getBrickPosition(),
                  _el$getBrickPosition128 = _slicedToArray(_el$getBrickPosition127, 2),
                  _x47 = _el$getBrickPosition128[0],
                  _y47 = _el$getBrickPosition128[1];

              return new BrickPosition([_x47, _y47 + 1]);
            }
          case 2:
            {
              var _el$getBrickPosition129 = el.getBrickPosition(),
                  _el$getBrickPosition130 = _slicedToArray(_el$getBrickPosition129, 2),
                  _x48 = _el$getBrickPosition130[0],
                  _y48 = _el$getBrickPosition130[1];

              return new BrickPosition([_x48 + 1, _y48]);
            }
          case 3:
            {
              var _el$getBrickPosition131 = el.getBrickPosition(),
                  _el$getBrickPosition132 = _slicedToArray(_el$getBrickPosition131, 2),
                  _x49 = _el$getBrickPosition132[0],
                  _y49 = _el$getBrickPosition132[1];

              return new BrickPosition([_x49 - 1, _y49]);
            }
        }
      });
    }, function (position) {
      return position.map(function (el, i) {
        switch (i) {
          case 0:
            {
              var _el$getBrickPosition133 = el.getBrickPosition(),
                  _el$getBrickPosition134 = _slicedToArray(_el$getBrickPosition133, 2),
                  x = _el$getBrickPosition134[0],
                  y = _el$getBrickPosition134[1];

              return new BrickPosition([x - 1, y - 1]);
            }
          case 1:
            {
              var _el$getBrickPosition135 = el.getBrickPosition(),
                  _el$getBrickPosition136 = _slicedToArray(_el$getBrickPosition135, 2),
                  _x50 = _el$getBrickPosition136[0],
                  _y50 = _el$getBrickPosition136[1];

              return new BrickPosition([_x50, _y50]);
            }
          case 2:
            {
              var _el$getBrickPosition137 = el.getBrickPosition(),
                  _el$getBrickPosition138 = _slicedToArray(_el$getBrickPosition137, 2),
                  _x51 = _el$getBrickPosition138[0],
                  _y51 = _el$getBrickPosition138[1];

              return new BrickPosition([_x51 + 1, _y51 + 1]);
            }
          case 3:
            {
              var _el$getBrickPosition139 = el.getBrickPosition(),
                  _el$getBrickPosition140 = _slicedToArray(_el$getBrickPosition139, 2),
                  _x52 = _el$getBrickPosition140[0],
                  _y52 = _el$getBrickPosition140[1];

              return new BrickPosition([_x52 + 1, _y52 - 1]);
            }
        }
      });
    }]
  }];

  function getBlock() {
    var blockState = blocks[random(blocks.length)];
    return [blockState.color(), blockState.position, blockState.trasformations, id++];
  }

  var BRICK_SIZE = 30;

  var Block = function () {
    function Block() {
      _classCallCheck(this, Block);

      var _getBlock = getBlock();

      var _getBlock2 = _slicedToArray(_getBlock, 4);

      this.color = _getBlock2[0];
      this.position = _getBlock2[1];
      this.rotation = _getBlock2[2];
      this.id = _getBlock2[3];
    }

    _createClass(Block, [{
      key: 'getBrick',
      value: function getBrick() {
        return {
          color: this.color,
          id: this.id,
          draw: function draw(ctx, coordinates) {
            ctx.fillStyle = this.color;
            ctx.fillRect.apply(ctx, _toConsumableArray(coordinates).concat([BRICK_SIZE - 1, BRICK_SIZE - 1]));
          }
        };
      }
    }]);

    return Block;
  }();

  var bricksfield = new (function () {
    function Bricksfield() {
      _classCallCheck(this, Bricksfield);

      this.grid = new Array(10);

      for (var i = 0; i < this.grid.length; i++) {
        var newY = new Array(20);
        newY.fill(undefined);
        this.grid[i] = newY;
      }

      this.nextBlock = null;
      this.currentBlock = null;
      this.rotation = null;
      this.gameOver = false;
      this.lines = 0;
      this.score = 0;
      this.level = 1;
    }

    _createClass(Bricksfield, [{
      key: 'getCurrBlockPos',
      value: function getCurrBlockPos() {
        return this.currentBlock.position;
      }
    }, {
      key: 'plaseIsHold',
      value: function plaseIsHold(position) {
        var _this = this;

        return position.every(function (el) {
          var _el$getBrickPosition141 = el.getBrickPosition(),
              _el$getBrickPosition142 = _slicedToArray(_el$getBrickPosition141, 2),
              x = _el$getBrickPosition142[0],
              y = _el$getBrickPosition142[1];

          if (_this.grid[x][y] !== undefined) {
            return false;
          }
          return true;
        });
      }
    }, {
      key: 'insertBlock',
      value: function insertBlock() {

        if (!this.plaseIsHold(this.nextBlock.position)) {
          this.gameOver = true;
          return;
        }

        this.currentBlock = this.nextBlock;

        this.rotation = new Rotate(this.currentBlock.rotation);
        this.addBricks(this.currentBlock.position, this.currentBlock.getBrick());

        this.nextBlock = new Block();
      }
    }, {
      key: 'addBricks',
      value: function addBricks(positions, brick) {
        var _this2 = this;

        positions.forEach(function (el) {
          var _el$getBrickPosition143 = el.getBrickPosition(),
              _el$getBrickPosition144 = _slicedToArray(_el$getBrickPosition143, 2),
              x = _el$getBrickPosition144[0],
              y = _el$getBrickPosition144[1];

          _this2.grid[x][y] = brick;
        });
      }
    }, {
      key: 'renewBricks',
      value: function renewBricks(oldPosition, newPosition, brick) {

        for (var i in oldPosition) {
          var _oldPosition$i$getBri = oldPosition[i].getBrickPosition(),
              _oldPosition$i$getBri2 = _slicedToArray(_oldPosition$i$getBri, 2),
              x = _oldPosition$i$getBri2[0],
              y = _oldPosition$i$getBri2[1];

          this.grid[x][y] = undefined;
        }
        this.addBricks(newPosition, brick);
      }
    }, {
      key: 'isFit',
      value: function isFit(position) {
        var _this3 = this;

        return position.every(function (el) {
          var _el$getBrickPosition145 = el.getBrickPosition(),
              _el$getBrickPosition146 = _slicedToArray(_el$getBrickPosition145, 2),
              x = _el$getBrickPosition146[0],
              y = _el$getBrickPosition146[1];

          return x < _this3.grid.length && x >= 0 && y < _this3.grid[0].length && y >= 0;
        });
      }
    }, {
      key: 'isCollision',
      value: function isCollision(position) {
        var _this4 = this;

        return position.every(function (el) {
          var _el$getBrickPosition147 = el.getBrickPosition(),
              _el$getBrickPosition148 = _slicedToArray(_el$getBrickPosition147, 2),
              x = _el$getBrickPosition148[0],
              y = _el$getBrickPosition148[1];

          if (_this4.grid[x][y] !== undefined) {
            if (_this4.grid[x][y].id === _this4.currentBlock.id) {
              return true;
            } else {
              return false;
            }
          }
          return true;
        });
      }
    }, {
      key: 'everyBrick',
      value: function everyBrick(callback) {
        this.grid.forEach(function (x, i) {
          x.forEach(function (y, j) {
            if (y) {
              callback(i, j, y);
            }
          });
        });
      }
    }, {
      key: 'moveLeft',
      value: function moveLeft() {
        var newPosition = [];
        for (var i = 0; i < this.currentBlock.position.length; i++) {
          var _currentBlock$positio = this.currentBlock.position[i].getBrickPosition(),
              _currentBlock$positio2 = _slicedToArray(_currentBlock$positio, 2),
              x = _currentBlock$positio2[0],
              y = _currentBlock$positio2[1];

          newPosition.push(new BrickPosition([x - 1, y]));
        }

        if (this.isFit(newPosition) && this.isCollision(newPosition)) {
          this.renewBricks(this.getCurrBlockPos(), newPosition, this.currentBlock.getBrick());
          this.currentBlock.position = newPosition;
        }
      }
    }, {
      key: 'moveRight',
      value: function moveRight() {
        var newPosition = this.getCurrBlockPos().map(function (el) {
          var _el$getBrickPosition149 = el.getBrickPosition(),
              _el$getBrickPosition150 = _slicedToArray(_el$getBrickPosition149, 2),
              x = _el$getBrickPosition150[0],
              y = _el$getBrickPosition150[1];

          return new BrickPosition([x + 1, y]);
        });

        if (this.isFit(newPosition) && this.isCollision(newPosition)) {
          this.renewBricks(this.getCurrBlockPos(), newPosition, this.currentBlock.getBrick());
          this.currentBlock.position = newPosition;
        }
      }
    }, {
      key: 'moveDown',
      value: function moveDown() {
        if (this.gameOver) return;

        var newPosition = this.getCurrBlockPos().map(function (el) {
          var _el$getBrickPosition151 = el.getBrickPosition(),
              _el$getBrickPosition152 = _slicedToArray(_el$getBrickPosition151, 2),
              x = _el$getBrickPosition152[0],
              y = _el$getBrickPosition152[1];

          return new BrickPosition([x, y + 1]);
        });

        if (this.isFit(newPosition) && this.isCollision(newPosition)) {
          this.renewBricks(this.getCurrBlockPos(), newPosition, this.currentBlock.getBrick());
          this.currentBlock.position = newPosition;
        } else {
          this.sliceHeap.apply(this, _toConsumableArray(this.checkHeap()));
          this.insertBlock();
        }
      }
    }, {
      key: 'rotate',
      value: function rotate() {
        var newPosition = this.rotation.getNewOrientation(this.currentBlock.position, this);
        this.renewBricks(this.getCurrBlockPos(), newPosition, this.currentBlock.getBrick());
        this.currentBlock.position = newPosition;
      }
    }, {
      key: 'checkHeap',
      value: function checkHeap() {
        var toShiftY = [];
        var toDeleteY = [];

        for (var y = this.grid[0].length - 1; y >= 0; y--) {
          var line = [];
          for (var x = 0; x < this.grid.length; x++) {
            if (this.grid[x][y] !== undefined) line.push(new BrickPosition([x, y]));
          }

          if (line.length === 0) {
            return [toShiftY, toDeleteY];
          } else if (line.length > 0 && line.length < 10 && toDeleteY.length > 0) {
            toShiftY.push(line);
          } else if (line.length === 10 && toShiftY.length !== 0) {
            toShiftY.push(line);
          } else if (line.length === 10 && toShiftY.length === 0) {
            toDeleteY.push(line);
          }
        }
        return [toShiftY, toDeleteY];
      }
    }, {
      key: 'sliceHeap',
      value: function sliceHeap(toShiftY, toDeleteY) {
        var _this5 = this;

        if (toDeleteY.length !== 0) {
          toDeleteY.forEach(function (el) {
            el.forEach(function (el) {
              var _el$getBrickPosition153 = el.getBrickPosition(),
                  _el$getBrickPosition154 = _slicedToArray(_el$getBrickPosition153, 2),
                  x = _el$getBrickPosition154[0],
                  y = _el$getBrickPosition154[1];

              _this5.grid[x][y] = undefined;
            });
          });
          toShiftY.forEach(function (el) {
            el.forEach(function (el) {
              var _el$getBrickPosition155 = el.getBrickPosition(),
                  _el$getBrickPosition156 = _slicedToArray(_el$getBrickPosition155, 2),
                  x = _el$getBrickPosition156[0],
                  y = _el$getBrickPosition156[1];

              _this5.grid[x][y + toDeleteY.length] = _this5.grid[x][y];
              _this5.grid[x][y] = undefined;
            });
          });

          if (toDeleteY.length === 1) this.score += 100;else if (toDeleteY.length === 2) this.score += 300;else if (toDeleteY.length === 3) this.score += 700;else if (toDeleteY.length === 4) this.score += 1500;

          this.lines += toDeleteY.length;
          this.level = Math.floor(this.lines / 10) + 1;

          this.sliceHeap.apply(this, _toConsumableArray(this.checkHeap()));
        }
      }
    }, {
      key: 'init',
      value: function init() {
        this.nextBlock = new Block();
        this.insertBlock();
      }
    }]);

    return Bricksfield;
  }())();

  var Rotate = function () {
    function Rotate(rotateFunctions) {
      _classCallCheck(this, Rotate);

      this.nextState = 0;
      this.rotateFunctions = rotateFunctions;
    }

    _createClass(Rotate, [{
      key: '_updateNextState',
      value: function _updateNextState() {
        if (this.nextState < this.rotateFunctions.length - 1) {
          this.nextState++;
        } else {
          this.nextState = 0;
        }
      }

      /* given Array.BrickPosition
      return  newOrientation if fits
      reutrn old position if cannot rotate */

    }, {
      key: 'getNewOrientation',
      value: function getNewOrientation(position, bricksfield) {
        var newOrientation = this.rotateFunctions[this.nextState](position);
        if (bricksfield.isFit(newOrientation) && bricksfield.isCollision(newOrientation)) {
          this._updateNextState(); /*проверь если убрать this */
          return newOrientation;
        }
        return position;
      }
    }, {
      key: 'getNextState',
      value: function getNextState() {
        return this.nextState;
      }
    }]);

    return Rotate;
  }();

  var BRICK_SIZE$1 = 30;
  var V_SIZE = 20;
  var H_SIZE = 10;
  var LINE_DASH = [3, 1];
  var LINES_STYLE = 'rgba(175, 175, 175, .5)';
  var SHIFT = 0.5;

  var Field = function () {
    function Field(width, height) {
      _classCallCheck(this, Field);

      this.width = width;
      this.height = height;
    }

    _createClass(Field, [{
      key: 'draw',
      value: function draw(ctx) {
        ctx.fillStyle = '#fff';
        ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

        function drawGrid() {
          var drawLine = function drawLine(step, orientation) {

            ctx.strokeStyle = LINES_STYLE;
            ctx.beginPath();
            ctx.setLineDash(LINE_DASH);

            if (orientation === 'ver') {
              ctx.moveTo(SHIFT + BRICK_SIZE$1 * (step + 1), 0);
              ctx.lineTo(SHIFT + BRICK_SIZE$1 * (step + 1), ctx.canvas.height);
              ctx.stroke();
            } else if (orientation === 'hor') {
              ctx.moveTo(0, SHIFT + BRICK_SIZE$1 * (step + 1));
              ctx.lineTo(ctx.canvas.width, SHIFT + BRICK_SIZE$1 * (step + 1));
              ctx.stroke();
            } else {
              throw new Error('Something wrong with orientation');
            }
          };

          for (var i = 0; i < V_SIZE - 1; i++) {
            drawLine(i, 'hor');
          }for (var _i = 0; _i < H_SIZE - 1; _i++) {
            drawLine(_i, 'ver');
          }
        }
        drawGrid();

        function drawBricksfield(x, y, brick) {
          brick.draw(ctx, [1 + x * BRICK_SIZE$1, 1 + y * BRICK_SIZE$1]);
        }
        bricksfield.everyBrick(drawBricksfield);
      }
    }]);

    return Field;
  }();

  var field = new Field(H_SIZE, V_SIZE);

  var INFO_BRICK_SIZE = BRICK_SIZE$1 - 10;

  var canvas = document.getElementById('tetrisField');
  var ctx = canvas.getContext('2d');
  var info_ctx = document.getElementById('nextBlock').getContext('2d');
  var score = document.querySelector('.score-text');
  var lines = document.querySelector('.lines-text');
  var level = document.querySelector('.level-text');
  var dummy = document.querySelector('.dummy');

  var view = {
    drawGameField: function drawGameField() {
      field.draw(ctx);
    }
  };

  function showDummy(text) {
    if (dummy.classList.contains('hidden')) {
      dummy.classList.remove('hidden');
      dummy.innerHTML = text;
    } else {
      dummy.innerHTML = text;
      dummy.classList.add('hidden');
    }
  }

  function showStat(score_data, lines_data, level_text) {
    score.innerHTML = score_data;
    lines.innerHTML = lines_data;
    level.innerHTML = level_text;
  }

  function drawBlock(block) {

    info_ctx.fillStyle = '#fff';
    info_ctx.fillRect(0, 0, info_ctx.canvas.width, info_ctx.canvas.height);

    block.position.forEach(function (element) {
      var _element$getBrickPosi = element.getBrickPosition(),
          _element$getBrickPosi2 = _slicedToArray(_element$getBrickPosi, 2),
          x = _element$getBrickPosi2[0],
          y = _element$getBrickPosi2[1];

      info_ctx.fillStyle = block.color;
      info_ctx.fillRect((x - 3) * INFO_BRICK_SIZE, y * INFO_BRICK_SIZE, INFO_BRICK_SIZE, INFO_BRICK_SIZE);
    });
  }

  var speedReduce = 0;
  var lastLevel = bricksfield.level;

  bricksfield.init();
  view.drawGameField();
  drawBlock(bricksfield.nextBlock);
  drawBlock(bricksfield.nextBlock);
  showStat(bricksfield.score, bricksfield.lines, bricksfield.level);

  function endGame() {
    document.removeEventListener('keydown', keyPress);
    clearInterval(intervalID);
    showDummy('game over');
  }

  var intervalAction = function intervalAction() {
    if (bricksfield.gameOver) {
      endGame();
      return;
    }

    if (bricksfield.level > lastLevel) {
      clearInterval(intervalID);
      lastLevel = bricksfield.level;
      intervalID = setInterval(intervalAction, 1000 - speedReduce);
      speedReduce += 100;
    }

    drawBlock(bricksfield.nextBlock);
    showStat(bricksfield.score, bricksfield.lines, bricksfield.level);
    bricksfield.moveDown();
    view.drawGameField();
  };

  var intervalID = setInterval(intervalAction, 1000);

  function getPause() {
    var isPauseOn = false;
    var pauseEvent = function pauseEvent(event) {
      if (event.keyCode === 32) {
        pause();
      }
    };
    return function () {
      if (!isPauseOn) {
        isPauseOn = true;
        clearInterval(intervalID);
        document.removeEventListener('keydown', keyPress);
        document.addEventListener('keydown', pauseEvent);
        showDummy('pause');
      } else {
        isPauseOn = false;
        document.removeEventListener('keydown', pauseEvent);
        document.addEventListener('keydown', keyPress);
        intervalID = setInterval(intervalAction, 1000 - speedReduce);
        showDummy('');
      }
    };
  }

  var pause = getPause();

  var keyPress = function keyPress(event) {
    if (bricksfield.gameOver) {
      endGame();
      return;
    }

    var code = event.keyCode;

    switch (code) {
      case 37:
        {
          bricksfield.moveLeft();
          view.drawGameField();
        }break;
      case 38:
        {
          bricksfield.rotate();
          view.drawGameField();
        }break;
      case 39:
        {
          bricksfield.moveRight();
          view.drawGameField();
        }break;
      case 40:
        {
          if (bricksfield.gameOver) {
            endGame();
            return;
          }
          bricksfield.moveDown();
          view.drawGameField();
          drawBlock(bricksfield.nextBlock);
          showStat(bricksfield.score, bricksfield.lines, bricksfield.level);
        }break;
      case 32:
        pause();
        break;
    }
  };

  document.addEventListener('keydown', keyPress);
})();