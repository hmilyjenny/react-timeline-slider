import React from 'react';
import { G, Circle } from './react_svg';
import { TickCollection } from '../tick';
import TickCollectionView from './tick_collection';
import Handler from './handler';

export default class XAxis extends React.Component {
  width() {
    return this.props.width - this.props.margin*2;
  }

  ticks() {
    return TickCollection.fromRange(this.props.range, this.width());
  }

  limits() {
    let ticks = this.ticks();
    return {
      min: ticks.min(),
      max: ticks.max()
    };
  }

  activeTick() {
    return this.ticks().findByValue(this.props.value);
  }

  handlerDragged(x) {
    this.props.onValueChange(this.ticks().findCloser(x).value);
  }

  render() {
    let margin = this.props.margin;

    return (
      <G className="xaxis" transform={ `translate(${margin}, ${margin}) ` }>
        <TickCollectionView ticks={this.ticks()} styles={this.props.styles}/>
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
