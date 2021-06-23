import React, { Component } from 'react'
import './Search.css'

export class Search extends Component {
  render() {
    return (
      <div className='SearchBar'>
        <input placeholder='Enter A Song, Album, or Artist' />
        <button className='SearchButton'>SEARCH</button>
      </div>
    )
  }
}

export default Search
