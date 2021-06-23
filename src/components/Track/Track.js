import React, { Component } from 'react'
import './Track.css'

 class Track extends Component {
  renderFunction(){
    if(this.props.isRemoval){
      return <button className="Track-action">-</button>
    }else{
      return <button className="Track-action">+</button>
    }
  }
  render() {
    return (
      <div className='Track'>
        <div className='Track-information'>
          <h3>{this.props.track.name}</h3>
          <p>{this.props.track.artist} | {this.props.track.album}</p>
        </div>
        {this.renderFunction()}
      </div>
    )
  }
}

export default Track
