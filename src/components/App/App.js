import React,{useState} from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import './App.css';
import Spotify from '../../util/Spotify';

function App()
{
  const [ playlistURIs, setPlaylistURIs ] = useState([]);
  const [ playlistName, setPlaylistName ] = useState('My Playlist');
  const [ playlistTracks, setPlaylistTracks ] = useState([]);
  const [ searchResults, setSearchResults ] = useState([]);
  const savePlaylistToSpotify = () =>
  {
    // Simulate saving the playlist to Spotify (replace with actual Spotify API call)
    console.log('Saving playlist to Spotify:', playlistURIs);

    // Reset the playlist and playlist URIs
    setPlaylistName('New Playlist');
    setPlaylistTracks([]);
    setPlaylistURIs([]);
  };
  const addTrack = (track) =>
  {
    if (!playlistTracks.some((playlistTrack) => playlistTrack.id === track.id))
    {
      setPlaylistTracks([ ...playlistTracks, track ]);
      setPlaylistURIs([ ...playlistURIs, track.uri ]); // Assuming track.uri is available in your data
    }
  };

  const removeTrack = (track) =>
  {
    // Filter out the track with a unique property (e.g., track.id)
    const updatedPlaylist = playlistTracks.filter((playlistTrack) => playlistTrack.id !== track.id);
    setPlaylistTracks(updatedPlaylist);
  };

  const updatePlaylistName = (newName) =>
  {
    setPlaylistName(newName);
  };

  const search = async (term) =>
  {
    const tracks = await Spotify.search(term);
    // Update the state with the search results
    setSearchResults(tracks);
  };
  return (
    <div className="App">
      <h1>My Jammming App</h1>
      <div className="App-playlist">
        <SearchBar onSearch={search} />
        <div className="App-search-results">
          <SearchResults searchResults={searchResults} onAddTrack={addTrack}/>
        </div>
        <div className="App-playlist">
          <Playlist
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onRemoveTrack={removeTrack}
            onNameChange={updatePlaylistName}
            onSavePlaylist={savePlaylistToSpotify}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
