import React from 'react';
import { Circle } from './react_svg';

class Handler extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tick: null,
      cx: null
    }
  }

  maxTicksX() {
    return Math.max.apply(Math, this.props.ticks.map((t) => t.x));
  }

  minTicksX() {
    return Math.min.apply(Math, this.props.ticks.map((t) => t.x));
  }

  handlerDragged() {
    let distances = (Math, this.props.ticks.map((tick) => {
      return Math.abs(this.state.cx - tick.x);
    }))

    let closerTickIndex = distances.reduce((memo, distance, i, distances) => {
      return distances[memo] > distance ? i : memo;
    }, 0);

    let closerTick = this.props.ticks[closerTickIndex];

    this.setState({ tick: closerTick, cx: null });
    this.props.onValueChange(closerTick);
  }

  handlerBeingDragged(e) {
    let x = e.x;
    if(e.x < this.minTicksX()) x = this.minTicksX();
    if(e.x > this.maxTicksX()) x = this.maxTicksX();
    this.setState({ cx: x });
  }

  cx() {
    if(this.state.cx) {
      return this.state.cx;
    } else if(this.state.tick) {
      return this.state.tick.x;
    } else {
      return this.props.ticks.find((t) => t.value == this.props.defaultValue).x;
    }
  }

  render() {
    return (
      <Circle cx={this.cx()} cy="0" fill="#ffffff" r="5"
        stroke="#303030"
        fill="#00ff66"
        draggable={true}
        onDrag={this.handlerBeingDragged.bind(this)}
        onDragEnd={this.handlerDragged.bind(this)} />
    );
  }
}

export default Handler;
