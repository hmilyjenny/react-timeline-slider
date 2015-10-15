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
    this.props.onValueChange(v);
  }

  value() {
    if(this.state.value) return this.state.value;
    if(this.props.defaultValue) return this.props.defaultValue;
    return Math.max.apply(Math, this.props.range);
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
          value={this.value()}
          onValueChange={this.onValueChange.bind(this)}/>
      </SVG>
    );
  }
}

TimelineSlider.defaultProps = {
  styles: {}
}


