import React from 'react';
import { TickCollectionUtils } from './tick_collection';
import { Circle } from './react_svg';

class Handler extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      x: null
    }
  }

  handlerDragged() {
    this.props.dragged(this.state.x);
    this.setState({ x: null });
  }

  handlerBeingDragged(e) {
    let x = e.x;
    let limits = this.props.limits;
    if(e.x < limits.min) x = this.minTicksX();
    if(e.x > limits.max) x = this.maxTicksX();
    this.setState({ x: x });
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

export default Handler;
