import React from "react";
import ReactDOM from "react-dom";

var AutoWidth = (ComposedComponent) => class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0
    };
  }

  updateWidth() {
    let node = ReactDOM.findDOMNode(this.refs.component);
    let parentNode = node.parentNode;
    this.setState({ width: parentNode.offsetWidth });
  }

  componentDidMount() {
    this.updateWidth();
    window.addEventListener('resize', this.updateWidth.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWidth.bind(this));
  }

  render() {
    return (
      <ComposedComponent {...this.props}
        ref="component"
        width={this.state.width} />
    );
  }
};

export default AutoWidth;
global.AutoWidth = AutoWidth;
