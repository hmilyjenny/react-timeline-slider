import React from "react";
import { Rect } from './react_svg';

export default class Background extends React.Component {
  render() {
    return (
      <Rect width="100%"
        x="0" y="0"
        height="100%"
        className="react-timeline-slider__background" />
    );
  }
}
