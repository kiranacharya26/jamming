import React, { Component } from 'react'
import './PlayList.css'
import TrackList from '../TrackList/TrackList'

 class PlayList extends Component {
  render() {
    return (
      <div className='Playlist'>
        <input defaultValue={'New Playlist'} />
        <TrackList tracks={this.props.playListTracks}/>
        <button className='Playlist-save'>SAVE TO SPOTIFY</button>
      </div>
    )
  }
}

export default PlayList
