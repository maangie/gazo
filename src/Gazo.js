import React, { Component } from 'react';
import gazo from "./gazo.jpg";

class Gazo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      styles: {position: "relative", top: 0, left: 0},
      position: {top: 0, left: 0},
      onMouseDown: false
    };
  }

  setPositionOfImg = (e) => {
    this.setState({
      styles: {
        position: "relative",
        top: e.clientY - this.state.position.top,
        left: e.clientX - this.state.position.left
      }
    });
  }

  handleMouseDown = (e) => {
    this.setState({ position: {
      top: e.clientY - this.state.styles.top,
      left: e.clientX - this.state.styles.left
    }});

    this.setState({isMouseDown: true});
  }

  handleMouseUp = (e) => {
    this.setState({isMouseDown: false});
    this.setPositionOfImg(e);
  }

  handleMouseMove = (e) => {
    if (this.state.isMouseDown) {
      this.setPositionOfImg(e);
    }
  }

  render() {
    return (
      <div>
        <img
          src={gazo}
          alt={"cat"}
          draggable={"false"}
          style={this.state.styles}
          onMouseDown={this.handleMouseDown}
          onMouseMove={this.handleMouseMove}
          onMouseUp={this.handleMouseUp}
        />
      </div>
    );
  }
}

export default Gazo;
