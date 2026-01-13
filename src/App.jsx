import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import PlayList from './components/Playlist';
import './components/css/style.css'

function App () {

    const [searchResults, setSearchResults] = useState([
  {
    id: 1,
    name: "Tiny Dancer",
    artist: "Elton John",
    album: "Madman Across The Water"
  },
  {
    id: 2,
    name: "Tiny Dancer",
    artist: "Tim McGraw",
    album: "Love Story"
  }

]);

    return (
        <div className='App'>
            <h1>ja<span className='highlight'>MM</span>ing</h1>
        <SearchBar />
        <div className='App-playlist'>
            <SearchResults searchResults={searchResults} />
            
        </div>
        </div>
    );
};


export default App;