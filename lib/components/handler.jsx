import React from 'react';
import { TickCollectionUtils } from './tick_collection';
import { Circle } from './react_svg';

var HANDLER_ONE = Symbol("HANDLER_ONE");
var HANDLER_TWO = Symbol("HANDLER_TWO");

export default class Handler extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      x: null
    }
  }

  handlerDragged() {
    if(this.state.x) {
      this.props.dragged(this.state.x);
      this.setState({ x: null });
    }
  }

  handlerBeingDragged(e) {
    let x = e.x;
    let limits = this.props.limits;
    if(e.x < limits.min.x) x = limits.min.x;
    if(e.x > limits.max.x) x = limits.max.x;
    this.setState({ x: x });
    this.props.onDrag(x);
  }

  get x() {
    if(this.state.x) {
      return this.state.x;
    } else {
      return this.props.activeTick.x;
    }
  }

  render() {
    return (
      <Circle cx={this.x}
        cy="0"
        draggable={true}
        onDrag={this.handlerBeingDragged.bind(this)}
        onDragEnd={this.handlerDragged.bind(this)}
        {...this.props.style} />
    );
  }
}

export { HANDLER_ONE, HANDLER_TWO };
