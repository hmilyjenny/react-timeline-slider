import React from 'react';
import Tick from "./tick"
import { G } from './react_svg';

export default class TickCollection extends React.Component {
  render() {
    let ticks = this.props.ticks.map((t, i) => {
      return <Tick tick={t} key={i} styles={this.props.styles} />;
    });

    return (
      <G className="ticks">
        {ticks}
      </G>
    );
  }
}