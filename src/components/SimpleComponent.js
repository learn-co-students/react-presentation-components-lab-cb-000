import React, {Component} from 'react';

export default class SimpleComponent extends Component {
  constructor() {
    super();
    this.state = {
      mood: 'happy'
    }
  }

  handleClick = () => {
    const mood = this.state.mood === 'happy' ? 'sad' : 'happy';
    this.setState({mood});
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        <h2>{this.state.mood}</h2>
      </div>
    )
  }
}
