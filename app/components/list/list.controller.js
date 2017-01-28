module.exports = function(spotifyService, $stateParams) {
  var self = this;

  spotifyService.getArtists($stateParams.name).then(function(data) {
    self.artists = data;
    self.artists.forEach(function(artist) {
      spotifyService.getTopTracks(artist.id).then(function(songs) {
        artist.songs = songs;
      })
    })
  });

  var playing = false;
  var lastUrl;

  self.play = function(url) {
    if(lastUrl && url != lastUrl && playing) {
      spotifyService.pause();
      playing = false;
    }
    if (playing) {
      spotifyService.pause();
    } else {
      spotifyService.play(url);
    }
    playing = !playing;
    lastUrl = url;
  }
};
