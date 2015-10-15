import React from 'react';
import { G, Circle, Text } from './react_svg';

class Tick extends React.Component {
  render() {
    let tick = this.props.tick;
    return (
      <G className="tick" transform={`translate(${tick.x}, 0)`}>
        <Circle cx="0" cy="0" {...this.props.styles.tickStyle}/>
        <text textAnchor="middle"
          {...this.props.styles.textStyle}
          transform="translate(0, 15)">

          {tick.value}
        </text>
      </G>
    );
  }
}

class TickSet {
  constructor(value, x) {
    this.value = value;
    this.x = x;
  }
}

export { Tick, TickSet };
