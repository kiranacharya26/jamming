import React, { Component } from 'react'
import Search from '../Search/Search'
import SearchResults from '../SearchResults/SearchResults'
import PlayList from '../PlayList/PlayList'
import './App.css'

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchResults: [],
    }
  }
  render() {
    return (
      <div>
        <h1>
          <span className='highlight'>mmm</span>ing
        </h1>
        <div class='App'>
          <Search />
          <div className='App-playlist'>
            <SearchResults searchResults={this.state.searchResults} />
            <PlayList />
          </div>
        </div>
      </div>
    )
  }
}

export default App
