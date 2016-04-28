'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _react_svg = require('./react_svg');

var _background = require('./background');

var _background2 = _interopRequireDefault(_background);

var _x_axis = require('./x_axis');

var _x_axis2 = _interopRequireDefault(_x_axis);

var _play_stop = require('./play_stop');

var _play_stop2 = _interopRequireDefault(_play_stop);

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TimelineSlider = function (_React$Component) {
  _inherits(TimelineSlider, _React$Component);

  function TimelineSlider(props) {
    _classCallCheck(this, TimelineSlider);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TimelineSlider).call(this, props));

    _this.state = {
      value: null,
      isPlaying: false
    };
    return _this;
  }

  _createClass(TimelineSlider, [{
    key: 'onValueChange',
    value: function onValueChange(v) {
      var _this2 = this;

      this.setState({ value: v }, function () {
        _this2.props.onValueChange(_this2.value());
      });
    }
  }, {
    key: 'rawValue',
    value: function rawValue() {
      if (this.state.value) return this.state.value;
      if (this.props.defaultValue) return this.props.defaultValue;
      return this.computeDefaultValue();
    }
  }, {
    key: 'computeDefaultValue',
    value: function computeDefaultValue() {
      if (this.props.multi) {
        return [Math.min.apply(Math, this.props.range), Math.max.apply(Math, this.props.range)];
      } else {
        return [Math.max.apply(Math, this.props.range)];
      }
    }
  }, {
    key: 'value',
    value: function value() {
      var rawValue = this.rawValue();
      if (this.props.multi) {
        return rawValue;
      } else {
        return rawValue[0];
      }
    }
  }, {
    key: 'textSize',
    value: function textSize() {
      var letterSize = 5;
      return this.props.range.map(function (i) {
        return i.toString().length;
      }).reduce(function (a, b) {
        return a + b;
      }) * letterSize;
    }
  }, {
    key: 'contextSize',
    value: function contextSize() {
      var playStopControlWidth = 0;

      if (this.props.playStop) {
        playStopControlWidth = 50;
      }

      if (this.textSize() > (this.props.width - playStopControlWidth) / 2) {
        return "compact";
      } else {
        return "large";
      }
    }
  }, {
    key: 'width',
    value: function width() {
      var max = Math.max(this.props.width, this.textSize() / 2);
      if (max) return max;
      return 0;
    }
  }, {
    key: 'height',
    value: function height() {
      if (this.contextSize() == "compact") {
        return 65;
      } else {
        return 45;
      }
    }
  }, {
    key: 'togglePlayStop',
    value: function togglePlayStop() {
      var prevIsPlaying = this.state.isPlaying;
      var nextIsPlaying = !this.state.isPlaying;

      this.setState({
        isPlaying: nextIsPlaying
      });

      if (this.props.onPlayChange) {
        this.props.onPlayChange(prevIsPlaying, nextIsPlaying);
      }
    }
  }, {
    key: 'propsAreEqual',
    value: function propsAreEqual(nextProps, props) {
      var _this3 = this;

      return _underscore2.default.compact(props.map(function (prop) {
        return _underscore2.default.isEqual(nextProps[prop], _this3.props[prop]);
      })).length == props.length;
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (!this.propsAreEqual(nextProps, ['range', 'multi', 'defaultValue'])) {
        this.setState({ value: null });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      return _react2.default.createElement(
        _react_svg.SVG,
        { className: 'react-timeline-slider',
          width: this.width(), height: this.height() },
        _react2.default.createElement(_background2.default, null),
        function () {
          if (_this4.props.playStop) {
            return _react2.default.createElement(_play_stop2.default, {
              contextSize: _this4.contextSize(),
              isPlaying: _this4.state.isPlaying,
              onToggle: _this4.togglePlayStop.bind(_this4) });
          }
        }(),
        _react2.default.createElement(_x_axis2.default, { contextSize: this.contextSize(),
          width: this.width(),
          range: this.props.range,
          value: this.rawValue(),
          multi: this.props.multi,
          playStop: this.props.playStop,
          playStopSpeed: this.props.playStopSpeed,
          isPlaying: this.state.isPlaying,
          onStop: this.togglePlayStop.bind(this),
          onValueChange: this.onValueChange.bind(this) })
      );
    }
  }]);

  return TimelineSlider;
}(_react2.default.Component);

exports.default = TimelineSlider;


TimelineSlider.defaultProps = {
  styles: {},
  multi: false,
  playStop: false
};
//# sourceMappingURL=timeline_slider.js.map
