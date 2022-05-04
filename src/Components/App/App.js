import React from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import Playlist from '../Playlist/Playlist';
import SearchResults from '../SearchResults/SearchResults';

class App extends React.Component {
  render() {
    return (
    <div>
  <h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div class="App">
    <SearchBar />
    <div className="App-playlist">
      <Playlist />
      <SearchResults />
    </div>
  </div>
</div>)
  }
}
export default App;
