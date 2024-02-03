import React from 'react';
import TrackList from '../TrackList/TrackList';
import './Playlist.css';

function Playlist({ playlistName, playlistTracks, onRemoveTrack, onNameChange, onSavePlaylist })
{
  return (
    <div className="Playlist">
      <h2>
        <input
          type="text"
          value={playlistName}
          onChange={(e) => onNameChange(e.target.value)}
        />
      </h2>
      <TrackList tracks={playlistTracks} onRemoveTrack={onRemoveTrack} />
      <button className="Playlist-save" onClick={onSavePlaylist}>
        SAVE TO SPOTIFY
      </button>
    </div>
  );
}

export default Playlist;
