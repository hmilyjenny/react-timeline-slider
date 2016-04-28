'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TickCollection = exports.Tick = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tick = function Tick(value, x) {
  _classCallCheck(this, Tick);

  this.value = value;
  this.x = x;
};

var TickCollection = function () {
  function TickCollection(ticks) {
    _classCallCheck(this, TickCollection);

    this.ticks = ticks;
  }

  _createClass(TickCollection, [{
    key: 'map',
    value: function map() {
      return this.ticks.map.apply(this.ticks, arguments);
    }
  }, {
    key: 'toArray',
    value: function toArray() {
      return this.ticks;
    }
  }, {
    key: 'findByValue',
    value: function findByValue(v) {
      return _underscore2.default.find(this.ticks, function (t) {
        return t.value == v;
      });
    }
  }, {
    key: 'findCloser',
    value: function findCloser(x) {
      return this.ticks.map(function (t) {
        return {
          tick: t,
          distance: Math.abs(x - t.x)
        };
      }).sort(function (a, b) {
        return a.distance - b.distance;
      })[0].tick;
    }
  }, {
    key: 'findNext',
    value: function findNext(v) {
      return _underscore2.default.filter(this.ticks, function (tick) {
        return tick.value > v;
      })[0];
    }
  }, {
    key: 'before',
    value: function before(v) {
      var ticks = _underscore2.default.filter(this.ticks, function (tick) {
        return tick.value < v;
      });
      return ticks[ticks.length - 1];
    }
  }, {
    key: 'min',
    value: function min() {
      return this.ticks.sort(function (a, b) {
        return a.x - b.x;
      })[0];
    }
  }, {
    key: 'max',
    value: function max() {
      return this.ticks.sort(function (a, b) {
        return b.x - a.x;
      })[0];
    }
  }], [{
    key: 'fromRange',
    value: function fromRange(range, containerWidth) {
      var ticksNumber = range.length;
      var gutter = containerWidth / (ticksNumber - 1);

      return new TickCollection(range.map(function (v, i) {
        var x = i * gutter;

        return new Tick(v, x);
      }));
    }
  }]);

  return TickCollection;
}();

exports.Tick = Tick;
exports.TickCollection = TickCollection;
//# sourceMappingURL=tick.js.map
