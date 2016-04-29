'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _auto_width = require('./auto_width');

var _auto_width2 = _interopRequireDefault(_auto_width);

var _timeline_slider = require('./timeline_slider');

var _timeline_slider2 = _interopRequireDefault(_timeline_slider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactTimelineSlider = function (_React$Component) {
  _inherits(ReactTimelineSlider, _React$Component);

  function ReactTimelineSlider() {
    _classCallCheck(this, ReactTimelineSlider);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ReactTimelineSlider).apply(this, arguments));
  }

  _createClass(ReactTimelineSlider, [{
    key: 'render',
    value: function render() {
      var Component = (0, _auto_width2.default)(_timeline_slider2.default);
      return _react2.default.createElement(Component, this.props);
    }
  }]);

  return ReactTimelineSlider;
}(_react2.default.Component);

exports.default = ReactTimelineSlider;
;
module.exports = exports['default'];
//# sourceMappingURL=react_timeline_slider.js.map
