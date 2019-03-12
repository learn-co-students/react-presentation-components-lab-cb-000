import React, { Component } from 'react';

class SimpleComponent extends Component {
  constructor() {
    super() ;
    this.state = {
      mood: 'happy'
    }
    this.handleClick = this.handleClick.bind(this) ;
  }
  handleClick() {
    this.state.mood === 'happy' ? this.setState( {mood: 'sad'} ) : this.setState ({mood: 'happy'})
  }
    render() {
      return (
        <div onClick={this.handleClick}>
          {this.state.mood}
        </div>
      )
    }
}
export default SimpleComponent;
