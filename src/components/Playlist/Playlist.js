import React from 'react';
import TrackList from '../TrackList/TrackList';
import './Playlist.css';

function Playlist({ playlistName, playlistTracks, onRemoveTrack, onNameChange, onSavePlaylist })
{
  return (
    <div className="Playlist">
      
      <div className='Input'>
        <input

          type="text"
          value={playlistName}
          onChange={(e) => onNameChange(e.target.value)}
        />
      </div>
      <div className='Playlist-container'>
        
        <TrackList tracks={playlistTracks} onRemoveTrack={onRemoveTrack} />
        <div className='Button-container'>
          <button className="Playlist-save" onClick={onSavePlaylist}>
            SAVE TO SPOTIFY
          </button>
        </div>
      </div>
    </div>
  );
}

export default Playlist;
