'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Text = exports.Polygon = exports.Path = exports.Polyline = exports.Line = exports.Circle = exports.Rect = exports.G = exports.SVG = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _d = require('d3');

var _d2 = _interopRequireDefault(_d);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SVGComponent = function (_React$Component) {
  _inherits(SVGComponent, _React$Component);

  function SVGComponent() {
    _classCallCheck(this, SVGComponent);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(SVGComponent).apply(this, arguments));
  }

  _createClass(SVGComponent, [{
    key: 'setupDrag',
    value: function setupDrag() {
      var _this2 = this;

      var drag = _d2.default.behavior.drag();
      var element = _reactDom2.default.findDOMNode(this.refs.component);
      var d3Element = _d2.default.select(element);

      if (this.props.onDrag) {
        drag.on("drag", function (e) {
          _this2.props.onDrag(_d2.default.event);
        });
      }

      if (this.props.onDragEnd) {
        drag.on("dragend", function () {
          _this2.props.onDragEnd();
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
      var element = _reactDom2.default.findDOMNode(this.refs.component);
      var d3Element = _d2.default.select(element);
      d3Element.on('.drag', null);
    }
  }, {
    key: 'render',
    value: function render() {
      var Component = this.props.component;
      return _react2.default.createElement(
        Component,
        _extends({}, this.props, { ref: 'component' }),
        this.props.children
      );
    }
  }]);

  return SVGComponent;
}(_react2.default.Component);

var SVG = function (_React$Component2) {
  _inherits(SVG, _React$Component2);

  function SVG() {
    _classCallCheck(this, SVG);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(SVG).apply(this, arguments));
  }

  _createClass(SVG, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        SVGComponent,
        _extends({}, this.props, { component: 'svg' }),
        this.props.children
      );
    }
  }]);

  return SVG;
}(_react2.default.Component);

var G = function (_React$Component3) {
  _inherits(G, _React$Component3);

  function G() {
    _classCallCheck(this, G);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(G).apply(this, arguments));
  }

  _createClass(G, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        SVGComponent,
        _extends({}, this.props, { component: 'g' }),
        this.props.children
      );
    }
  }]);

  return G;
}(_react2.default.Component);

var Rect = function (_React$Component4) {
  _inherits(Rect, _React$Component4);

  function Rect() {
    _classCallCheck(this, Rect);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Rect).apply(this, arguments));
  }

  _createClass(Rect, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        SVGComponent,
        _extends({}, this.props, { component: 'rect' }),
        this.props.children
      );
    }
  }]);

  return Rect;
}(_react2.default.Component);

var Line = function (_React$Component5) {
  _inherits(Line, _React$Component5);

  function Line() {
    _classCallCheck(this, Line);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Line).apply(this, arguments));
  }

  _createClass(Line, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        SVGComponent,
        _extends({}, this.props, { component: 'line' }),
        this.props.children
      );
    }
  }]);

  return Line;
}(_react2.default.Component);

var Path = function (_React$Component6) {
  _inherits(Path, _React$Component6);

  function Path() {
    _classCallCheck(this, Path);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Path).apply(this, arguments));
  }

  _createClass(Path, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        SVGComponent,
        _extends({}, this.props, { component: 'path' }),
        this.props.children
      );
    }
  }]);

  return Path;
}(_react2.default.Component);

var Polyline = function (_React$Component7) {
  _inherits(Polyline, _React$Component7);

  function Polyline() {
    _classCallCheck(this, Polyline);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Polyline).apply(this, arguments));
  }

  _createClass(Polyline, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        SVGComponent,
        _extends({}, this.props, { component: 'polyline' }),
        this.props.children
      );
    }
  }]);

  return Polyline;
}(_react2.default.Component);

var Circle = function (_React$Component8) {
  _inherits(Circle, _React$Component8);

  function Circle() {
    _classCallCheck(this, Circle);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Circle).apply(this, arguments));
  }

  _createClass(Circle, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        SVGComponent,
        _extends({}, this.props, { component: 'circle' }),
        this.props.children
      );
    }
  }]);

  return Circle;
}(_react2.default.Component);

var Polygon = function (_React$Component9) {
  _inherits(Polygon, _React$Component9);

  function Polygon() {
    _classCallCheck(this, Polygon);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Polygon).apply(this, arguments));
  }

  _createClass(Polygon, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        SVGComponent,
        _extends({}, this.props, { component: 'polygon' }),
        this.props.children
      );
    }
  }]);

  return Polygon;
}(_react2.default.Component);

var Text = function (_React$Component10) {
  _inherits(Text, _React$Component10);

  function Text() {
    _classCallCheck(this, Text);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Text).apply(this, arguments));
  }

  _createClass(Text, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        SVGComponent,
        _extends({}, this.props, { component: 'text' }),
        this.props.children
      );
    }
  }]);

  return Text;
}(_react2.default.Component);

exports.SVG = SVG;
exports.G = G;
exports.Rect = Rect;
exports.Circle = Circle;
exports.Line = Line;
exports.Polyline = Polyline;
exports.Path = Path;
exports.Polygon = Polygon;
exports.Text = Text;
//# sourceMappingURL=react_svg.js.map
