import React from "react";
import { G, Rect, Circle, Polygon } from './react_svg';

export default class PlayStop extends React.Component {
  handleClick() {
    this.props.onToggle();
  }

  render() {
    return (
      <G>
        <Rect width="50"
          x="0" y="0"
          height="100%"
          className="react-timeline-slider__control-bg" />
        <G
          style={{cursor: 'pointer'}}
          onClick={this.handleClick.bind(this)}>
          <Circle
            r="14"
            cx="24"
            cy="22"
            className="react-timeline-slider__control-button" />
            {(()=>{
              if(this.props.isPlaying) {
                return (
                  <G>
                    <Rect
                      x="19"
                      y="15"
                      width="3"
                      height="14"
                      className="react-timeline-slider__control-pause" />
                    <Rect
                      x="26"
                      y="15"
                      width="3"
                      height="14"
                      className="react-timeline-slider__control-pause" />
                  </G>
                );
              } else {
                return (
                  <Polygon
                    points="0,0 0,12 12,6"
                    transform="translate(20, 16)"
                    className="react-timeline-slider__control-play" />
                )
              }
            })()}
        </G>
      </G>
    );
  }
}
