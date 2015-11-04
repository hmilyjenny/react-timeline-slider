import React from 'react';
import { SVG } from './react_svg';
import Background from './background';
import XAxis from './x_axis';
import PlayStop from './play_stop';
import _ from 'underscore';

export default class TimelineSlider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: null,
      isPlaying: false
    };
  }

  onValueChange(v) {
    this.setState({ value: v }, () => {
      this.props.onValueChange(this.value());
    });
  }

  rawValue() {
    if(this.state.value) return this.state.value;
    if(this.props.defaultValue) return this.props.defaultValue;
    return this.computeDefaultValue();
  }

  computeDefaultValue() {
    if(this.props.multi) {
      return [
        Math.min.apply(Math, this.props.range),
        Math.max.apply(Math, this.props.range)
      ];
    } else {
      return [Math.max.apply(Math, this.props.range)];
    }
  }

  value() {
    let rawValue = this.rawValue();
    if(this.props.multi) {
      return rawValue;
    } else {
      return rawValue[0];
    }
  }

  textSize() {
    let letterSize = 5;
    return this.props.range.map((i) => {
      return i.toString().length;
    }).reduce((a,b) => a+b) * letterSize;
  }

  contextSize() {
    let playStopControlWidth = 0;

    if(this.props.playStop) {
      playStopControlWidth = 50;
    }

    if(this.textSize() > ((this.props.width - playStopControlWidth) / 2)) {
      return "compact";
    } else {
      return "large";
    }
  }

  width() {
    let max = Math.max(this.props.width, this.textSize()/2);
    if(max) return max;
    return 0;
  }

  height() {
    if(this.contextSize() == "compact") {
      return 65;
    } else {
      return 45;
    }
  }

  togglePlayStop() {
    this.setState({
      isPlaying: !this.state.isPlaying
    });
  }

  componentWillReceiveProps(nextProps) {
    if(!_.isEqual(nextProps.range, this.props.range)) {
      this.setState({ value: null });
    }
  }

  render() {
    return (
      <SVG className="react-timeline-slider"
        width={this.width()} height={this.height()}>
        <Background />
        {(()=>{
          if(this.props.playStop) {
            return (
              <PlayStop
                contextSize={this.contextSize()}
                isPlaying={this.state.isPlaying}
                onToggle={this.togglePlayStop.bind(this)} />
            );
          }
        })()}
        <XAxis contextSize={this.contextSize()}
          width={this.width()}
          range={this.props.range}
          value={this.rawValue()}
          multi={this.props.multi}
          playStop={this.props.playStop}
          isPlaying={this.state.isPlaying}
          onStop={this.togglePlayStop.bind(this)}
          onValueChange={this.onValueChange.bind(this)}/>
      </SVG>
    );
  }
}

TimelineSlider.defaultProps = {
  styles: {},
  multi: false,
  playStop: false
}
