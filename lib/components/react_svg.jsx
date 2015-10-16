import React from 'react';
import ReactDOM from 'react-dom';
import 'd3'

class SVGComponent extends React.Component {
  setupDrag() {
    let drag = d3.behavior.drag();
    let element = ReactDOM.findDOMNode(this.refs.component);
    let d3Element = d3.select(element);

    if(this.props.onDrag) {
      drag.on("drag", (e) => {
        this.props.onDrag(d3.event);
      });
    }

    if(this.props.onDragEnd) {
      drag.on("dragend", () => {
        this.props.onDragEnd();
      });
    }

    d3Element.call(drag);
  }

  componentDidMount() {
    if(this.props.draggable) {
      this.setupDrag();
    }
  }

  componentWillUnmount() {
    let element = ReactDOM.findDOMNode(this.refs.component);
    let d3Element = d3.select(element);
    d3Element.on('.drag', null);
  }

  render() {
    let Component = this.props.component;
    return <Component {...this.props} ref="component">{this.props.children}</Component>
  }
}

class SVG extends React.Component {
  render() {
    return <SVGComponent {...this.props} component="svg">{this.props.children}</SVGComponent>
  }
}

class G extends React.Component {
  render() {
    return <SVGComponent {...this.props} component="g">{this.props.children}</SVGComponent>
  }
}

class Rect extends React.Component {
  render() {
    return <SVGComponent {...this.props} component="rect">{this.props.children}</SVGComponent>
  }
}

class Line extends React.Component {
  render() {
    return <SVGComponent {...this.props} component="line">{this.props.children}</SVGComponent>
  }
}

class Path extends React.Component {
  render() {
    return <SVGComponent {...this.props} component="path">{this.props.children}</SVGComponent>
  }
}

class Polyline extends React.Component {
  render() {
    return <SVGComponent {...this.props} component="polyline">{this.props.children}</SVGComponent>
  }
}

class Circle extends React.Component {
  render() {
    return <SVGComponent {...this.props} component="circle">{this.props.children}</SVGComponent>
  }
}

class Text extends React.Component {
  render() {
    return <SVGComponent {...this.props} component="text">{this.props.children}</SVGComponent>
  }
}

export { SVG, G, Rect, Circle, Line, Polyline, Path, Text };
