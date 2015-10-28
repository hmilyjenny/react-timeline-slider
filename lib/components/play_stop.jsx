import React from "react";
import { Rect } from './react_svg';
import PubSub from 'pubsub-js';

export default class PlayStop extends React.Component {
  handleClick() {
    PubSub.publish('PlayStop:play');
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
