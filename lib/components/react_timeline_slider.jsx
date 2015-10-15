import React from 'react';
import ReactDOM from 'react-dom';
import AutoWidth from './auto_width';
import TimelineSlider from './timeline_slider';

export default class ReactTimelineSlider extends React.Component {
  render() {
    let Component = AutoWidth(TimelineSlider);
    return <Component {...this.props} />;
  }

  static renderOn(el, options={}) {
    ReactDOM.render(<ReactTimelineSlider {...options} />, el)
  }
};
