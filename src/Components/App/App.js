import React from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import Playlist from '../Playlist/Playlist';
import SearchResults from '../SearchResults/SearchResults';

import Spotify from './/../../Spotify';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      searchResults: [],
      playListName: 'Playlist',
      playListTrack: []
    }
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlayListName = this.updatePlayListName.bind(this);
    this.savePlayList = this.savePlayList.bind(this);
    this.search = this.search.bind(this);

  }

  addTrack(track) {
    let tracks = this.state.playListTrack;
    if (tracks) {
    if (tracks.find(savedTrack => track.id === savedTrack.id)) {
    return;    
    } else {
    tracks.push(track);
    this.setState({ playListTrack: tracks})};
    }
  }
  removeTrack(track) {
    let tracks = this.state.playListTrack;
    tracks = tracks && tracks.filter(currentTrack => currentTrack.id !== track.id);
    this.setState({ playListTrack: tracks})
  }
  updatePlayListName(name) {
    this.setState({playListName: name});
  }
  savePlayList() {
    const trackUris = this.state.playListTrack.map(track => track.uri);
    Spotify.savePlaylist(this.state.playListName, trackUris).then(() => {
      this.setState({
        playlistName: 'New Playlist',
        playlistTrack: [],
      })
    })
  }
  search(term) {
    Spotify.search(term).then(searchResults => {
      this.setState({searchResults: searchResults})
    });
  }


  render() {
    return (
    <div>
  <h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div className="App">
    <SearchBar onSearch={this.search}/>
    <div className="App-playlist">
      <Playlist playListName={ this.state.playListName }
                playListTrack={ this.state.playListTrack }
                onRemove={ this.removeTrack }
                onNameChange={ this.updatePlayListName }
                onSave={ this.savePlayList }/>
                
      <SearchResults searchResults={ this.state.searchResults }
                    onAdd={ this.addTrack}/>
    </div>
  </div>
</div>)
  }
}
export default App;
