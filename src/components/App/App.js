import React, { Component } from 'react'
import Search from '../Search/Search'
import SearchResults from '../SearchResults/SearchResults'
import PlayList from '../PlayList/PlayList'
import './App.css'
import Track from '../Track/Track'
import Spotify from '../../util/Spotify'

 class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchResults: [],
      playListName:'My PlayList',
      playListTracks:[]
    }
    this.addTrack = this.addTrack.bind(this)
    this.removeTrack = this.removeTrack.bind(this)
    this.updatePlaylistName = this.updatePlaylistName.bind(this)
    this.savePlaylist=this.savePlaylist.bind(this)
    this.search=this.search.bind(this)
  }
  addTrack(track){
    let tracks = this.state.playListTracks
    if(tracks.find(savedTracks => savedTracks.id === track.id)){
      return
    }
    tracks.push(track)
    this.setState({playListTracks:tracks})
  }
  removeTrack(track){
    let tracks = this.state.playListTracks
    tracks.filter(curTrack => curTrack.id !== track.id)

    this.setState({playListTracks:tracks})
  }
  updatePlaylistName(name){
    this.setState({playListName:name})
  }
  savePlaylist(){
    
    const trackURIs = this.state.playListTracks.map(track=>track.uri)
    Spotify.savePlayList(this.state.playListName,  trackURIs).then(()=>{
      this.setState({
        playListName:'New playlist',
        playListTracks:[]
      })
    })
  }
  search(term){
    Spotify.search(term).then(searchResults=>{
      this.setState({searchResults:searchResults})
    })
  }
  render() {
    return (
      <div>
        <h1>Ja
          <span className='highlight'>mmm</span>ing
        </h1>
        <div class='App'>
          <Search onSearch={this.search}/>
          <div className='App-playlist'>
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
            <PlayList playListName={this.state.playListName}
             playListTracks={this.state.playListTracks} onRemove={this.removeTrack}
             onNameChange={this.updatePlaylistName}
             onSave={this.savePlaylist}/>
          </div> 
        </div>
      </div>
    )
  }
}

export default App
