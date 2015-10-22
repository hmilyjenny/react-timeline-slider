import React from 'react';
import { G, Circle, Text } from './react_svg';

export default class Tick extends React.Component {
  textTransform() {
    if(this.props.contextSize == 'compact') {
      return "translate(-10, 15) rotate(40)";
    } else {
      return "translate(0, 16)";
    }
  }

  textAnchor() {
    if(this.props.contextSize == 'compact') {
      return "start";
    } else {
      return "middle";
    }
  }

  render() {
    let tick = this.props.tick;
    return (
      <G className="tick" transform={`translate(${tick.x}, 0)`}>
        <Circle cx="0" cy="0" {...this.props.styles.tickStyle}/>
        <text textAnchor={this.textAnchor()}
          {...this.props.styles.textStyle}
          transform={this.textTransform()}>

          {tick.value}
        </text>
      </G>
    );
  }
}
