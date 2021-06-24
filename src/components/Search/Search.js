import React, { Component } from 'react'
import './Search.css'

 class Search extends Component {
   constructor(props){
     super(props)

     this.state = {
       term:''
   }
     this.Search=this.Search.bind(this)
     this.handleTermChange = this.handleTermChange.bind(this)
   }
   Search(){
     this.props.onSearch(this.state.term)
   }
   handleTermChange(e){
     this.setState({term:e.target.value} )

   }
  render() {
    return (
      <div className='SearchBar'>
        <input placeholder='Enter A Song, Album, or Artist' onChange={this.handleTermChange} />
        <button className='SearchButton'>SEARCH</button>
      </div>
    )
  }
}

export default Search
