import React from 'react';
import { G, Circle, Text } from './react_svg';

export default class Tick extends React.Component {
  textTransform() {
    if(this.props.contextSize == 'compact') {
      return "translate(8, 16) rotate(-45)";
    } else {
      return "translate(0, 16)";
    }
  }

  textAnchor() {
    if(this.props.contextSize == 'compact') {
      return "end";
    } else {
      return "middle";
    }
  }

  render() {
    let tick = this.props.tick;
    return (
      <G className="react-timeline-slider__tick"
        transform={`translate(${tick.x}, 0)`}
        onClick={this.props.onClick.bind(this, tick)}>

        <Circle cx="0" cy="0" r="2" className="react-timeline-slider__tick-point"/>
        <Text textAnchor={this.textAnchor()}
          className="react-timeline-slider__tick-text"
          transform={this.textTransform()}>

          {tick.value}
          </Text>
      </G>
    );
  }
}
