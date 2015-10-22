import React from 'react';
import { G, Circle } from './react_svg';
import { TickCollection } from '../tick';
import TickCollectionView from './tick_collection';
import Handler from './handler';
import { HANDLER_ONE, HANDLER_TWO } from './handler';
import LineBetweenHandlers from './line_between_handlers';

export default class XAxis extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      handlersPosition: []
    };
  }

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

  values() {
    return {
      [HANDLER_ONE]: this.props.value[0],
      [HANDLER_TWO]: this.props.value[1],
      toArray: function () {
        return [this[HANDLER_ONE], this[HANDLER_TWO]].sort();
      }
    };
  }

  activeTick(handler) {
    return this.ticks().findByValue(this.values()[handler]);
  }

  handlerDragged(handler, x) {
    let values = this.values();
    values[handler] = this.ticks().findCloser(x).value;
    this.setState({
      handlersPosition: []
    }, () => {
      this.props.onValueChange(values.toArray());
    })
  }

  setHandlerPosition(handler, x) {
    let positions = this.state.handlersPosition;
    positions[handler] = x;
    this.setState({
      handlersPosition: positions
    });
  }

  getHandlerPosition(handler) {
    if(this.state.handlersPosition[handler] !== null) {
      return this.state.handlersPosition[handler];
    } else {
      return this.activeTick(handler).x;
    }
  }

  render() {
    let margin = this.props.margin;

    return (
      <G className="xaxis" transform={ `translate(${margin}, ${margin}) ` }>
        <TickCollectionView
          contextSize={this.props.contextSize}
          ticks={this.ticks()}
          styles={this.props.styles} />
        {(()=>{
          if(this.props.multi) {
            return (
              <G>
                <LineBetweenHandlers
                  style={this.props.styles.lineBetweenHandlers}
                  x1={this.getHandlerPosition(HANDLER_ONE)}
                  x2={this.getHandlerPosition(HANDLER_TWO)} />
                <Handler ticks={this.ticks()}
                  limits={this.limits()}

                  activeTick={this.activeTick(HANDLER_TWO)}
                  onDrag={this.setHandlerPosition.bind(this, HANDLER_TWO)}
                  dragged={this.handlerDragged.bind(this, HANDLER_TWO)}
                  style={this.props.styles.handlerStyle} />
              </G>
            );
          }
        })()}

        <Handler ticks={this.ticks()}
          limits={this.limits()}
          activeTick={this.activeTick(HANDLER_ONE)}
          onDrag={this.setHandlerPosition.bind(this, HANDLER_ONE)}
          dragged={this.handlerDragged.bind(this, HANDLER_ONE)}
          style={this.props.styles.handlerStyle} />
      </G>
    );
  }
};

XAxis.defaultProps = {
  margin: 15
};
