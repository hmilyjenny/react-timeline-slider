import React from 'react';
import { G, Circle } from './react_svg';
import { TickCollectionUtils, TickCollection } from './tick_collection';
import Handler from './handler';

export default class XAxis extends React.Component {
  width() {
    return this.props.width - this.props.margin*2;
  }

  ticks() {
    return TickCollectionUtils.collectionFromRange(this.props.range, this.width());
  }

  limits() {
    let ticks = this.ticks();
    return {
      min: TickCollectionUtils.min(ticks),
      max: TickCollectionUtils.max(ticks)
    };
  }

  activeTick() {
    return TickCollectionUtils.findByValue(this.ticks(), this.props.value);
  }

  handlerDragged(x) {
    this.props.onValueChange(TickCollectionUtils.findCloser(this.ticks(), x).value);
  }

  render() {
    let margin = this.props.margin;

    return (
      <G className="xaxis" transform={ `translate(${margin}, ${margin}) ` }>
        <TickCollection ticks={this.ticks()} styles={this.props.styles}/>
        <Handler ticks={this.ticks()}
          limits={this.limits()}
          activeTick={this.activeTick()}
          dragged={this.handlerDragged.bind(this)}
          style={this.props.styles.handlerStyle}/>
      </G>
    );
  }
};

XAxis.defaultProps = {
  margin: 15
};
