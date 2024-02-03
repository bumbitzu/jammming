const Spotify = {
  // Add your Spotify API credentials here
  clientId: '8d8d1f45131544dfbef33a9a92330ecb',
  redirectUri: 'http://localhost:3000/',
  search: async (term) =>
  {
    const accessToken = Spotify.getAccessToken();
    const apiUrl = `https://api.spotify.com/v1/search?type=track&q=${term}`;
    const headers = {
      Authorization: `Bearer ${accessToken}`,
    };

    try
    {
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: headers,
      });

      if (response.ok)
      {
        const jsonResponse = await response.json();
        if (jsonResponse.tracks)
        {
          return jsonResponse.tracks.items.map((track) => ({
            id: track.id,
            name: track.name,
            artist: track.artists[ 0 ].name,
            album: track.album.name,
            uri: track.uri,
          }));
        }
        return [];
      }
    } catch (error)
    {
      console.error('Error searching for tracks:', error);
    }
  },
  const getUserID = async () => {
  const accessToken = Spotify.getAccessToken();
  const apiUrl = 'https://api.spotify.com/v1/me';
  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };

  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: headers,
    });

    if (response.ok) {
      const jsonResponse = await response.json();
      return jsonResponse.id;
    }
  } catch (error) {
    console.error('Error fetching user ID:', error);
  }
};

};

Spotify.getAccessToken = () =>
{
  // Check if the access token is already in the URL
  const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
  const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);

  if (accessTokenMatch && expiresInMatch)
  {
    const accessToken = accessTokenMatch[ 1 ];
    const expiresIn = Number(expiresInMatch[ 1 ]);

    // Clear parameters from the URL to avoid issues with expired tokens
    window.setTimeout(() =>
    {
      window.history.pushState('Access Token', null, '/');
    }, expiresIn * 1000);

    return accessToken;
  } else
  {
    // If the access token is not in the URL, redirect the user to Spotify's authorization endpoint
    const redirectUrl = `https://accounts.spotify.com/authorize?client_id=${Spotify.clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${Spotify.redirectUri}`;
    window.location.href = redirectUrl;
  }
};

export default Spotify;
