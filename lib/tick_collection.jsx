import React from 'react';
import { TickSet, Tick } from "./tick"
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

class TickCollectionUtils {
  static findByValue(collection, v) {
    return collection.find((t) => t.value == v);
  }

  static findCloser(collection, x) {
    return collection.map((t) => {
      return {
        tick: t,
        distance: Math.abs(x - t.x)
      };
    }).sort((a, b) => a.distance - b.distance)[0].tick;
  }

  static min(collection) {
    return collection.sort((a, b) => a.x - b.x)[0];
  }

  static max(collection) {
    return collection.sort((a, b) => b.x - a.x)[0];
  }

  static collectionFromRange(range, containerWidth) {
    let ticksNumber = range.length;
    let gutter = containerWidth / (ticksNumber - 1);

    return range.map((v, i) => {
      let x = i * gutter;

      return new TickSet(v, x);
    })
  }
}

export { TickCollectionUtils, TickCollection }
