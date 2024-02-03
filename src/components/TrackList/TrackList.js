import React from 'react';
import './TrackList.css';

function TrackList({ tracks, onRemoveTrack })
{
  return (
    <div className="Tracklist">
      {tracks.map((track) => (
        <div className="Track" key={track.id}>
          <div className="Track-information">
            <h3>{track.name}</h3>
            <p>{track.artist} | {track.album}</p>
          </div>
          <button className="Track-action" onClick={() => onRemoveTrack(track)}>
            - Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default TrackList;
