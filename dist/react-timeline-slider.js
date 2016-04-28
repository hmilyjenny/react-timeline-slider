(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _reactDom = (typeof window !== "undefined" ? window['ReactDOM'] : typeof global !== "undefined" ? global['ReactDOM'] : null);

var _reactDom2 = _interopRequireDefault(_reactDom);

var AutoWidth = function AutoWidth(ComposedComponent) {
  return (function (_React$Component) {
    _inherits(_class, _React$Component);

    function _class(props) {
      _classCallCheck(this, _class);

      _get(Object.getPrototypeOf(_class.prototype), "constructor", this).call(this, props);
      this.state = {
        width: 0
      };
    }

    _createClass(_class, [{
      key: "updateWidth",
      value: function updateWidth() {
        var node = _reactDom2["default"].findDOMNode(this.refs.component);
        var parentNode = node.parentNode;
        this.setState({ width: parentNode.offsetWidth });
      }
    }, {
      key: "componentDidMount",
      value: function componentDidMount() {
        this.updateWidth();
        window.addEventListener('resize', this.updateWidth.bind(this));
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        window.removeEventListener('resize', this.updateWidth.bind(this));
      }
    }, {
      key: "render",
      value: function render() {
        return _react2["default"].createElement(ComposedComponent, _extends({}, this.props, {
          ref: "component",
          width: this.state.width }));
      }
    }]);

    return _class;
  })(_react2["default"].Component);
};

exports["default"] = AutoWidth;

global.AutoWidth = AutoWidth;
module.exports = exports["default"];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],2:[function(require,module,exports){
(function (global){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _react_svg = require('./react_svg');

var Background = (function (_React$Component) {
  _inherits(Background, _React$Component);

  function Background() {
    _classCallCheck(this, Background);

    _get(Object.getPrototypeOf(Background.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(Background, [{
    key: "render",
    value: function render() {
      return _react2["default"].createElement(_react_svg.Rect, { width: "100%",
        x: "0", y: "0",
        height: "100%",
        className: "react-timeline-slider__background" });
    }
  }]);

  return Background;
})(_react2["default"].Component);

exports["default"] = Background;
module.exports = exports["default"];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./react_svg":6}],3:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _tick_collection = require('./tick_collection');

var _react_svg = require('./react_svg');

var HANDLER_ONE = String("HANDLER_ONE");
var HANDLER_TWO = String("HANDLER_TWO");

var Handler = (function (_React$Component) {
  _inherits(Handler, _React$Component);

  function Handler(props) {
    _classCallCheck(this, Handler);

    _get(Object.getPrototypeOf(Handler.prototype), 'constructor', this).call(this, props);

    this.state = {
      x: null,
      r: null
    };
  }

  _createClass(Handler, [{
    key: 'handlerDragged',
    value: function handlerDragged() {
      var _this = this;

      var x = this.state.x;
      if (x != null) {
        this.setState({ x: null, r: null }, function () {
          _this.props.dragged(x);
        });
      }
    }
  }, {
    key: 'handlerBeingDragged',
    value: function handlerBeingDragged(e) {
      var _this2 = this;

      var x = e.x;
      var limits = this.props.limits;
      if (e.x < limits.min.x) x = limits.min.x;
      if (e.x > limits.max.x) x = limits.max.x;

      this.setState({ x: x, r: 8 }, function () {
        _this2.props.onDrag(x);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(_react_svg.Circle, { cx: this.x,
        cy: '0',
        r: this.r,
        draggable: true,
        onDrag: this.handlerBeingDragged.bind(this),
        onDragEnd: this.handlerDragged.bind(this),
        className: 'react-timeline-slider__handler',
        style: { cursor: 'pointer' } });
    }
  }, {
    key: 'x',
    get: function get() {
      if (this.state.x !== null) {
        return this.state.x;
      } else {
        return this.props.activeTick.x;
      }
    }
  }, {
    key: 'r',
    get: function get() {
      if (this.state.r !== null) {
        return this.state.r;
      } else {
        return 6;
      }
    }
  }]);

  return Handler;
})(_react2['default'].Component);

exports['default'] = Handler;
exports.HANDLER_ONE = HANDLER_ONE;
exports.HANDLER_TWO = HANDLER_TWO;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./react_svg":6,"./tick_collection":8}],4:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _react_svg = require('./react_svg');

var LineBetweenHandlers = (function (_React$Component) {
  _inherits(LineBetweenHandlers, _React$Component);

  function LineBetweenHandlers() {
    _classCallCheck(this, LineBetweenHandlers);

    _get(Object.getPrototypeOf(LineBetweenHandlers.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(LineBetweenHandlers, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(_react_svg.Line, { className: 'react-timeline-slider__line-between-handlers',
        x1: this.props.x1,
        y1: '0',
        x2: this.props.x2,
        y2: '0' });
    }
  }]);

  return LineBetweenHandlers;
})(_react2['default'].Component);

exports['default'] = LineBetweenHandlers;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./react_svg":6}],5:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _react_svg = require('./react_svg');

var PlayStop = (function (_React$Component) {
  _inherits(PlayStop, _React$Component);

  function PlayStop() {
    _classCallCheck(this, PlayStop);

    _get(Object.getPrototypeOf(PlayStop.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(PlayStop, [{
    key: 'handleClick',
    value: function handleClick() {
      this.props.onToggle();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this = this;

      return _react2['default'].createElement(
        _react_svg.G,
        null,
        _react2['default'].createElement(_react_svg.Rect, { width: '50',
          x: '0', y: '0',
          height: '100%',
          className: 'react-timeline-slider__control-bg' }),
        _react2['default'].createElement(
          _react_svg.G,
          {
            style: { cursor: 'pointer' },
            onClick: this.handleClick.bind(this) },
          _react2['default'].createElement(_react_svg.Circle, {
            r: '14',
            cx: '24',
            cy: this.verticalPosition.controlButton,
            className: 'react-timeline-slider__control-button' }),
          (function () {
            if (_this.props.isPlaying) {
              return _react2['default'].createElement(
                _react_svg.G,
                null,
                _react2['default'].createElement(_react_svg.Rect, {
                  x: '19',
                  y: _this.verticalPosition.pause,
                  width: '3',
                  height: '14',
                  className: 'react-timeline-slider__control-pause' }),
                _react2['default'].createElement(_react_svg.Rect, {
                  x: '26',
                  y: _this.verticalPosition.pause,
                  width: '3',
                  height: '14',
                  className: 'react-timeline-slider__control-pause' })
              );
            } else {
              return _react2['default'].createElement(_react_svg.Polygon, {
                points: '0,0 0,12 12,6',
                transform: 'translate(20, ' + _this.verticalPosition.play + ')',
                className: 'react-timeline-slider__control-play' });
            }
          })()
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
})(_react2['default'].Component);

exports['default'] = PlayStop;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./react_svg":6}],6:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _reactDom = (typeof window !== "undefined" ? window['ReactDOM'] : typeof global !== "undefined" ? global['ReactDOM'] : null);

var _reactDom2 = _interopRequireDefault(_reactDom);

require('d3');

var SVGComponent = (function (_React$Component) {
  _inherits(SVGComponent, _React$Component);

  function SVGComponent() {
    _classCallCheck(this, SVGComponent);

    _get(Object.getPrototypeOf(SVGComponent.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(SVGComponent, [{
    key: 'setupDrag',
    value: function setupDrag() {
      var _this = this;

      var drag = d3.behavior.drag();
      var element = _reactDom2['default'].findDOMNode(this.refs.component);
      var d3Element = d3.select(element);

      if (this.props.onDrag) {
        drag.on("drag", function (e) {
          _this.props.onDrag(d3.event);
        });
      }

      if (this.props.onDragEnd) {
        drag.on("dragend", function () {
          _this.props.onDragEnd();
        });
      }

      d3Element.call(drag);
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.draggable) {
        this.setupDrag();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      var element = _reactDom2['default'].findDOMNode(this.refs.component);
      var d3Element = d3.select(element);
      d3Element.on('.drag', null);
    }
  }, {
    key: 'render',
    value: function render() {
      var Component = this.props.component;
      return _react2['default'].createElement(
        Component,
        _extends({}, this.props, { ref: 'component' }),
        this.props.children
      );
    }
  }]);

  return SVGComponent;
})(_react2['default'].Component);

var SVG = (function (_React$Component2) {
  _inherits(SVG, _React$Component2);

  function SVG() {
    _classCallCheck(this, SVG);

    _get(Object.getPrototypeOf(SVG.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(SVG, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        SVGComponent,
        _extends({}, this.props, { component: 'svg' }),
        this.props.children
      );
    }
  }]);

  return SVG;
})(_react2['default'].Component);

var G = (function (_React$Component3) {
  _inherits(G, _React$Component3);

  function G() {
    _classCallCheck(this, G);

    _get(Object.getPrototypeOf(G.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(G, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        SVGComponent,
        _extends({}, this.props, { component: 'g' }),
        this.props.children
      );
    }
  }]);

  return G;
})(_react2['default'].Component);

var Rect = (function (_React$Component4) {
  _inherits(Rect, _React$Component4);

  function Rect() {
    _classCallCheck(this, Rect);

    _get(Object.getPrototypeOf(Rect.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Rect, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        SVGComponent,
        _extends({}, this.props, { component: 'rect' }),
        this.props.children
      );
    }
  }]);

  return Rect;
})(_react2['default'].Component);

var Line = (function (_React$Component5) {
  _inherits(Line, _React$Component5);

  function Line() {
    _classCallCheck(this, Line);

    _get(Object.getPrototypeOf(Line.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Line, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        SVGComponent,
        _extends({}, this.props, { component: 'line' }),
        this.props.children
      );
    }
  }]);

  return Line;
})(_react2['default'].Component);

var Path = (function (_React$Component6) {
  _inherits(Path, _React$Component6);

  function Path() {
    _classCallCheck(this, Path);

    _get(Object.getPrototypeOf(Path.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Path, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        SVGComponent,
        _extends({}, this.props, { component: 'path' }),
        this.props.children
      );
    }
  }]);

  return Path;
})(_react2['default'].Component);

var Polyline = (function (_React$Component7) {
  _inherits(Polyline, _React$Component7);

  function Polyline() {
    _classCallCheck(this, Polyline);

    _get(Object.getPrototypeOf(Polyline.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Polyline, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        SVGComponent,
        _extends({}, this.props, { component: 'polyline' }),
        this.props.children
      );
    }
  }]);

  return Polyline;
})(_react2['default'].Component);

var Circle = (function (_React$Component8) {
  _inherits(Circle, _React$Component8);

  function Circle() {
    _classCallCheck(this, Circle);

    _get(Object.getPrototypeOf(Circle.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Circle, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        SVGComponent,
        _extends({}, this.props, { component: 'circle' }),
        this.props.children
      );
    }
  }]);

  return Circle;
})(_react2['default'].Component);

var Polygon = (function (_React$Component9) {
  _inherits(Polygon, _React$Component9);

  function Polygon() {
    _classCallCheck(this, Polygon);

    _get(Object.getPrototypeOf(Polygon.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Polygon, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        SVGComponent,
        _extends({}, this.props, { component: 'polygon' }),
        this.props.children
      );
    }
  }]);

  return Polygon;
})(_react2['default'].Component);

var Text = (function (_React$Component10) {
  _inherits(Text, _React$Component10);

  function Text() {
    _classCallCheck(this, Text);

    _get(Object.getPrototypeOf(Text.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(Text, [{
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        SVGComponent,
        _extends({}, this.props, { component: 'text' }),
        this.props.children
      );
    }
  }]);

  return Text;
})(_react2['default'].Component);

exports.SVG = SVG;
exports.G = G;
exports.Rect = Rect;
exports.Circle = Circle;
exports.Line = Line;
exports.Polyline = Polyline;
exports.Path = Path;
exports.Polygon = Polygon;
exports.Text = Text;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"d3":"d3"}],7:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _react_svg = require('./react_svg');

var Tick = (function (_React$Component) {
  _inherits(Tick, _React$Component);

  function Tick() {
    _classCallCheck(this, Tick);

    _get(Object.getPrototypeOf(Tick.prototype), 'constructor', this).apply(this, arguments);
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
      return _react2['default'].createElement(
        _react_svg.G,
        { className: 'react-timeline-slider__tick',
          transform: 'translate(' + tick.x + ', 0)',
          style: { cursor: 'pointer' },
          onClick: this.props.onClick.bind(this, tick) },
        _react2['default'].createElement(_react_svg.Circle, { cx: '0', cy: '0', r: '2', className: 'react-timeline-slider__tick-point' }),
        _react2['default'].createElement(
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
})(_react2['default'].Component);

exports['default'] = Tick;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./react_svg":6}],8:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _tick = require("./tick");

var _tick2 = _interopRequireDefault(_tick);

var _react_svg = require('./react_svg');

var TickCollection = (function (_React$Component) {
  _inherits(TickCollection, _React$Component);

  function TickCollection() {
    _classCallCheck(this, TickCollection);

    _get(Object.getPrototypeOf(TickCollection.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(TickCollection, [{
    key: 'render',
    value: function render() {
      var _this = this;

      var ticks = this.props.ticks.map(function (t, i) {
        return _react2['default'].createElement(_tick2['default'], { tick: t, key: i,
          contextSize: _this.props.contextSize,
          onClick: _this.props.onClick.bind(_this) });
      });

      return _react2['default'].createElement(
        _react_svg.G,
        { className: 'react-timeline-slider__ticks' },
        ticks
      );
    }
  }]);

  return TickCollection;
})(_react2['default'].Component);

exports['default'] = TickCollection;
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./react_svg":6,"./tick":7}],9:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

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

var TimelineSlider = (function (_React$Component) {
  _inherits(TimelineSlider, _React$Component);

  function TimelineSlider(props) {
    _classCallCheck(this, TimelineSlider);

    _get(Object.getPrototypeOf(TimelineSlider.prototype), 'constructor', this).call(this, props);

    this.state = {
      value: null,
      isPlaying: false
    };
  }

  _createClass(TimelineSlider, [{
    key: 'onValueChange',
    value: function onValueChange(v) {
      var _this = this;

      this.setState({ value: v }, function () {
        _this.props.onValueChange(_this.value());
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
      var _this2 = this;

      return _underscore2['default'].compact(props.map(function (prop) {
        return _underscore2['default'].isEqual(nextProps[prop], _this2.props[prop]);
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
      var _this3 = this;

      return _react2['default'].createElement(
        _react_svg.SVG,
        { className: 'react-timeline-slider',
          width: this.width(), height: this.height() },
        _react2['default'].createElement(_background2['default'], null),
        (function () {
          if (_this3.props.playStop) {
            return _react2['default'].createElement(_play_stop2['default'], {
              contextSize: _this3.contextSize(),
              isPlaying: _this3.state.isPlaying,
              onToggle: _this3.togglePlayStop.bind(_this3) });
          }
        })(),
        _react2['default'].createElement(_x_axis2['default'], { contextSize: this.contextSize(),
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
})(_react2['default'].Component);

exports['default'] = TimelineSlider;

TimelineSlider.defaultProps = {
  styles: {},
  multi: false,
  playStop: false
};
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./background":2,"./play_stop":5,"./react_svg":6,"./x_axis":10,"underscore":"underscore"}],10:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _react_svg = require('./react_svg');

var _tick = require('../tick');

var _tick_collection = require('./tick_collection');

var _tick_collection2 = _interopRequireDefault(_tick_collection);

var _handler = require('./handler');

var _handler2 = _interopRequireDefault(_handler);

var _line_between_handlers = require('./line_between_handlers');

var _line_between_handlers2 = _interopRequireDefault(_line_between_handlers);

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var XAxis = (function (_React$Component) {
  _inherits(XAxis, _React$Component);

  function XAxis(props) {
    _classCallCheck(this, XAxis);

    _get(Object.getPrototypeOf(XAxis.prototype), 'constructor', this).call(this, props);

    this.state = {
      handlersPosition: []
    };
  }

  _createClass(XAxis, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.isPlaying != nextProps.isPlaying) {
        if (nextProps.isPlaying) {
          var speed = this.props.playStopSpeed || 1000;
          this.interval = setInterval(this.move.bind(this), speed);
        } else {
          clearInterval(this.interval);
        }
      }

      if (!_underscore2['default'].isEqual(nextProps.multi, this.props.multi)) {
        this.setState({ handlersPosition: [] });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearInterval(this.interval);
    }
  }, {
    key: 'playStopSpace',
    value: function playStopSpace() {
      if (this.props.playStop) return 50;
      return 0;
    }
  }, {
    key: 'width',
    value: function width() {
      return this.props.width - this.props.margin * 4 - this.playStopSpace();
    }
  }, {
    key: 'ticks',
    value: function ticks() {
      return _tick.TickCollection.fromRange(this.props.range, this.width());
    }
  }, {
    key: 'limits',
    value: function limits() {
      var ticks = this.ticks();
      return {
        min: ticks.min(),
        max: ticks.max()
      };
    }
  }, {
    key: 'values',
    value: function values() {
      var _ref;

      return _ref = {}, _defineProperty(_ref, _handler.HANDLER_ONE, this.props.value[0]), _defineProperty(_ref, _handler.HANDLER_TWO, this.props.value[1]), _defineProperty(_ref, 'toArray', function toArray() {
        return [this[_handler.HANDLER_ONE], this[_handler.HANDLER_TWO]].sort();
      }), _ref;
    }
  }, {
    key: 'activeTick',
    value: function activeTick(handler) {
      return this.ticks().findByValue(this.values()[handler]);
    }
  }, {
    key: 'moveHandlerTo',
    value: function moveHandlerTo(tick) {
      this.moveHandler(_handler.HANDLER_ONE, tick);
    }
  }, {
    key: 'moveHandler',
    value: function moveHandler(handler, tick) {
      var values = this.values();
      values[handler] = tick.value;

      this.props.onValueChange(values.toArray());
    }
  }, {
    key: 'move',
    value: function move() {
      var activeTickValue = this.activeTick(_handler.HANDLER_ONE).value;
      var tickNextToActive = this.ticks().findNext(activeTickValue);
      var maxTickValue = this.limits().max.value;
      var beforeLastHandler = undefined;

      if (this.props.multi) {
        beforeLastHandler = this.ticks().before(this.activeTick(_handler.HANDLER_TWO).value);
      }

      if (activeTickValue == maxTickValue || this.props.multi && activeTickValue == beforeLastHandler.value) {
        this.moveHandlerTo(this.limits().min);
      } else {
        if (!(this.props.multi && tickNextToActive.value == maxTickValue)) {
          this.moveHandlerTo(tickNextToActive);
        }

        if (tickNextToActive.value == maxTickValue || this.props.multi && tickNextToActive.value == beforeLastHandler.value) {
          clearInterval(this.interval);
          this.props.onStop();
        }
      }
    }
  }, {
    key: 'handlerDragged',
    value: function handlerDragged(handler, x) {
      var _this = this;

      var values = this.values();
      values[handler] = this.ticks().findCloser(x).value;
      this.setState({
        handlersPosition: []
      }, function () {
        _this.props.onValueChange(values.toArray());
      });
    }
  }, {
    key: 'setHandlerPosition',
    value: function setHandlerPosition(handler, x) {
      var positions = this.state.handlersPosition;
      positions[handler] = x;
      this.setState({
        handlersPosition: positions
      });
    }
  }, {
    key: 'getHandlerPosition',
    value: function getHandlerPosition(handler) {
      var activeTick = this.activeTick(handler);
      if (_underscore2['default'].isNumber(this.state.handlersPosition[handler])) {
        return this.state.handlersPosition[handler];
      } else if (activeTick) {
        return activeTick.x;
      }
    }
  }, {
    key: 'getHandlerDistance',
    value: function getHandlerDistance(handler, x) {
      var handlerPosition = this.getHandlerPosition(handler);
      return Math.abs(handlerPosition - x);
    }
  }, {
    key: 'findCloserHandler',
    value: function findCloserHandler(x) {
      if (this.getHandlerDistance(_handler.HANDLER_ONE, x) > this.getHandlerDistance(_handler.HANDLER_TWO, x)) {
        return _handler.HANDLER_TWO;
      } else {
        return _handler.HANDLER_ONE;
      }
    }
  }, {
    key: 'thereIsAHandlerOn',
    value: function thereIsAHandlerOn(x) {
      return this.getHandlerDistance(_handler.HANDLER_ONE, x) == 0 || this.getHandlerDistance(_handler.HANDLER_TWO, x) == 0;
    }
  }, {
    key: 'handleTickClick',
    value: function handleTickClick(tick) {
      if (this.props.multi) {
        if (!this.thereIsAHandlerOn(tick.x)) {
          var handler = this.findCloserHandler(tick.x);
          this.moveHandler(handler, tick);
        }
      } else {
        this.moveHandlerTo(tick);
      }
    }
  }, {
    key: 'multiHandlerSupport',
    value: function multiHandlerSupport() {
      if (this.props.multi) {
        return _react2['default'].createElement(
          _react_svg.G,
          null,
          _react2['default'].createElement(_line_between_handlers2['default'], {
            x1: this.getHandlerPosition(_handler.HANDLER_ONE),
            x2: this.getHandlerPosition(_handler.HANDLER_TWO) }),
          _react2['default'].createElement(_handler2['default'], { ticks: this.ticks(),
            limits: this.limits(),
            activeTick: this.activeTick(_handler.HANDLER_TWO),
            onDrag: this.setHandlerPosition.bind(this, _handler.HANDLER_TWO),
            dragged: this.handlerDragged.bind(this, _handler.HANDLER_TWO) })
        );
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var margin = this.props.margin;

      return _react2['default'].createElement(
        _react_svg.G,
        { className: 'xaxis', transform: 'translate(' + (margin * 2 + this.playStopSpace()) + ', ' + margin + ') ' },
        _react2['default'].createElement(_tick_collection2['default'], {
          contextSize: this.props.contextSize,
          ticks: this.ticks(),
          onClick: this.handleTickClick.bind(this) }),
        this.multiHandlerSupport(),
        _react2['default'].createElement(_handler2['default'], { ticks: this.ticks(),
          limits: this.limits(),
          activeTick: this.activeTick(_handler.HANDLER_ONE),
          onDrag: this.setHandlerPosition.bind(this, _handler.HANDLER_ONE),
          dragged: this.handlerDragged.bind(this, _handler.HANDLER_ONE) })
      );
    }
  }]);

  return XAxis;
})(_react2['default'].Component);

exports['default'] = XAxis;
;

XAxis.defaultProps = {
  margin: 18
};
module.exports = exports['default'];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../tick":12,"./handler":3,"./line_between_handlers":4,"./react_svg":6,"./tick_collection":8,"underscore":"underscore"}],11:[function(require,module,exports){
(function (global){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _componentsTimeline_slider = require("./components/timeline_slider");

var _componentsTimeline_slider2 = _interopRequireDefault(_componentsTimeline_slider);

var _componentsAuto_width = require("./components/auto_width");

var _componentsAuto_width2 = _interopRequireDefault(_componentsAuto_width);

exports["default"] = (0, _componentsAuto_width2["default"])(_componentsTimeline_slider2["default"]);

global.ReactTimelineSlider = (0, _componentsAuto_width2["default"])(_componentsTimeline_slider2["default"]);
module.exports = exports["default"];

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./components/auto_width":1,"./components/timeline_slider":9}],12:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _react = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);

var _react2 = _interopRequireDefault(_react);

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var Tick = function Tick(value, x) {
  _classCallCheck(this, Tick);

  this.value = value;
  this.x = x;
};

var TickCollection = (function () {
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
      return _underscore2['default'].find(this.ticks, function (t) {
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
      return _underscore2['default'].filter(this.ticks, function (tick) {
        return tick.value > v;
      })[0];
    }
  }, {
    key: 'before',
    value: function before(v) {
      var ticks = _underscore2['default'].filter(this.ticks, function (tick) {
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
})();

exports.Tick = Tick;
exports.TickCollection = TickCollection;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"underscore":"underscore"}]},{},[11]);
