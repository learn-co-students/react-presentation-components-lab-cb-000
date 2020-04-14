// Code SimpleComponent Here
import React from 'react';

export default class SimpleComponent extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      mood:'happy'
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(){
    let mood = '';
    if (this.state.mood === 'happy') {
      mood = 'sad';
    } else {
      mood = 'happy';
    }
    this.setState({mood: mood});
  }
  render(){
    return(<div onClick={this.handleClick}>{this.state.mood}</div>);
  }
}
