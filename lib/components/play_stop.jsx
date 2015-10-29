import React from "react";
import { Rect } from './react_svg';

export default class PlayStop extends React.Component {
  handleClick() {
    this.props.onToggle();
  }

  render() {
    return (
      <Rect width="50"
        x="0" y="0"
        height="100%"
        onClick={this.handleClick.bind(this)}
        {...this.props.style} />
    );
  }
}
