'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react_svg = require('./react_svg');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tick = function (_React$Component) {
  _inherits(Tick, _React$Component);

  function Tick() {
    _classCallCheck(this, Tick);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Tick).apply(this, arguments));
  }

  _createClass(Tick, [{
    key: 'textTransform',
    value: function textTransform() {
      if (this.props.contextSize == 'compact') {
        return "translate(8, 16) rotate(-45)";
      } else {
        return "translate(0, 16)";
      }
    }
  }, {
    key: 'textAnchor',
    value: function textAnchor() {
      if (this.props.contextSize == 'compact') {
        return "end";
      } else {
        return "middle";
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var tick = this.props.tick;
      return _react2.default.createElement(
        _react_svg.G,
        { className: 'react-timeline-slider__tick',
          transform: 'translate(' + tick.x + ', 0)',
          style: { cursor: 'pointer' },
          onClick: this.props.onClick.bind(this, tick) },
        _react2.default.createElement(_react_svg.Circle, { cx: '0', cy: '0', r: '2', className: 'react-timeline-slider__tick-point' }),
        _react2.default.createElement(
          _react_svg.Text,
          { textAnchor: this.textAnchor(),
            className: 'react-timeline-slider__tick-text',
            transform: this.textTransform() },
          tick.value
        )
      );
    }
  }]);

  return Tick;
}(_react2.default.Component);

exports.default = Tick;
module.exports = exports['default'];
//# sourceMappingURL=tick.js.map
