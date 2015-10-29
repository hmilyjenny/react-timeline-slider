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
          {...this.props.styles.bg} />
        <G
          style={{cursor: 'pointer'}}
          onClick={this.handleClick.bind(this)}>
          <Circle
            {...this.props.styles.circle}/>
            {(()=>{
              if(this.props.isPlaying) {
                return (
                  <G>
                    <Rect
                      x="19"
                      {...this.props.styles.pause} />
                    <Rect
                      x="26"
                      {...this.props.styles.pause} />
                  </G>
                );
              } else {
                return (
                  <Polygon {...this.props.styles.play} transform={"translate(20, 14)"}/>          
                );                
              }
            })()}
        </G>
      </G>
    );
  }
}
