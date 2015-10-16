import React from 'react';
import { SVG } from './react_svg';
import Background from './background';
import DefaultStyles from './../styles';
import XAxis from './x_axis';
import _ from 'underscore';

export default class TimelineSlider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: null
    };
  }

  onValueChange(v) {
    this.setState({ value: v });
    this.props.onValueChange(this.value());
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

  render() {
    return (
      <SVG width={this.props.width} height="40">
        <Background style={this.styles().backgroundStyle} />
        <XAxis style={this.styles().xAxisStyle}
          styles={this.styles()}
          width={this.props.width}
          range={this.props.range}
          value={this.rawValue()}
          multi={this.props.multi}
          onValueChange={this.onValueChange.bind(this)}/>
      </SVG>
    );
  }
}

TimelineSlider.defaultProps = {
  styles: {},
  multi: false
}