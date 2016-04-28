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

var PlayStop = function (_React$Component) {
  _inherits(PlayStop, _React$Component);

  function PlayStop() {
    _classCallCheck(this, PlayStop);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(PlayStop).apply(this, arguments));
  }

  _createClass(PlayStop, [{
    key: 'handleClick',
    value: function handleClick() {
      this.props.onToggle();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        _react_svg.G,
        null,
        _react2.default.createElement(_react_svg.Rect, { width: '50',
          x: '0', y: '0',
          height: '100%',
          className: 'react-timeline-slider__control-bg' }),
        _react2.default.createElement(
          _react_svg.G,
          {
            style: { cursor: 'pointer' },
            onClick: this.handleClick.bind(this) },
          _react2.default.createElement(_react_svg.Circle, {
            r: '14',
            cx: '24',
            cy: this.verticalPosition.controlButton,
            className: 'react-timeline-slider__control-button' }),
          function () {
            if (_this2.props.isPlaying) {
              return _react2.default.createElement(
                _react_svg.G,
                null,
                _react2.default.createElement(_react_svg.Rect, {
                  x: '19',
                  y: _this2.verticalPosition.pause,
                  width: '3',
                  height: '14',
                  className: 'react-timeline-slider__control-pause' }),
                _react2.default.createElement(_react_svg.Rect, {
                  x: '26',
                  y: _this2.verticalPosition.pause,
                  width: '3',
                  height: '14',
                  className: 'react-timeline-slider__control-pause' })
              );
            } else {
              return _react2.default.createElement(_react_svg.Polygon, {
                points: '0,0 0,12 12,6',
                transform: 'translate(20, ' + _this2.verticalPosition.play + ')',
                className: 'react-timeline-slider__control-play' });
            }
          }()
        )
      );
    }
  }, {
    key: 'verticalPosition',
    get: function get() {
      var contextDiff = this.props.contextSize == 'compact' ? 10 : 0;
      var controlButton = 22 + contextDiff;
      var pause = 15 + contextDiff;
      var play = 16 + contextDiff;

      return { controlButton: controlButton, pause: pause, play: play };
    }
  }]);

  return PlayStop;
}(_react2.default.Component);

exports.default = PlayStop;
//# sourceMappingURL=play_stop.js.map
