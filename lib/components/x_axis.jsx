import React from 'react';
import { G, Circle } from './react_svg';
import { TickCollection } from '../tick';
import TickCollectionView from './tick_collection';
import Handler from './handler';
import { HANDLER_ONE, HANDLER_TWO } from './handler';
import LineBetweenHandlers from './line_between_handlers';
import _ from 'underscore';

export default class XAxis extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      handlersPosition: []
    };
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.isPlaying != nextProps.isPlaying) {
      if(nextProps.isPlaying) {
        let speed = this.props.playStopSpeed || 1000;
        this.interval = setInterval(this.move.bind(this), speed);
      } else {
        clearInterval(this.interval);
      }
    }

    if(!_.isEqual(nextProps.multi, this.props.multi)) {
      this.setState({ handlersPosition: [] });
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
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

  moveHandlerTo(tick) {
    this.moveHandler(HANDLER_ONE, tick);
  }

  moveHandler(handler, tick) {
    let values = this.values();
    values[handler] = tick.value;

    this.props.onValueChange(values.toArray());
  }

  move() {
    let activeTickValue = this.activeTick(HANDLER_ONE).value;
    let tickNextToActive = this.ticks().findNext(activeTickValue);
    let maxTickValue = this.limits().max.value;
    let beforeLastHandler;

    if(this.props.multi) {
      beforeLastHandler = this.ticks().before(this.activeTick(HANDLER_TWO).value);
    }

    if(activeTickValue == maxTickValue ||
      (this.props.multi && activeTickValue == beforeLastHandler.value)) {
        this.moveHandlerTo(this.limits().min);

    } else {
      if(!(this.props.multi && tickNextToActive.value == maxTickValue)) {
        this.moveHandlerTo(tickNextToActive);
      }

      if(tickNextToActive.value == maxTickValue ||
        (this.props.multi && tickNextToActive.value == beforeLastHandler.value)) {
          clearInterval(this.interval);
          this.props.onStop();
      }
    }
  }

  handlerDragged(handler, x) {
    let values = this.values();
    values[handler] = this.ticks().findCloser(x).value;
    this.setState({
      handlersPosition: []
    }, () => {
      this.props.onValueChange(values.toArray());
    });
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

  getHandlerDistance(handler, x) {
    let handlerPosition = this.getHandlerPosition(handler);
    return Math.abs(handlerPosition - x);
  }

  findCloserHandler(x) {
    if(this.getHandlerDistance(HANDLER_ONE, x) > this.getHandlerDistance(HANDLER_TWO, x)) {
      return HANDLER_TWO;
    } else {
      return HANDLER_ONE;
    }
  }

  thereIsAHandlerOn(x) {
    return this.getHandlerDistance(HANDLER_ONE, x) == 0 ||
           this.getHandlerDistance(HANDLER_TWO, x) == 0;
  }

  handleTickClick(tick) {
    if(this.props.multi) {
      if(!this.thereIsAHandlerOn(tick.x)) {
        let handler = this.findCloserHandler(tick.x);
        this.moveHandler(handler, tick);
      }
    } else {
      this.moveHandlerTo(tick);
    }
  }

  multiHandlerSupport() {
    if(this.props.multi) {
      return (
        <G>
          <LineBetweenHandlers
            x1={this.getHandlerPosition(HANDLER_ONE)}
            x2={this.getHandlerPosition(HANDLER_TWO)} />
          <Handler ticks={this.ticks()}
            limits={this.limits()}
            activeTick={this.activeTick(HANDLER_TWO)}
            onDrag={this.setHandlerPosition.bind(this, HANDLER_TWO)}
            dragged={this.handlerDragged.bind(this, HANDLER_TWO)}/>
        </G>
      );
    }
  }

  render() {
    let margin = this.props.margin;

    return (
      <G className="xaxis" transform={ `translate(${margin*2+this.playStopSpace()}, ${margin}) ` }>
        <TickCollectionView
          contextSize={this.props.contextSize}
          ticks={this.ticks()}
          onClick={this.handleTickClick.bind(this)}/>
        {this.multiHandlerSupport()}
        <Handler ticks={this.ticks()}
          limits={this.limits()}
          activeTick={this.activeTick(HANDLER_ONE)}
          onDrag={this.setHandlerPosition.bind(this, HANDLER_ONE)}
          dragged={this.handlerDragged.bind(this, HANDLER_ONE)}/>
      </G>
    );
  }
};

XAxis.defaultProps = {
  margin: 18
};
