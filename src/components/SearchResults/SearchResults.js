import React from 'react';
import './SearchResults.css';

function SearchResults({searchResults, onAddTrack})
{
  return (
    <div className="SearchResults">
      <h2 style={{height:'60px', color:'white'}}>Results</h2>
      <div className="Tracklist">
        {searchResults.map((track) => (
          <div className="Track" key={track.id}>
            <div className="Track-information">
              <p><span style={{ fontWeight: 'bold' }}>{track.name}</span> | {track.artist} | {track.album}</p>
            </div>
            <button className="Track-action" onClick={() => onAddTrack(track)}>
              +
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchResults;
