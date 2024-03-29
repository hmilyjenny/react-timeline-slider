import React from 'react';
import { TickCollectionUtils } from './tick_collection';
import { Circle } from './react_svg';

var HANDLER_ONE = String("HANDLER_ONE");
var HANDLER_TWO = String("HANDLER_TWO");

export default class Handler extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      x: null,
      r: null
    }
  }

  handlerDragged() {
    let x = this.state.x;
    if(x != null) {
      this.setState({ x: null, r: null }, () => {
        this.props.dragged(x);
      });
    }
  }

  handlerBeingDragged(e) {
    let x = e.x;
    let limits = this.props.limits;
    if(e.x < limits.min.x) x = limits.min.x;
    if(e.x > limits.max.x) x = limits.max.x;

    this.setState({ x: x, r: 8 }, () => {
      this.props.onDrag(x);
    });
  }

  get x() {
    if(this.state.x !== null) {
      return this.state.x;
    } else {
      return this.props.activeTick.x;
    }
  }

  get r() {
    if(this.state.r !== null) {
      return this.state.r;
    } else {
      return 6;
    }
  }

  render() {
    return (
      <Circle cx={this.x}
        cy="0"
        r={this.r}
        draggable={true}
        onDrag={this.handlerBeingDragged.bind(this)}
        onDragEnd={this.handlerDragged.bind(this)}
        className="react-timeline-slider__handler"
        style={{cursor: 'pointer'}} />
    );
  }
}

export { HANDLER_ONE, HANDLER_TWO };
