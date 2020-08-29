import React, { Component } from 'react';

export default class SimpleComponent extends Component {

  constructor() {
    super()
    this.state = {
      mood: "happy"
    }
  }

  handleClick = () => {
    this.setState({mood: "sad"});
  }

  render() {
    return (
      <div onClick={this.handleClick} className="simple-component">
          {this.state.mood}
      </div>
    );
  }
}
