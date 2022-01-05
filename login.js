var spotifyLoginWindow = window.open(
    'https://accounts.spotify.com/authorize?client_id=6d37528ea6f94affbeda2e7b46549af9&redirect_uri=http://localhost:8888/callback&response_type=code'
);

// Close event
spotifyLoginWindow.onbeforeunload = function () {
    var accessToken = localStorage.getItem('sp-accessToken');
    var refreshToken = localStorage.getItem('sp-refreshToken');

    // use the code to get an access token (as described in the documentation)
};
