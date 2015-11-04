import React from "react";
import { G, Rect, Circle, Polygon } from './react_svg';

export default class PlayStop extends React.Component {
  handleClick() {
    this.props.onToggle();
  }

  get verticalPosition() {
    let contextDiff = this.props.contextSize == 'compact' ? 10 : 0;
    let controlButton = 22 + contextDiff;
    let pause = 15 + contextDiff;
    let play = 16 + contextDiff;

    return { controlButton, pause, play }
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
            cy={this.verticalPosition.controlButton}
            className="react-timeline-slider__control-button" />
            {(()=>{
              if(this.props.isPlaying) {
                return (
                  <G>
                    <Rect
                      x="19"
                      y={this.verticalPosition.pause}
                      width="3"
                      height="14"
                      className="react-timeline-slider__control-pause" />
                    <Rect
                      x="26"
                      y={this.verticalPosition.pause}
                      width="3"
                      height="14"
                      className="react-timeline-slider__control-pause" />
                  </G>
                );
              } else {
                return (
                  <Polygon
                    points="0,0 0,12 12,6"
                    transform={`translate(20, ${this.verticalPosition.play})`}
                    className="react-timeline-slider__control-play" />
                )
              }
            })()}
        </G>
      </G>
    );
  }
}
