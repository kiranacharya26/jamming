import React, { Component } from 'react'
import Search from '../Search/Search'
import SearchResults from '../SearchResults/SearchResults'
import PlayList from '../PlayList/PlayList'
import './App.css'

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
  }
  addTrack(track){
    let tracks = this.state.playListTracks
    if(tracks.find(savedTracks => savedTracks.id === track.id)){
      return
    }
    tracks.push(track)
    this.setState({playListTracks:tracks})
  }

  render() {
    return (
      <div>
        <h1>Ja
          <span className='highlight'>mmm</span>ing
        </h1>
        <div class='App'>
          <Search />
          <div className='App-playlist'>
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
            <PlayList playListName={this.state.playListName}
             playListTracks={this.state.playListTracks}/>
          </div> 
        </div>
      </div>
    )
  }
}

export default App
