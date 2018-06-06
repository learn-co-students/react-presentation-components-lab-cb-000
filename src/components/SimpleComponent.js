// Code SimpleComponentHere Here
import React from 'react'

export default class SimpleComponent extends React.Component{
  constructor(props){
    super(props)

    this.state ={
      mood:'happy'
    }
  }

  handleClick(ev){
    this.state.mood ==='happy'?this.setState({mood:'sad'}):this.setState({mood:'happy'})
  }

  render(){
    return(
      <div onClick = {this.handleClick.bind(this)}>
        {this.state.mood}
      </div>
    )
  }
}
