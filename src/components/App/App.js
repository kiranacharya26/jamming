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
      searchResults: [
        {name:'name1',artist:'artist1',album:'album1',id:1},
        {name:'name2',artist:'artist2',album:'album2',id:21},
        {name:'name3',artist:'artist3',album:'album3',id:32}
      ],
      playListName:'My PlayList',
      playListTracks:[{name:'playListName1',artist:'playListArtist',album:'playListAlbum',id:5},
    {name:'playListName2',artist:'playListArtist1',album:'playListAlbum1',id:6}]
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
