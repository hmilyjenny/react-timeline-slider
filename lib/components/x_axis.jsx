import React from 'react';
import { G, Circle } from './react_svg';
import { TickCollection } from '../tick';
import TickCollectionView from './tick_collection';
import Handler from './handler';
import { HANDLER_ONE, HANDLER_TWO } from './handler';
import LineBetweenHandlers from './line_between_handlers';
import _ from 'underscore';
import PubSub from 'pubsub-js';

export default class XAxis extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      handlersPosition: []
    };
  }

  componentDidMount() {
    if(this.props.playStop) {
      PubSub.subscribe('PlayStop:play', () => {
        console.log('Play!');
      });
    }
  }

  componentWillUnmount() {
    PubSub.unsubscribe('PlayStop:play');
  }

  playStopSpace() {
    if(this.props.playStop) return 50;
    return 0;
  }

  width() {
    return this.props.width - this.props.margin*4 - this.playStopSpace();
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
    let activeTick = this.activeTick(handler);
    if(_.isNumber(this.state.handlersPosition[handler])) {
      return this.state.handlersPosition[handler];
    } else if(activeTick) {
      return activeTick.x;
    }
  }

  render() {
    let margin = this.props.margin;

    return (
      <G className="xaxis" transform={ `translate(${margin*2+this.playStopSpace()}, ${margin}) ` }>
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
