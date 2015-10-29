import React from 'react';
import { Line } from './react_svg';

export default class LineBetweenHandlers extends React.Component {
  render() {
    return (
      <Line className="react-timeline-slider__line-between-handlers"
        x1={this.props.x1}
        y1="0"
        x2={this.props.x2}
        y2="0" />
    );
  }
}
