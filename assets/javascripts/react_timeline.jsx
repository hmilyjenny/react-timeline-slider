import React from 'react';
import ReactDOM from 'react-dom';
import { G, SVG, Rect, Circle, Line } from './react_svg';

class Handler extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cx: 0
    }
  }

  maxTicksPosition() {
    return Math.max.apply(Math, this.props.ticks);
  }

  minTicksPosition() {
    return Math.min.apply(Math, this.props.ticks);
  }

  handlerDragged() {
    let distances = (Math, this.props.ticks.map((tickPosition) => {
      return Math.abs(this.state.cx - tickPosition);
    }))

    let closerTick = distances.reduce((memo, distance, i, distances) => {
      return distances[memo] > distance ? i : memo;
    }, 0);

    this.setState({ cx: this.props.ticks[closerTick] });
    this.props.onValueChange(closerTick);
  }

  handlerBeingDragged(e) {
    let x = e.x;
    if(e.x < this.minTicksPosition()) x = this.minTicksPosition();
    if(e.x > this.maxTicksPosition()) x = this.maxTicksPosition();
    this.setState({ cx: x });
  }

  render() {
    return (
      <Circle cx={this.state.cx} cy="0" fill="#ffffff" r="4"
        stroke="#303030"
        draggable={true}
        onDrag={this.handlerBeingDragged.bind(this)}
        onDragEnd={this.handlerDragged.bind(this)} />
    );
  }
}

class ReactTimeline extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: null
    };
  }

  ticks() {
    return this.props.range;
  }

  value() {
    if(this.state.value !== null) {
      return this.state.value;
    } else if(this.props.defaultValue !== null) {
      return this.props.defaultValue;
    } else {
      return Math.max.apply(Math, this.props.ticks);
    }
  }

  ticksPositions() {
    let ticksNumber = this.ticks().length;
    let spaceWidth = this.timelineWidth() / (ticksNumber - 1);
    return this.ticks().map((tick, i) => {
      return i * spaceWidth;
    })
  }

  timelineWidth() {
    return this.props.width - 50;
  }

  valueChanged(i) {
    this.setState({ value: this.ticks()[i] });
  }

  render() {
    return (
      <SVG width={this.props.width} height={this.props.height}>
          <Rect width="100%" height="100%" x="0" y="0"
            fill="rgba(200, 200, 200, 0.4)"
            stroke="rgba(220, 220, 220, 0.2)" />

        <G className="timeline" ref="timeline" transform="translate(25, 15)">
          <G className="ticks">
            {()=> {
              return this.ticksPositions().map((x, i) => {
                return (
                  <G className={`tick-${i}`} transform={`translate(${x}, 0)`}>
                    <Circle cx="0" cy="0" fill="#303030" r="2"/>
                    <text textAnchor="middle" fontSize="10" transform="translate(0, 15)">
                      {this.ticks()[i]}
                    </text>
                  </G>
                );
              });
            }()}
          </G>
          <G className="handlers">
            <Handler ticks={this.ticksPositions()} onValueChange={this.valueChanged.bind(this)}/>
          </G>
        </G>
        <text textAnchor="middle" fontSize="8" transform="translate(60, 35)">
          {this.value()}
        </text>
      </SVG>
    );
  }

  static renderOn(el, options={}) {
    ReactDOM.render(<ReactTimeline {...options}/>, el)
  }
}

export default ReactTimeline;
global.ReactTimeline = ReactTimeline;
