import React from 'react';

import './Tracklist.css';

import Track from '../Track/Track.js';

class Tracklist extends React.Component {
    render() {
        return (
           <div className="Tracklist">
                
                {this.props.tracks && 
            this.props.tracks.map(track => {
  return <Track track={track} key={track.id}/>
})
}
                
                 
          </div>
        )
    }
}

export default Tracklist;