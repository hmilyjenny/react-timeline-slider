import React from 'react';
import ReactDOM from 'react-dom';
import { G, SVG, Rect, Circle, Line } from './react_svg';
import Handler from './handler';

class ReactTimelineSlider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      values: []
    };
  }

  ticks() {
    let ticksNumber = this.props.range.length;
    let spaceWidth = this.timelineWidth() / (ticksNumber - 1);

    return this.props.range.map((v, i) => {
      let x = i * spaceWidth;

      return {
        value: v,
        x: x
      };
    });
  }

  value(n) {
    if(this.state.values[n] != null) {
      return this.state.values[n];
    } else if(this.props.defaultValue != null) {
      return this.props.defaultValue[n];
    } else {
      return [
        Math.max.apply(Math, this.props.range),
        Math.min.apply(Math, this.props.range)
      ][n];
    }
  }

  values() {
    let valuesIndex = [0];
    if(this.props.multiple) {
      valuesIndex.push(1);
    }
    return valuesIndex.map((i) => {
      return this.value(i);
    }).sort()
  }

  timelineWidth() {
    return this.props.width - 50;
  }

  valueChanged(n) {
    return (t) => {
      let values = this.state.values;
      values[n] = t.value;
      this.setState({ values: values });
      this.props.onValueChange(this.values());
    }
  }

  renderTicks() {
    return this.ticks().map((tick, i) => {
      let selected = tick.value == this.state.value;
      return (
        <G key={`tick-${i}`} className={`tick-${i}`} transform={`translate(${tick.x}, 0)`}>
          <Circle cx="0" cy="0" fill="#303030" r="2"/>
          <text textAnchor="middle"
            fontFamily="Helvetica"
            fontSize="10"
            transform="translate(0, 15)">
            {tick.value}
          </text>
        </G>
      );
    });
  }

  render() {
    return (
      <SVG width={this.props.width} height={this.props.height}>
        <Rect width="100%" height="100%" x="0" y="0"
          fill="rgba(200, 200, 200, 0.4)"
          stroke="rgba(220, 220, 220, 0.2)" />

        <G className="timeline" ref="timeline" transform="translate(25, 15)">
          <G className="ticks">
            {this.renderTicks()}
          </G>
          <G className="handlers">
            <Handler ticks={this.ticks()}
              defaultValue={this.value(0)}
              onValueChange={this.valueChanged(0).bind(this)}/>
            {(() => {
              if(this.props.multiple) {
                return (
                  <Handler ticks={this.ticks()}
                    defaultValue={this.value(1)}
                    onValueChange={this.valueChanged(1).bind(this)}/>
                );
              }
            })()}
          </G>
        </G>
      </SVG>
    );
  }

  static renderOn(el, options={}) {
    ReactDOM.render(<ReactTimelineSlider {...options}/>, el)
  }
}

export default ReactTimelineSlider;
global.ReactTimelineSlider = ReactTimelineSlider;
