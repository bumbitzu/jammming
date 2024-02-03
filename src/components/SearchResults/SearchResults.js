import React from 'react';
import './SearchResults.css';

function SearchResults({searchResults, onAddTrack})
{
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <div className="Tracklist">
        {searchResults.map((track) => (
          <div className="Track" key={track.id}>
            <div className="Track-information">
              <h3>{track.name}</h3>
              <p>{track.artist} | {track.album}</p>
            </div>
            <button className="Track-action" onClick={() => onAddTrack(track)}>
              + Add
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchResults;
