import React from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import Playlist from '../Playlist/Playlist';
import SearchResults from '../SearchResults/SearchResults';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      searchResults: [{ name: 'name1', artist: 'artist1', album: 'album1', id: '1' },
      { name: 'name2', artist: 'artist2', album: 'album2', id: '2' },
      { name: 'name3', artist: 'artist3', album: 'album3', id: '3' }],
      playListName: 'Playlist',
      playListTrack: [{ name: 'playlistname1', artist: 'playlistartist1', album: 'play;istalbum1', id: '4' },
      { name: 'playlistname2', artist: 'playlistartist2', album: 'play;istalbum2', id: '5' },
      { name: 'playlistname3', artist: 'playlistartist3', album: 'play;istalbum3', id: '6' }]
    }
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlayListName = this.updatePlayListName.bind(this)
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

  render() {
    return (
    <div>
  <h1>Ja<span className="highlight">mmm</span>ing</h1>
  <div className="App">
    <SearchBar />
    <div className="App-playlist">
      <Playlist playListName={ this.state.playListName }
                playListTrack={ this.state.playListTrack }
                onRemove={ this.removeTrack }
                onNameChange={ this.updatePlayListName }/>
                
      <SearchResults searchResults={ this.state.searchResults }
                    onAdd={ this.addTrack}/>
    </div>
  </div>
</div>)
  }
}
export default App;
