import React from 'react';
import { SVG } from './react_svg';
import Background from './background';
import DefaultStyles from './../styles';
import XAxis from './x_axis';
import PlayStop from './play_stop';
import _ from 'underscore';

export default class TimelineSlider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: null
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

  styles() {
    return _.extend({}, DefaultStyles, this.props.styles)
  }

  textSize() {
    let letterSize = 5;
    return this.props.range.map((i) => {
      return i.toString().length;
    }).reduce((a,b) => a+b) * letterSize;
  }

  contextSize() {
    if(this.textSize() > (this.props.width / 2)) {
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
      return 80;
    } else {
      return 40;
    }
  }

  componentWillReceiveProps(nextProps) {
    if(!_.isEqual(nextProps.range, this.props.range)) {
      this.setState({ value: null });
    }
  }

  render() {
    return (
      <SVG width={this.width()} height={this.height()}>
        <Background style={this.styles().backgroundStyle} />
        <PlayStop style={this.styles().playStopStyle} />
        <XAxis style={this.styles().xAxisStyle}
          contextSize={this.contextSize()}
          styles={this.styles()}
          width={this.width()}
          range={this.props.range}
          value={this.rawValue()}
          multi={this.props.multi}
          playStop={this.props.playStop}
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
