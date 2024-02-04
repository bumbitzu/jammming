# Jammming 🎵

<img src="https://bumbitzu.ro/projects/jammming/aaa.webp" width='200px' height='200px'/>

Jammming is a web application that allows users to create and manage Spotify playlists effortlessly. With Jammming, you can search for your favorite songs, add them to a new or existing playlist, and then save that playlist to your Spotify account.

## Table of Contents 📋

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Built With](#built-with)
- [License](#license)

## Features ✨

- **Spotify Integration**: Jammming uses the Spotify API to authenticate users and access their Spotify account.

- **Search for Tracks**: Users can search for tracks by artist, album, or song title.

- **Create Playlists**: You can create new playlists and add your favorite tracks to them.

- **Save to Spotify**: Once you're satisfied with your playlist, you can save it to your Spotify account.

## Getting Started 🚀

Follow these instructions to get a copy of Jammming up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, make sure you have the following tools installed on your system:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) (Node.js package manager)

### Installation

1. Clone the repository to your local machine:

```bash
git clone https://github.com/bumbitzu/jammming.git
```

2. Navigate to the project directory:

```bash
cd jammming
```

3. Install the project dependencies:

```bash
npm install
```

4. Create a Spotify Application and obtain your client ID:

   - Go to the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/applications).
   - Log in to your Spotify account (or create one if you don't have an account).
   - Click on "Create an App" and fill out the required information.
   - Once your app is created, you'll find your **Client ID** and **Client Secret**. Make note of these.

5. Create a `.env` file in the project root directory and add your Spotify **Client ID**:

```bash
REACT_APP_SPOTIFY_CLIENT_ID=YOUR_CLIENT_ID
```

6. Start the development server:

```bash
npm start
```

7. Jammming should now be running on `http://localhost:3000/` in your web browser.

## Usage 📘

1. Visit the Jammming website at `http://localhost:3000/`.

2. Click the "Log in with Spotify" button to connect your Spotify account.

3. Search for your favorite songs and click the "+" button to add them to your playlist.

4. Give your playlist a name and click the "Save to Spotify" button to save it to your Spotify account.

5. Enjoy your custom playlist on Spotify!

## Built With 🏗

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [Spotify API](https://developer.spotify.com/documentation/web-api/) - Used for authentication and accessing user playlists.
- [Create React App](https://reactjs.org/docs/create-a-new-react-app.html) - A toolchain for setting up a new React project quickly.

## License 📄

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 

